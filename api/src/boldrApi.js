import path from 'path';
import http from 'http';

import express from 'express';
import compression from 'compression';
import passport from 'passport';

// Boldr API Deps
import config from '../../config';
import knex from './db/connection';
import coreMiddleware from './middleware/coreMiddleware';
import sessionMiddleware from './middleware/sessionMiddleware';
import routes from './modules/routes';
import logger from './logger';
import { monkeyPatchRouteMethods } from './utils';

const conf = config.conf;
const debug = require('debug')('boldr:ssr-server');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(conf.get('api.port'));

/**
 * Create HTTP server.
 */
const app = coreMiddleware(routes);
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`🎯   ===> API running in ${process.env.NODE_ENV} on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */
setImmediate(() => {
  server.listen(port);
})

server.on('error', onError);
server.on('listening', onListening);

export default app;
