import path from 'path';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import expressJwt from 'express-jwt';
import hpp from 'hpp';
import cors from 'cors';
import compression from 'compression';
import { session as dbSession } from '../../db';
import config from '../../config/boldr';

import { logger } from '../';

export default (app, io) => {
  app.set('port', config.port);

  app.disable('x-powered-by');
  app.use(compression());
  app.use(cookieParser());
  app.use(hpp());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(express.static(path.join(__dirname, '..', '..', '..', '..', 'static')));
  app.set('trust proxy', 'loopback');
  app.options('*', (req, res) => res.sendStatus(200));
  const sessionStore = dbSession();

  const sessionOpts = {
    secret: config.jwt.secret,
    resave: true,
    saveUninitialized: false,
    proxy: true,
    name: 'boldrToken',
    cookie: {
      httpOnly: true,
      secure: false
    },
    store: sessionStore
  };

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

  app.use(session(sessionOpts));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(expressJwt({
    secret: config.jwt.secret,
    credentialsRequired: false,
    getToken: req => req.cookies.boldrToken
  }));
  app.use(flash());
  app.use((req, res, next) => {
    if (!req.session) {
      return next(new Error('Lost connection to redis'));
    }
    next(); // otherwise continue
  });

  logger.info('--------------------------');
  logger.info('===> 😊  Starting Boldr . . .');
  logger.info(`===> 🌎  Environment: ${config.env}`);
  if (config.env === 'production') {
    logger.info('===> 🚦  Note: In order for authentication to work in production');
    logger.info('===>           you will need a secure HTTPS connection');
    sessionOpts.cookie.secure = true;
  }
};
