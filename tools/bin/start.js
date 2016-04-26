delete process.env.BROWSER;

require('babel-register');
require('babel-polyfill');

const path = require('path');
const piping = require('piping');
const appModulePath = require('app-module-path');
const ROOT_DIR = path.resolve(__dirname, '..', '..');
const src = `${ROOT_DIR}/src`;

const config = require(`${src}/config`).default;

appModulePath.addPath(src);

const launcher = {
  '--app': () => require(`${src}/server`),
  '--api': () => require(`${src}/server/dev-api`)
};

const pipingOpts = {
  hook: true,
  ignore: /(containers|components|redux|styles)\/.*/
};

if (config.env !== 'development' || piping(pipingOpts)) {
  launcher[process.argv[2]]();
}
