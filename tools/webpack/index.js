const path = require('path');
const debug = require('debug')('webpack');
const paths = require('../paths');
const dllHelpers = require('./util/dllHelpers');

const validDLLs = dllHelpers.isValidDLLs(['vendor'], path.resolve(paths.ASSETS_DIR));

if (process.env.WEBPACK_DLLS === '1' && !validDLLs) {
  process.env.WEBPACK_DLLS = '0';
  debug('webpack dlls disabled');
}

const webpackConfig = require('./webpack.config.client.js')();

if (process.env.WEBPACK_DLLS === '1' && validDLLs) {
  dllHelpers.installVendorDLL(webpackConfig, 'vendor');
}

module.exports = webpackConfig;
