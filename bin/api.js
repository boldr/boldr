#!/usr/bin/env node
require('babel-register');
require('babel-polyfill');
require('babel-runtime/core-js/promise').default = require('bluebird');
require('../api/src/index.js');
