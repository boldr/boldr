import Sequelize from 'sequelize';
import config from '../core/config';

const envVar = process.env.POSTGRES_CONN_URL;

export const db = envVar || `postgres://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.name}`;

const sequelize = new Sequelize(db, {
  logging: false, // set to console.log to see the raw SQL queries
  omitNull: true,
  native: false,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
