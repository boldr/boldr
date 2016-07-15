import Redis from 'ioredis';
import logger from '../core/logger';
import config from '../config/boldr';

const redisClient = new Redis({
  host: config.redis.host,
  port: config.redis.port,
  db: 2
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
  logger.info('redis has reconnecting');
});

export default redisClient;
