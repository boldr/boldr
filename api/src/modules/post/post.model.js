import { Model } from 'objection';
import Tag from '../tag/tag.model';
import Account from '../account/account.model';
import Attachment from '../attachment/attachment.model';
import BaseModel from '../BaseModel';

class Post extends BaseModel {
  static get tableName() {
    return 'post';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'post.account_id',
          to: 'account.id'
        }
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'post.id',
          through: {
            from: 'post_tag.post_id',
            to: 'post_tag.tag_id'
          },
          to: 'tag.id'
        }
      },
      attachments: {
        relation: Model.ManyToManyRelation,
        modelClass: Attachment,
        join: {
          from: 'post.id',
          through: {
            from: 'post_attachment.post_id',
            to: 'post_attachment.attachment_id'
          },
          to: 'attachment.id'
        }
      }
    };
  }
}

export default Post;
