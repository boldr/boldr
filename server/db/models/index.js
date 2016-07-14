import sequelize from '../sequelize';
import User from './user';
import Token from './token';
import Article from './article';
import ArticlesTags from './articlesTags';
import Tag from './tag';
import Category from './category';
import Media from './media';
import MediaCategories from './mediaCategories';
import Setting from './setting';
import VerificationToken from './verification';
import Role from './Role';

Article.belongsToMany(Tag, {
  through: {
    model: ArticlesTags,
    unique: true
  },
  foreignKey: {
    name: 'articleId',
    allowNull: true
  },
  constraints: false,
  onDelete: 'cascade'
});

Article.belongsTo(User, {
  foreignKey: 'authorId'
});

Category.hasMany(Media, {
  foreignKey: 'categoryId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Media.belongsTo(Category, {
  foreignKey: 'categoryId'
});

Media.belongsTo(User, {
  foreignKey: 'ownerId'
});
Role.belongsToMany(User, { through: 'user_roles' });
Tag.belongsToMany(Article, {
  through: {
    model: ArticlesTags,
    unique: true
  },
  foreignKey: {
    name: 'tagId',
    allowNull: true
  },
  constraints: false,
  onDelete: 'cascade'
});

Token.belongsTo(User, {
  foreignKey: 'userId'
});

User.belongsToMany(Role, {
  through: 'user_roles'
});

User.hasMany(Token, {
  foreignKey: 'userId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasMany(Article, {
  foreignKey: 'authorId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasMany(Media, {
  foreignKey: 'ownerId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasOne(VerificationToken, {
  foreignKey: 'verificationTokenId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});
VerificationToken.belongsTo(User, {
  foreignKey: 'userId'
});
User.sync().then(() => {
  User.find({ where: { displayName: 'admin' } }).then((user) => {
    if (!user) {
      User.create({
        email: 'admin@boldr.io',
        firstName: 'Admin',
        lastName: 'User',
        displayName: 'admin',
        password: 'password'
      });
    }
  });
});
Role.sync().then(() => {
  Role.find({ where: { name: 'user' } }).then((role) => {
    if (!role) {
      Role.create({
        name: 'user',
        description: 'The user class'
      });
    }
  });
});


function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Token, Article, Tag, Media, ArticlesTags, Category, Setting, VerificationToken, Role };
