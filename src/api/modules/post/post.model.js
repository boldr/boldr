import { join } from 'path';
import { Model } from 'objection';

class Post extends Model {
  static get tableName() {
    return 'post';
  }

  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: join(__dirname, '..', 'user', 'user.model.js'),
        join: {
          from: 'post.user_id',
          to: 'user.id'
        }
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: join(__dirname, '..', 'tag', 'tag.model.js'),
        join: {
          from: 'post.id',
          through: {
            from: 'post_tag.post_id',
            to: 'post_tag.tag_id',
          },
          to: 'tag.id',
        },
      }
    };
  }
}

export default Post;
