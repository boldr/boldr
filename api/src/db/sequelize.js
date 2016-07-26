const Sequelize = require('sequelize');
const config = require('../core/config/config');

const dbConfig = config.get('database');
const envVar = process.env.POSTGRES_DB_URL;

export const db = envVar || `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.name}`;

const sequelize = new Sequelize(db, {
  logging: false, // set to console.log to see the raw SQL queries
  omitNull: true,
  native: true,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
