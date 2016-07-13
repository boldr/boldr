import moment from 'moment';
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
 * Articles Table
 * Articles have one author and belong to many tags.
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Article = Model.define('articles', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true
  },
  featureImage: {
    type: DataTypes.STRING(256),
    defaultValue: ''
  },
  content: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  excerpt: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  markup: {
    type: DataTypes.JSON,
    defaultValue: '',
    allowNull: true
  },
  authorId: {
    type: DataTypes.UUID
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ['draft', 'published', 'archived'],
    defaultValue: 'draft'
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  tableName: 'articles',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  },
  indexes: [
    {
      fields: ['slug', 'createdAt', 'status']
    }
  ],
  instanceMethods: {
    publishedAt() {
      return moment(this.createdAt, 'dddd, mmmm dS, yyyy, h:MM TT');
    },
    shortDescription() {
      return this.content.length > 30 ? `${this.content.substr(0, 30)}...` : this.content;
    },
    getArticles(args) {
      const { limit = 10, skip = 0 } = args;
      return Article.findAll({
        where: {
          status: 'published'
        },
        limit,
        offset: skip
      });
    }
  }
});
export default Article;
