import DataType from 'sequelize';
import Model from '../sequelize';

const MediaCategories = Model.define('media_categories', {
  mediaId: {
    type: DataType.UUID
  },
  categoryId: {
    type: DataType.UUID
  }
}, {
  tableName: 'media_categories',
  freezeTableName: true,
  timestamps: false
});

export default MediaCategories;
