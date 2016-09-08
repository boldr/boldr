require('babel-core/register');
require('babel-polyfill');

const chai = require('chai');

global.expect = chai.expect;
global.assert = chai.assert;
chai.should();

// Load Sinon globally
global.sinon = require('sinon');
// Chai Plugins
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));
chai.use(require('chai-things'));

process.on('unhandledRejection', function(error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
