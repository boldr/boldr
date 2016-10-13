const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB || 'boldr',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password'
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
  test: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB || 'boldr_test',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || ''
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
