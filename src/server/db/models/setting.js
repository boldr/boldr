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
 * Setting Table
 * The setting table contains information about site specific configuration values.
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Setting = Model.define('setting', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  siteName: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  logo: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  siteUrl: {
    type: DataTypes.STRING(256),
    allowNull: false,
    defaultValue: 'http://localhost:3000'
  },
  favicon: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  analyticsId: {
    type: DataTypes.STRING(256),
    allowNull: true,
    defaultValue: 'UA-XX1234'
  },
  allowRegistration: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'setting',
  freezeTableName: true,
  timestamps: false,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  }
});

export default Setting;
