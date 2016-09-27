import { join } from 'path';
import { Model } from 'objection';
import Promise from 'bluebird';
import BaseModel from '../BaseModel';
import Role from '../role/role.model';
import Media from '../media/media.model';

const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

class User extends BaseModel {
  static get tableName() {
    return 'user';
  }

  /**
   * An array of attribute names that will be excluded from being returned.
   *
   * @type {array}
   */
  static hidden = [
      'password'
  ];

  static get relationMappings() {
    return {
      role: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'user.id',
          through: {
            from: 'user_role.user_id',
            to: 'user_role.role_id'
          },
          to: 'role.id'
        }
      },
      uploads: {
        relation: Model.HasManyRelation,
        modelClass: Media,
        join: {
          from: 'user.id',
          to: 'media.user_id'
        }
      }
    };
  }

  fullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  stripPassword() {
    delete this['password']; // eslint-disable-line
    delete this['account_token']; // eslint-disable-line
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
        this.password = bcrypt.hashAsync(this.password, 10);
    }
  }
  /**
   * authenticate is specific to the user instance. compares the hashed password
   * with the password from the request.
   * @param plainText
   * @returns {*}
   */
  authenticate(plainText) {
    return bcrypt.compareAsync(plainText, this.password);
  }
  /**
   * Before updating make sure we hash the password if provided.
   *
   * @param {object} queryContext
   */
  $beforeUpdate(queryContext) {
    super.$beforeUpdate(queryContext);

    if (this.hasOwnProperty('password')) {
      this.password = bcrypt.hashAsync(this.password, 10);
    }
  }
}

export default User;
