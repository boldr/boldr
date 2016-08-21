import http from 'http';
import Debug from 'debug';
import app from './server';

const debug = Debug('boldr:server');
const port = normalizePort(process.env.SERVER_PORT || 3000);

// Create an http server
const server = http.createServer(app);

server.listen(port);
console.log(`🎯   ===> Application running in ${process.env.NODE_ENV} on ${port}`);
server.on('error', onError);
server.on('listening', onListening);


process.on('uncaughtException', err => {
  debug(err);
  debug(err.stack);
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
      debug(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(`${bind} is already in use.`);
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
