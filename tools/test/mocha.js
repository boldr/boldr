require('babel-register')();

const chai = require('chai');

global.expect = chai.expect;
global.assert = chai.assert;
chai.should();
