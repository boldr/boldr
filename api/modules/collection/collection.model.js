import { join } from 'path';
import { Model } from 'objection';

class Collection extends Model {
  static get tableName() { return 'collection'; }

}

export default Collection;
