const path = require('path');

module.exports = {
  env: {
    // everything here will be passed directly to webpack build
    // using DefinePlugin
    BUNDLE_ASSETS_FILENAME: 'assets.json',
    BUNDLE_ASSETS_PATH: path.resolve(__dirname, '../public/assets'),
    ASSETS_MANIFEST_PATH: path.resolve(
      __dirname,
      '../public/assets/assets.json',
    ),
    ASSETS_DIR: path.resolve(__dirname, '../public/assets'),
    PUBLIC_DIR: path.resolve(__dirname, '../public'),
    SERVER_PORT: 3000,
    DEV_SERVER_PORT: 3001,
  },
  plugins: [require('boldr-plugin-webpack')],
  settings: {
    client: {
      entry: path.resolve(__dirname, '../src/client/index.js'),
      bundleDir: path.resolve(__dirname, '../public/assets'),
      webpackPlugins: {
        development: [
          /* (configuration: Configuration, variables: Object) => typeof WebpackPlugin */
        ],
        production: [],
      },
    },
    server: {
      entry: path.resolve(__dirname, '../src/server/index.js'),
      bundleDir: path.resolve(__dirname, '../server'),
      webpackPlugins: {
        development: [],
        production: [],
      },
    },
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'react-router-redux',
      'axios',
      'serialize-javascript',
      'webfontloader',
    ],
  },
};
