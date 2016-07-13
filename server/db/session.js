import session from 'express-session';
import redisStore from 'connect-redis';
import redisClient from './redis';
import { db } from './sequelize';

const RedisStore = redisStore(session);

export default () =>
  new RedisStore(
    {
      client: redisClient
    }
  );
