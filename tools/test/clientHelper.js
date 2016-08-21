import jsdom from 'jsdom';
import chai from 'chai';

require.extensions['.jpg'] = noop => noop;
require.extensions['.jpeg'] = noop => noop;
require.extensions['.png'] = noop => noop;
require.extensions['.gif'] = noop => noop;

require('babel-register');
require('babel-polyfill');

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = document.defaultView;
global.navigator = window.navigator;
global.React = require('react');
global.expect = require('chai').expect;
global.createTest = require('./enzymeHook').default;
