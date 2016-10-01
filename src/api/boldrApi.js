import Express from 'express';
import compression from 'compression';
import passport from 'passport';

// Boldr API Deps
import handleInitialRender from '../core/handleInitialRender';
import { conf, coreMiddleware, sessionMiddleware } from './index';
import routes from './modules/routes';
import { BaseError } from './utils/errors';
import { monkeyPatchRouteMethods } from './utils';
import logger from './logger';

const debug = require('debug')('boldr:boldrApi');

function boldrServerModule() {
  const boldrApi = new Express();

  boldrApi.use(compression());

  coreMiddleware(boldrApi);
  monkeyPatchRouteMethods(boldrApi);

  boldrApi.use(passport.initialize());
  boldrApi.use(sessionMiddleware);
  boldrApi.use(passport.session());

  boldrApi.use((req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
      res.locals.user = !!user ? user : null;
      return next();
    })(req, res, next);
  });

  boldrApi.use(conf.get('api.base'), routes);
  boldrApi.use(
  '/assets/',
    Express.static('./static', { maxAge: '365d' })
);
  // Configure static serving of our "public" root http path static files.
  boldrApi.use(Express.static('static'));

  boldrApi.get('*', handleInitialRender);

  boldrApi.use((err, req, res, next) => {
    if (err instanceof BaseError) {
      res.status(err.getHttpStatus());
      res.json(err.message);
    } else {
      logger.warn(err);
      res.status(500);
      res.json('Internal Server Error');
    }
  });

  return boldrApi;
}

export default boldrServerModule;
