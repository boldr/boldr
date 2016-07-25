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
 * Tags Table
 * Tags for content
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Tag = Model.define('tag', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  tagname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'tag',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  }
});
export default Tag;
