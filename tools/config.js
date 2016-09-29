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
  SSR_PORT: process.env.SSR_PORT || 3000
});

module.exports = config;
