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
import redisClient from '../db/redis';
import { logger } from '../lib';
import sessionService from './middleware/sessionService';

const RedisStore = require('connect-redis')(session);
const config = require('./config/config');

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
  const redisStore = new RedisStore({ client: redisClient });
  sessionService.initializeRedis(redisClient, redisStore);
  app.use(cookieParser(config.get('session_secret')));
  app.use(passport.initialize());
  app.use(expressJwt({
    secret: config.get('session_secret'),
    credentialsRequired: false
  }));

  const boldrSession = session({
    store: redisStore,
    secret: config.get('session_secret'),
    name: 'boldr:sid',
    resave: true,
    saveUninitialized: true,
    unset: 'destroy'
  });
  app.use(boldrSession);

  app.use(passport.session());
  app.use(flash());
  app.use((req, res, next) => {
    res.locals.user = req.user;
    if (!req.session) {
      return next(new Error('Lost connection to redis'));
    }
    next(); // otherwise continue
  });

  if (config.env === 'production') {
    logger.log('===> 🚦  Note: In order for authentication to work in production');
    logger.log('===>           you will need a secure HTTPS connection');
  }
};
