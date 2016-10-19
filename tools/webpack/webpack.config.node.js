const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const NodeExternals = require('webpack-node-externals');

const paths = require('../paths');
const _ = require('lodash');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const isomorphicConfig = require('./isomorphic.config');

const webpackIsomorphicToolsPlugin =
        new WebpackIsomorphicToolsPlugin(isomorphicConfig);

const ignoredAssetGroups = [
  'stylesCss',
  'stylesSass',
  'fonts'
];

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
      SSR_PORT: JSON.stringify(process.env.SSR_PORT)
    },
    __DEV__: process.env.NODE_ENV !== 'production',
    __DISABLE_SSR__: false,
    __CLIENT__: false,
    __SERVER__: true
  }),
  new webpack.NormalModuleReplacementPlugin(/\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|gif|webp|mp4|mp3|ogg|pdf)$/, 'node-noop'),
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  })
];

/**
 * Add node noop
 * @param {[type]} regExpGroup [description]
 */
function addNodeNoop(regExpGroup) {
  new webpack.NormalModuleReplacementPlugin(
    webpackIsomorphicToolsPlugin.regular_expression(regExpGroup),
    'node-noop'
  )
}
_.forEach(ignoredAssetGroups, addNodeNoop);

const nodeConfig = { // eslint-disable-line
  target: 'node',
  stats: true,
  bail: true,
  externals: NodeExternals({ whitelist: [
    /\.(eot|woff|woff2|ttf|otf)$/,
    /\.(svg|png|jpg|jpeg|gif|ico)$/,
    /\.(mp4|mp3|ogg|swf|webp)$/,
    /\.(css|scss|sass|sss|less)$/
  ] }),
  devtool: '#source-map',
  entry: {
    server: [
      path.resolve(path.join(paths.CMS_SRC, 'server.js'))
    ]
  },
  output: {
    path: path.resolve(paths.CMS_DIR + '/dist'),
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['cms/src', 'node_modules'],
    mainFields: ['main']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
  plugins: plugins,
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filaname: true,
    __dirname: true
  }
};

module.exports = nodeConfig;
