const path = require('path');
const webpack = require('webpack');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const bcfg = require('../buildConfig');
const VENDOR_BUNDLE = require('../vendorBundle');
const isomorphicConfig = require('./isomorphic.config');
const WatchMissingNodeModulesPlugin = require('./util/WatchMissingModulesPlugin');

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);

const clientProdConfig = {
  target: 'web',
  stats: false, // Don't show stats in the console
  progress: true,
  devtool: false,
  context: bcfg.ABS_ROOT,
  entry: {
    main: [require.resolve('../scripts/polyfill'), path.join(bcfg.SRC_DIR, 'client.js')],
    vendor: VENDOR_BUNDLE
  },
  output: {
    path: bcfg.ASSETS_DIR,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: bcfg.NODE_MODULES_DIR
      },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('svg'), loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?-autoprefixer&modules&sourceMap&minimize=false&localIdentName=[local]-[hash:base62:6]!postcss-loader'
        })
      },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?-autoprefixer&modules&sourceMap&minimize=false&localIdentName=[local]-[hash:base62:6]!postcss-loader!sass-loader!sass-resources'
        })
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    root: bcfg.ABS_ROOT,
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      react$: require.resolve(path.join(bcfg.NODE_MODULES_DIR, 'react'))
    }
  },
  sassResources: path.resolve(bcfg.SRC_DIR, 'styles/abstracts/*.scss'),
  postcss(webpack) {
    return [
      require('precss')(),
      require('lost')(),
      require('cssnano')({
        autoprefixer: {
          add: true,
          remove: true,
          browsers: 'last 2 versions'
        },
        discardComments: {
          removeAll: true
        },
        discardUnused: true,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
      })
    ];
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin({ filename: '[name]-[chunkhash].css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        SSR_SERVER_PORT: parseInt(process.env.SERVER_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: true,
      __SERVER__: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: Infinity,
      async: true
    }),
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports?self.fetch!whatwg-fetch'
    }),
    // needed for long-term caching
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ProgressBarPlugin({
      format: '  build libs [:bar] :percent (:elapsed seconds)',
      clear: false
    }),

    // merge common
    new webpack.optimize.AggressiveMergingPlugin(),
    new VisualizerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new WatchMissingNodeModulesPlugin(bcfg.NODE_MODULES_DIR),
    webpackIsomorphicToolsPlugin
  ],
  node: {
    __dirname: true,
    __filename: true
  }
};
module.exports = clientProdConfig;
