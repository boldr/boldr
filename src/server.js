import path from 'path';
import http from 'http';
import dotenv from 'dotenv';
import Express from 'express';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import compression from 'compression';
import httpProxy from 'http-proxy';
import PrettyError from 'pretty-error';

import React from 'react';
import ReactDOM from 'react-dom/server';
import match from 'react-router/lib/match';
import createHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import cookie from 'react-cookie';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BoldrTheme from './styles/theme';
import createStore from './utils-redux/createStore';
import ApiClient from './config-api/ApiClient';
import Html from './components/tpl.Html';

import getRoutes from './config-routes';
import config from './config'; // eslint-disable-line

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
dotenv.config();
const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort; // eslint-disable-line
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: false
});
app.use(cookieParser(process.env.JWT_SECRET));
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.all('/*', (req, res, next) => {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept');
  // If someone calls with method OPTIONS, let's display the allowed methods on our API
  if (req.method === 'OPTIONS') {
    res.status(200);
    res.write('Allow: GET,PUT,POST,DELETE,OPTIONS');
    res.end();
  } else {
    next();
  }
});
app.use(Express.static(path.join(__dirname, '..', 'static')));

app.use('/api', (req, res) => {
  proxy.web(req, res, {
    target: targetUrl
  });
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  let json;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {
      'content-type': 'application/json'
    });
  }

  json = {
    error: 'proxy_error',
    reason: error.message
  }; // eslint-disable-line
  res.end(JSON.stringify(json));
});
app.use((req, res) => {
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }

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
    routes: getRoutes(store),
    location: req.originalUrl
  }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const { dispatch } = store;

      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        location: renderProps.location,
        store,
        helpers: {
          client
        },
        dispatch
      };

      const { components } = renderProps;
      trigger('fetch', components, locals).then(() => {
        const initialState = store.getState();
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
        console.error('Application crash!');
        console.error(mountError.message);
        console.error(mountError.stack);
        res.status(500).send('Server error! Please check the logs');
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
