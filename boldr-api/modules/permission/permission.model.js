import { join } from 'path';
import { Model } from 'objection';

class Permission extends Model {
  static get tableName() { return 'permission'; }

}

export default Permission;
