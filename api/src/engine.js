import _debug from 'debug';
import express from 'express';
import authRoutes from './api/auth';
import models from './db/models';
import routes from './api/routes';
import { webserver, errorHandling } from './core';

const debug = _debug('boldr:server');
// Create our express server.
const app = express();
app.set('models', models);
debug('express middleware');
webserver(app);

debug('routes');
app.use('/api/v1', routes);
app.use('/api/v1/auth', authRoutes);

errorHandling(app);

export default app;
