/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');
const NodeExternals = require('webpack-node-externals');

const bcfg = require('../buildConfig');

dotenv.config({
  silent: true
});
function getExternals () {
  const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules'))
  return nodeModules.reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {})
}

const nodeConfig = { // eslint-disable-line
  target: 'node',
  stats: true, // Don't show stats in the console
  progress: true,
  externals: getExternals(),
  context: bcfg.ABS_ROOT,
  devtool: 'source-map',
  entry: {
    server: [
      path.join(bcfg.ABS_ROOT, 'api', 'engine.js')
    ]
  },
  output: {
    path: bcfg.BUILD_DIR,
    chunkFilename: 'server-[name].js',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    root: bcfg.ABS_ROOT,
    modulesDirectories: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: bcfg.NODE_MODULES_DIR
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loaders: [
          'css-loader/locals',
          'postcss'
        ]
      },
      { test: /\.scss$/,
        loaders: [
          'css-loader/locals',
          'postcss',
          'sass'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_PORT: parseInt(process.env.SSR_SERVER_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: false,
      __SERVER__: true
    }),
    new webpack.NormalModuleReplacementPlugin(/\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|gif|webp|mp4|mp3|ogg|pdf)$/, 'node-noop'),
    new webpack.IgnorePlugin(/^\.\/locale$/, /\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|gif|webp|mp4|mp3|ogg|pdf)$/, /moment$/),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true,
  }
};
module.exports = nodeConfig;
