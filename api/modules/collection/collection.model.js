import { join } from 'path';
import { Model } from 'objection';
import BaseModel from '../BaseModel';
class Collection extends BaseModel {
  static get tableName() { return 'collection'; }

}

export default Collection;
