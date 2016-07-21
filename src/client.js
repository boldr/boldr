/** @namespace window.__data */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// noinspection JSUnresolvedVariable
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory, match, applyRouterMiddleware } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
// noinspection JSUnresolvedVariable
import { trigger } from 'redial';
import cookie from 'react-cookie';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import useScroll from 'react-router-scroll';
import WebFontLoader from 'webfontloader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Non-vendor

import BoldrTheme from './styles/theme';
import createStore from './core/state/createStore';
import getRoutes from './scenes';
import ApiClient from './core/api/ApiClient';

import './styles/main.scss';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Roboto Condensed:400,300']
  }
});

const container = document.querySelector('#content');
const client = new ApiClient();
const initialState = window.__data;
const muiTheme = getMuiTheme(BoldrTheme);
const store = createStore(browserHistory, client, initialState);

const history = syncHistoryWithStore(browserHistory, store);
const routes = getRoutes(store, history);

// const token = cookie.load('boldrToken') || undefined;
// if (token) {
//   store.dispatch(checkTokenValidity());
// }
// If its available, always send the token in the header.
injectTapEventPlugin();

history.listen(location => {
  match({ routes, location }, (error, redirectLocation, renderProps) => {
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

function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store } key="provider">
        <MuiThemeProvider muiTheme={ muiTheme }>
          <Router routes={ routes } history={ history } helpers={ client } render={ applyRouterMiddleware(useScroll()) } />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    container
  );
}
// The following is needed so that we can hot reload our App.
if (process.env.NODE_ENV === 'development' && module.hot) {
  window.React = React; // enable debugger

  if (!container || !container.firstChild || !container.firstChild.attributes ||
    !container.firstChild.attributes['data-react-checksum']) {
    console.error(`Server-side React render was discarded. Make sure that your
      initial render does not contain any client-side code.`);
  }
  // Accept changes to this file for hot reloading.
  module.hot.accept();
  // Any changes to our routes will cause a hotload re-render.
  module.hot.accept('./scenes/index', renderApp);
}

renderApp();
