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
 * Category Table
 * Group different content types by this
 * This simply stores the path and meta data in the database.
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Category = Model.define('category', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  image: {
    type: DataTypes.STRING(256),
    allowNull: true
  }
}, {
  tableName: 'category',
  timestamps: false,
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  },
  instanceMethods: {
    initWithData(data) {
      this.name = data.name;
      this.description = data.description;
      this.image = data.image;
    }
  },
  indexes: [
    {
      fields: ['name']
    }
  ]
});

export default Category;
