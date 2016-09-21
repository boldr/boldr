import { join } from 'path';
import { Model } from 'objection';

class Page extends Model {
  static get tableName() { return 'page'; }

}

export default Page;
