const path = require('path');
const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config({ silent: true });

const conf = convict({
  version: {
    doc: 'The version of Boldr currently being used.',
    format: String,
    default: 'Invalid',
    env: 'npm_package_version',
    arg: 'npmPackageVersion'
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test', 'testing', 'stage'],
    default: 'dev',
    env: 'NODE_ENV',
    arg: 'env'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
    arg: 'ip'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port'
  },
  webpackPort: {
    doc: 'The port bound for webpack hot reloading.',
    format: 'port',
    default: 3001,
    env: 'WP_PORT',
    arg: 'wpPort'
  },
  dateFormat: {
    doc: 'The format by which dates will be displayed.',
    format: String,
    default: 'YYYY-MM-DD HH:mm:ss',
    env: 'DATE_FMT',
    arg: 'datefmt'
  },
  timezone: {
    doc: 'The timezone used.',
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
    key: {
      doc: 'The Mailgun API key',
      format: String,
      default: 'key-',
      env: 'MG_API',
      arg: 'mgkey'
    },
    domain: {
      doc: 'The domain on Mailgun.',
      format: String,
      default: 'boldr.io',
      env: 'MG_DOMAIN',
      arg: 'mgdomain'
    },
    from: {
      doc: 'The address sent emails come from.',
      format: String,
      default: 'postmaster@boldr.io',
      env: 'MG_FROM',
      arg: 'mgfr'
    }
  },
  aws: {
    id: {
      doc: 'AWS Access Key Id.',
      format: String,
      default: '',
      env: 'AWS_ACCESS_KEY_ID',
      arg: 'awsid'
    },
    secret: {
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
    }
  },
  db: {
    name: {
      doc: 'Name of the database.',
      format: String,
      default: 'boldr_development',
      env: 'DB_NAME',
      arg: 'dbName'
    },
    host: {
      doc: 'Host of the database.',
      format: String,
      default: 'http://localhost',
      env: 'DB_HOST',
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
      format: Number,
      default: 5432,
      env: 'DB_PORT',
      arg: 'dbPort'
    },
    user: {
      doc: 'Username for the database.',
      format: String,
      default: 'postgres',
      env: 'DB_USER',
      arg: 'dbUser'
    },
    password: {
      doc: 'Password for the database.',
      format: String,
      default: 'password',
      env: 'DB_PASSWORD',
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
  jwt: {
    secret: {
      doc: 'Secret for JWT and session storage.',
      format: String,
      default: 'boldrsecret',
      env: 'JWT_SECRET',
      arg: 'jwtSecret'
    },
    expiresIn: {
      doc: 'The expiration date of the JWT.',
      format: String,
      default: '1h',
      env: 'JWT_EXPIRE_IN',
      arg: 'jwtExpireIn'
    },
    maxIssuer: {
      doc: 'Maximum time in milliseconds how much the server tolaretes refreshing tokens.',
      format: Number,
      default: 86400000, // 24 hours
      env: 'JWT_MAX_ISSUER',
      arg: 'jwtMaxIssuer'
    }
  },
  google: {
    id: {
      doc: 'Client ID for Google OAuth.',
      format: String,
      default: 'boldrsecret',
      env: 'GOOGLE_ID',
      arg: 'googleid'
    },
    secret: {
      doc: 'Secret for Google OAuth',
      format: String,
      default: 'boldrsecret',
      env: 'GOOGLE_SECRET',
      arg: 'googlesecret'
    },
    callback: {
      doc: 'Callback URL for Google OAuth',
      format: String,
      default: '/api/v1/auth/google/callback',
      env: 'GOOGLE_CB',
      arg: 'googlecb'
    }
  },
  facebook: {
    id: {
      doc: 'Client ID for Facebook OAuth.',
      format: String,
      default: 'boldrsecret',
      env: 'FACEBOOK_ID',
      arg: 'fbid'
    },
    secret: {
      doc: 'Secret for Facebook OAuth',
      format: String,
      default: 'boldrsecret',
      env: 'FACEBOOK_SECRET',
      arg: 'fbsecret'
    },
    callback: {
      doc: 'Callback URL for Facebook OAuth',
      format: String,
      default: '/api/v1/auth/facebook/callback',
      env: 'FACEBOOK_CB',
      arg: 'fbcb'
    }
  },
  twitter: {
    key: {
      doc: 'The client key for Twitter authentication.',
      format: String,
      default: 'boldrsecret',
      env: 'TWITTER_KEY',
      arg: 'twitterkey'
    },
    secret: {
      doc: 'Secret for Twitter OAuth',
      format: String,
      default: 'boldrsecret',
      env: 'TWITTER_SECRET',
      arg: 'twittersecret'
    },
    callback: {
      doc: 'Callback URL for Twitter OAuth',
      format: String,
      default: '/api/v1/auth/facebook/callback',
      env: 'TWITTER_CB',
      arg: 'twittercb'
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
