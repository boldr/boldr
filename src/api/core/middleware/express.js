import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import shrinkRay from 'shrink-ray';
import expressValidator from 'express-validator';
import helmet from 'helmet';
import hpp from 'hpp';

export default function(app) {
  app.use(shrinkRay());

  // secure apps by setting various HTTP headers
  app.use(helmet());
  // enable CORS - Cross Origin Resource Sharing
  // allow for sending credentials (auth token) in the headers.
  app.use(cors({ origin: true, credentials: true }));

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(hpp());
  app.use(expressValidator());
  app.use(methodOverride('X-HTTP-Method-Override'));
}
