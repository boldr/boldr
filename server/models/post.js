import { Model } from 'objection';

// Related Models
import Tag from './tag';
import User from './user';
import Attachment from './attachment';
import BaseModel from './base';

class Post extends BaseModel {
  static get tableName() {
    return 'post';
  }
  static addTimestamps = true;
  static addUUID = false;
  static hidden = ['password'];
  static get idColumn() {
    return 'id';
  }
  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'post.user_id',
          to: 'user.id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'post.id',
          through: {
            from: 'post_tag.post_id',
            to: 'post_tag.tag_id',
          },
          to: 'tag.id',
        },
      },
      attachments: {
        relation: Model.ManyToManyRelation,
        modelClass: Attachment,
        join: {
          from: 'post.id',
          through: {
            from: 'post_attachment.post_id',
            to: 'post_attachment.attachment_id',
          },
          to: 'attachment.id',
        },
      },
    };
  }
}

export default Post;
