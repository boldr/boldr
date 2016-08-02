import sequelize from '../sequelize';
import Article from './article';
import ArticleTag from './articleTag';
import Category from './category';
import Media from './media';
import MediaCategory from './mediaCategory';
import Setting from './setting';
import Tag from './tag';
import Token from './token';
import User from './user';
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
//
// Media.belongsTo(User, {
//   foreignKey: 'mediaId',
//   onUpdate: 'cascade',
//   onDelete: 'cascade'
// });


Article.hasMany(ArticleTag);
Tag.hasMany(ArticleTag);

ArticleTag.belongsTo(Article);
ArticleTag.belongsTo(Tag);

User.hasOne(VerificationToken, {
  foreignKey: 'verificationTokenId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

VerificationToken.belongsTo(User, {
  foreignKey: 'userId'
});
//
// Media.hasMany(MediaCategory, {
//   foreignKey: 'mediaId',
//   onUpdate: 'cascade',
//   onDelete: 'cascade'
// });
// Category.hasMany(MediaCategory, {
//   foreignKey: 'categoryId',
//   onUpdate: 'cascade',
//   onDelete: 'cascade'
// });
// MediaCategory.belongsTo(Media);
// MediaCategory.belongsTo(Category);

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

User.sync().then(() => {
  User.find({ where: { displayName: 'admin' } }).then(user => {
    if (!user) {
      User.create({
        bio: 'Zombie nerd. Web practitioner. General music ninja. Infuriatingly humble introvert. Bacon fanatic. Pop culture geek.',
        displayName: 'Admin User',
        email: 'admin@boldr.io',
        firstName: 'Admin',
        gender: 'male',
        lastName: 'User',
        location: 'Somewhere, USA',
        password: 'password',
        picture: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
        role: 'admin',
        website: 'https://boldr.io'
      });
    }
  });
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Token, Article, Tag, Media, ArticleTag, MediaCategory, Category, Setting, VerificationToken };
