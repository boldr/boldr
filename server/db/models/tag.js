import DataType from 'sequelize';
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
const Tag = Model.define('tags', {
  id: {
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  },
  tagname: {
    type: DataType.STRING(20),
    allowNull: false
  },
  description: {
    type: DataType.STRING(256),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'tags',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  },
  indexes: [
    {
      fields: ['tagname'], unique: true
    }
  ]
});
export default Tag;
