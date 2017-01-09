'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _engine = require('../../engine');

var _engine2 = _interopRequireDefault(_engine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request() {
  return (0, _supertest2.default)(_engine2.default);
}
it('GET /menus', (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var _ref2, status, body;

  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return request().get('/api/v1/menus');

        case 2:
          _ref2 = _context.sent;
          status = _ref2.status;
          body = _ref2.body;


          expect(status).toBe(200);

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));