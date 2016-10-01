const path = require('path');
const util = require('util');
const convict = require('convict');
const debug = require('debug')('boldr:configuration');

const conf = convict({
  env: {
    doc: 'The environment that we\'re running in.',
    format: ['production', 'development', 'test', 'staging', 'travis'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  https: {
    doc: 'Determines whether or not the server will use https',
    format: Boolean,
    env: 'HTTPS_SERVER',
    default: false
  },
  host: {
    doc: 'The web address of your site',
    format: String,
    default: 'http://localhost:3000',
    env: 'HOST'
  },
  api: {
    host: {
      doc: 'The host address to bind.',
      format: String,
      default: 'localhost',
      env: 'API_HOST'
    },
    port: {
      doc: 'The port to bind for the API.',
      format: 'port',
      default: 3000,
      env: 'API_PORT'
    },
    base: {
      doc: 'The url prefix for the api',
      format: String,
      default: '/api/v1',
      env: 'API_BASE'
    }
  },
  dateFormat: {
    doc: 'The format by which dates will be displayed.',
    format: String,
    default: 'YYYY-MM-DD HH:mm:ss'
  },
  timezone: {
    doc: 'The default timezone.',
    format: String,
    default: '-07:00'
  },
  printStack: {
    doc: 'Indicates if the server should send the stack with the error.',
    format: Boolean,
    default: false
  },
  mail: {
    key: {
      doc: 'The Mailgun API key',
      format: String,
      default: 'key-',
      env: 'MG_API'
    },
    domain: {
      doc: 'The domain used for identification with Mailgun.',
      format: String,
      default: 'boldr.io',
      env: 'MG_DOMAIN'
    },
    from: {
      doc: 'The address for outgoing emails to use.',
      format: String,
      default: 'postmaster@boldr.io',
      env: 'MG_FROM'
    },
    baseUrl: {
      doc: 'The url base used for reset password requests.',
      format: String,
      default: 'http://localhost:3000/api/v1',
      env: 'MAIL_BASE'
    }
  },
  aws: {
    keyId: {
      doc: 'AWS access key id.',
      format: String,
      default: '',
      env: 'AWS_ACCESS_KEY_ID',
      arg: 'awsid'
    },
    keySecret: {
      doc: 'AWS secret access key',
      format: String,
      default: '',
      env: 'AWS_SECRET_ACCESS_KEY'
    },
    bucket: {
      doc: 'Path or bucket name for images to be served publicly.',
      format: String,
      default: 'boldrcms'
    },
    region: {
      doc: 'The region to use for S3 uploads',
      format: String,
      default: 'us-west-1',
      env: 'AWS_REGION'
    }
  },
  logger: {
    console: {
      doc: 'Stream server logs to the console',
      format: Boolean,
      default: true,
      env: 'LOG_CONSOLE'
    },
    files: {
      doc: 'Determines whether or not to store logs as a file.',
      format: Boolean,
      default: false,
      env: 'LOG_FILE'
    }
  },
  redis: {
    uri: {
      doc: 'The redis connection uri',
      format: String,
      default: 'redis://127.0.0.1:6379/1',
      env: 'REDIS_CONN_URI'
    },
    host: {
      doc: 'The Redis host address',
      format: String,
      default: '127.0.0.1',
      env: 'REDIS_HOST'
    },
    port: {
      doc: 'The port of the running Redis server.',
      format: 'port',
      default: 6379,
      env: 'REDIS_PORT'
    },
    database: {
      doc: 'The database number Redis uses.',
      format: Number,
      default: 1,
      env: 'REDIS_DB'
    }
  },
  db: {
    name: {
      doc: 'Name of the database.',
      format: String,
      default: 'boldr',
      env: 'POSTGRES_DB'
    },
    host: {
      doc: 'Host of the database.',
      format: String,
      default: 'localhost',
      env: 'POSTGRES_HOST'
    },
    dialect: {
      doc: 'The dialect of the database.',
      format: String,
      default: 'postgres'
    },
    port: {
      doc: 'Port used by the database.',
      format: 'port',
      default: 5432,
      env: 'POSTGRES_PORT'
    },
    user: {
      doc: 'Username for the database user.',
      format: String,
      default: 'postgres',
      env: 'POSTGRES_USER'
    },
    password: {
      doc: 'Password for the database.',
      format: String,
      default: 'password',
      env: 'POSTGRES_PASSWORD'
    },
    pool: {
      enabled: {
        doc: 'Indicates if sequelize should use a connection pool or not.',
        default: true,
        format: Boolean
      },
      maxConnections: {
        doc: 'If pool is enabled, max number of connections should be this.',
        default: 8,
        format: Number
      },
      minConnections: {
        doc: 'If pool is enabled, min number of connections should be this.',
        default: 0,
        format: Number
      },
      maxIdleTime: {
        doc: 'If pool is enabled, max idle time of a connection in milliseconds.',
        default: 10000,
        format: Number
      }
    }
  },
  session: {
    secret: {
      doc: 'Secret key for JWT and session storage.',
      format: String,
      default: 'boldrAPIk3y',
      env: 'SESSION_SECRET'
    },
    expiration: {
      doc: 'The expiration date of the JWT.',
      format: Number,
      default: 86400,
      env: 'SESSION_EXPIRATION'
    }
  },
  social: {
    facebook: {
      id: {
        doc: 'The client ID for oAuth authentication',
        format: String,
        default: 'secret',
        env: 'FACEBOOK_ID'
      },
      secret: {
        doc: 'The client secret for oAuth authentication',
        format: String,
        default: 'secret',
        env: 'FACEBOOK_SECRET'
      }
    }
  }
});

// Load environment dependent configuration
const env = conf.get('env');
// conf.loadFile(path.normalize(`${__dirname}/env/${env}.json`));

// catch all error without handler
process.on('uncaughtException', error => {
  debug(`Caught exception without specific handler: ${util.inspect(error)}`);
  debug(error.stack, 'error');
  process.exit(1);
});

// print the environment for debugging
// debug(util.inspect(process.env, {
//   colors: true
// }));

// console.log(`ENV ${env}`);
// const config = conf.getProperties();
// Perform validation
conf.validate({
  strict: true
});
debug('Configuration file loaded successfully.');

module.exports = conf;
