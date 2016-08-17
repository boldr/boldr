const path = require('path');
const convict = require('convict');

const conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test', 'staging'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  host: {
    doc: 'The host address to bind.',
    format: String,
    default: 'localhost',
    env: 'API_HOST',
    arg: 'host'
  },
  port: {
    doc: 'The port to bind for the API.',
    format: 'port',
    default: 9121,
    env: 'PORT',
    arg: 'port'
  },
  apiPrefix: {
    doc: 'The url prefix for the api',
    format: String,
    default: '/api/v1',
    env: 'API_PREFIX',
    arg: 'apiprefix'
  },
  ssrPort: {
    doc: 'The port bound for the frontend server.',
    format: 'port',
    default: 9221,
    env: 'SSR_PORT',
    arg: 'ssrport'
  },
  dateFormat: {
    doc: 'The format by which dates will be displayed.',
    format: String,
    default: 'YYYY-MM-DD HH:mm:ss',
    env: 'DATE_FMT',
    arg: 'datefmt'
  },
  timezone: {
    doc: 'The default timezone.',
    format: String,
    default: '-07:00',
    env: 'TZ',
    arg: 'tz'
  },
  printStack: {
    doc: 'Indicates if the server should send the stack with the error.',
    format: Boolean,
    default: false,
    env: 'PRINT_STACK',
    arg: 'printStack'
  },
  mail: {
    mgApi: {
      doc: 'The Mailgun API key',
      format: String,
      default: 'key-',
      env: 'MG_API',
      arg: 'mgkey'
    },
    mgDomain: {
      doc: 'The domain on Mailgun.',
      format: String,
      default: 'boldr.io',
      env: 'MG_DOMAIN',
      arg: 'mgdomain'
    },
    from: {
      doc: 'The address for outgoing emails to use.',
      format: String,
      default: 'postmaster@boldr.io',
      env: 'MG_FROM',
      arg: 'mgfr'
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
      env: 'AWS_SECRET_ACCESS_KEY',
      arg: 'awssecret'
    },
    bucket: {
      doc: 'Default Bucket for uploads.',
      format: String,
      default: 'boldr',
      env: 'AWS_BUCKET',
      arg: 'awsbucket'
    },
    region: {
      doc: 'The region to use for S3 uploads',
      format: String,
      default: 'us-west-1',
      env: 'AWS_REGION',
      arg: 'awsreg'
    }
  },
  logger: {
    console: {
      doc: 'Stream server logs to the console',
      format: Boolean,
      default: true,
      env: 'LOG_CONSOLE',
      arg: 'logconsole'
    },
    files: {
      doc: 'Determines whether or not to store logs as a file.',
      format: Boolean,
      default: false,
      env: 'LOG_FILE',
      arg: 'logfile'
    }
  },
  redis: {
    uri: {
      doc: 'The redis connection uri',
      format: String,
      default: '',
      env: 'REDIS_CON_URL',
      arg: 'ruri'
    },
    host: {
      doc: 'The Redis host address',
      format: String,
      default: '127.0.0.1',
      env: 'REDIS_HOST',
      arg: 'redisH'
    },
    port: {
      doc: 'The port of the running Redis server.',
      format: 'port',
      default: 6379,
      env: 'REDIS_PORT',
      arg: 'redisP'
    },
    database: {
      doc: 'The database number Redis uses.',
      format: Number,
      default: 1,
      env: 'REDIS_DB',
      arg: 'redisDB'
    }
  },
  db: {
    uri: {
      doc: 'Connection string for the db',
      format: String,
      default: 'postgres://postgres:password@127.0.0.1:5432/boldr_development',
      env: 'POSTGRES_CON_URL',
      arg: 'pguri'
    },
    name: {
      doc: 'Name of the database.',
      format: String,
      default: 'boldr_development',
      env: 'POSTGRES_DB',
      arg: 'dbName'
    },
    host: {
      doc: 'Host of the database.',
      format: String,
      default: 'localhost',
      env: 'POSTGRES_HOST',
      arg: 'dbHost'
    },
    dialect: {
      doc: 'The dialect of the database.',
      format: String,
      default: 'postgres',
      env: 'DB_DIALECT',
      arg: 'dbDialect'
    },
    port: {
      doc: 'Port used by the database.',
      format: 'port',
      default: 5432,
      env: 'POSTGRES_PORT',
      arg: 'pgPort'
    },
    user: {
      doc: 'Username for the database user.',
      format: String,
      default: 'postgres',
      env: 'POSTGRES_USER',
      arg: 'dbUser'
    },
    password: {
      doc: 'Password for the database.',
      format: String,
      default: 'password',
      env: 'POSTGRES_PASSWORD',
      arg: 'dbPassword'
    },
    pool: {
      enabled: {
        doc: 'Indicates if sequelize should use a connection pool or not.',
        default: true,
        format: Boolean,
        env: 'DB_POOL_ENABLED',
        arg: 'databasePoolEnabled'
      },
      maxConnections: {
        doc: 'If pool is enabled, max number of connections should be this.',
        default: 8,
        format: Number,
        env: 'DB_MAX_CONNECTIONS',
        arg: 'databaseMaxConnections'
      },
      minConnections: {
        doc: 'If pool is enabled, min number of connections should be this.',
        default: 0,
        format: Number,
        env: 'DB_POOL_MIN_CONNECTIONS',
        arg: 'databaseMinConnections'
      },
      maxIdleTime: {
        doc: 'If pool is enabled, max idle time of a connection in milliseconds.',
        default: 10000,
        format: Number,
        env: 'DB_POOL_MAX_IDLE_TIME',
        arg: 'databaseMaxIdleTime'
      }
    }
  },
  session: {
    secret: {
      doc: 'Secret key for JWT and session storage.',
      format: String,
      default: 'boldrAPIk3y',
      env: 'SESSION_SECRET',
      arg: 'skey'
    },
    expiration: {
      doc: 'The expiration date of the JWT.',
      format: String,
      default: '1h',
      env: 'SESSION_EXPIRATION',
      arg: 'sessionExpire'
    }
  }
});

// Load environment dependent configuration
const env = conf.get('env');
conf.loadFile(path.normalize(`${__dirname}/${env}.json`));

// Perform validation
conf.validate({
  strict: true
});

// console.log(`ENV ${env}`);
const config = conf.getProperties();
module.exports = config;
