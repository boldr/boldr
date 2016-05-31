module.exports = {
  development: {
    username: process.env.PGUSER || 'postgres',
    password: null,
    database: 'boldr',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: process.env.PGUSER || 'postgres',
    password: null,
    database: 'boldr_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.PGUSER || 'postgres',
    password: null,
    database: 'boldr',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
