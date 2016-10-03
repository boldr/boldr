const path = require('path');

const ABS_ROOT = path.resolve(process.cwd());

const config = Object.freeze({
  ABS_ROOT,
  HOST: 'localhost',
  NODE_MODULES_DIR: path.resolve(path.join(ABS_ROOT, 'node_modules')),
  BUILD_DIR: path.resolve(path.join(ABS_ROOT, 'static')),
  SRC_DIR: path.resolve(path.join(ABS_ROOT, 'src')),
  API_DIR: path.resolve(path.join(ABS_ROOT, 'src', 'api')),
  ASSETS_DIR: path.resolve(path.join(ABS_ROOT, 'static', 'assets')),
  HMR_PORT: process.env.HOT_RELOAD_PORT || 3001,
  API_PORT: process.env.API_PORT || 2121,
  API_HOST: process.env.API_HOST || 'localhost',
  SSR_PORT: process.env.SSR_PORT || 3000,
  SSR_HOST: process.env.SSR_HOST || 'localhost'
});

module.exports = config;
