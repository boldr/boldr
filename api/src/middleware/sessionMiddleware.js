import session from 'express-session';
import { redisClient } from '../db';

const RedisStore = require('connect-redis')(session);

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
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
