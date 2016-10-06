import path from 'path';
import http from 'http';

import express from 'express';
import errorHandler from 'errorhandler';
// Boldr API Deps
import config from '../../config';
import knex from './db/connection';
import coreMiddleware from './middleware/coreMiddleware';
import sessionMiddleware from './middleware/sessionMiddleware';
import routes from './modules/routes';
import logger from './logger';
import { monkeyPatchRouteMethods } from './utils';

const conf = config.conf;
const debug = require('debug')('boldr:ssr-server');

const app = express();

require('./middleware/coreMiddleware').default(app);

app.use(conf.get('api.base'), routes);
monkeyPatchRouteMethods(app);
app.use(errorHandler());

export default app;
