/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import InlineEnviromentVariablesPlugin from 'inline-environment-variables-webpack-plugin';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import {
  ROOT_DIR, SRC_DIR, NODE_MODULES_DIR
} from '../constants';
import isomorphicConfig from './isomorphic.config';

const dotenv = require('dotenv');

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);
dotenv.config({ silent: true });
const regExpGroups = ['style_modules', 'fonts'];
const plugins = [];
/**
 * Add node noop
 * @param {[type]} regExpGroup [description]
 */
function addNodeNoop(regExpGroup) {
  // noinspection JSUnresolvedFunction
  plugins.push(new webpack.NormalModuleReplacementPlugin(
    webpackIsomorphicToolsPlugin.regular_expression(regExpGroup),
    'node-noop'
  ));
}

let regExpGroup;

for (regExpGroup in regExpGroups) {
  if (regExpGroups.hasOwnProperty(regExpGroup)) {
    addNodeNoop(regExpGroups[regExpGroup]);
  }
}

function getExternals() {
  const nodeModules = fs.readdirSync(path.join(process.cwd(), 'node_modules')).concat([
    'react-dom/server'
  ]);
  return nodeModules.reduce((ext, mod) => {
    ext[mod] = `commonjs ${mod}`;
    return ext;
  }, {});
}

const nodeConfig = { // eslint-disable-line
  target: 'node',
  stats: false,
  progress: true,
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
    mainFields: ['jsnext:main', 'main'],
    alias: {
      react$: require.resolve(path.join(NODE_MODULES_DIR, 'react')),
      components: path.resolve(ROOT_DIR, 'src/components'),
      src: path.join(ROOT_DIR, 'src'),
      scenes: path.resolve(ROOT_DIR, 'src/scenes'),
      core: path.resolve(ROOT_DIR, 'src/core'),
      account: path.resolve(ROOT_DIR, 'src/scenes/Account'),
      dashboard: path.resolve(ROOT_DIR, 'src/scenes/Dashboard')
    }
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
          plugins: [['transform-runtime', { polyfill: true, regenerator: true }], 'transform-decorators-legacy'],
          compact: 'auto'
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: 'fake-style-loader!css-loader?modules&sourceMap&minimize=false&localIdentName=[local]-[hash:base62:6]!postcss-loader' // eslint-disable-line
      },
      { test: /\.scss$/, loader: 'fake-style-loader!css?sourceMap!postcss!sass?sourceMap' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SSR_PORT: parseInt(process.env.SSR_PORT, 10),
        API_PREFIX: JSON.stringify(process.env.API_PREFIX),
        API_HOST: JSON.stringify(process.env.API_HOST)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: false,
      __DEVELOPMENT__: false,
      __SERVER__: true
    }),
    new InlineEnviromentVariablesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.optimize.DedupePlugin()
  ],
  noParse: /\.min\.js/,
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filaname: false,
    __dirname: false,
    fs: true,
    path: true,
    window: true
  }
};
module.exports = nodeConfig;
