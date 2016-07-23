const nconf = require('nconf');
const dotenv = require('dotenv');

dotenv.load();

nconf.env('__');

if (process.env.NODE_ENV === 'testing') {
  nconf.file('./testing.json');
}

// By uncommenting the line below you can override any settings.
// nconf.file('./config.json');
nconf.defaults({
  logger: {
    console: true,
    files: false
  },
  DB_DIALET: 'postgres',
  AWS_REGION: 'us-west-1',
  MG_EMAIL_FROM: 'postmaster@boldr.io',
  NODE_ENV: process.env.NODE_ENV || 'development',
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  WP_DS: process.env.WP_DS || 3001,
  POSTGRES_DB_URL: process.env.POSTGRES_DB_URL,
  DB_PASSWORD: process.env.DB_PASSWORD || 'password',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_NAME: process.env.DB_NAME || 'boldr_development',
  DB_PORT: process.env.DB_PORT || '5432',
  REDIS_HOST: process.env.REDIS_HOST || 'localhost',
  REDIS_PORT: process.env.REDIS_HOST || 6379,
  SESSION_SECRET: process.env.SESSION_SECRET || 'boldr',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  S3_BUCKET: process.env.S3_BUCKET || 'boldr',
  MG_API: process.env.MG_API || 'key-asf',
  MG_DOMAIN: process.env.MG_DOMAIN || 'boldr.io',
  GOOGLE_ID: process.env.GOOGLE_ID || '',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'secret',
  FACEBOOK_ID: process.env.FACEBOOK_ID || 'secret',
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'secret',
  TWITTER_KEY: process.env.TWITTER_KEY || 'secret',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'secret',
  GITHUB_KEY: process.env.GITHUB_KEY || 'secret',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'secret'

});

module.exports = nconf.get();
