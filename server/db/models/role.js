import DataTypes from 'sequelize';
import uuid from 'node-uuid';
import Model from '../sequelize';
/**
 * Creates a UUID for the User if it's not given.
 * @param  {Object} instance Instance object of the User
 * @return {void}
 */
function createUUIDIfNotExist(instance) {
  if (!instance.id) {
    instance.id = uuid.v4();
  }
}
/**
 * Role Table
 * User roles for ACL
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Role = Model.define('roles', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(128),
    primaryKey: true,
    validate: {
      notEmpty: true
    },
    unique: true
  },
  description: {
    type: DataTypes.STRING(255),
    validate: {
      notEmpty: true
    }
  }
}, {
  timestamps: false,
  tableName: 'roles',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  }
});
export default Role;
