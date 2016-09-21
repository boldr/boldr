import path from 'path';
import http from 'http';
// Server deps
import express from 'express';
import compression from 'compression';
import passport from 'passport';
import errorHandler from 'errorhandler';

// Boldr API Deps
import { coreMiddleware, sessionMiddleware } from './api';

import DbConnection from './api/db/connection';
import routes from './api/modules/routes';
import { monkeyPatchRouteMethods } from './api/utils';
import conf from './api/config/config';
import { API_PORT, API_HOST, SSR_PORT, HOST } from './core/config';
import getRoutes from './scenes/index';
import handleInitialRender from './core/handleInitialRender';

const debug = require('debug')('boldr:ssr-server');
const sourceMaps = require('source-map-support');

sourceMaps.install();
DbConnection.init();

const app = new express();
const server = http.createServer(app);

app.use(compression());

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static(__dirname + '/assets')); // eslint-disable-line
app.use(express.static(path.join(__dirname, '..', 'static')));

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

server.listen(SSR_PORT);
console.log(`🎯   ===> Application running in ${process.env.NODE_ENV} on ${SSR_PORT}`);

export default server;
