import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import morgan from 'morgan';

export default (app) => {
  const env = app.get('env');
  app.disable('x-powered-by');
  app.set('trust proxy', 'loopback');

  if (env !== 'production') {
    app.use(morgan('dev'));
  }

  app.use(cors({ origin: true, credentials: true }));

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.options('*', (req, res) => res.sendStatus(200));
};
