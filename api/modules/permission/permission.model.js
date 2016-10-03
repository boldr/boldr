import { join } from 'path';
import { Model } from 'objection';
import BaseModel from '../BaseModel';

class Permission extends BaseModel {
  static get tableName() { return 'permission'; }

}

export default Permission;
