const path = require('path');
const appRoot = require('app-root-path');

const appRootPath = appRoot.toString();

const ABS_ROOT = appRootPath;

const paths = Object.freeze({
  ABS_ROOT,
  NM_DIR: path.resolve(path.join(appRootPath, 'node_modules')),
  PUBLIC_DIR: path.resolve(path.join(appRootPath, 'public')),
  CMS_SRC: path.resolve(path.join(appRootPath, 'src', 'cms')),
  API_SRC: path.resolve(path.join(appRootPath, 'src', 'api')),
  ASSETS_DIR: path.resolve(path.join(appRootPath, 'cms', 'static', 'assets')),
  BUNDLE_OUTPUT_PATH: path.resolve(path.join(appRootPath, 'build', 'boldrCMS'))
});

module.exports = paths;
