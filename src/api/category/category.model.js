import Promise from 'bluebird';
import _debug from 'debug';
import { BaseModel } from '../../core';
import { Category, Media } from '../../db/models';

const debug = _debug('api:category:model');

class CategoryModel extends BaseModel {
  constructor() {
    super(Category, null, null);
  }
}
export default CategoryModel;
