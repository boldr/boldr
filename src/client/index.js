/* @flow */
/* eslint-disable global-require */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import WebFontLoader from 'webfontloader';

import AppRoot from '../shared/components/AppRoot';
import App from '../shared/components/App';
import configureStore from '../shared/state/store';
import { checkAuth } from '../shared/state/modules/auth/actions';
import { getToken } from '../shared/core/authentication/token';

WebFontLoader.load({
  google: { families: ['Roboto:200,400,600', 'Material Icons'] },
});
// Get the DOM Element that will host our React application.
const domNode = document.getElementById('app');

const history = createHistory();
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState, history);

const { dispatch } = store;

const token = getToken();
if (token) {
  // Update application state. User has token and is probably authenticated
  dispatch(checkAuth(token));
}

const renderApp = () => {
  const App = require('../shared/scenes/App').default;
  render(
    <AppRoot store={ store }>
      <ConnectedRouter history={ history }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectedRouter>
    </AppRoot>,
    domNode,
  );
};

if (process.env.NODE_ENV !== 'production') {
  window.React = React;
}

if (process.env.NODE_ENV === 'production') {
  // This registers our service worker for asset caching and offline support.
  // Keep this as the last item, just in case the code execution failed (thanks
  // to react-boilerplate for that tip.)
  require('./registerServiceWorker');
}
if (module.hot) {
  const reRenderApp = () => {
    try {
      renderApp();
    } catch (error) {
      const RedBox = require('redbox-react').default;

      render(<RedBox error={ error } />, domNode);
    }
  };
  module.hot.accept('../shared/scenes/App', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(domNode);
      reRenderApp();
    });
  });
}
renderApp();
