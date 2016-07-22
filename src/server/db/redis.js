import Redis from 'redis';
import bluebird from 'bluebird';
import logger from '../lib/logger';
import config from '../core/config';

bluebird.promisifyAll(Redis.RedisClient.prototype);

const redisClient = Redis.createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT,
  ttl: 260,
  db: 8
});

redisClient.on('connect', () => {
  logger.info('redis has connected');
});

redisClient.on('error', err => {
  logger.error(err);
  process.exit(1);
});

redisClient.on('close', () => {
  logger.warn('redis has closed.');
  process.exit(1);
});

redisClient.on('reconnecting', () => {
  logger.info('redis is reconnecting');
});

export default redisClient;
