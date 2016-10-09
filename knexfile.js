const path = require('path');
const paths = require('./tools/paths');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB || 'boldr',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password'
    },
    migrations: {
      directory: path.resolve(paths.API_DIR, '_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(paths.API_DIR, '_seeds'),
    },
    debug: false,
    pool: {
      min: 0,
      max: 1
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB || 'travis_ci_test',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || ''
    },
    migrations: {
      directory: path.resolve(paths.API_DIR, '_migrations'),
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: path.resolve(paths.API_DIR, '_seeds'),
    },
    debug: false,
    pool: {
      min: 0,
      max: 1
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB || 'boldr',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password'
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
