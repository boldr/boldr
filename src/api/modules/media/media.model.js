import { join } from 'path';
import { Model } from 'objection';
import User from '../user/user.model';
import BaseModel from '../BaseModel';

class Media extends BaseModel {
  static get tableName() { return 'media'; }
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'media.user_id',
          to: 'user.id'
        }
      }
    };
  }
}

export default Media;
