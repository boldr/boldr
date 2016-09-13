import path from 'path';
import http from 'http';
// Server deps
import express from 'express';
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
// Boldr Deps
import createStore from './core/state/createStore';
import ApiClient from './core/api/ApiClient';
import { API_PORT, API_HOST, SSR_PORT, HOST } from './core/config';
import getRoutes from './scenes/index';
import Html from './components/atm.Html';

const debug = require('debug')('boldr:ssr-server');

const targetUrl = `http://${API_HOST}:${API_PORT}/api/v1`;
const app = new express();
const server = http.createServer(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use(compression());

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static(__dirname + '/assets'));

app.use('/api/v1', (req, res) => {
  proxy.web(req, res, { target: targetUrl });
});

proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    debug('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  const json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }
  const client = new ApiClient(req);
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const location = memoryHistory.createLocation(req.originalUrl);
  const store = createStore(memoryHistory, client);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + // eslint-disable-line
      ReactDOM.renderToString(<Html assets={ webpackIsomorphicTools.assets() } store={ store } />));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location }, (error, redirectLocation, renderProps, ...args) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const { dispatch, getState } = store;

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        helpers: client,
        dispatch,
        getState
      };

      const { components } = renderProps;

      trigger('fetch', components, locals).then(() => {
        const component = (
          <Provider store={ store } key="provider">
            <RouterContext { ...renderProps } />
          </Provider>
        );
        res.status(200);
        global.navigator = { userAgent: req.headers['user-agent'] };
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

server.listen(SSR_PORT);
console.log(`🎯   ===> Application running in ${process.env.NODE_ENV} on ${SSR_PORT}`);

export default server;
