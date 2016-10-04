import session from 'express-session';
import { redisClient } from '../db';
import config from '../../../config';

const conf = config.conf;

const RedisStore = require('connect-redis')(session);

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  secret: conf.get('session.secret'),
  name: 'boldr:sid',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV !== 'development'
            && process.env.NODE_ENV !== 'test'
            && process.env.NODE_ENV !== 'travis',
    maxAge: 2419200000
  },
  unset: 'destroy'
});

export default sessionMiddleware;
