import { join } from 'path';
import { Model } from 'objection';

class Navigation extends Model {
  static get tableName() { return 'navigation'; }

}

export default Navigation;
