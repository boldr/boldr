const Sequelize = require('sequelize');
const config = require('../core/config/boldr');

const envVar = process.env.POSTGRES_CONN_URL;

export const db = envVar || `postgres://${config.db.user}:${config.db.password}@${config.db.port}/${config.db.name}`;

const sequelize = new Sequelize(db, {
  logging: false, // set to console.log to see the raw SQL queries
  omitNull: true,
  native: true,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
