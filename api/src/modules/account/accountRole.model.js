import { Model } from 'objection';
import Role from '../role/role.model';
import Account from './account.model';

class AccountRole extends Model {
  static get tableName() {
    return 'account_role';
  }

  static get idColumn() {
    return ['accout_id', 'role_id'];
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: 'account_role.role_id',
          to: 'role.id'
        }
      },
      account: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'account_role.account_id',
          to: 'account.id'
        }
      }
    };
  }
}

export default AccountRole;
