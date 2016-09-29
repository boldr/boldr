import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import expressWinston from 'express-winston';
import cors from 'cors';
import morgan from 'morgan';
import winstonInstance from '../logger';

export default (boldrApi) => {
  const env = boldrApi.get('env');
  boldrApi.disable('x-powered-by');
  boldrApi.set('trust proxy', 'loopback');

  if (env !== 'production') {
    boldrApi.use(morgan('dev'));
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    boldrApi.use(expressWinston.logger({
      winstonInstance,
      meta: true, 	// optional: log meta data about request (defaults to true)
      msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
      colorStatus: true 	// Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    }));
  }
  if (env !== 'test') {
    boldrApi.use(expressWinston.errorLogger({
      winstonInstance
    }));
  }

  boldrApi.use(cors({ origin: true, credentials: true }));

  boldrApi.use(bodyParser.json({ limit: '50mb' }));
  boldrApi.use(bodyParser.urlencoded({ extended: true }));
  boldrApi.use(methodOverride('X-HTTP-Method-Override'));
  boldrApi.options('*', (req, res) => res.sendStatus(200));
};
