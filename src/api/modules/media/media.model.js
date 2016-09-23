import { join } from 'path';
import { Model } from 'objection';

class Media extends Model {
  static get tableName() { return 'media'; }
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: join(__dirname, '..', 'user', 'user.model.js'),
        join: {
          from: 'media.user_id',
          to: 'user.id'
        }
      }
    };
  }
}

export default Media;
