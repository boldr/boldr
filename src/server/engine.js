import _debug from 'debug';
import errorHandler from 'errorhandler';
import express from 'express';
import Boom from 'boom';
import jwt from 'jsonwebtoken';
import routes from './api/routes';
import authRoutes from './auth/auth.router';
import models, { User } from './db/models';
import { middleware, boldrSSR } from './core';

const debug = _debug('boldr:server');
// Create our express server.
const app = express();
app.set('models', models);
// Get an instance of the express Router
debug('express middleware');
middleware(app);
app.use((req, res, next) => {
  req.isAuthenticated = function() {
    const token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.SESSION_SECRET);
    } catch (err) {
      return false;
    }
  };

  if (req.isAuthenticated()) {
    const payload = req.isAuthenticated();
    const userId = payload.sub;
    User.findById(userId)
      .then((user) => {
        req.user = user;
        next();
      });
  } else {
    next();
  }
});
debug('routes');
app.use('/api/v1', routes);
app.use('/auth', authRoutes);

// Server-side rendering
app.use(boldrSSR);

// Use Boom for 404 error handling.
app.use((req, res, next) => {
  next(Boom.notFound('Looks like you might be lost...'));
});

// Wrap other errors with Boom.
app.use((err, req, res, next) => {
  const { statusCode, payload } = Boom.wrap(err).output;
  res.status(statusCode).json(payload);
  next(err);
});
// Handle our errors.
app.use(errorHandler);

export default app;
