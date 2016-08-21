const path = require('path');

const ABS_ROOT = path.normalize(path.join(__dirname, '..'));

const bcfg = Object.freeze({
  ABS_ROOT,
  NODE_MODULES_DIR: path.join(ABS_ROOT, 'node_modules'),
  BUILD_DIR: path.join(ABS_ROOT, 'build'),
  DIST_DIR: path.join(ABS_ROOT, 'dist'),
  SRC_DIR: path.join(ABS_ROOT, 'src'),
  SRVR_DIR: path.join(ABS_ROOT, 'src', 'server'),
  CMS_DIR: path.join(ABS_ROOT, 'src', 'boldr-cms'),
  CMS_SRC: path.join(ABS_ROOT, 'src', 'boldr-cms'),
  API_DIR: path.join(ABS_ROOT, 'src', 'boldr-api'),
  API_SRC: path.join(ABS_ROOT, 'src', 'boldr-api'),
  ASSETS_DIR: path.join(ABS_ROOT, 'build', 'assets'),
  HOT_RELOAD_PORT: process.env.HOT_RELOAD_PORT || 3001,
  SERVER_PORT: process.env.SERVER_PORT || 3000
});

module.exports = bcfg;
