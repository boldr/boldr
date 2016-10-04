const path = require('path');
const config = require('./index');
const paths = config.paths;
const conf = config.conf;

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: conf.get('db.name'),
      user: conf.get('db.user'),
      password: conf.get('db.password')
    },
    migrations: {
      directory: path.resolve(paths.API_SRC, '_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(paths.API_SRC, '_seeds'),
    },
    debug: false,
    pool: {
      min: 0,
      max: 1
    }
  },

  travis: {
    client: 'postgresql',
    connection: {
      database: 'travis_ci_test',
      user: 'postgres'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      directory: path.resolve(paths.API_SRC, '_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(paths.API_SRC, '_seeds'),
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: conf.get('db.name'),
      user: conf.get('db.user'),
      password: conf.get('db.password')
    },
    searchPath: 'knex,public',
    migrations: {
      directory: path.resolve(__dirname, '../db/_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(__dirname, '../db/_seeds'),
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
