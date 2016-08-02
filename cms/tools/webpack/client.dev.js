/* eslint-disable no-console */ /* eslint-disable no-unneeded-ternary */
/* eslint-disable quote-props */
import path from 'path';
import fs from 'fs';
import Debug from 'debug';
import webpack from 'webpack';
import dotenv from 'dotenv';
import HappyPack from 'happypack';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import InlineEnviromentVariablesPlugin from 'inline-environment-variables-webpack-plugin';
import { ROOT_DIR, SRC_DIR, WP_DS, NODE_MODULES_DIR, VENDOR_PREFIXES, VENDOR, BUILD_DIR } from '../constants';
import isomorphicConfig from './isomorphic.config';
import postCSSConfig from './loader/postcss.config';
import BABELQUERY from './loader/babel.config';
import createHappyPlugin from './util/createHappyPlugin';
import createSourceLoader from './util/createSourceLoader';

const debug = Debug('boldr:webpack:client');
dotenv.config({ silent: true });

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);

const HMR = `webpack-hot-middleware/client?reload=true&path=http://localhost:${WP_DS}/__webpack_hmr`;
debug('Webpack is reading the client configuration.');
// noinspection JSUnresolvedFunction
const clientDevConfig = {
  target: 'web',
  stats: false,
  progress: true,
  node: {
    __dirname: true,
    __filename: true
  },
  devtool: 'cheap-eval-source-map',
  context: ROOT_DIR,
  entry: {
    main: [
      'react-hot-loader/patch',
      HMR,
      path.join(SRC_DIR, 'client.js')
    ],
    vendor: VENDOR
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js',
    publicPath: `http://localhost:${WP_DS}/build/`
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],

    modulesDir: [
      'src',
      'node_modules'
    ],
    alias: {
      react: fs.realpathSync(path.join(NODE_MODULES_DIR, 'react')),
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
      createSourceLoader({
        happy: { id: 'jsx', threads: 4 },
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: NODE_MODULES_DIR,
        query: BABELQUERY
      }),
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
      { test: /\.json$/, loader: 'json-loader' },
      createSourceLoader({
        happy: { id: 'sass' },
        test: /\.scss$/,
        include: path.resolve(ROOT_DIR, 'src', 'styles'),
        loader: 'style!css?sourceMap!postcss!sass?sourceMap'
      }),
      createSourceLoader({
        happy: { id: 'css' },
        test: /\.css$/,
        loader: 'style!css?modules&camelCase&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]!postcss'
      }),
      {
        test: /\.scss$/,
        exclude: path.resolve(ROOT_DIR, 'src', 'styles'),
        loader: [
          'css?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]',
          'postcss',
          'resolve-url',
          'sass?sourceMap'
        ]
      }
    ]
  },
  postcss: postCSSConfig,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SSR_PORT: parseInt(process.env.SSR_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new InlineEnviromentVariablesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true
    }),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin.development(),
    new webpack.HotModuleReplacementPlugin(),
    createHappyPlugin('jsx'),
    createHappyPlugin('sass'),
    createHappyPlugin('css')
  ]
};

module.exports = clientDevConfig;
