const config = require('../core/config/config');

const dbConfig = config.get('database');

module.exports = {
  development: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    host: dbConfig.host,
    dialect: 'postgres'
  },
  test: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    host: dbConfig.host,
    dialect: 'postgres'
  },
  production: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.name,
    host: dbConfig.host,
    dialect: 'postgres'
  }
};
