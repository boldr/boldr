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
 * Post Table
 * Post have one author and belong to many tags.
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const Post = Model.define('post', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [5, 150],
        msg: 'Please enter at title with at least 5 chars but no more than 150'
      }
    }
  },
  slug: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  featureImage: {
    type: DataTypes.STRING(256),
    defaultValue: '',
    field: 'feature_image'
  },
  content: {
    type: DataTypes.TEXT,
    defaultValue: '',
    allowNull: false
  },
  excerpt: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: ['draft', 'published', 'archived'],
    defaultValue: 'published'
  },
  authorId: {
    type: DataTypes.UUID
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}, {
  tableName: 'post',
  freezeTableName: true,
  hooks: {
    beforeValidate: createUUIDIfNotExist
  },
  indexes: [
    {
      fields: ['slug', 'created_at', 'status']
    }
  ],
  instanceMethods: {
    tagIds: () => this.getTags().map(tag => tag.get('id')),
    publishedAt() {
      return moment(this.createdAt, 'dddd, mmmm dS, yyyy, h:MM TT');
    }
  },
  classMethods: {
    getPosts(args) {
      const { limit = 10, skip = 0 } = args;
      return this.findAll({
        where: {
          status: 'published'
        },
        limit,
        offset: skip
      });
    },
    findBySlug(slug) {
      return this.findOne({ where: { slug }, include: [{
        model: Model.Tag,
        attributes: ['name', 'id']
      }] });
    },
    findByAuthor(authorId) {
      return this.findAll({ where: { authorId } });
    },
    findById(postId) {
      return this.findAll({ where: { id: postId } });
    }
  }
});
export default Post;
