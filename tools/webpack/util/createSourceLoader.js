const path = require('path');

const appRootPath = process.cwd();

module.exports = function createSourceLoader(spec) {
  return Object.keys(spec).reduce((x, key) => {
    x[key] = spec[key];

    return x;
  }, {
    include: [path.resolve(appRootPath, 'src')]
  });
};
