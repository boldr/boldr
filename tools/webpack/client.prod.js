const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const appRoot = require('app-root-path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const isomorphicConfig = require('./isomorphic.config');


const appRootPath = appRoot.toString();
const NODE_MODULES_DIR = path.resolve(appRootPath, './node_modules');

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);

const VENDOR = [
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
  'redux-form',
  'react-addons-css-transition-group',
  'react-rte',
  'normalizr',
  'material-ui'
];

dotenv.config({ silent: true });
const ASSETS_DIR = path.resolve(appRootPath, 'public', 'assets');

const clientProdConfig = {
  target: 'web',
  stats: false, // Don't show stats in the console
  progress: true,
  devtool: false,
  context: appRootPath,
  entry: {
    main: [require.resolve('../scripts/polyfill'), path.join(appRootPath, 'src', 'client.js')],
    vendor: VENDOR
  },
  output: {
    path: ASSETS_DIR,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: NODE_MODULES_DIR
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
          loader: 'css-loader?-autoprefixer&modules&sourceMap&minimize=false&localIdentName=[local]-[hash:base62:6]!postcss-loader!sass-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    root: appRootPath,
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      react$: require.resolve(path.join(NODE_MODULES_DIR, 'react'))
    }
  },
  postcss(webpack) {
    return [
      require('precss')(),
      require('pixrem')(),
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
        SERVER_PORT: parseInt(process.env.SERVER_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: true,
      __SERVER__: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
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
    // merge common
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    webpackIsomorphicToolsPlugin
  ],
  node: {
    __dirname: true,
    __filename: true
  }
};
module.exports = clientProdConfig;
