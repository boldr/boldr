import Express from 'express';
import compression from 'compression';
import passport from 'passport';

// Boldr API Deps
import handleInitialRender from '../core/handleInitialRender';
import { conf, coreMiddleware, sessionMiddleware } from './index';
import routes from './modules/routes';
import { BaseError } from './utils/errors';
import { monkeyPatchRouteMethods } from './utils';
import logger from './logger';

const debug = require('debug')('boldr:app');
const app = Express();

app.use(compression());

coreMiddleware(app);
monkeyPatchRouteMethods(app);

app.use(passport.initialize());
app.use(sessionMiddleware);
app.use(passport.session());

app.use((req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    res.locals.user = !!user ? user : null;
    return next();
  })(req, res, next);
});

app.use(conf.get('api.base'), routes);
app.use(
  '/assets/',
    Express.static('./static', { maxAge: '365d' })
);
  // Configure static serving of our "public" root http path static files.
app.use(Express.static('static'));

app.get('*', handleInitialRender);

app.use((err, req, res, next) => {
  if (err instanceof BaseError) {
    res.status(err.getHttpStatus());
    res.json(err.message);
  } else {
    logger.warn(err);
    res.status(500);
    res.json('Internal Server Error');
  }
});
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

module.exports = exports = app;
