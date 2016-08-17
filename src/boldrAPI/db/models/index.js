import sequelize from '../sequelize';
import Post from './post';
import PostTag from './postTag';
import Category from './category';
import Media from './media';
import Role from './role';
import Setting from './setting';
import Tag from './tag';
import User from './user';

/*
  User / Role relations
 */
Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

/*
  User / Post relations
 */
User.hasMany(Post, {
  foreignKey: 'userId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});
Post.belongsTo(User, {
  foreignKey: 'userId'
});

/*
  User / Media relations
 */
User.hasMany(Media, {
  foreignKey: 'userId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Media.belongsTo(User, {
  foreignKey: 'userId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

/*
  Post / Tag relations
 */
Post.belongsToMany(Tag, {
  through: {
    model: PostTag
  },
  foreignKey: {
    name: 'postId',
    allowNull: true
  },
  constraints: false,
  onDelete: 'cascade'
});

Tag.belongsToMany(Post, {
  through: {
    model: PostTag
  },
  foreignKey: {
    name: 'tagId',
    allowNull: true
  },
  constraints: false,
  onDelete: 'cascade'
});
/*
  Post / Tag / PostTag relations
 */
Post.hasMany(PostTag);
Tag.hasMany(PostTag);

PostTag.belongsTo(Post);
PostTag.belongsTo(Tag);

/*
  Media / Category relations
 */
 Category.hasMany(Media, { foreignKey: 'categoryId' });
 Media.belongsTo(Category, { foreignKey: 'categoryId' });

Tag.addScope('tagToPostCount', {
  distinct: 'id',
  attributes: [
    'id',
    'name',
    [sequelize.fn('count', sequelize.col('post_tags.post_id')), 'post_count']
  ],
  include: [
    {
      attributes: [],
      model: PostTag,
      required: false
    }
  ],
  group: ['tag.id'],
  order: 'post_count DESC'
});

Post.findAllWithTagIds = () =>
  Post.findAll({
    attributes: {
      include: [
        [sequelize.literal(`ARRAY(SELECT "tag_id" from "post_tags"
          where "post_tags"."post_id" = "post"."id")`),
        'tags']
      ],
      exclude: ['updated_at']
    }
  });
function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Post, Tag, Media, PostTag, Category, Setting, Role };
