import Redis from 'redis';
import bluebird from 'bluebird';
import logger from '../lib/logger';

const config = require('../core/config/config');

const redisCfg = config.get('redis');

bluebird.promisifyAll(Redis.RedisClient.prototype);

const redisConnection = {
  host: redisCfg.host,
  port: redisCfg.port,
  ttl: 260,
  db: redisCfg.database
};

const redisUrl = redisCfg.url;

const redisClient = Redis.createClient(redisConnection);

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
