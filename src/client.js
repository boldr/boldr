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
  google: { families: ['Roboto:300,400', 'Roboto Condensed:400', 'Material Icons'] }
});

const MOUNT_POINT = document.getElementById('content');

const initialState = window.PRELOAD_STATE;
const muiTheme = getMuiTheme(BoldrTheme);
const store = createStore(browserHistory, initialState);
const { dispatch } = store;
const token = localStorage.getItem(TOKEN_KEY);

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch(checkAuth(token));
}

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.routing
});

const routes = getRoutes(store, history);

// Material-UI requires it for speeding up clicks.
injectTapEventPlugin();

let render = () => {
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
      match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (error) {
          console.log('==> React Router match failed.'); // eslint-disable-line no-console
        }
        const { components } = renderProps;
        const locals = {
          path: renderProps.location.pathname,
          query: renderProps.location.query,
          params: renderProps.params,
          dispatch
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

if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={ error } />, MOUNT_POINT);
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        renderError(error);
      }
    };

    module.hot.accept('./scenes/index', () => {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_POINT);
        render();
      });
    });
  }
}

render();
