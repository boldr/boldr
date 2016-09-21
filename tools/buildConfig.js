const path = require('path');

const ABS_ROOT = path.normalize(path.join(__dirname, '..'));

const bcfg = Object.freeze({
  ABS_ROOT,
  NODE_MODULES_DIR: path.join(ABS_ROOT, 'node_modules'),
  BUILD_DIR: path.join(ABS_ROOT, 'static'),
  DIST_DIR: path.join(ABS_ROOT, 'dist'),
  CMS_DIR: path.join(ABS_ROOT, 'src'),
  CMS_SRC: path.join(ABS_ROOT, 'src'),
  API_DIR: path.join(ABS_ROOT, 'src', 'api'),
  API_SRC: path.join(ABS_ROOT, 'src', 'api'),
  ASSETS_DIR: path.join(ABS_ROOT, 'static', 'assets'),
  HOT_RELOAD_PORT: process.env.HOT_RELOAD_PORT || 3001,
  SSR_PORT: process.env.SSR_PORT || 3000,
  API_PORT: process.env.API_SERVER_PORT || 8121
});

module.exports = bcfg;
