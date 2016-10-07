import Redis from 'ioredis';
import bluebird from 'bluebird';
import logger from '../logger';

bluebird.promisifyAll(Redis);

const host = process.env.REDIS_HOST || '127.0.0.1';
const port = process.env.REDIS_PORT || 6379;
// Prefer connection uri string
const redisConnection = process.env.REDIS_CONN_URI || `redis://${host}:${port}/1`;
const redisClient = new Redis(redisConnection);

redisClient.on('connect', () => {
  logger.info('Redis connection has been established!');
});

redisClient.on('error', err => {
  logger.error(`Error while connecting to Redis!!! ${err}`);
  process.exit(1);
});

redisClient.on('close', () => {
  logger.warn('Redis connection has been closed.');
  process.exit(1);
});

redisClient.on('reconnecting', () => {
  logger.info('Redis is attempting to re-connect');
});

redisClient.on('+node', (data) => {
  logger.info(data, 'node is connected');
});

export default redisClient;
