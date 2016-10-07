import { join } from 'path';
import { Model } from 'objection';

class PostTag extends Model {
  static get tableName() {
    return 'post_tag';
  }

  static get idColumn() {
    return ['post_id', 'tag_id'];
  }

  static get relationMappings() {
    return {
      tag: {
        relation: Model.BelongsToOneRelation,
        modelClass: join(__dirname, '..', 'tag', 'tag.model.js'),
        join: {
          from: 'post_tag.tag_id',
          to: 'tag.id',
        },
      },
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/post.model.js`,
        join: {
          from: 'post_tag.post_id',
          to: 'post.id',
        }
      }
    };
  }
}

export default PostTag;
