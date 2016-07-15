const config = require('../config/boldr');

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
    username: 'ubuntu',
    password: '',
    database: 'circle_test',
    host: '127.0.0.1',
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
