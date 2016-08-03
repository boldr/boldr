import http from 'http';
import app from './server';

const debug = require('debug')('boldr:serverSSR');
/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
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

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.SSR_PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
function runServer() { // let Sequalize automatically create tables
  server.listen(port);
  server.on('error', (error) => {
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
    if (process.send) process.send('online');
    debug(`Listening on ${bind}`);

    console.log('--------------------------');
    console.log('===> 😊  Starting Boldr SSR. . .');
    console.log(`===> 🌎  Listening on ${process.env.SSR_PORT} with environment: ${process.env.NODE_ENV}`);
  });
}

runServer();

export default server;
