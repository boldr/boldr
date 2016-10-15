/* eslint-disable id-match */ /* eslint-disable no-unused-vars */
import bcrypt from 'bcryptjs';
import { Model } from 'objection';
import Role from '../role/role.model';
import Attachment from '../attachment/attachment.model';
import Profile from '../profile/profile.model';
import Token from '../token/token.model';
import BaseModel from '../BaseModel';
import AccountRole from './accountRole.model';

class Account extends BaseModel {
  static get tableName() { return 'account'; }
  /**
   * An array of attribute names that will be excluded from being returned.
   *
   * @type {array}
   */
  static hidden = [
  ];

  static get relationMappings() {
    return {
      role: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'account.id',
          through: {
            from: 'account_role.account_id',
            to: 'account_role.role_id'
          },
          to: 'role.id'
        }
      },
      profile: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'account.id',
          to: 'profile.account_id'
        }
      },
      uploads: {
        relation: Model.HasManyRelation,
        modelClass: Attachment,
        join: {
          from: 'account.id',
          to: 'attachment.account_id'
        }
      },
      tokens: {
        relation: Model.HasOneRelation,
        modelClass: Token,
        join: {
          from: 'account.id',
          to: 'token.account_id'
        }
      }
    };
  }

  stripPassword() {
    delete this['password']; // eslint-disable-line
    return this;
  }
  /**
   * Before inserting make sure we hash the password if provided.
   *
   * @param {object} queryContext
   */
  $beforeInsert(queryContext) {
    super.$beforeInsert(queryContext);

    if (this.hasOwnProperty('password')) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }
  /**
   * authenticate is specific to the user instance. compares the hashed password
   * with the password from the request.
   * @param plainText
   * @returns {*}
   */
  authenticate(plainText) {
    return bcrypt.compareSync(plainText, this.password);
  }
  /**
   * Before updating make sure we hash the password if provided.
   *
   * @param {object} queryContext
   */
  $beforeUpdate(queryContext) {
    super.$beforeUpdate(queryContext);

    if (this.hasOwnProperty('password')) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }
  }

export default Account;
