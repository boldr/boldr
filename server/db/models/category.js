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
const Category = Model.define('categories', {
  id: {
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  },
  name: {
    type: DataType.STRING(30),
    allowNull: false
  },
  description: {
    type: DataType.STRING(256),
    allowNull: true
  },
  image: {
    type: DataType.STRING(256),
    allowNull: true
  }
}, {
  tableName: 'categories',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  },
  indexes: [
    {
      fields: ['name']
    }
  ]
});

export default Category;
