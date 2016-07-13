// const config = require('../config/boldr');
module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'boldr_development',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'travis',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'boldr_development',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  }
};
