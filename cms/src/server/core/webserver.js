import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import compression from 'compression';

export default app => {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(cors({ origin: true, credentials: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(express.static(path.resolve('public')));
  app.set('trust proxy', 'loopback');
  app.options('*', (req, res) => res.sendStatus(200));

  console.log('--------------------------');
  console.log('===> 😊  Starting Boldr SSR. . .');
  console.log(`===> 🌎  Listening on ${process.env.SSR_PORT} with environment: ${process.env.NODE_ENV}`);
};
