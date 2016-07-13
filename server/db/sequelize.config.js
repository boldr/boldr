const config = require('../config/boldr').config;

module.exports = {
  development: {
    username: config.db.user || 'postgres',
    password: config.db.password || 'password',
    database: config.db.name || 'boldr_development',
    host: config.db.host || 'localhost',
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
    username: config.db.user || 'postgres',
    password: config.db.password || 'password',
    database: config.db.name || 'boldr_development',
    host: config.db.host || 'localhost',
    dialect: 'postgres'
  }
};
