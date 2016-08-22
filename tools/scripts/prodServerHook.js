#!/usr/bin/env node
const appRootPath = process.cwd();

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
