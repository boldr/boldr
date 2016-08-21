import Sequelize from 'sequelize';
import config from '../core/config';

const envVar = config.db.uri;

export const db = envVar || `postgres://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.name}`;

const sequelize = new Sequelize(db, {
  logging: false, // set to console.log to see the raw SQL queries
  omitNull: false,
  native: false,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
