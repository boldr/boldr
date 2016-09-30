
const path = require('path');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const config = require('../config');

module.exports = {
  debug: false,
  patch_require: true,
  webpack_assets_file_path: path.join(config.BUILD_DIR, 'webpack-assets.json'),
  webpack_stats_file_path: path.join(config.BUILD_DIR, 'webpack-stats.json'),
  // port: 8888,
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif',
        'ico'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    svg: {
      extension: 'svg',
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    style_modules: {
      extensions: ['css', 'scss'],
      filter(module, regex, options, log) {
        if (options.development) {
          // in development mode there's webpack "style-loader",
          // so the module.name is not equal to module.name
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        }

        // in production mode there's no webpack "style-loader",
        // so the module.name will be equal to the asset path
        return regex.test(module.name);
      },
      path(module, options, log) {
        if (options.development) {
          // in development mode there's webpack "style-loader",
          // so the module.name is not equal to module.name
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }

        // in production mode there's no webpack "style-loader",
        // so the module.name will be equal to the asset path
        return module.name;
      },
      parser(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }
        log.info('# module name', module.name);
        log.info('# module source', module.source);
        log.info('# project path', options.project_path);
        log.info('# assets base url', options.assets_base_url);
        log.info('# regular expressions', options.regular_expressions);
        log.info('# debug mode', options.debug);
        log.info('# development mode', options.development);

        // in production mode there's Extract Text Loader which extracts CSS text away
        return module.source;
      }
    }
  }
};
