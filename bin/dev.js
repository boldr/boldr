require('babel-register');
require('babel-polyfill');

const path = require('path');
const paths = require('../tools/paths');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const isomorphicConfig = require('../tools/webpack/isomorphic.config');

const ROOT_DIR = path.resolve(process.cwd());

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEV__ = process.env.NODE_ENV !== 'production';
global.__DLLS__ = process.env.WEBPACK_DLLS === '1';

global.webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .server(paths.ABS_ROOT, () => {
    require(`${paths.CMS_SRC}/server.js`);
  });
