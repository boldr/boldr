import express from 'express';
import { clientBundle, expressMiddleware, errorHandler } from './middleware';
import boldrSSR from './boldrSSR';
import { PUBLIC_DIR } from './config';
// const cache = require('express-redis-cache')({ client: redisClient });
const debug = require('debug')('boldr:server-app');

const app = express();

app.use((req, res, next) => {
  res.setHeader('X-Forwarded-For', req.ip);
  return next();
});
debug('Express Middleware');
// contains body-parser, method-override, etc...
expressMiddleware(app);

if (__USE_PROXY__) {
  debug('Use proxy flag');
  require('./middleware/proxy')(app);
}

if (process.env.BUILD_FLAG_IS_DEV || process.env.SERVE_ASSETS === 'true') {
  app.use('/assets/', clientBundle);
}
// Configure static serving of our "public" root http path static files.
// Note: these will be served off the root (i.e. '/') of our application.
app.use(express.static(PUBLIC_DIR));

app.get('*', boldrSSR);

errorHandler(app);

export default app;
