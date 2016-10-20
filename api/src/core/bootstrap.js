import { Model } from 'objection';
import knex from '../db/postgres';
import conf from '../config/config';
import Setting from '../modules/setting/setting.model';
import logger from './logger';

const debug = require('debug')('boldr:bootstrap');

const startupMessage = `${conf.toString()} \n
  ------------------------------------------------------------ \n
                    🔧 Loaded BoldrAPI Configuration.
  ------------------------------------------------------------- \n
  If any values are incorrect, edit the files in the config directory.
  You are able to override any settings using the .env file. \n
  `;

class Bootstrap {
  static init() {
    this.initConfig();
    this.initDb();
  }
  
  static initConfig() {
    logger.info(startupMessage);
  }
  
  static initDb() {
    logger.info('initDb: Binding to Knex instance and making a test query.');
    // bind Objection models to db instance.
    Model.knex(knex);
    Setting.query()
    .count('*')
    .catch((e) => {
      logger.error('Query failed', { error: e.message, stack: e.stack });
    });
  }
}

export default Bootstrap;
