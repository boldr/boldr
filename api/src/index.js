import http from 'http';
import app from './engine';
import models from './db/models';
const debug = require('debug')('boldr:engine');
const config = require('./core/config/config');

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = val => {
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
};
const serverConfig = config.get('server');
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(serverConfig.port);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
models.sync().then(() => { // let Sequalize automatically create tables
  server.listen(port);

  server.on('error', error => {
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
  });

  server.on('listening', () => {
    const addr = server.address();
    const bind = (
      typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`
    );
    debug(`Listening on ${bind}`);
  });
});

export default server;
