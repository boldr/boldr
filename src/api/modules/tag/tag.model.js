import { join } from 'path';
import { Model } from 'objection';

class Tag extends Model {
  static get tableName() { return 'tag'; }
  static get relationMappings() {
    return {
      posts: {
        relation: Model.ManyToManyRelation,
        modelClass: join(__dirname, '..', 'post', 'post.model.js'),
        join: {
          from: 'tag.id',
          through: {
            from: 'post_tag.tag_id',
            to: 'post_tag.post_id',
          },
          to: 'post.id',
        },
      }
    };
  }
}

export default Tag;
