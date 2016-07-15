import DataTypes from 'sequelize';
import Model from '../sequelize';
import { Article, Tag } from './index';

const ArticleTag = Model.define('article_tag', {
  tagId: {
    type: DataTypes.UUID,
    references: {
      model: Tag,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'cascade'
  },
  articleId: {
    type: DataTypes.UUID,
    references: {
      model: Article,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'cascade'
  }
}, {
  uniqueKeys: {
    unique: {
      fields: ['articleId', 'tagId']
    }
  },
  tableName: 'article_tag',
  freezeTableName: true,
  timestamps: false
});

export default ArticleTag;
