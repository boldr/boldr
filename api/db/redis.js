import Redis from 'ioredis';
import bluebird from 'bluebird';
import { logger, conf } from '../core';

bluebird.promisifyAll(Redis);

const redisClient = new Redis('redis://127.0.0.1:6379/4');

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
