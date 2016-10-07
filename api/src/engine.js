import http from 'http';
import https from 'https';
import conf from './config/config';
import logger from './logger';
import app from './app';

const debug = require('debug')('boldr:engine');

const env = process.env.NODE_ENV || 'development';
const port = normalizePort(conf.get('api.port'));

app.set('port', port);

const server = http.createServer(app);
server.on('listening', onListening);
server.on('error', onError);

function startServer() {
  server.listen(port);
  logger.info(`🌎  ==> API is running on ${port} in ${env} mode.`);
}
/**
 * Listen on provided port, on all network interfaces.
 */

setImmediate(startServer);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = (
    typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${port}`
  );

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = (
    typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr.port}`
  );
  debug(`Listening on ${bind}`);
}

/**
 * Normalize a port into a number, string, or false.
 * @param {Number|String} val
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

export default server;
