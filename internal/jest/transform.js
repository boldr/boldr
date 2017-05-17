/* @flow */
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [['env', { target: { node: 7 } }], 'boldr/node'],
});
