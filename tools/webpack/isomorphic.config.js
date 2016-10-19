
const path = require('path');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const paths = require('../paths');

/**
 * Style filter
 *
 * @param  {[type]} module            [description]
 * @param  {[type]} regularExpression [description]
 * @param  {[type]} options           [description]
 * @param  {[type]} log               [description]
 * @return {[type]}                   [description]
 */
function styleFilter(module, regularExpression, options, log) {
  if (options.development) {
    return WebpackIsomorphicToolsPlugin.style_loader_filter(
      module,
      regularExpression,
      options,
      log
    );
  }
}

/**
 * Style path
 *
 * @param  {[type]} module  [description]
 * @param  {[type]} options [description]
 * @param  {[type]} log     [description]
 * @return {[type]}         [description]
 */
function stylePath(module, options, log) {
  if (options.development) {
    return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(
      module,
      options,
      log
    );
  }
}

/**
 * Style parser
 * @param  {[type]} module  [description]
 * @param  {[type]} options [description]
 * @param  {[type]} log     [description]
 * @return {[type]}         [description]
 */
function styleParser(module, options, log) {
  if (options.development) {
    return WebpackIsomorphicToolsPlugin.css_loader_parser(
      module,
      options,
      log
    );
  }
}
module.exports = {
  debug: false,
  patch_require: true,
  webpack_assets_file_path: path.join(paths.CMS_DIR, '/dist/webpack-assets.json'),
  webpack_stats_file_path: path.join(paths.CMS_DIR, '/dist/webpack-stats.json'),
  port: 8888,
  assets: {
    images: {
      extensions: [
        'png',
        'jpg',
        'gif',
        'ico',
        'svg'
      ]
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot'
      ]
    },
    stylesCss: {
      extensions: [
        'css'
      ],
      filter: styleFilter,
      path: stylePath,
      parser: styleParser
    },
    stylesSass: {
      extensions: [
        'scss'
      ],
      filter: styleFilter,
      path: stylePath,
      parser: styleParser
    }
  }
};
