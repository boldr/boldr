import { join } from 'path';
import { Model } from 'objection';
import BaseModel from '../BaseModel';

class ContentType extends BaseModel {
  static get tableName() { return 'content_type'; }

}

export default ContentType;
