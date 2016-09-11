#!/usr/bin/env node

const devMode = process.env.NODE_ENV !== 'production';


const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./isomorphic.config'))
    .server(__dirname, () => {
      require('./server.js');
    });
    global.__CLIENT__ = false;
    global.__SERVER__ = true;
    global.__DEV__ = false;
    global.__DLLS__ = false;
    global.webpackIsomorphicTools = webpackIsomorphicTools;
