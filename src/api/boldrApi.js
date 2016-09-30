import path from 'path';
import http from 'http';
// Server deps
import express from 'express';
import compression from 'compression';
import passport from 'passport';

// Boldr API Deps
import getRoutes from '../scenes/index';
import handleInitialRender from '../core/handleInitialRender';
import { conf, knex, coreMiddleware, sessionMiddleware } from './index';
import routes from './modules/routes';
import { monkeyPatchRouteMethods } from './utils';


const debug = require('debug')('boldr:ssr-server');
const sourceMaps = require('source-map-support');

sourceMaps.install();
module.exports = function boldrServerModule() {
  const boldrApi = express();

  const port = conf.get('api.port') || 3000;

  boldrApi.use(compression());

  coreMiddleware(boldrApi);
  monkeyPatchRouteMethods(boldrApi);

  boldrApi.use(passport.initialize());
  boldrApi.use(sessionMiddleware);
  boldrApi.use(passport.session());

  boldrApi.use((req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      res.locals.user = !!user ? user : null;
      return next();
    })(req, res, next);
  });

  boldrApi.use(conf.get('api.base'), routes);
  boldrApi.use(
  '/assets/',
  express.static('./static', { maxAge: '365d' })
);

// Configure static serving of our "public" root http path static files.
  boldrApi.use(express.static('static'));

  boldrApi.get('*', handleInitialRender);
  return boldrApi;
};
