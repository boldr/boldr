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
const Role = Model.define('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ['active', 'inactive'],
    defaultValue: 'active'
  }
}, {
  tableName: 'role',
  timestamps: true,
  freezeTableName: true
});

export default Role;
