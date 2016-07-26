import _debug from 'debug';
import errorHandler from 'errorhandler';
import express from 'express';
import Boom from 'boom';

import models from './db/models';
import routes from './api/routes';
import authRoutes from './auth';
import { webserver } from './core';

const debug = _debug('boldr:server');
// Create our express server.
const app = express();
app.set('models', models);
debug('express middleware');
webserver(app);

debug('routes');
app.use('/api/v1', routes);
app.use('/auth', authRoutes);

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
