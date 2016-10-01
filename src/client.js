import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory, match } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import { trigger } from 'redial';
import WebFontLoader from 'webfontloader';

// Non-vendor
import { TOKEN_KEY } from './core/config';
import ApiClient from './core/api/ApiClient';
import createStore from './state/createStore';
import { checkAuth } from './state/dux/auth';

import getRoutes from './scenes';
import './styles/main.scss';

WebFontLoader.load({
  google: { families: ['Roboto:300,400', 'Material Icons'] }
});

const MOUNT_POINT = document.getElementById('content');
const client = new ApiClient();
const initialState = window.PRELOAD_STATE;

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

const renderer = () => {
  const { pathname, search, hash } = window.location;
  const location = `${pathname}${search}${hash}`;

  match({ routes, location }, () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={ store } key="provider">
            <Router routes={ routes } history={ history } key={ Math.random() } helpers={ { client } } />
        </Provider>
      </AppContainer>,
      MOUNT_POINT
    );

    return history.listen(location => {
      match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) {
          console.log('==> React Router match failed.'); // eslint-disable-line no-console
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

const unsubscribeHistory = renderer();
if (module.hot) {
  module.hot.accept('./scenes/index', () => {
    unsubscribeHistory();
    setTimeout(render);
  });
}
