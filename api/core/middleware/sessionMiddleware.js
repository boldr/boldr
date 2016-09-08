import session from 'express-session';
import { redisClient } from '../../db';
import conf from '../config/config';

const RedisStore = require('connect-redis')(session);

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  secret: conf.get('session.secret'),
  name: 'boldr:sid',
  resave: false,
  saveUninitialized: false,
  unset: 'destroy'
});

export default sessionMiddleware;
