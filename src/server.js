import http from 'http';
import _debug from 'debug';
import express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';
import match from 'react-router/lib/match';
import createHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BoldrTheme from './styles/theme';
import createStore from './core/redux/createStore';
import ApiClient from './config/api/ApiClient';
import Html from './components/tpl.Html';

import getRoutes from './config/routes';

import config from './config/boldr';
import { logger, serverError, errorHandler, responseHandler } from './core';
import authMiddleware from './auth';
import middleware from './core/middleware';
import routes from './api/routes';
import models from './db/models';

const debug = _debug('boldr:server');
// Create our express server.
const app = express();
// Create an http server and listener
const server = http.createServer(app);
// Create socket listener
const port = normalizePort(config.port);
// Get an instance of the express Router
const router = express.Router(); // eslint-disable-line
debug('express middleware');
middleware(app);
debug('auth middleware');
authMiddleware();
debug('routes');
app.use('/api/v1', routes);
app.use(responseHandler());

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }
  const initialState = {
    user: {
      token: req.cookies.boldrToken
    }
  };


  const client = new ApiClient(req);
  const memoryHistory = createHistory(req.originalUrl);
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

  match({
    history,
    routes: getRoutes(store, client),
    location: req.originalUrl
  }, (error, redirectLocation, renderProps, ...args) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      logger.error('ROUTER ERROR:', error);
      res.status(500);
      hydrateOnClient();
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
        debug(req.user, '------- is req.user');
        res.status(200);
        res.send('<!doctype html>\n' + // eslint-disable-line
          ReactDOM.renderToString(
            <Html assets={ webpackIsomorphicTools.assets() } component={ component } store={ store } />
          ));
      }).catch((mountError) => {
        logger.error('Application crash!');
        logger.error(mountError.message);
        debug(mountError.stack);
        return serverError();
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});
app.use(errorHandler());
models.sync().catch(err => logger.error(err.stack)).then(() => {
  server.listen(process.env.SERVER_PORT);
  logger.info(`==> 💚  API Server listening on ${process.env.SERVER_PORT}`);
});

server.on('error', onError);
server.on('listening', onListening);


process.on('uncaughtException', err => {
  logger.error(err);
  logger.verbose(err.stack);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param error   the error object
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // eslint-disable-line
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `pipe ${addr.port}`;
}
export default { app };
exports = module.exports = server;
