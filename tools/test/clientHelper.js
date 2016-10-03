import jsdom from 'jsdom';

function noop() {
  return null;
}
require.extensions['.jpg'] = noop => noop;
require.extensions['.jpeg'] = noop => noop;
require.extensions['.png'] = noop => noop;
require.extensions['.gif'] = noop => noop;

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = document.defaultView;
global.navigator = window.navigator;
global.React = require('react');
global.createTest = require('./enzymeHook').default;
