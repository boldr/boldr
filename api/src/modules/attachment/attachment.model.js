import { Model } from 'objection';
import Account from '../account/account.model';
import BaseModel from '../BaseModel';

class Attachment extends BaseModel {
  static get tableName() { return 'attachment'; }
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: 'attachment.account_id',
          to: 'account.id'
        }
      }
    };
  }
}

export default Attachment;
