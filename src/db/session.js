import session from 'express-session';
import redisStore from 'connect-redis';
import redisClient from './redis';

const RedisStore = redisStore(session);

export default () =>
  new RedisStore(
    {
      client: redisClient
    }
  );
