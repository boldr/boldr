import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';
import methodOverride from 'method-override';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import passport from 'passport';
import redisClient from '../db/redis';
import { logger } from '../lib';
import sessionService from './middleware/sessions';
import config from './config';

export default (app) => {
  const env = app.get('env');
  app.disable('x-powered-by');
  app.set('trust proxy', 'loopback');
  app.use(compression());

  if (env !== 'production') {
    app.use(morgan('dev', { stream: logger.stream }));
  }

  app.use(cors({ origin: true, credentials: true }));

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.options('*', (req, res) => res.sendStatus(200));

  app.use(expressJwt({
    secret: config.session.secret,
    credentialsRequired: false
  }));

  app.use(sessionService(redisClient, { logErrors: true }));
  app.use(passport.initialize());
  app.use(passport.session());
};
