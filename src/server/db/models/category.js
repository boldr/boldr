import DataTypes from 'sequelize';
import Model from '../sequelize';

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
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}, {
  tableName: 'category',
  timestamps: true,
  freezeTableName: true,
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
