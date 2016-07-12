const path = require('path');
const webpack = require('webpack');

const ROOT_DIR = path.join(__dirname, '..', '..', '..');

const postCSSConfig = function() {
  return [
    require('postcss-import')({
      path: path.join(ROOT_DIR, 'src', 'styles'),
      // addDependencyTo is used for hot-reloading in webpack
      addDependencyTo: webpack
    }),
    // Note: you must set postcss-mixins before simple-vars and nested
    require('postcss-mixins')(),
    require('postcss-simple-vars')(),
    // Unwrap nested rules like how Sass does it
    require('postcss-nested')(),
    //  parse CSS and add vendor prefixes to CSS rules
    require('autoprefixer')({
      browsers: ['last 2 versions', 'IE > 8']
    }),
    // A PostCSS plugin to console.log() the messages registered by other
    // PostCSS plugins
    require('postcss-reporter')({
      clearMessages: true
    })
  ];
};

module.exports = postCSSConfig;
