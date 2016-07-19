import _debug from 'debug';
import errorHandler from 'errorhandler';
import express from 'express';
import {
  middleware, boldrSSR, logger, serverError
} from './core';
import config from './config/boldr';
import authMiddleware from './auth';
import routes from './api/routes';
import models from './db/models';

const debug = _debug('boldr:server');
// Create our express server.
const app = express();
app.set('models', models);
// Get an instance of the express Router
const router = express.Router(); // eslint-disable-line
debug('express middleware');
middleware(app);
debug('auth middleware');
authMiddleware();
debug('routes');
app.use('/api/v1', routes);

// Server-side rendering
app.use(boldrSSR);
// Handle our errors.
app.use(errorHandler);
export default app;
