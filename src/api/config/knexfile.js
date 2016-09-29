const path = require('path');
const conf = require('./config');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: conf.get('db.name'),
      user: conf.get('db.user'),
      password: conf.get('db.password')
    },
    migrations: {
      directory: path.resolve(__dirname, '../db/_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(__dirname, '../db/_seeds'),
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
      directory: path.resolve(__dirname, '../db/_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(__dirname, '../db/_seeds'),
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.POSTGRES_CONN_URI,
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
