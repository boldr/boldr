import path from 'path';
import http from 'http';
// Server deps
import boldrApi from './api/boldrApi';

// Boldr API Deps
import conf from './api/config/config';

const debug = require('debug')('boldr:server');

const port = conf.get('api.port') || 3000;
// boldrApi.set('port', port);
debug('Booting Boldr API Server');
const server = http.createServer(boldrApi());
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  if (error.code) {
    console.error(`Cannot listen for connections (${error.code}): ${error.message}`);
    throw error;
  }
  throw error;
});
server.on('listening', () => {
  const addr = server.address();
  console.log(`🎯  Listening on port ${addr.family}/(${addr.address}):${addr.port}`);
});
server.listen(port);

module.exports = server;
