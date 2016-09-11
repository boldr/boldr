import { join } from 'path';
import { Model } from 'objection';

class Role extends Model {
  static get tableName() {
    return 'role';
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.ManyToManyRelation,
        modelClass: join(__dirname, '..', 'user', 'user.model.js'),
        join: {
          from: 'role.id',
          through: {
            from: 'user_role.role_id',
            to: 'user_role.user_id'
          },
          to: 'user.id'
        }
      }
    };
  }
}

export default Role;
