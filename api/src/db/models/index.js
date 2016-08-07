import sequelize from '../sequelize';
import Post from './post';
import PostTag from './postTag';
import Category from './category';
import Media from './media';
import MediaCategory from './mediaCategory';
import Setting from './setting';
import Tag from './tag';
import Token from './token';
import User from './user';
import VerificationToken from './verification';

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

Post.belongsTo(User, {
  foreignKey: 'authorId'
});

Media.belongsTo(User, {
  foreignKey: 'ownerId'
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

Token.belongsTo(User, {
  foreignKey: 'userId'
});

User.hasMany(Token, {
  foreignKey: 'userId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasMany(Post, {
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


Post.hasMany(PostTag);
Tag.hasMany(PostTag);

PostTag.belongsTo(Post);
PostTag.belongsTo(Tag);

User.hasOne(VerificationToken, {
  foreignKey: 'verificationTokenId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

VerificationToken.belongsTo(User, {
  foreignKey: 'userId'
});
// 
// User.sync().then(() => {
//   User.find({ where: { displayName: 'admin' } }).then(user => {
//     if (!user) {
//       User.create({
//         bio: 'Zombie nerd. Web practitioner. General music ninja. Infuriatingly humble introvert. Bacon fanatic. Pop culture geek.',
//         displayName: 'Admin User',
//         email: 'admin@boldr.io',
//         firstName: 'Admin',
//         gender: 'male',
//         lastName: 'User',
//         location: 'Somewhere, USA',
//         password: 'password',
//         picture: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
//         role: 'admin',
//         website: 'https://boldr.io'
//       });
//     }
//   });
// });

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Token, Post, Tag, Media, PostTag, MediaCategory, Category, Setting, VerificationToken };
