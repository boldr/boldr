import { Model } from 'objection';
import BaseModel from '../BaseModel';
import Account from '../account/account.model';

class Activity extends BaseModel {
  static get tableName() { return 'activity'; }
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'activity.account_id',
          to: 'account.id'
        }
      }
    };
  }
}

export default Activity;
