import express from 'express';
import compression from 'compression';
import passport from 'passport';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import expressWinston from 'express-winston';
import cors from 'cors';
import morgan from 'morgan';
import config from '../../../config';

import { monkeyPatchRouteMethods } from '../utils';
import winstonInstance from '../logger';
import sessionMiddleware from './sessionMiddleware';
const conf = config.conf;

export default function(app) {
  const env = app.get('env');
  app.disable('x-powered-by');
  app.set('trust proxy', 'loopback');
  app.use(compression());

  if (env !== 'production') {
    app.use(morgan('dev'));
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
      winstonInstance,
      meta: true, 	// optional: log meta data about request (defaults to true)
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true 	// Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    }));
  }
  if (env !== 'test') {
    app.use(expressWinston.errorLogger({
      winstonInstance
    }));
  }

  app.use(cors({ origin: true, credentials: true }));

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.options('*', (req, res) => res.sendStatus(200));
  app.use(passport.initialize());
  app.use(sessionMiddleware);
  app.use(passport.session());

  app.use((req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      res.locals.user = !!user ? user : null;
      return next();
    })(req, res, next);
  });
}
