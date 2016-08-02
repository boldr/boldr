#!/usr/bin/env node
const path = require('path');

const rootDir = path.resolve(__dirname);
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const devMode = process.env.NODE_ENV !== 'production';
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const isomorphicConfig = {
  patch_require: true,
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif'
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
      filter: function(module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
        } else {
          return regex.test(module.name);
        }
      },
      path: function(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        } else {
          return module.name;
        }
      },
      parser: function(module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        } else {
          return module.source;
        }
      }
    }
  }
};

global.webpackIsomorphicTools = new WebpackIsomorphicTools(isomorphicConfig)
  .development(devMode)
  .server(rootDir, () => {
    require('./server');
  });

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = devMode;
global.webpackIsomorphicTools = webpackIsomorphicTools;
