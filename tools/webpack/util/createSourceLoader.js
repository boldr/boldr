const path = require('path');
const appRoot = require('app-root-path');

const appRootPath = appRoot.toString();

module.exports = function createSourceLoader(spec) {
  return Object.keys(spec).reduce((x, key) => {
    x[key] = spec[key];

    return x;
  }, {
    include: [path.resolve(appRootPath, './src')]
  });
};
