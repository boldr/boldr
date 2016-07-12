import DataType from 'sequelize';
import Model from '../sequelize';
import uuid from 'node-uuid';
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
const Media = Model.define('media', {
  id: {
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  },
  filename: {
    type: DataType.STRING(256),
    allowNull: true
  },
  originalname: {
    type: DataType.STRING(256),
    allowNull: true
  },
  mimetype: {
    type: DataType.STRING(56),
    allowNull: true
  },
  key: {
    type: DataType.STRING(56),
    allowNull: true
  },
  meta: {
    type: DataType.JSONB
  },
  size: {
    type: DataType.INTEGER
  },
  s3url: {
    type: DataType.STRING,
    allowNull: false
  },
  ownerId: {
    type: DataType.UUID
  },
  categoryId: {
    type: DataType.INTEGER
  },
  createdAt: {
    type: DataType.DATE
  },
  updatedAt: {
    type: DataType.DATE
  }
}, {
  tableName: 'media',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  }
});

export default Media;
