const mixins = require('postcss-mixins');
const simpleVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const customMedia = require('postcss-custom-media');
const mediaMinMax = require('postcss-media-minmax');
const lost = require('lost');
const reporter = require('postcss-reporter');

const postCSSConfig = () => {
  return [
    mixins(),
    simpleVars(),
    // Unwrap nested rules like how Sass does it
    nested(),
    customMedia(),
    mediaMinMax(),
    lost(),
    reporter({
      clearMessages: true
    })
  ];
};

export default postCSSConfig;
