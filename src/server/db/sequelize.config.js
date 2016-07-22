const config = require('../core/config');

module.exports = {
  development: {
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: 'postgres'
  },
  testing: {
    use_env_variable: process.env.DATABASE_URL,
    username: config.DB_USER || 'postgres',
    password: config.DB_PASSWORD || 'password',
    database: config.DB_NAME || 'postgres',
    host: config.DB_HOST || 'localhost',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: config.POSTGRES_DB_URL,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: 'postgres'
  }
};
