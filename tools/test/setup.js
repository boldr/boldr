require('babel-register');

process.env.NODE_ENV = 'test';

global.nodeRequire = require;
global.regeneratorRuntime = require('regenerator-runtime');

const noop = (module, file) => {
  module._compile('', file);
};

[
  '.css', '.less', '.scss',
  '.gif', '.jpg', '.png', '.svg',
  '.ttf', '.eot', '.woff', '.woff2'
].forEach((extension) => {
  require.extensions[extension] = noop;
});

const chai = require('chai');

global.expect = chai.expect;
global.assert = chai.assert;
chai.should();

// Load Sinon globally
global.sinon = require('sinon');
// Chai Plugins
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));
// chai.use(require('chai-http'));

