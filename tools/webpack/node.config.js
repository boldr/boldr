/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import {
  ROOT_DIR, SRC_DIR, NODE_MODULES_DIR
} from '../constants';

const dotenv = require('dotenv');

dotenv.config({
  silent: true
});

function getExternals() {
  const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules')) // eslint-disable-line
  return nodeModules.reduce(function(ext, mod) { // eslint-disable-line
    ext[mod] = 'commonjs ' + mod // eslint-disable-line
    return ext // eslint-disable-line
  }, {}) // eslint-disable-line
}

const nodeConfig = { // eslint-disable-line
  target: 'node',
  externals: getExternals(),
  context: ROOT_DIR,
  devtool: 'source-map',
  entry: {
    server: [
      path.join(SRC_DIR, 'server', 'index.js')
    ]
  },
  output: {
    path: ROOT_DIR,
    publicPath: '/',
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    mainFields: ['jsnext:main', 'main']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [NODE_MODULES_DIR],
        query: {
          cacheDirectory: false,
          babelrc: false,
          presets: ['react', 'es2015-webpack', 'stage-0'],
          plugins: [['transform-runtime', { polyfill: true, regenerator: false }]],
          compact: 'auto'
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: 'fake-style!style!css?modules&camelCase&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!postcss' // eslint-disable-line
      },
      { test: /\.scss$/, loader: 'fake-style!css!postcss!sass' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_PORT: parseInt(process.env.SERVER_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: false,
      __SERVER__: true
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.optimize.DedupePlugin()
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filaname: true,
    __dirname: true,
    fs: true,
    path: true
  }
};
module.exports = nodeConfig;
