import { join } from 'path';
import { Model } from 'objection';
import BaseModel from '../BaseModel';
class Gallery extends BaseModel {
  static get tableName() { return 'gallery'; }

}

export default Gallery;
