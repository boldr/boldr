import DataTypes from 'sequelize';
import Model from '../sequelize';
import { Post, Tag } from './index';

const PostTag = Model.define('post_tag', {
  tagId: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'cascade'
  },
  postId: {
    type: DataTypes.UUID,
    references: {
      model: Post,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'cascade'
  }
}, {
  uniqueKeys: {
    unique: {
      fields: ['postId', 'tagId']
    }
  },
  tableName: 'post_tag',
  freezeTableName: true,
  timestamps: false
});

export default PostTag;
