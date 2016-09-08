import express from 'express';
import errorHandler from 'errorhandler';
import { coreMiddleware, sessionMiddleware, conf } from './core';
import DbConnection from './db/connection';
import routes from './modules/routes';
import ssr from './ssr';

// initialize the database and bind the models, before initializing express.
DbConnection.init();
const app = express();

coreMiddleware(app);
app.use(sessionMiddleware);

app.use(conf.get('api.base'), routes);

app.get('*', ssr);
app.use(errorHandler());

export default app;
