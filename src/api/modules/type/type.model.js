import { join } from 'path';
import { Model } from 'objection';

class ContentType extends Model {
  static get tableName() { return 'content_type'; }

}

export default ContentType;
