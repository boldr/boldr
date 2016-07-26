const nconf = require('nconf');

nconf
// Allow overwrites from env
    .env({
      whitelist: [
        'environment',
        'database__host',
        'database__user',
        'database__password',
        'database__name',
        'database__port',
        'session_secret',
        'aws__access_key_id',
        'aws__secret_access_key',
        'aws__bucket',
        'aws__region',
        'redis__host',
        'redis__port',
        'redis__database',
        'server__host',
        'server__port',
        'mail__domain',
        'mail__from',
        'mail__apiKey',
        'google__id',
        'google__secret',
        'facebook__key',
        'facebook__secret',
        'github__id',
        'github__secret',
        'twitter__key',
        'twitter__secret'
      ],
      lowerCase: true,
      separator: '__'
    });

// By uncommenting the line below you can override any settings.
// nconf.file('./config.json');
nconf.defaults({
  environment: 'development',
  session_secret: 'secret',
  server: {
    host: 'localhost',
    port: 9121
  },
  logging: {
    console: true,
    files: false
  },
  database: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    dialect: 'postgres',
    name: 'boldr_development'
  },
  redis: {
    url: 'redis_ds',
    host: '0.0.0.0',
    port: 6379,
    database: 8
  },
  aws: {
    region: 'us-west-1',
    bucket: 'boldr',
    access_key_id: '',
    secret_access_key: ''
  },
  mail: {
    domain: 'boldr.io',
    from: 'postmaster@boldr.io',
    apiKey: ''
  },
  google: {
    id: '',
    secret: '',
    callback: '/auth/google/callback'
  },
  facebook: {
    key: '',
    secret: '',
    callback: '/auth/facebook/callback'
  },
  github: {
    id: '',
    secret: '',
    callback: '/auth/github/callback'
  },
  twitter: {
    key: '',
    secret: '',
    callback: '/auth/twitter/callback'
  }
});

module.exports = nconf;
