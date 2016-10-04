import { join } from 'path';
import { Model } from 'objection';
import BaseModel from '../BaseModel';

class Setting extends BaseModel {
  static get tableName() { return 'setting'; }

}

export default Setting;
