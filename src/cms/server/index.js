/* @flow */
/* eslint-disable no-console */
/* eslint-disable no-duplicate-imports */

// This grants us source map support, which combined with our webpack source
// maps will give us nice stack traces.
import 'source-map-support/register';
import path from 'path';
import appRoot from 'app-root-path';
import express from 'express';
import type { $Request, $Response, NextFunction } from 'express';
import shrinkRay from 'shrink-ray';
import hpp from 'hpp';

import httpProxy from 'http-proxy';
import { notEmpty } from '../common/core/utils/guards';
import universalMiddleware from './middleware/universalMiddleware';

// these values are to inform the proxy, which is running here, where our backend
// api is located.
const API_PORT = 2121;
const API_HOST = process.env.API_HOST || 'localhost';

const appRootPath = appRoot.toString();
const proxyTo = `http://${API_HOST}:${API_PORT}`;
// Create our Express server.
const app = express();

const proxy = httpProxy.createProxyServer({
  target: proxyTo
});

// Don't expose any software information to hackers.
app.disable('x-powered-by');

// Prevent HTTP Parameter pollution.
app.use(hpp());

// Response compression.
app.use(shrinkRay());
app.use('/api/v1', (req: $Request, res: $Response) => {
  proxy.web(req, res, { target: `${proxyTo}/api/v1` });
});
proxy.on('error', (err: Object, req: $Request, res: $Response) => {
  if (err.code !== 'ECONNRESET') {
    console.log('proxy error', err);
  }

  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  const json = { error: 'proxy_error', reason: err.message };

  res.end(JSON.stringify(json));
});

// Configure static serving of our webpack bundled client files.
app.use(
  notEmpty(process.env.CLIENT_BUNDLE_HTTP_PATH),
  express.static(
    path.resolve(appRootPath, notEmpty(process.env.BUNDLE_OUTPUT_PATH), './client'),
    { maxAge: notEmpty(process.env.CLIENT_BUNDLE_CACHE_MAXAGE) }
  )
);

// Configure static serving of our "public" root http path static files.
app.use(express.static(path.resolve(appRootPath, './public')));
app.get('*', universalMiddleware);

// Handle 404 errors.
// Note: the react application middleware hands 404 paths, but it is good to
// have this backup for paths not handled by the universal middleware. For
// example you may bind a /api path to express.
app.use((req: $Request, res: $Response, next: NextFunction) => { // eslint-disable-line no-unused-vars,max-len
  res.status(404).send('Sorry, that resource was not found.');
});

// Handle all other errors (i.e. 500).
// Note: You must provide specify all 4 parameters on this callback function
// even if they aren't used, otherwise it won't be used.
app.use((err: ?Error, req: $Request, res: $Response, next: NextFunction) => { // eslint-disable-line no-unused-vars,max-len
  if (err) {
    console.log(err);
    console.log(err.stack);
  }
  res.status(500).send('Sorry, an unexpected error occurred.');
});

// Create an http listener for our express app.
const port = parseInt(notEmpty(process.env.SSR_PORT), 10);
const listener = app.listen(port, () =>
  console.log(`Server listening on port ${port}`)
);

// We export the listener as it will be handy for our development hot reloader.
export default listener;
