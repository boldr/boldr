const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HappyPack = require('happypack');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const debug = require('debug')('webpack:dev');

const bcfg = require('../buildConfig');
const isomorphicConfig = require('./isomorphic.config');
const dllHelpers = require('./util/dllHelpers');

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(isomorphicConfig);

const assetsPath = bcfg.ASSETS_DIR;
dotenv.config({ silent: true });

const validDLLs = dllHelpers.isValidDLLs(['vendor'], assetsPath);
if (process.env.WEBPACK_DLLS === '1' && !validDLLs) {
  process.env.WEBPACK_DLLS = '0';
  debug('webpack dlls disabled');
}

const HMR = `webpack-hot-middleware/client?reload=true&path=http://localhost:${bcfg.HOT_RELOAD_PORT}/__webpack_hmr`;
const webpackConfig = {
  target: 'web',
  stats: false,
  devtool: 'cheap-module-eval-source-map',
  context: bcfg.ABS_ROOT,
  entry: {
    main: [
      'react-hot-loader/patch',
      HMR,
      path.join(bcfg.CMS_SRC, 'client.js')
    ]
  },
  output: {
    path: bcfg.BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js',
    publicPath: `http://localhost:${bcfg.HOT_RELOAD_PORT}/assets/`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules'],
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
        loader: 'happypack/loader?id=jsx',
        exclude: /node_modules/
      },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            query:
            {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]-[hash:base62:6]',
              minimize: false
            }
          },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            query: {
              sourceMap: true,
              modules: false,
              localIdentName: '[local]-[hash:base62:6]',
              minimize: false
            }
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader',
            query: {
              sourceMap: true,
              outputStyle: 'expanded'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SSR_PORT: parseInt(process.env.SSR_PORT, 10)
      },
      __DEV__: process.env.NODE_ENV !== 'production',
      __DISABLE_SSR__: false,
      __CLIENT__: true,
      __SERVER__: false,
      __DLLS__: process.env.WEBPACK_DLLS === '1'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin.development(),
    new HappyPack({
      id: 'jsx',
      threads: 4,
      loaders: ['babel']
    })
  ],
  node: {
    __dirname: true,
    __filename: true,
    global: true
  }
};
if (process.env.WEBPACK_DLLS === '1' && validDLLs) {
  dllHelpers.installVendorDLL(webpackConfig, 'vendor');
}
module.exports = webpackConfig;
