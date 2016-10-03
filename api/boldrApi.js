import path from 'path';
import http from 'http';

import express from 'express';
import compression from 'compression';
import passport from 'passport';

// Boldr API Deps
import conf from './config/config';
import knex from './db/connection';
import coreMiddleware from './middleware/coreMiddleware';
import sessionMiddleware from './middleware/sessionMiddleware';
import routes from './modules/routes';
import { monkeyPatchRouteMethods } from './utils';

const debug = require('debug')('boldr:ssr-server');

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 'loopback');
app.use(compression());

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

app.use(conf.get('api.base'), routes);

export default app;
