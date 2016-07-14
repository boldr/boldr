/* @flow */
import http from 'http';
import _debug from 'debug';
import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';

import config from './config/boldr';
import { logger } from './lib';
import authMiddleware from './auth';
import middleware from './middleware';
import routes from './api/routes';
import models from './db/models';

const debug = _debug('boldr:server');
const ENV = config.env;
// Create our express server.
const app = express();
// Create an http server and listener
const server = http.createServer(app);
// Create socket listener
const port = normalizePort(config.port);
// Get an instance of the express Router
const router = express.Router(); // eslint-disable-line

middleware(app);
authMiddleware();
routes(app, router);

if (config.env === 'development') {
  app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  }));
}

models.sync().catch(err => logger.error(err.stack)).then(() => {
  server.listen(process.env.SERVER_PORT);
  logger.info(`==> 💚  API Server listening on ${process.env.SERVER_PORT}`);
});

server.on('error', onError);
server.on('listening', onListening);


process.on('uncaughtException', err => {
  logger.error(err);
  logger.verbose(err.stack);
});

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
 * Event listener for HTTP server "error" event.
 * @param error   the error object
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port; // eslint-disable-line
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use.`);
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
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `pipe ${addr.port}`;
}
export default server;
