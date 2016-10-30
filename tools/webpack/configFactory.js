const path = require('path');
const globSync = require('glob').sync;
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const colors = require('colors');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const appRootPath = require('app-root-path').toString();
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const cssnext = require('postcss-cssnext');
const smartImport = require('postcss-smart-import');
const WebpackMd5Hash = require('webpack-md5-hash');
const { removeEmpty, ifElse, merge, happyPackPlugin } = require('../utils');
const envVars = require('../config/envVars');
const appName = require('../../package.json').name;


function webpackConfigFactory({ target, mode }, { json }) {
  if (!target || ['client', 'server', 'universalMiddleware'].findIndex(valid => target === valid) === -1) {
    throw new Error(
      'You must provide a "target" (client|server|universalMiddleware) to the webpackConfigFactory.'
    );
  }

  if (!mode || ['development', 'production'].findIndex(valid => mode === valid) === -1) {
    throw new Error(
      'You must provide a "mode" (development|production) to the webpackConfigFactory.'
    );
  }

  if (!json) {
    // 1
    console.log(`==> Creating webpack config for "${target}" in "${mode}" mode`);
  }

  const isDev = mode === 'development';
  const isProd = mode === 'production';
  const isClient = target === 'client';
  const isServer = target === 'server';
  const isUniversalMiddleware = target === 'universalMiddleware';
  const isNodeTarget = isServer || isUniversalMiddleware;

  const ifNodeTarget = ifElse(isNodeTarget);
  const ifDev = ifElse(isDev);
  const ifProd = ifElse(isProd);
  const ifClient = ifElse(isClient);
  const ifServer = ifElse(isServer);
  const ifDevServer = ifElse(isDev && isServer);
  const ifDevClient = ifElse(isDev && isClient);
  const ifProdClient = ifElse(isProd && isClient);

  return {
    target: ifNodeTarget('node', 'web'),
    node: {
      __dirname: true,
      __filename: true,
    },
    externals: removeEmpty([
      // Don't allow the server to bundle the universal middleware bundle. We
      // want the server to natively require it from the build dir.
      ifServer(/\.\.[\/\\]universalMiddleware/),
      ifDevServer(/development[\/\\]universalDevMiddleware/),
      ifNodeTarget(nodeExternals({
        whitelist: [
          /\.(eot|woff|woff2|ttf|otf)$/,
          /\.(svg|png|jpg|jpeg|gif|ico)$/,
          /\.(mp4|mp3|ogg|swf|webp)$/,
          /\.(css|scss|sass|sss|less)$/
        ]
      }))
    ]),
    devtool: ifElse(isNodeTarget || isDev)(
      'source-map',
      'hidden-source-map'
    ),
    // Define our entry chunks for our bundle.
    entry: merge(
      {
        index: removeEmpty([
          ifDevClient('react-hot-loader/patch'),
          ifDevClient(`webpack-hot-middleware/client?reload=true&path=http://localhost:${envVars.WPDS_PORT}/__webpack_hmr`), // eslint-disable-line
          ifClient('regenerator-runtime/runtime'),
          path.resolve(appRootPath, `./src/cms/${target}/index.js`),
        ]),
      }
    ),
    output: {
      // The dir in which our bundle should be output.
      path: path.resolve(appRootPath, envVars.BUNDLE_OUTPUT_PATH, `./${target}`),
      filename: ifProdClient(
        '[name]-[chunkhash].js',
        '[name].js'
      ),
      chunkFilename: '[name]-[chunkhash].js',
      // This is the web path under which our webpack bundled output should
      // be considered as being served from.
      publicPath: ifDev(
        // As we run a seperate server for our client and server bundles we
        // need to use an absolute http path for our assets public path.
        `http://localhost:${envVars.WPDS_PORT}${envVars.CLIENT_BUNDLE_HTTP_PATH}`,
        // Otherwise we expect our bundled output to be served from this path.
        envVars.CLIENT_BUNDLE_HTTP_PATH
      ),
      // When in server mode we will output our bundle as a commonjs2 module.
      libraryTarget: ifNodeTarget('commonjs2', 'var'),
    },
    resolve: {
      // These extensions are tried when resolving a file.
      extensions: [
        '.js',
        '.jsx',
        '.json',
        '.scss',
        '.eot',
        '.woff',
        '.ttf',
        '.woff2'
      ]
    },
    plugins: removeEmpty([
      ifClient(new WebpackMd5Hash()),
      new webpack.DefinePlugin(
        merge(
          {
            'process.env.NODE_ENV': JSON.stringify(mode),
            'process.env.IS_NODE': JSON.stringify(isNodeTarget),
            __DEV__: process.env.NODE_ENV !== 'production',
            __CLIENT__: true,
            __SERVER__: false
          },
          Object.keys(envVars).reduce((acc, cur) => {
            acc[`process.env.${cur}`] = JSON.stringify(envVars[cur]); // eslint-disable-line no-param-reassign
            return acc;
          }, {})
        )
      ),
      new ProgressBarPlugin({
        format:
          `build [:bar] \n` +
          `${colors.cyan(':percent')} (:elapsed seconds)\n` +
          `>>> :msg`,
        clear: false,
        complete: '█',
        incomplete: '░'
      }),
      // ifProdClient(new LodashModuleReplacementPlugin()),
      ifClient(
        new AssetsPlugin({
          filename: envVars.BUNDLE_ASSETS_FILENAME,
          path: path.resolve(appRootPath, envVars.BUNDLE_OUTPUT_PATH, `./${target}`),
        })
      ),
      ifDev(new webpack.NoErrorsPlugin()),
      ifDevClient(new webpack.HotModuleReplacementPlugin()),
      ifClient(
        new webpack.LoaderOptionsPlugin({
          minimize: isProd ? true : false,
          debug: false,
          context: __dirname
        })
      ),
      // Service Worker.
      // @see https://github.com/goldhand/sw-precache-webpack-plugin
      // This plugin generates a service worker script which as configured below
      // will precache all our generated client bundle assets as well as the
      // index page for our application.
      // This gives us aggressive caching as well as offline support.
      // Don't worry about cache invalidation. As we are using the Md5HashPlugin
      // for our assets, any time their contents change they will be given
      // unique file names, which will cause the service worker to fetch them.
      ifProdClient(
        new SWPrecacheWebpackPlugin(
          {
            // Note: The default cache size is 2mb. This can be reconfigured:
            // maximumFileSizeToCacheInBytes: 2097152,
            cacheId: `${appName}-sw`,
            filepath: path.resolve(envVars.BUNDLE_OUTPUT_PATH, './serviceWorker/sw.js'),
            dynamicUrlToDependencies: (() => {
              const clientBundleAssets = globSync(
                path.resolve(appRootPath, envVars.BUNDLE_OUTPUT_PATH, './client/*.js')
              );
              return globSync(path.resolve(appRootPath, './public/*'))
                .reduce((acc, cur) => {
                  // We will precache our public asset, with it being invalidated
                  // any time our client bundle assets change.
                  acc[`/${path.basename(cur)}`] = clientBundleAssets; // eslint-disable-line no-param-reassign,max-len
                  return acc;
                },
                {
                  // Our index.html page will be precatched and it will be
                  // invalidated and refetched any time our client bundle
                  // assets change.
                  '/': clientBundleAssets,
                  // Lets cache the call to the polyfill.io service too.
                  'https://cdn.polyfill.io/v2/polyfill.min.js': clientBundleAssets,
                });
            })(),
          }
        )
      ),
      happyPackPlugin({
        name: 'happypack-javascript',
        loaders: [{
          path: 'babel',
          query: {
            babelrc: false,
            presets: [['latest', { 'es2015': { 'modules': false }}], 'react'],
            plugins: removeEmpty([
              'transform-function-bind',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
              'transform-react-jsx-self',
              'transform-react-jsx-source',
              ifDevClient('react-hot-loader/babel'),
                ['module-resolver', {
                  root: ['./src'],
                  alias: {
                    core: './src/cms/common/core',
                    common: './src/cms/common',
                    components: './src/cms/common/components',
                    state: './src/cms/common/state',
                    theme: './src/cms/common/theme',
                    scenes: './src/cms/common/scenes'
                  }
                }]
              ])
            }
          }
        ]
      }),
      ifDevClient(
        happyPackPlugin({
          name: 'happypack-devclient-css',
          loaders: [
                        {path: 'style-loader'},
                        {
                            path: 'css-loader',
                            options: {
                                importLoaders: 1,
                                localIdentName: '[local]__[hash:base64:5]',
                                /* A CSS Module is a CSS file in which all class names and
                                animation names are scoped locally by default.
                                https://github.com/css-modules/css-modules */
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            path: 'postcss-loader'
                          },
                          {
                            path: 'sass-loader',
                            options: {
                              outputStyle: 'expanded',
                              sourceMap: true
                            }
                          }
          ]
          // loaders: ['style!css?localIdentName=[name]__[local].[hash:base64:5]&sourceMap&importLoaders&-minimize!postcss!sass?outputStyle=expanded&sourceMap'], // eslint-disable-line
        })),
      ifProdClient(
        new webpack.optimize.UglifyJsPlugin({
          // sourceMap: true,
          compress: {
            screw_ie8: true,
            warnings: false
          },
          mangle: {
            screw_ie8: true
          },
          output: {
            comments: false,
            screw_ie8: true
          },
        })
      ),
      ifProdClient(
        new ExtractTextPlugin({ filename: '[name]-[chunkhash].css', allChunks: true })
      ),
       ifDev(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }))
    ]),
    module: {
      rules: removeEmpty([
        // Javascript
        ifDev({
          test: /\.jsx?$/,
          loader: 'happypack/loader?id=happypack-javascript',
          exclude: [/node_modules/, './src/api'],
          include: [path.resolve(appRootPath, './src/cms')],

        }),
        ifProd({
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: [/node_modules/, './src/api'],
          include: [path.resolve(appRootPath, './src/cms')],
          query: {
            babelrc: false,
            presets: [['latest', { 'es2015': { 'modules': false }}], 'react'],
            plugins: removeEmpty([
              'transform-function-bind',
              'transform-class-properties',
              'transform-decorators-legacy',
              'transform-object-rest-spread',
              'transform-react-constant-elements',
                      'transform-regenerator',
        ['transform-runtime', {
          'helpers': false,
          'polyfill': false,
          'regenerator': true
        }],
              ['module-resolver', {
                root: ['./src'],
                alias: {
                  core: './src/cms/common/core',
                  components: './src/cms/common/components',
                  state: './src/cms/common/state',
                  theme: './src/cms/common/theme',
                  scenes: './src/cms/common/scenes'
                }
              }]
            ]),
          },
        }),
        // JSON
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|jp2|jpx|jxr|gif|webp|mp4|mp3|ogg|pdf)$/,
          loader: "file-loader",
          query: {
            name: ifProdClient("file-[hash:base62:8].[ext]", "[name].[ext]")
          }
        },
        merge(
          { test: /(\.scss|\.css)$/ },
          // When targetting the server we use the "/locals" version of the
          // css loader.
          ifNodeTarget({
            loaders: [
              'css-loader/locals',
              'postcss',
              'sass'
            ],
          }),
          // For a production client build we use the ExtractTextPlugin which
          // will extract our CSS into CSS files.  The plugin needs to be
          // registered within the plugins section too.
          ifProdClient({
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css?sourceMap&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap&sourceMapContents',
            })
          })
        ),
        // For a development client we will use a straight style & css loader
        // along with source maps.  This combo gives us a better development
        // experience.
        ifDevClient({
          test: /(\.scss|\.css)$/,
          loaders: ['happypack/loader?id=happypack-devclient-css']
        })
      ]),
      noParse: /\.min\.js/
    },
  };
}

module.exports = webpackConfigFactory;
