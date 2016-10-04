import { join } from 'path';
import { Model } from 'objection';
import BaseModel from '../BaseModel';

class Page extends BaseModel {
  static get tableName() { return 'page'; }

}

export default Page;
