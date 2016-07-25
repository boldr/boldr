#!/usr/bin/env node
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');

const devMode = process.env.NODE_ENV !== 'production';

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/isomorphic.config'))
  .development(devMode)
  .server(rootDir, () => {
    require('../../server');
  });

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = devMode;
global.webpackIsomorphicTools = webpackIsomorphicTools;
