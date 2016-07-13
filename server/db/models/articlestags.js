import DataType from 'sequelize';
import Model from '../sequelize';

const ArticlesTags = Model.define('articles_tags', {
  tagId: {
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'tags',
      key: 'id'
    }
  },
  articleId: {
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'articles',
      key: 'id'
    }
  }
}, {
  tableName: 'articles_tags',
  freezeTableName: true,
  timestamps: false
});

export default ArticlesTags;
