import Sequelize from 'sequelize';
import moment from 'moment';
import sequelizeConfig from './sequelize.config'; // eslint-disable-line
import { config } from '../config/boldr';// eslint-disable-line

const ENV = config.env;
const dbConfig = sequelizeConfig[ENV];

export const db = process.env[dbConfig.use_env_variable] ||
`${dbConfig.dialect}://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`;

const sequelize = new Sequelize(db, {
  logging: true, // set to console.log to see the raw SQL queries
  timezone: config.timezone,
  omitNull: true,
  define: {
    freezeTableName: true
  }
});

export default sequelize;
