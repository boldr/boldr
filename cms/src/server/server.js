import Debug from 'debug';
import express from 'express';
import errorHandler from 'errorhandler';
import httpProxy from 'http-proxy';
import middleware from './middleware';
import boldrSSR from './boldrSSR';

const debug = Debug('boldrCMS:engine');
const targetUrl = process.env.TARGET_URL;
// Create our express server.
const app = express();
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  changeOrigin: true
});

debug('express middleware');
middleware(app);

// app.use('/api/v1', (req, res) => {
//   const url = targetUrl + req.originalUrl;
//   debug(`${req.method} PROXY to ${url}`);
//   proxy.web(req, res, { target: targetUrl + process.env.API_BASE }); // eslint-disable-line
// });
// app.use('/auth', (req, res) => {
//   const url = targetUrl + req.originalUrl;
//   debug(`${req.method} PROXY to ${url}`);
//   proxy.web(req, res, { target: targetUrl + '/auth' }); // eslint-disable-line
// });

// Server-side rendering
app.use(boldrSSR);

// Use Boom for 404 error handling.
app.use((req, res, next) => {
  next();
});

// Handle our errors.
app.use(errorHandler);

export default app;
