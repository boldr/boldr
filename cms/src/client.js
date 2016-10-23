import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import { trigger } from 'redial';
import WebFontLoader from 'webfontloader';

// Non-vendor
import { TOKEN_KEY } from './core';
import ReactHotLoader from './components/ReactHotLoader';
import ApiClient from './core/services/ApiClient';
import createStore from './state/createStore';
import { checkAuth } from './state/dux/auth';

import getRoutes from './scenes';
import './styles/main.scss';

WebFontLoader.load({
  google: { families: ['Roboto:300,400', 'Material Icons'] }
});

const MOUNT_POINT = document.getElementById('content');
const client = new ApiClient();
const initialState = window.PRELOAD_STATE || {};

const store = createStore(browserHistory, client, initialState);
const { dispatch, getState } = store;
const token = localStorage.getItem(TOKEN_KEY);

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch(checkAuth(token));
}

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.routing
});

const routes = getRoutes(store, history);

const renderBoldr = () => {
  const { pathname, search, hash } = window.location;
  const location = `${pathname}${search}${hash}`;

  match({ routes, location }, () => {
    ReactDOM.render(
      <ReactHotLoader>
        <Provider store={ store } key="provider">
            <Router routes={ routes } history={ history } key={ Math.random() } helpers={ { client } } />
        </Provider>
      </ReactHotLoader>,
      MOUNT_POINT
    );

    return history.listen(location => {
      match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) {
          console.log('Router matching failed.'); // eslint-disable-line no-console
        }
        const { components } = renderProps;
        const locals = {
          path: renderProps.location.pathname,
          query: renderProps.location.query,
          params: renderProps.params,
          dispatch,
          getState
        };
        if (window.PRELOAD_STATE) {
          delete window.PRELOAD_STATE;
        } else {
          trigger('fetch', components, locals);
        }
        trigger('defer', components, locals);
      });
    });
  });
};
if (module.hot) {
  const reRenderBoldr = () => {
    try {
      renderBoldr();
    } catch (error) {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={ error } />, MOUNT_POINT);
    }
  };

  module.hot.accept('./scenes', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(MOUNT_POINT);
      reRenderBoldr();
    });
  });
}
renderBoldr();
