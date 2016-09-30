require('babel-core/register');

process.env.NODE_ENV = 'test';

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;

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
