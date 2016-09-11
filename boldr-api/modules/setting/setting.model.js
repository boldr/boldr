import { join } from 'path';
import { Model } from 'objection';

class Setting extends Model {
  static get tableName() { return 'setting'; }

}

export default Setting;
