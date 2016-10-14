import { Model } from 'objection';
import BaseModel from '../BaseModel';
import Account from '../account/account.model';

class Token extends BaseModel {
  static get tableName() { return 'token'; }

  static get relationMappings() {
    return {
      tokens: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'token.account_id',
          to: 'account.id'
        }
      }
    };
  }

}

export default Token;
