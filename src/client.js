import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory, match } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import { trigger } from 'redial';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import WebFontLoader from 'webfontloader';

// Non-vendor
import BoldrTheme from './core/materialTheme';
import { TOKEN_KEY } from './core/config';
import createStore from './core/state/createStore';
import { checkAuth } from './scenes/Account/state/auth';
import getRoutes from './scenes';

import './styles/main.scss';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Roboto Condensed:400,300']
  }
});

const MOUNT_POINT = document.getElementById('content');

const initialState = window.__data;
const muiTheme = getMuiTheme(BoldrTheme);
const store = createStore(browserHistory, initialState);
const { dispatch } = store;
const token = localStorage.getItem(TOKEN_KEY);

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch(checkAuth(token));
}

const history = syncHistoryWithStore(browserHistory, store);
const routes = getRoutes(store, history);

injectTapEventPlugin();

const render = () => {
  const { pathname, search, hash } = window.location;
  const location = `${pathname}${search}${hash}`;

  match({ routes, location }, () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={ store } key="provider">
          <MuiThemeProvider muiTheme={ muiTheme }>
            <Router routes={ routes } history={ history } key={ Math.random() } />
          </MuiThemeProvider>
        </Provider>
      </AppContainer>,
      MOUNT_POINT
    );

    return history.listen(location => {
      // Match routes based on location object
      match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) {
          console.log('==> 😭  React Router match failed.'); // eslint-disable-line no-console
        }
        // Get array of route handler components:
        const { components } = renderProps;
         // Define locals to be provided to all lifecycle hooks:
        const locals = {
          path: renderProps.location.pathname,
          query: renderProps.location.query,
          params: renderProps.params,
          dispatch
        };
        // Don't fetch data for initial route, server has already done the work:
        if (window.__data) {
          // Delete initial data so that subsequent data fetches can occur:
          delete window.__data;
        } else {
          // Fetch mandatory data dependencies for 2nd route change onwards:
          trigger('fetch', components, locals);
        }
        // Fetch deferred, client-only data dependencies:
        trigger('defer', components, locals);
      });
    });
  });
};

const unsubscribeHistory = render();

if (module.hot) {
  module.hot.accept('./scenes/index', () => {
    unsubscribeHistory();
    setTimeout(render);
  });
}
