import path from 'path';

export const ROOT_DIR = path.normalize(path.join(__dirname, '..'));

const constants = Object.freeze({
  ROOT_DIR,
  NODE_MODULES_DIR: path.join(ROOT_DIR, 'node_modules'),
  BUILD_DIR: path.join(ROOT_DIR, 'public'),
  DIST_DIR: path.join(ROOT_DIR, 'dist'),
  SRC_DIR: path.join(ROOT_DIR, 'src'),
  STATIC_DIR: path.join(ROOT_DIR, 'public'),
  ASSETS_DIR: path.join(ROOT_DIR, 'public', 'assets'),
  WP_DS: process.env.WP_DS || 3001,
  SERVER_PORT: process.env.SERVER_PORT || 3000
});

export const VENDOR_PREFIXES = [
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'Firefox ESR',
  'Firefox 24',
  'last 2 Opera versions',
  'last 2 Safari versions',
  'last 2 iOS versions',
  'Explorer >= 10',
  'last 2 ChromeAndroid versions',
  'Android >= 4.0'
];
export const VENDOR = [
  'react',
  'react-dom',
  'react-router',
  'redux',
  'react-redux',
  'react-router-redux',
  'react-helmet',
  'redux-thunk',
  'redial',
  'superagent'
];
export const NODE_MODULES_DIR = constants.NODE_MODULES_DIR;
export const BUILD_DIR = constants.BUILD_DIR;
export const DIST_DIR = constants.DIST_DIR;
export const SRC_DIR = constants.SRC_DIR;
export const STATIC_DIR = constants.STATIC_DIR;
export const ASSETS_DIR = constants.ASSETS_DIR;
export const WP_DS = constants.WP_DS;
export const SERVER_PORT = constants.SERVER_PORT;

export default constants;
