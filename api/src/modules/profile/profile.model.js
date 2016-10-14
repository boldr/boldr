import { Model } from 'objection';
import Account from '../account/account.model';
import BaseModel from '../BaseModel';

class Profile extends BaseModel {
  static get tableName() { return 'profile'; }

  static get relationMappings() {
    return {
      account: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'profile.account_id',
          to: 'account.id'
        }
      }
    };
  }

}

export default Profile;
