import path from 'path';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import expressJwt from 'express-jwt';
import morgan from 'morgan';
import lusca from 'lusca';
import hpp from 'hpp';
import cors from 'cors';
import compression from 'compression';
import errorHandler from 'errorhandler';
import winston from 'winston';
import uuid from 'node-uuid';
import expressWinston from 'express-winston';
import { session as dbSession } from '../../db';
import config from '../../config/boldr';

import { logger } from '../';

export default (app, io) => {
  app.set('port', config.port);

  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('dev'));
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

  const sess = {
    resave: false,
    saveUninitialized: false,
    secret: config.jwt.secret,
    proxy: true,
    name: 'boldr:sid',
    cookie: {
      httpOnly: true,
      secure: false
    },
    store: sessionStore
  };
  app.use(lusca({
    xframe: 'SAMEORIGIN',
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    },
    xssProtection: true
  }));

  if (config.env === 'development') {
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ],
      meta: true,   // optional: log meta data about request (defaults to true)
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true   // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    }));
  }
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

  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(expressJwt({
    secret: config.jwt.secret,
    credentialsRequired: false,
  /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
    getToken: req => req.cookies.boldrToken
  /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
  }));
  app.use(flash());
  app.use((req, res, next) => {
    if (!req.session) {
      return next(new Error('Lost connection to redis'));
    }
    next(); // otherwise continue
  });
  if (!config.env === 'production') {
    app.use(errorHandler());
  }

  logger.info('--------------------------');
  logger.info('===> 😊  Starting Boldr . . .');
  logger.info(`===> 🌎  Environment: ${config.env}`);
  if (config.env === 'production') {
    logger.info('===> 🚦  Note: In order for authentication to work in production');
    logger.info('===>           you will need a secure HTTPS connection');
    sess.cookie.secure = true;
  }
};
