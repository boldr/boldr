import { join } from 'path';
import { Model } from 'objection';
import User from '../user/user.model';
import Post from '../post/post.model';
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
      },
      post: {
        relation: Model.ManyToManyRelation,
        modelClass: Post,
        join: {
          from: 'media.id',
          through: {
            from: 'post_media.media_id',
            to: 'post_media.post_id',
          },
          to: 'post.id',
        },
      }
    };
  }
}

export default Media;
