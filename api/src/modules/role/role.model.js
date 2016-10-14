import { Model } from 'objection';
import Account from '../account/account.model';
import BaseModel from '../BaseModel';

class Role extends BaseModel {
  static get tableName() {
    return 'role';
  }

  static get relationMappings() {
    return {
      role: {
        relation: Model.ManyToManyRelation,
        modelClass: Account,
        join: {
          from: 'role.id',
          through: {
            from: 'account_role.role_id',
            to: 'account_role.account_id'
          },
          to: 'account.id'
        }
      }
    };
  }
}

export default Role;
