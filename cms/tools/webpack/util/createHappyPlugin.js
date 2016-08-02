const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 6 });

/**
 * Create the happypack plugin instance
 * @param id
 * @returns {HappyPlugin}
 */
export default function createHappyPlugin(id) {
  return new HappyPack({
    id,
    threadPool: happyThreadPool,
    enabled: true,
    cache: true,
    verbose: true
  });
}
