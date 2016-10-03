import path from 'path';
import { Model } from 'objection';
import Tag from '../tag/tag.model';
import Media from '../media/media.model';
import User from '../user/user.model';
import BaseModel from '../BaseModel';

class Post extends BaseModel {
  static get tableName() {
    return 'post';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'post.user_id',
          to: 'user.id'
        }
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
        modelClass: Media,
        join: {
          from: 'post.id',
          through: {
            from: 'post_media.post_id',
            to: 'post_media.media_id',
          },
          to: 'media.id',
        },
      }
    };
  }
}

export default Post;
