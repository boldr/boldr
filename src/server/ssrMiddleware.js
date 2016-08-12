import React from 'react';
import match from 'react-router/lib/match';
import createHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BoldrTheme from 'core/materialTheme';
import getRoutes from '../scenes';
import createStore from '../core/state/createStore';
import render from './render';
/**
 * An express middleware that is capabable of doing React server side rendering.
 */
function ssrMiddleware(req, res) {
  if (process.env.DISABLE_SSR) {
    if (process.env.NODE_ENV === 'development') {
      console.log('==> 🐌  Handling react route without SSR');  // eslint-disable-line no-console
    }
    // SSR is disabled so we will just return an empty html page and will
    // rely on the client to populate the initial react application state.
    const html = render();
    res.status(200).send(html);
    return;
  }

  const initialState = {};
  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);
  const routes = getRoutes(store);
  // Server side handling of react-router.
  // Read more about this here:
  // https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const { dispatch } = store;
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        location: renderProps.location,
        dispatch
      };

      const { components } = renderProps;
      trigger('fetch', components, locals)
      .then(() => {
        const muiTheme = getMuiTheme(BoldrTheme, {
          userAgent: req.headers['user-agent']
        });
        const component = (
        <Provider store={ store } key="provider">
          <MuiThemeProvider muiTheme={ muiTheme }>
            <RouterContext { ...renderProps } />
          </MuiThemeProvider>
        </Provider>
        );
        const html = render(component, store);
        res.status(200).send(html);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
}

export default ssrMiddleware;
