require('babel-polyfill');
require('babel-register')();

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
