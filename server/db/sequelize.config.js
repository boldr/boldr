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
    use_env_variable: 'DATABASE_URL',
    username: process.env.DB_USER || 'ubuntu',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'circle_test',
    host: process.env.DB_HOST || '127.0.0.1',
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
