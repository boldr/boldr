import { Model } from 'objection';
import BaseModel from './base';
// Related Models
import User from './user';
import Post from './post';

class Attachment extends BaseModel {
  static addTimestamps = true;
  static addUUID = false;
  static get tableName() { return 'attachment'; }
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'attachment.user_id',
          to: 'user.id',
        },
      },
      posts: {
        relation: Model.ManyToManyRelation,
        modelClass: Post,
        join: {
          from: 'attachment.id',
          through: {
            from: 'post_attachment.attachment_id',
            to: 'post_attachment.post_id',
          },
          to: 'post.id',
        },
      },
    };
  }
}

export default Attachment;
