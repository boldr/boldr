import express from 'express';
import passport from 'passport';
import errorHandler from 'errorhandler';
import { coreMiddleware, sessionMiddleware, conf } from './core';
import DbConnection from './db/connection';
import routes from './modules/routes';

// initialize the database and bind the models, before initializing express.
DbConnection.init();
const app = express();

coreMiddleware(app);
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

app.use(conf.get('api.base'), routes);

app.use(errorHandler());

export default app;
