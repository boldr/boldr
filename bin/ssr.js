delete process.env.BROWSER;
const path = require('path');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const config = require('../config');
const conf = config.conf;
const paths = config.paths;
const isomorphicConfig = require('../tools/webpack/isomorphic.config');

const ROOT_DIR = path.resolve(process.cwd());

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEV__ = false;
global.__DLLS__ = false;
global.nodeRequire = require;
global.regeneratorRuntime = require('regenerator-runtime');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .server(paths.ABS_ROOT, () => {
    require(`${paths.CMS_DIST}/server.js`);
  });
