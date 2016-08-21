module.exports = {
  development: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'boldr_development',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || null,
    database: process.env.POSTGRES_DB || 'travis_ci_test',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
  travis: {
    username: 'postgres',
    password: null,
    database: 'travis_ci_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'POSTGRES_DB_URL',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB || 'boldr',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    dialect: 'postgres'
  }
};
