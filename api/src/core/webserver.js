import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'express-flash';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import expressJwt from 'express-jwt';
import cors from 'cors';
import lusca from 'lusca';
import morgan from 'morgan';
import compression from 'compression';
import passport from 'passport';
import redisClient from '../db/redis';
import { logger } from '../lib';
import sessionService from './middleware/sessionService';

const RedisStore = require('connect-redis')(session);
const config = require('./config/boldr');

export default app => {
  const env = app.get('env');
  app.disable('x-powered-by');
  app.set('trust proxy', 'loopback');
  app.use(compression());

  if (env !== 'production') {
    app.use(morgan('dev', { stream: logger.stream }));
  }

  app.use(cors({ origin: true, credentials: true }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(express.static(path.resolve('public')));

  app.options('*', (req, res) => res.sendStatus(200));

  app.use(cookieParser(config.session.secret));

  app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: config.session.secret,
    name: 'boldr:sid',
    resave: false,
    saveUninitialized: false,
    unset: 'destroy'
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  if (env !== 'test') {
    app.use(lusca({
      xframe: 'SAMEORIGIN',
      hsts: {
        maxAge: 31536000, // 1 year, in seconds
        includeSubDomains: true,
        preload: true
      },
      xssProtection: true
    }));
  }
};
