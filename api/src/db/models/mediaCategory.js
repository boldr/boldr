import DataTypes from 'sequelize';
import Model from '../sequelize';
/**
 * Media_Category Table
 * Relationship mapping for Media and Category
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const MediaCategory = Model.define('media_category', {
  mediaId: {
    type: DataTypes.UUID
  },
  categoryId: {
    type: DataTypes.UUID
  }
}, {
  tableName: 'media_category',
  paranoid: true,
  freezeTableName: true,
  timestamps: false
});

export default MediaCategory;
