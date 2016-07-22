import Sequelize from 'sequelize';
import config from '../core/config';// eslint-disable-line

const envVar = process.env[config.POSTGRES_DB_URL];

export const db = envVar || `postgres://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}/${config.DB_NAME}`;

const sequelize = new Sequelize(db, {
  logging: false, // set to console.log to see the raw SQL queries
  omitNull: true,
  native: true,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
