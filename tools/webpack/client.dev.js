const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const appRoot = require('app-root-path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HappyPack = require('happypack');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const isomorphicConfig = require('./isomorphic.config');
const createHappyPlugin = require('./util/createHappyPlugin');
const createSourceLoader = require('./util/createSourceLoader');
const bcfg = require('../buildConfig');
const VENDOR_BUNDLE = require('../vendorBundle');

const appRootPath = appRoot.toString();

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);
const WP_DS = 3001;

dotenv.config({ silent: true });
const HMR = `webpack-hot-middleware/client?reload=true&path=http://localhost:${bcfg.HOT_RELOAD_PORT}/__webpack_hmr`;
const clientDevConfig = {
  target: 'web',
  stats: false, // Don't show stats in the console
  progress: true,
  // use either cheap-eval-source-map or cheap-module-eval-source-map.
  // cheap eval is faster than cheap-module
  // see https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: 'cheap-module-eval-source-map',
  context: bcfg.CMS_SRC,
  entry: {
    main: [
      'react-hot-loader/patch',
      HMR,
      path.join(bcfg.CMS_SRC, 'client.js')
    ],
    vendor: VENDOR_BUNDLE
  },
  output: {
    path: bcfg.BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js',
    publicPath: `http://localhost:${bcfg.HOT_RELOAD_PORT}/build/`
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    modulesDirectories: ['src/boldrCMS', 'node_modules'],
    alias: {
      react$: require.resolve(path.join(bcfg.NODE_MODULES_DIR, 'react'))
    }
  },
  module: {
    loaders: [
      createSourceLoader({
        happy: { id: 'js' },
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }),
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
      { test: /\.json$/, loader: 'json-loader' },
      createSourceLoader({
        happy: { id: 'css' },
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query:
            {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]-[hash:base62:6]',
              minimize: false
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }),
      createSourceLoader({
        happy: { id: 'sass' },
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query:
            {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]-[hash:base62:6]',
              minimize: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
              outputStyle: 'expanded'
            }
          }
        ]
      })
    ]
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
        discardUnused: false,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
      })
    ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SSR_SERVER_PORT: parseInt(process.env.SSR_SERVER_PORT, 10)
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
    new ProgressBarPlugin({
      format: '  build libs [:bar] :percent (:elapsed seconds)',
      clear: false
    }),
    new WebpackNotifierPlugin({ title: '🔥 Webpack' }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin.development(),
    createHappyPlugin('js'),
    createHappyPlugin('css'),
    createHappyPlugin('sass')
  ],
  node: {
    __dirname: true,
    __filename: true,
    global: 'window'
  }
};

module.exports = clientDevConfig;
