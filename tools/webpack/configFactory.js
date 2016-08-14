/* eslint-disable no-console,import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dotenv = require('dotenv');
const appRoot = require('app-root-path');
const WebpackMd5Hash = require('webpack-md5-hash');

const precss = require('precss');
const reporter = require('postcss-reporter');
const lost = require('lost');
const { removeEmpty, ifElse, merge } = require('../utils');

const appRootPath = appRoot.toString();
const NODE_MODULES_DIR = path.resolve(appRootPath, './node_modules');

const postCSSConfig = () => {
  return [
    precss(),
    lost(),
    reporter({
      clearMessages: true
    })
  ];
};
const VENDOR_PREFIXES = [
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'Firefox ESR',
  'Firefox 24',
  'last 2 Opera versions',
  'last 2 Safari versions',
  'last 2 iOS versions',
  'Explorer >= 10',
  'last 2 ChromeAndroid versions',
  'Android >= 4.0'
];
const VENDOR = [
  'react',
  'react-dom',
  'redux',
  'react-router',
  'react-router-redux',
  'react-redux',
  'superagent',
  'redux-thunk',
  'redux-form',
  'react-rte',
  'material-ui',
  'react-tap-event-plugin',
  'redial',
  'webfontloader'
];
// @see https://github.com/motdotla/dotenv
dotenv.config({ silent: true });

function webpackConfigFactory({ target, mode }, { json }) {
  if (!target || !~['client', 'server'].findIndex(valid => target === valid)) {
    throw new Error(
      'You must provide a "target" (client|server) to the webpackConfigFactory.'
    );
  }

  if (!mode || !~['development', 'production'].findIndex(valid => mode === valid)) {
    throw new Error(
      'You must provide a "mode" (development|production) to the webpackConfigFactory.'
    );
  }

  if (!json) {
    // Our bundle is outputing json for bundle analysis, therefore we don't
    // want to do this console output as it will interfere with the json output.
    //
    // You can run a bundle analysis by executing the following:
    //
    // $(npm bin)/webpack --env.mode production --config tools/webpack/client.config.js --json > build/client/analysis.json
    // And then upload the build/client/analysis.json to http://webpack.github.io/analyse/
    // This allows you to analyse your webpack bundle to make sure it is
    // optimal.
    console.log(`==> ℹ️  Creating webpack "${target}" config in "${mode}" mode`);
  }

  const isDev = mode === 'development';
  const isProd = mode === 'production';
  const isClient = target === 'client';
  const isServer = target === 'server';

  const ifDev = ifElse(isDev);
  const ifProd = ifElse(isProd);
  const ifClient = ifElse(isClient);
  const ifServer = ifElse(isServer);
  const ifDevClient = ifElse(isDev && isClient);
  const ifDevServer = ifElse(isDev && isServer);
  const ifProdClient = ifElse(isProd && isClient);

  return {
    // We need to state that we are targetting "node" for our server bundle.
    target: ifServer('node', 'web'),
    // We have to set this to be able to use these items when executing a
    // server bundle.  Otherwise strangeness happens, like __dirname resolving
    // to '/'.  There is no effect on our client bundle.
    node: {
      __dirname: true,
      __filename: true
    },
    // Anything listed in externals will not be included in our bundle.
    externals: removeEmpty([
      // We don't want our node_modules to be bundled with our server package,
      // prefering them to be resolved via native node module system.  Therefore
      // we use the `webpack-node-externals` library to help us generate an
      // externals config that will ignore all node_modules.
      ifServer(nodeExternals({
        whitelist: [
          /\.(eot|woff|woff2|ttf|otf)$/,
          /\.(svg|png|jpg|jpeg|gif|ico)$/,
          /\.(mp4|mp3|ogg|swf|webp)$/,
          /\.(css|scss|sass|sss|less)$/
        ]
      }))
    ]),
    cache: !(isDev && isServer),
    devtool: ifElse(isServer || isDev)(
      // We want to be able to get nice stack traces when running our server
      // bundle.  To fully support this we'll also need to configure the
      // `node-source-map-support` module to execute at the start of the server
      // bundle.  This module will allow the node to make use of the
      // source maps.
      // We also want to be able to link to the source in chrome dev tools
      // whilst we are in development mode. :)
      'cheap-module-eval-source-map',
      // When in production client mode we don't want any source maps to
      // decrease our payload sizes.
      // This form has almost no cost.
      'hidden-source-map'
    ),
    entry: merge(
      {
        main: removeEmpty([
          ifDevClient('react-hot-loader/patch'),
          ifDevClient(`webpack-hot-middleware/client?reload=true&path=http://localhost:${process.env.CLIENT_DEVSERVER_PORT}/__webpack_hmr`),
          ifProdClient(path.resolve(appRootPath, './tools/utils/polyfills.js')),
          ifClient(path.resolve(appRootPath, './src/client.js')),
          ifServer(path.resolve(appRootPath, './src/server/index.js'))
        ])
      }
    ),
    output: {
      // The dir in which our bundle should be output.
      path: path.resolve(
        appRootPath,
        isClient
          ? process.env.CLIENT_BUNDLE_OUTPUT_PATH
          : process.env.SERVER_BUNDLE_OUTPUT_PATH
      ),
      // The filename format for our bundle's entries.
      filename: ifProdClient(
        // We include a hash for client caching purposes.  Including a unique
        // has for every build will ensure browsers always fetch our newest
        // bundle.
        '[name]-[chunkhash].js',
        // We want a determinable file name when running our server bundles,
        // as we need to be able to target our server start file from our
        // npm scripts.  We don't care about caching on the server anyway.
        // We also want our client development builds to have a determinable
        // name for our hot reloading client bundle server.
        '[name].js'
      ),
      chunkFilename: '[name]-[chunkhash].js',
      // This is the web path under which our webpack bundled output should
      // be considered as being served from.
      publicPath: ifDev(
        // As we run a seperate server for our client and server bundles we
        // need to use an absolute http path for our assets public path.
        `http://localhost:${process.env.CLIENT_DEVSERVER_PORT}${process.env.CLIENT_BUNDLE_HTTP_PATH}`,
        // Otherwise we expect our bundled output to be served from this path.
        process.env.CLIENT_BUNDLE_HTTP_PATH
      ),
      // When in server mode we will output our bundle as a commonjs2 module.
      libraryTarget: ifServer('commonjs2', 'var')
    },
    resolve: {
      // These extensions are tried when resolving a file.
      extensions: [
        '',
        '.js',
        '.jsx',
        '.json',
        '.css',
        '.scss'
      ],
      alias: {
        react: fs.realpathSync(path.join(NODE_MODULES_DIR, 'react')),
        components: path.resolve(appRootPath, './src/components'),
        scenes: path.resolve(appRootPath, './src/scenes'),
        core: path.resolve(appRootPath, './src/core'),
        account: path.resolve(appRootPath, './src/scenes/Account'),
        dashboard: path.resolve(appRootPath, './src/scenes/Dashboard')
      }
    },
    postcss: postCSSConfig,
    // https://github.com/shakacode/sass-resources-loader
    sassResources: [
      path.resolve(appRootPath, './src/styles/abstracts/variables.scss'),
      path.resolve(appRootPath, './src/styles/abstracts/mixins.scss')
    ],
    plugins: removeEmpty([
      // We use this so that our generated [chunkhash]'s are only different if
      // the content for our respective chunks have changed.  This optimises
      // our long term browser caching strategy for our client bundle, avoiding
      // cases where browsers end up having to download all the client chunks
      // even though 1 or 2 may have only changed.
      ifClient(new WebpackMd5Hash()),

      // Each key passed into DefinePlugin is an identifier.
      // The values for each key will be inlined into the code replacing any
      // instances of the keys that are found.
      // If the value is a string it will be used as a code fragment.
      // If the value isn’t a string, it will be stringified (including functions).
      // If the value is an object all keys are removeEmpty the same way.
      // If you prefix typeof to the key, it’s only removeEmpty for typeof calls.
      new webpack.DefinePlugin({
        'process.env': {
          // NOTE: The NODE_ENV key is especially important for production
          // builds as React relies on process.env.NODE_ENV for optimizations.
          NODE_ENV: JSON.stringify(mode),
          // All the below items match the config items in our .env file. Go
          // to the .env_example for a description of each key.
          SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
          CLIENT_DEVSERVER_PORT: JSON.stringify(process.env.CLIENT_DEVSERVER_PORT),
          DISABLE_SSR: process.env.DISABLE_SSR,
          SERVER_BUNDLE_OUTPUT_PATH: JSON.stringify(process.env.SERVER_BUNDLE_OUTPUT_PATH),
          CLIENT_BUNDLE_OUTPUT_PATH: JSON.stringify(process.env.CLIENT_BUNDLE_OUTPUT_PATH),
          CLIENT_BUNDLE_ASSETS_FILENAME: JSON.stringify(process.env.CLIENT_BUNDLE_ASSETS_FILENAME),
          CLIENT_BUNDLE_HTTP_PATH: JSON.stringify(process.env.CLIENT_BUNDLE_HTTP_PATH),
          CLIENT_BUNDLE_CACHE_MAXAGE: JSON.stringify(process.env.CLIENT_BUNDLE_CACHE_MAXAGE)
        }
      }),

      ifClient(
        // Generates a JSON file containing a map of all the output files for
        // our webpack bundle.  A necessisty for our server rendering process
        // as we need to interogate these files in order to know what JS/CSS
        // we need to inject into our HTML.
        new AssetsPlugin({
          filename: process.env.CLIENT_BUNDLE_ASSETS_FILENAME,
          path: path.resolve(appRootPath, process.env.CLIENT_BUNDLE_OUTPUT_PATH)
        })
      ),

      // We don't want webpack errors to occur during development as it will
      // kill our dev servers.
      ifDev(new webpack.NoErrorsPlugin()),

      // We need this plugin to enable hot module reloading for our dev server.
      ifDevClient(new webpack.HotModuleReplacementPlugin()),

      // Ensure only 1 file is output for the server bundles.  This makes it
      // much easer for us to clear the module cache when reloading the server.
      ifDevServer(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })),
      ifClient(new webpack.ProvidePlugin({
        // make fetch available
        fetch: 'exports?self.fetch!whatwg-fetch'
      })),
      // Adds options to all of our loaders.
      ifProdClient(
        new webpack.LoaderOptionsPlugin({
          // Indicates to our loaders that they should minify their output
          // if they have the capability to do so.
          minimize: true,
          debug: false
        })
      ),

      ifProdClient(
        // JS Minification.
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            screw_ie8: true,
            warnings: false
          }
        })
      ),
      ifProdClient(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          children: true,
          minChunks: 2,
          async: true
        })
      ),

      ifProdClient(
        // This is a production client so we will extract our CSS into
        // CSS files.
        new ExtractTextPlugin({ filename: '[name]-[chunkhash].css', allChunks: true })
      )
    ]),
    module: {
      loaders: [
        // Javascript
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: [
            /node_modules/,
            path.resolve(appRootPath, process.env.CLIENT_BUNDLE_OUTPUT_PATH),
            path.resolve(appRootPath, process.env.SERVER_BUNDLE_OUTPUT_PATH)
          ],
          query: merge(
            {
              env: {
                production: {
                  plugins: [['transform-runtime', {
                    polyfill: true, regenerator: true
                  }], 'transform-decorators-legacy', 'transform-class-properties']
                },
                development: {
                  plugins: [['transform-runtime', {
                    polyfill: true, regenerator: true
                  }], 'react-hot-loader/babel', 'transform-decorators-legacy', 'transform-class-properties']
                }
              }
            },
            ifServer({
              // We are running a node 6 server which has support for almost
              // all of the ES2015 syntax, therefore we only transpile JSX.
              presets: ['react', 'stage-0', ['es2015', { modules: 'commonjs'}]]
            }),
            ifProdClient({
              // For our clients code we will need to transpile our JS into
              // ES5 code for wider browser/device compatability.
              presets: [
                // JSX
                'react',
                // Webpack 2 includes support for es2015 imports, therefore we
                // disable the modules processing.
                ['es2015', { modules: false }],
                'stage-0',
                'react-optimize'
              ]
            }),
            ifDevClient({
              // For our clients code we will need to transpile our JS into
              // ES5 code for wider browser/device compatability.
              presets: [
                'react-hmre',
                'react',
                // Webpack 2 includes support for es2015 imports, therefore we
                // disable the modules processing.
                ['es2015', { modules: false }],
                'stage-0'
              ]
            })
          )
        },

        // JSON
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        // Images and Fonts
        {
          test: /\.(jpg|jpeg|png|gif|ico|eot|svg|ttf|woff|woff2|otf)$/,
          loader: 'url-loader',
          query: {
            // Any file with a byte smaller than this will be "inlined" via
            // a base64 representation.
            limit: 10000,
            // We only emit files when building a client bundle, for the server
            // bundles this will just make sure any file imports will not fall
            // over.
            emitFile: isClient
          }
        },
        merge(
          { test: /\.scss$/ },
          // When targetting the server we use the "/locals" version of the
          // css loader.
          ifServer({
            loaders: [
              'css-loader/locals',
              'postcss',
              'sass'
            ]
          }),
          // For a production client build we use the ExtractTextPlugin which
          // will extract our CSS into CSS files.  The plugin needs to be
          // registered within the plugins section too.
          ifProdClient({
            loader: ExtractTextPlugin.extract({
              notExtractLoader: 'style-loader',
              loader: 'css-loader!postcss-loader!sass-loader!sass-resources'
            })
          }),
          // For a development client we will use a straight style & css loader
          // along with source maps.  This combo gives us a better development
          // experience.
          ifDevClient({
            loader: 'style!css?modules&camelCase&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!postcss!sass-loader'
          })
        ),
        // CSS
        merge(
          { test: /\.css$/ },
          // When targetting the server we use the "/locals" version of the
          // css loader.
          ifServer({
            loaders: [
              'css-loader/locals'
            ]
          }),
          ifServer(new webpack.NormalModuleReplacementPlugin(/\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|gif|webp|mp4|mp3|ogg|pdf)$/, 'node-noop')),

          // For a production client build we use the ExtractTextPlugin which
          // will extract our CSS into CSS files.  The plugin needs to be
          // registered within the plugins section too.
          ifProdClient({
            loader: ExtractTextPlugin.extract({
              notExtractLoader: 'style-loader',
              loader: 'css?modules&camelCase&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
            })
          }),
          // For a development client we will use a straight style & css loader
          // along with source maps.  This combo gives us a better development
          // experience.
          ifDevClient({
            loader: 'style!css?modules&camelCase&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
          })
        )
      ]
    }
  };
}

module.exports = webpackConfigFactory;
