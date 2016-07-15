import sequelize from '../sequelize';
import User from './user';
import Token from './token';
import Article from './article';
import ArticleTag from './articleTag';
import Tag from './tag';
import Category from './category';
import Media from './media';
import MediaCategory from './mediaCategory';
import Setting from './setting';
import VerificationToken from './verification';

Article.belongsToMany(Tag, {
  through: {
    model: ArticleTag
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
  foreignKey: 'mediaId'
});

Media.belongsTo(User, {
  foreignKey: 'ownerId'
});

Tag.belongsToMany(Article, {
  through: {
    model: ArticleTag
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
Article.hasMany(ArticleTag);
Tag.hasMany(ArticleTag);

ArticleTag.belongsTo(Article);
ArticleTag.belongsTo(Tag);
User.sync().then(() => {
  User.find({ where: { displayName: 'admin' } }).then((user) => {
    if (!user) {
      User.create({
        email: 'admin@boldr.io',
        firstName: 'Admin',
        lastName: 'User',
        displayName: 'admin',
        password: 'password',
        role: 'admin'
      });
    }
  });
});
VerificationToken.belongsTo(User, {
  foreignKey: 'userId'
});
Tag.addScope('taggedInArticle', {
  distinct: 'id',
  attributes: [
    'id',
    'tagname',
    [sequelize.fn('count', sequelize.col('Article_Tag.articleId')), 'articleCount']
  ],
  include: [
    {
      attributes: [],
      model: ArticleTag,
      required: false
    }
  ],
  group: ['Tag.id'],
  order: 'articleCount DESC'
});

Article.findAllWithTagIds = () => {
  Article.findAll({
    attributes: {
      include: [
        [sequelize.literal(`ARRAY(SELECT "tagId" from "Article_Tag"
          where "Article_Tag"."articleId" = "Article"."id")`),
        'Tag']
      ],
      exclude: ['updatedAt']
    }
  });
};


function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Token, Article, Tag, Media, ArticleTag, Category, Setting, VerificationToken };
