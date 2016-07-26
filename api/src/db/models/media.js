import DataTypes from 'sequelize';
import uuid from 'node-uuid';
import Model from '../sequelize';
import User from './user';
import Category from './category';

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
 * Media Table
 * Media defined as any file/image/video uploaded to AWS S3.
 * This simply stores the path and meta data in the database.
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Media = Model.define('media', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  filename: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  originalname: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  mimetype: {
    type: DataTypes.STRING(56),
    allowNull: true
  },
  key: {
    type: DataTypes.STRING(56),
    allowNull: true
  },
  meta: {
    type: DataTypes.JSONB
  },
  size: {
    type: DataTypes.INTEGER
  },
  s3url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ownerId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.UUID,
    references: {
      model: Category,
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'media',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  }
});

export default Media;
