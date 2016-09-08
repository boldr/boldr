import { join } from 'path';
import { Model } from 'objection';

class Gallery extends Model {
  static get tableName() { return 'gallery'; }

}

export default Gallery;
