import 'source-map-support/register';
import http from 'http';
// Server deps
import app from './api/boldrApi';
import logger from './api/logger';
// Boldr API Deps
import conf from './api/config/config';

const debug = require('debug')('boldr:server');

const port = conf.get('api.port') || 3000;

debug('Booting Boldr API Server');
const server = http.Server(app);

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  if (error.code) {
    logger.warn(`Cannot listen for connections (${error.code}): ${error.message}`);
    throw error;
  }
  throw error;
});

server.on('listening', () => {
  const addr = server.address();
  logger.info(`🎯  Listening on port ${addr.family}/(${addr.address}):${addr.port}`);
});
server.listen(port);

module.exports = server;
