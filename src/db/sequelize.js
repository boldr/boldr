import Sequelize from 'sequelize';
import config from '../config/boldr';// eslint-disable-line

const envVar = process.env[config.db.conn_string];

export const db = envVar || `postgres://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.name}`;

const sequelize = new Sequelize(db, {
  logging: false, // set to console.log to see the raw SQL queries
  omitNull: true,
  native: true,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
