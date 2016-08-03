import Debug from 'debug';
import express from 'express';
import errorHandler from 'errorhandler';
import httpProxy from 'http-proxy';
import middleware from './middleware';
import boldrSSR from './boldrSSR';

const debug = Debug('boldrCMS:engine');
// ex/ https://api.boldr.io | http://localhost:9121
const API_HOST = process.env.API_HOST;
// ex/ /v1 | /api/v1
const API_PREFIX = process.env.API_PREFIX;

const API_ADDR = API_HOST + API_PREFIX;
// Create our express server.
const app = express();
const proxy = httpProxy.createProxyServer({
  target: API_ADDR,
  changeOrigin: true
});

app.use('/api/v1/*', (req, res) => {
  const url = API_HOST + req.originalUrl;
  debug(`${req.method} PROXY to ${url}`);
  proxy.web(req, res, { target: url }); // eslint-disable-line
});

debug('express middleware');
middleware(app);

// Server-side rendering
app.use(boldrSSR);

// Use Boom for 404 error handling.
app.use((req, res, next) => {
  next();
});

// Handle our errors.
app.use(errorHandler);

export default app;
