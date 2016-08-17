const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = function createHappyPlugin(id) {
  return new HappyPack({
    id,
    threadPool: happyThreadPool,

    // disable happypack with HAPPY=0
    enabled: process.env.HAPPY !== '0',

    // disable happypack caching with HAPPY_CACHE=0
    cache: process.env.HAPPY_CACHE !== '0',

    // make happypack more verbose with HAPPY_VERBOSE=1
    verbose: process.env.HAPPY_VERBOSE === '1',
  });
};
