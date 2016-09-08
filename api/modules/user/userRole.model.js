import { join } from 'path';
import { Model } from 'objection';

class UserRole extends Model {
  static get tableName() {
    return 'user_role';
  }

  static get idColumn() {
    return ['post_id', 'tag_id'];
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: join(__dirname, '..', 'role', 'role.model.js'),
        join: {
          from: 'user_role.role_id',
          to: 'role.id',
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/user.model.js`,
        join: {
          from: 'user_role.user_id',
          to: 'user.id',
        }
      }
    };
  }
}

export default UserRole;
