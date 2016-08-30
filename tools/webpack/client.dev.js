const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HappyPack = require('happypack');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const bcfg = require('../buildConfig');
const VENDOR_BUNDLE = require('../vendorBundle');
const isomorphicConfig = require('./isomorphic.config');
const createHappyPlugin = require('./util/createHappyPlugin');
const createSourceLoader = require('./util/createSourceLoader');

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);
const WP_DS = 3001;

const isDebug = process.env.NODE_ENV !== 'production';

dotenv.config({ silent: true });
const HMR = `webpack-hot-middleware/client?reload=true&path=http://localhost:${bcfg.HOT_RELOAD_PORT}/__webpack_hmr`;
const clientDevConfig = {
  target: 'web',
  stats: false, // Don't show stats in the console
  progress: true,
  devtool: isDebug ? 'cheap-module-eval-source-map' : false,
  context: bcfg.ABS_ROOT,
  debug: isDebug,
  entry: {
    main: [
      'react-hot-loader/patch',
      HMR,
      path.join(bcfg.SRC_DIR, 'client.js')
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
    modulesDirectories: ['src', 'node_modules'],
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
        query: { cacheDirectory: true, compact: false },
        exclude: /node_modules/
      }),
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(scss|sass|css)/,
        include: /node_modules/,
        loader: 'style!css!postcss!sass'
      },
      createSourceLoader({
        happy: { id: 'css' },
        test: /\.css$/,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query:
            {
              sourceMap: true,
              modules: false,
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
          },
          {
            loader: 'sass-resources'
          }
        ]
      })
    ]
  },
  sassResources: path.resolve(bcfg.SRC_DIR, 'styles/abstracts/*.scss'),
  postcss(webpack) {
    return [
      require('precss')(),
      require('lost')(),
      require('cssnano')({
        autoprefixer: {
          add: true,
          remove: false,
          browsers: 'last 2 versions'
        }
      })
    ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ minimize: !isDebug, debug: isDebug, }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SSR_SERVER_PORT: parseInt(process.env.SERVER_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: true,
      __SERVER__: false
    }),
    new ProgressBarPlugin({
      format: '  build libs [:bar] :percent (:elapsed seconds)',
      clear: false
    }),
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
