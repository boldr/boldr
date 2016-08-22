import DataTypes from 'sequelize';
import Model from '../sequelize';

/**
 * Menu Table
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Menu = Model.define('menu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  primary: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  location: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  restricted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  items: {
    type: DataTypes.JSON,
    allowNull: false
  }
}, {
  tableName: 'menu',
  timestamps: false,
  freezeTableName: true
});

export default Menu;
