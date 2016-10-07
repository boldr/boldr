import Express from 'express';
import errorHandler from 'errorhandler';
import compression from 'compression';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import expressWinston from 'express-winston';
import morgan from 'morgan';
import session from 'express-session';
import redisClient from './db/redis';
import conf from './config/config';

const RedisStore = require('connect-redis')(session);

import winstonInstance from './logger';

// Boldr API Deps

import routes from './modules/routes';

const debug = require('debug')('boldr:ssr-server');

const app = Express();
const env = conf.get('env') || 'development';

app.disable('x-powered-by');
app.set('trust proxy', 'loopback');
app.use(compression());


if (env !== 'production') {
  app.use(morgan('dev'));
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true,   // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true   // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}
if (env !== 'test') {
  app.use(expressWinston.errorLogger({
    winstonInstance
  }));
}
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.options('*', (req, res) => res.sendStatus(200));

const sessionMiddleware = session({
  store: new RedisStore({ client: redisClient }),
  secret: 'asdf',
  name: 'boldr:sid',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV !== 'development'
    && process.env.NODE_ENV !== 'test'
    && process.env.NODE_ENV !== 'travis',
    maxAge: 2419200000
  },
  unset: 'destroy'
});

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    res.locals.user = !!user ? user : null;
    return next();
  })(req, res, next);
});

app.use('/api/v1', routes);

// Error handling. The `ValidionError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).json(err.data || err.message || {});
  } else {
    return next();
  }
});

app.use(errorHandler());

export default app;
