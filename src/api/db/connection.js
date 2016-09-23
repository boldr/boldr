import Knex from 'knex';
import { Model } from 'objection';

import knexConfig from '../config/knexfile';

export default class DbConnection {
  static init() {
    const knex = Knex(knexConfig[process.env.NODE_ENV]);

    Model.knex(knex);
  }
}
