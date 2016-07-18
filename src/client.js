import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import match from 'react-router/lib/match';
import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
import { syncHistoryWithStore } from 'react-router-redux';
import { trigger } from 'redial';
import cookie from 'react-cookie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import useScroll from 'react-router-scroll';
import WebFontLoader from 'webfontloader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Non-vendor
import { checkTokenValidity } from 'state/modules/user';
import BoldrTheme from './styles/theme';
import createRoutes from './config/routes/index';
import createStore from './core/redux/createStore';
import ApiClient from './config/api/ApiClient';

import './styles/main.scss';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Roboto Condensed:400,300']
  }
});

const container = document.getElementById('content');
const client = new ApiClient();
const initialState = window.__INITIAL_STATE__;
const muiTheme = getMuiTheme(BoldrTheme);
const store = createStore(browserHistory, client, initialState);

const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store, history);

const token = cookie.load('boldr:jwt') || undefined;
if (token) {
  store.dispatch(checkTokenValidity());
}
// If its available, always send the token in the header.
injectTapEventPlugin();

function renderApp() {
  const { pathname, search, hash } = window.location;
  const location = `${pathname}${search}${hash}`;

  match({
    routes,
    location
  }, () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={ store } key="provider">
            <MuiThemeProvider muiTheme={ muiTheme }>
              <Router routes={ routes } history={ browserHistory }
                helpers={ client } render={ applyRouterMiddleware(useScroll()) }
              />
            </MuiThemeProvider>
          </Provider>
        </AppContainer>,
      container
    );
  });
  return browserHistory.listen(location => {
    // Match routes based on location object:
    match({
      routes,
      location
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        console.log('==> 😭  React Router match failed.'); // eslint-disable-line no-console
      }
      const { components } = renderProps;
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch: store.dispatch
      };
      // Don't fetch data for initial route, server has already done the work:
      if (window.__INITIAL_STATE__) {
        // Delete initial data so that subsequent data fetches can occur:
        delete window.__INITIAL_STATE__;
      } else {
        // Fetch mandatory data dependencies for 2nd route change onwards:
        trigger('fetch', components, locals);
      }

      // Fetch deferred, client-only data dependencies:
      trigger('defer', components, locals);
    });
  });
}
if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!container || !container.firstChild || !container.firstChild.attributes ||
    !container.firstChild.attributes['data-react-checksum']) {
    console.error(`Server-side React render was discarded. Make sure that your
      initial render does not contain any client-side code.`);
  }
}
// The following is needed so that we can hot reload our App.
if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept();
  // Any changes to our routes will cause a hotload re-render.
  module.hot.accept('./config/routes/index', renderApp);
}

renderApp();
