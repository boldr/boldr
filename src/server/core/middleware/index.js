import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'express-flash';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import expressJwt from 'express-jwt';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import passport from 'passport';
import config from '../config/index';
import redisClient from '../../db/redis';
import { logger } from '../../lib';

const RedisStore = require('connect-redis')(session);

export default app => {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('dev', { stream: logger.stream }));
  app.use(cors({ origin: true, credentials: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(express.static(path.resolve('public')));
  app.set('trust proxy', 'loopback');
  app.options('*', (req, res) => res.sendStatus(200));

  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(expressJwt({
    secret: config.SESSION_SECRET,
    credentialsRequired: false
  }));
  const boldrSession = session({
    store: new RedisStore({ client: redisClient }),
    secret: config.SESSION_SECRET,
    name: 'boldr:sid',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy'
  });
  app.use(boldrSession);

  app.use(passport.session());
  app.use(flash());
  app.use((req, res, next) => {
    if (!req.session) {
      return next(new Error('Lost connection to redis'));
    }
    next(); // otherwise continue
  });

  logger.log('--------------------------');
  logger.log('===> 😊  Starting Boldr . . .');
  logger.log(`===> 🌎  Environment: ${config.NODE_ENV}`);
  if (config.env === 'production') {
    logger.log('===> 🚦  Note: In order for authentication to work in production');
    logger.log('===>           you will need a secure HTTPS connection');
  }
};
