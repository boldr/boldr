/* eslint-disable max-len */
const path = require('path');
const webpack = require('webpack');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const HappyPack = require('happypack');
const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const debug = require('debug')('boldr:webpack');
const paths = require('../paths');

const WatchMissingNodeModulesPlugin = require('./util/WatchMissingModulesPlugin');
const { removeEmpty, ifElse, merge, removeEmptyKeys } = require('./util/helpers');
const dllHelpers = require('./util/dllHelpers');

const isomorphicConfig = require('./isomorphic.config');

const isDebug = process.env.NODE_ENV !== 'production';
const ENV = process.env.NODE_ENV || 'development';
const isDev = ENV !== 'production';
const isProd = ENV === 'production';
const ifDev = ifElse(isDev);
const ifProd = ifElse(isProd);

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig).development(isDev);

module.exports = function webpackConfig() {
  return {
    target: 'web',
    stats: false,
    bail: true, // eslint-disable-line
    devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
    context: paths.ROOT_DIR,
    cache: isDev,
    entry: removeEmptyKeys({
      main: removeEmpty([
        ifDev('react-hot-loader/patch'),
        ifDev('webpack-hot-middleware/client?reload=true&path=http://localhost:3001/__webpack_hmr'),
        'regenerator-runtime/runtime',
        path.join(paths.CMS_SRC, 'client.js')
      ]),
      vendor: ifProd([
        'react',
        'react-dom',
        'react-router',
        'redux',
        'react-redux',
        'react-router-redux',
        'react-helmet',
        'redux-thunk',
        'redial',
        'superagent',
        'classnames',
        'lodash',
        'webfontloader'
      ])
    }),
    output: {
      path: path.resolve(paths.ASSETS_DIR),
      filename: ifProd('[name]-[chunkhash].js', '[name].js'),
      chunkFilename: ifDev('[name]-[id].chunk.js', '[name]-[id].[chunkhash].js'),
      publicPath: isDev ? 'http://localhost:3001/assets/' : '/assets/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
      modules: ['src', 'node_modules']
    },
    module: {
      loaders: removeEmpty([
        ifDev({
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'happypack/loader?id=jsx'
        }),
        ifProd({
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }),
        { test: /\.json$/, loader: 'json' },
        { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
        { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: isDev ?
            'style!css?localIdentName=[name]__[local].[hash:base64:5]&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap' :
            ExtractTextPlugin.extract({
              fallbackLoader: 'style',
              loader: 'css?sourceMap&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap&sourceMapContents'
            })
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: isDev ?
            'style!css?localIdentName=[name]__[local].[hash:base64:5]&modules&sourceMap&-minimize&importLoaders=1!postcss' :
            ExtractTextPlugin.extract({
              fallbackLoader: 'style',
              loader: 'css?modules&sourceMap&importLoaders=1!postcss'
            }),
        },
        {
          test: /\.module.scss$/,
          exclude: /node_modules/,
          loader: isDev ?
            'style!css?localIdentName=[name]__[local].[hash:base64:5]&modules&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap' :
            ExtractTextPlugin.extract({
              fallbackLoader: 'style',
              loader: 'css?modules&sourceMap&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap&sourceMapContents'
            })
        }
      ])
    },
    plugins: removeEmpty([
      //
      // Common Plugins used in both Dev and Prod
      // * ------------------------------------- *

      // Each key passed into DefinePlugin is an identifier
      // Everything defined using the define plugin will be inlined.
      // http://webpack.github.io/docs/list-of-plugins.html#defineplugin
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          DEBUG: JSON.stringify(process.env.DEBUG)
        },
        __DEV__: process.env.NODE_ENV !== 'production',
        __DISABLE_SSR__: false,
        __CLIENT__: true,
        __SERVER__: false,
        __DLLS__: process.env.WEBPACK_DLLS === '1'
      }),
      // HappyPack Plugins are used as caching mechanisms to seriously speed-up
      // your bundling during development. HappyPack runs multiple parallel Webpack processes.
      // You can define a number of threads to share or give each loader a predetermined amount.
      // See util/createHappyPlugin.js and https://github.com/amireh/happypack for more.
      ifDev(new HappyPack({
        id: 'jsx',
        threads: 6,
        loaders: ['babel']
      })),
      // Used for requiring assets in a way that works within a node environment so that
      // you are able to bundle everything including your server together.
      // https://github.com/halt-hammerzeit/webpack-isomorphic-tools
      webpackIsomorphicToolsPlugin,
      // Define common options used by all webpack plugins, such as minifying and debug modes.
      new webpack.LoaderOptionsPlugin({
        minimize: isProd,
        debug: !isProd
      }),
      //
      // Development plugins
      // * ------------------------------------- *
      // Swap out code without *always* needing a full page reload.
      ifDev(new webpack.HotModuleReplacementPlugin()),
      // When there are errors while compiling this plugin skips the emitting
      // phase (and recording phase), so there are no assets emitted that include errors
      // http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      ifDev(new webpack.NoErrorsPlugin()),
      ifDev(new webpack.IgnorePlugin(/webpack-stats\.json$/)),

      //
      // Production plugins
      // * ------------------------------------- *

      // CommonsChunk analyzes everything in your bundles, extracts common bits into files
      // together. Trick with CommonsChunkPlugin is the name key, accepts an array, which you
      // can pass a value that doesn't exist. In our case this is the manifest file. Webpack
      // will place "webpack code" there instead of across your bundlded files.
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: ['main', 'vendor'],
        filename: '[name].[chunkhash].js',
        minChunks: Infinity
      })),
      ifProd(new WatchMissingNodeModulesPlugin(paths.NM_DIR)),
      // Create smaller Lodash builds by replacing feature sets of modules with
      // noop, identity, or simpler alternatives.
      // https://github.com/lodash/lodash-webpack-plugin
      ifProd(new LodashModuleReplacementPlugin),
      // Extracts all stylesheets into a main file. During development styles are dumped
      // into the head and/or added dynamically.
      ifProd(new ExtractTextPlugin({
        filename: '[name].[chunkhash].css'
      })),
      ifProd(
        new OptimizeJsPlugin({ sourceMap: false })),
      // Becareful adding too much for Uglify to do because it has a talent for breaking bundles.
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      })),
      // Assigns the module and chunk ids by occurrence count.
      // http://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
      ifProd(new webpack.optimize.OccurrenceOrderPlugin(true)),
      // A plugin for a more aggressive chunk merging strategy. Even similar chunks
      // are merged if the total size is reduced enough.
      // http://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
      ifProd(new webpack.optimize.AggressiveMergingPlugin()),

      new AssetsPlugin({
        path: path.resolve(paths.STATIC_DIR),
        filename: 'assets.js',
        processOutput: x => `module.exports = ${JSON.stringify(x)};`
      }),
      // ifDev(new DashboardPlugin({ port: 3001 }))
    ]),
    /*
     * Include polyfills and/or mocks for node
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      __dirname: true,
      __filename: true,
      global: true
    }
  };
};
