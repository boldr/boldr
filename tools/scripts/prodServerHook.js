#!/usr/bin/env node
const appRoot = require('app-root-path');

const appRootPath = appRoot.toString();

const devMode = process.env.NODE_ENV !== 'production';

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./isomorphic.config'))
    .server(appRootPath, () => {
      require('./server.js');
    });

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = devMode;
global.webpackIsomorphicTools = webpackIsomorphicTools;
