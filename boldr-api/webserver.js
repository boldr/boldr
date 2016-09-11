import http from 'http';
import app from './engine';
import { logger } from './core';
import conf from './core/config/config';

const sourceMaps = require('source-map-support');

sourceMaps.install();

const debug = require('debug')('boldr:engine');
const dotenv = require('dotenv');

dotenv.config({ silent: true });
// Set the environment on app and make it available throughout.
const env = conf.get('env');
app.set('env', env);

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(conf.get('api.port'));
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.on('listening', onListening);
server.on('error', onError);


async function startServer() {
  const configValues = await conf.getProperties();
  debug(configValues);
  server.listen(port);
  logger.info(`🌎  ==> Boldr API is running on ${conf.get('api.port')} in ${env} mode.`);
}
/**
 * Listen on provided port, on all network interfaces.
 */
// models.sync().then(startServer);
startServer();
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = (
    typeof port === 'string'
      ? `Pipe ${port}`
      : `Port ${conf.get('api.port')}`
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
