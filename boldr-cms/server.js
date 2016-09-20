import path from 'path';
import http from 'http';
// Server deps
import express from 'express';
import httpProxy from 'http-proxy';
import PrettyError from 'pretty-error';
import compression from 'compression';
import passport from 'passport';
import errorHandler from 'errorhandler';

// React Deps
import React from 'react';
import ReactDOM from 'react-dom/server';
import match from 'react-router/lib/match';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import RouterContext from 'react-router/lib/RouterContext';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
// Boldr API Deps
import { coreMiddleware, sessionMiddleware, conf } from '../boldr-api/core';
import DbConnection from '../boldr-api/db/connection';
import routes from '../boldr-api/modules/routes';
import { monkeyPatchRouteMethods } from '../boldr-api/utils';
import Post from '../boldr-api/modules/post/post.model';
// Boldr Deps
import createStore from './core/state/createStore';
import ApiClient from './core/api/ApiClient';

import { API_PORT, API_HOST, SSR_PORT, HOST } from './core/config';
import getRoutes from './scenes/index';
import Html from './components/atm.Html';
import { postsToState } from './scenes/Blog/state/post';

const debug = require('debug')('boldr:ssr-server');

DbConnection.init();
const pretty = new PrettyError();
const app = new express();
const server = http.createServer(app);

app.use(compression());

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static(__dirname + '/assets')); // eslint-disable-line

coreMiddleware(app);
monkeyPatchRouteMethods(app);

app.use(passport.initialize());
app.use(sessionMiddleware);
app.use(passport.session());

app.use((req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    res.locals.user = !!user ? user : null;
    return next();
  })(req, res, next);
});
app.use((req, res, next) => {
  let ip = req.headers['x-forwarded-for'];
  if (ip) {
    ip = ip.split(',')[0];
    res.locals.ip = ip;
  }

  res.locals.userAgent = req.headers['user-agent'];
  res.locals.referrer = req.get('Referrer');

  next();
});

app.use(conf.get('api.base'), routes);

app.get('*', handleInitialRender);

async function handleInitialRender(req, res) {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }

  const preloadPostData = await Post
    .query()
    .eager('[tags, author]');
  const PRELOAD_STATE = {
    posts: postsToState(preloadPostData)
  };
  const client = new ApiClient(req);
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const location = memoryHistory.createLocation(req.originalUrl);
  const store = createStore(memoryHistory, client, PRELOAD_STATE);
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
      console.error('ROUTER ERROR:', pretty.render(error));
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

        res.status(200);
        global.navigator = { userAgent: req.headers['user-agent'] };
        res.send(`<!doctype html>
        ${ReactDOM.renderToString(renderHtml)}`);
      }).catch((mountError) => {
        console.error('MOUNT ERROR:', pretty.render(mountError.stack));
        return res.status(500);
      });
    } else {
      res.status(404).send('Not found');
    }
  });
}

server.listen(SSR_PORT);
console.log(`🎯   ===> Application running in ${process.env.NODE_ENV} on ${SSR_PORT}`);

export default server;
