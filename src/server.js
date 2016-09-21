import path from 'path';
import http from 'http';
// Server deps
import express from 'express';
import compression from 'compression';
import passport from 'passport';
import errorHandler from 'errorhandler';
import SocketIO from 'socket.io';
import adapter from 'socket.io-redis';
import { subClient, pubClient } from './api/db/redis';

// Boldr API Deps
import { coreMiddleware, sessionMiddleware } from './api';
import socketHandler from './api/middleware/socketHandler';
import DbConnection from './api/db/connection';
import routes from './api/modules/routes';
import { monkeyPatchRouteMethods } from './api/utils';
import conf from './api/config/config';
import { API_PORT, API_HOST, SSR_PORT, HOST } from './core/config';
import getRoutes from './scenes/index';
import handleInitialRender from './core/handleInitialRender';

const debug = require('debug')('boldr:ssr-server');
const sourceMaps = require('source-map-support');

sourceMaps.install();
DbConnection.init();

const app = new express();
const server = http.createServer(app);
const io = new SocketIO(server);
app.use(compression());

app.use(express.static(path.join(__dirname, 'assets')));
app.use('/assets', express.static(__dirname + '/assets')); // eslint-disable-line
app.use(express.static(path.join(__dirname, '..', 'static')));

coreMiddleware(app);
monkeyPatchRouteMethods(app);

app.use(passport.initialize());
app.use(sessionMiddleware);
app.use(passport.session());

app.use((req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    res.locals.user = !!user ? user : null;
    return next();
  })(req, res, next);
});
app.use((req, res, next) => {
  let ip = req.headers['x-forwarded-for'];
  if (ip) {
    ip = ip.split(',')[0];
    res.locals.ip = ip;
  }

  res.locals.userAgent = req.headers['user-agent'];
  res.locals.referrer = req.get('Referrer');

  next();
});
io.set('transports', ['websocket']);

io.adapter(adapter({ pubClient, subClient }));
io.use((socket, next) => {
    // Wrap the express middleware
  sessionMiddleware(socket.request, {}, next);
});
socketHandler(io);

app.use(conf.get('api.base'), routes);

app.get('*', handleInitialRender);

const bufferSize = 100;
const messageBuffer = new Array(bufferSize);
let messageIndex = 0;

if (SSR_PORT) {
  io.on('connection', (socket) => {
    socket.emit('news', { msg: 'socket connected' });
    socket.join('/');
    socket.on('history', () => {
      for (let index = 0; index < bufferSize; index++) {
        const msgNo = (messageIndex + index) % bufferSize;
        const msg = messageBuffer[msgNo];
        if (msg) {
          socket.emit('msg', msg);
        }
      }
    });

    socket.on('msg', (data) => {
      data.id = messageIndex;
      messageBuffer[messageIndex % bufferSize] = data;
      messageIndex++;
      io.emit('msg', data);
    });
  });

  server.listen(SSR_PORT);
  console.log(`🎯   ===> Application running in ${process.env.NODE_ENV} on ${SSR_PORT}`);
} else {
  console.log('You need to specify a port in the configuration.');
}


export default server;
