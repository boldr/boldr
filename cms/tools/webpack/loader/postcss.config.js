const precss = require('precss');
const reporter = require('postcss-reporter');
const lost = require('lost');


const postCSSConfig = () => {
  return [
    precss(),
    lost(),
    reporter({
      clearMessages: true
    })
  ];
};

export default postCSSConfig;
