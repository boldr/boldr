/* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const NodeExternals = require('webpack-node-externals');

const bcfg = require('../buildConfig');

dotenv.config({
  silent: true
});

const nodeConfig = { // eslint-disable-line
  target: 'node',
  stats: true, // Don't show stats in the console
  progress: true,
  externals: NodeExternals({ whitelist: [
    /\.(eot|woff|woff2|ttf|otf)$/,
    /\.(svg|png|jpg|jpeg|gif|ico)$/,
    /\.(mp4|mp3|ogg|swf|webp)$/,
    /\.(css|scss|sass|sss|less)$/
  ] }),
  context: bcfg.CMS_DIR,
  devtool: 'source-map',
  entry: {
    server: [
      path.join(bcfg.CMS_SRC, 'server.js')
    ]
  },
  output: {
    path: bcfg.BUILD_DIR,
    publicPath: '/assets/',
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    root: bcfg.ABS_ROOT,
    modulesDirectories: ['boldr-cms', 'node_modules'],
    alias: {
      react$: require.resolve(path.join(bcfg.NODE_MODULES_DIR, 'react')),
      components: require.resolve(path.join(bcfg.CMS_SRC, 'components')),
      core: require.resolve(path.join(bcfg.CMS_SRC, 'core')),
      scenes: require.resolve(path.join(bcfg.CMS_SRC, 'scenes'))
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
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
        SERVER_PORT: parseInt(process.env.SSR_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: false,
      __SERVER__: true
    }),
    new webpack.NormalModuleReplacementPlugin(/\.(eot|woff|woff2|ttf|otf|svg|png|jpg|jpeg|gif|webp|mp4|mp3|ogg|pdf)$/, 'node-noop'),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
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
