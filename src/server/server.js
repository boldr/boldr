import path from 'path';
import Debug from 'debug';
import express from 'express';
import errorHandler from 'errorhandler';
import appRoot from 'app-root-path';
import httpProxy from 'http-proxy';
import middleware from './middleware';
import ssrMiddleware from './ssrMiddleware';

const debug = Debug('boldrCMS:engine');

const appRootPath = appRoot.toString();
// Create our express server.
const app = express();
const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:9121',
  changeOrigin: true
});

app.use('/api/v1/*', (req, res) => {
  const url = `http://localhost:9121${req.originalUrl}`;
  debug(`${req.method} PROXY to ${url}`);
  proxy.web(req, res, { target: url }); // eslint-disable-line
});

debug('express middleware');
middleware(app);

// Configure static serving of our webpack bundled client files.
app.use(
  process.env.CLIENT_BUNDLE_HTTP_PATH,
  express.static(
    path.resolve(appRootPath, process.env.CLIENT_BUNDLE_OUTPUT_PATH),
    { maxAge: process.env.CLIENT_BUNDLE_CACHE_MAXAGE }
  )
);

// Configure static serving of our "public" root http path static files.
app.use(express.static(path.resolve(appRootPath, './public')));

// Bind our universal react app middleware as the handler for all get requests.
app.get('*', ssrMiddleware);

export default app;
