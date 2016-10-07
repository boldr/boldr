const path = require('path');

const ABS_ROOT = path.normalize(path.join(__dirname, '..'));

const paths = Object.freeze({
  ABS_ROOT,
  NM_DIR: path.resolve(path.join(ABS_ROOT, 'node_modules')),
  STATIC_DIR: path.resolve(path.join(ABS_ROOT, 'cms', 'static')),
  CMS_SRC: path.resolve(path.join(ABS_ROOT, 'cms', 'src')),
  CMS_DIR: path.resolve(path.join(ABS_ROOT, 'cms')),
  CMS_DIST: path.resolve(path.join(ABS_ROOT, 'cms', 'dist')),
  API_SRC: path.resolve(path.join(ABS_ROOT, 'api', 'src')),
  API_DIR: path.resolve(path.join(ABS_ROOT, 'api')),
  ASSETS_DIR: path.resolve(path.join(ABS_ROOT, 'cms', 'static', 'assets'))
});

module.exports = paths;
