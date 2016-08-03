import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';

export default app => {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(cors({ origin: true, credentials: true }));
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.resolve('public')));
  app.set('trust proxy', 'loopback');
  app.options('*', (req, res) => res.sendStatus(200));
};
