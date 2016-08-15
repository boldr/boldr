import path from 'path';
import Express from 'express';
import httpProxy from 'http-proxy';
import compression from 'compression';
// React Deps
import React from 'react';
import ReactDOM from 'react-dom/server';
import match from 'react-router/lib/match';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BoldrTheme from '../core/materialTheme';
import createStore from '../core/state/createStore';
import getRoutes from '../scenes/index';
import Html from './Html';

// Create our express server.
const app = Express();
const publicPath = path.resolve('public');

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:9121',
  changeOrigin: true
});

app.use('/api/v1/*', (req, res) => {
  const url = `http://localhost:9121${req.originalUrl}`;
  debug(`${req.method} PROXY to ${url}`);
  proxy.web(req, res, { target: url }); // eslint-disable-line
});

app.use(compression());
app.use(Express.static(publicPath));

app.use((req, res) => {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const location = memoryHistory.createLocation(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + // eslint-disable-line
      ReactDOM.renderToString(<Html assets={ webpackIsomorphicTools.assets() } store={ store } />));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({
    history,
    routes: getRoutes(store),
    location
  }, (error, redirectLocation, renderProps, ...args) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const { dispatch } = store;

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch
      };

      const { components } = renderProps;

      trigger('fetch', components, locals).then(() => {

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
        res.status(200);

        res.send('<!doctype html>\n' + // eslint-disable-line
          ReactDOM.renderToString(
            <Html assets={ webpackIsomorphicTools.assets() } component={ component } store={ store } />
          ));
      }).catch((mountError) => {
        console.log(mountError.stack);
        return res.status(500);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

export default app;
