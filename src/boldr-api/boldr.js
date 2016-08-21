import _debug from 'debug';
import express from 'express';
import routes from './api/routes';
import config from './core/config';
import { webserver, errorHandling } from './core';

const debug = _debug('boldr:server');
// Create our express server.
const app = express();

debug('express middleware');
webserver(app);

debug('routes');
app.use(config.api.base, routes);

errorHandling(app);

export default app;
