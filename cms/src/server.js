import 'source-map-support/register';
// Express
import http from 'http';
import path from 'path';
import Express from 'express';
import httpProxy from 'http-proxy';
import compression from 'compression';
// React
import React from 'react';
import ReactDOM from 'react-dom/server';
import match from 'react-router/lib/match';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
// App deps
import createStore from './state/createStore';
import getRoutes from './scenes/index';
import Html from './components/Html';
import ApiClient from './core/api/ApiClient';

const debug = require('debug')('boldr:server');

const port = process.env.SSR_PORT || 3000;

const API_PORT = process.env.API_PORT || 2121;
const API_HOST = process.env.API_HOST || 'localhost';

debug('Booting Boldr CMS SSR');

const proxyTo = `http://${API_HOST}:${API_PORT}`;
const app = new Express();
const server = http.Server(app);

const proxy = httpProxy.createProxyServer({
  target: proxyTo
});

app.use(compression());
app.use('/api/v1', (req, res) => {
  proxy.web(req, res, { target: `${proxyTo}/api/v1` });
});

// server.on('upgrade', (req, socket, head) => {
//   proxy.ws(req, socket, head);
// });

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

app.use(
  '/assets/',
  Express.static('static', { maxAge: '365d' })
);
app.use(Express.static(path.join(__dirname, '../static')));
// Configure static serving of our "public" root http path static files.
app.use(Express.static('static'));
app.use(async (req, res) => {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }
  const client = new ApiClient(req);
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const location = memoryHistory.createLocation(req.originalUrl);
  const store = createStore(memoryHistory, client);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(`<!doctype html>
      ${ReactDOM.renderToString(<Html assets={ webpackIsomorphicTools.assets() } store={ store } />)}`);
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      debug(`ROUTER ERROR: ${error}`);
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

        const renderHtml = <Html assets={ webpackIsomorphicTools.assets() } component={ component } store={ store } />;

        global.navigator = { userAgent: req.headers['user-agent'] };
        res.status(200).send(`<!doctype html>
        ${ReactDOM.renderToString(renderHtml)}`);
      }).catch((mountError) => {
        debug(`MOUNT ERROR: ${mountError.stack}`);
        return res.status(500);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  if (error.code) {
    debug(`Cannot listen for connections (${error.code}): ${error.message}`);
    throw error;
  }
  throw error;
});

server.on('listening', () => {
  const addr = server.address();
  console.info(`🎯  Listening on port ${addr.family}/(${addr.address}):${addr.port}`);
});
server.listen(port);
