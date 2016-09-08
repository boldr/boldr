import { join } from 'path';
import { Model } from 'objection';
import Promise from 'bluebird';

const bcrypt = Promise.promisifyAll(require('bcrypt'));

class User extends Model {
  static get tableName() {
    return 'user';
  }


  static get relationMappings() {
    return {
      role: {
        relation: Model.ManyToManyRelation,
        modelClass: join(__dirname, '..', 'role', 'role.model.js'),
        join: {
          from: 'user.id',
          through: {
            from: 'user_role.user_id',
            to: 'user_role.role_id'
          },
          to: 'role.id'
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
   * authenticate is specific to the user instance. compares the hashed password
   * with the password from the request.
   * @param plainText
   * @returns {*}
   */
  authenticate(plainText) {
    return bcrypt.compareAsync(plainText, this.password);
  }
}

export default User;
