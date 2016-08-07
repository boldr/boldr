import sequelize from '../sequelize';
import Post from './post';
import PostTag from './postTag';
import Category from './category';
import Media from './media';
import MediaCategory from './mediaCategory';
import Role from './role';
import Setting from './setting';
import Tag from './tag';
import User from './user';

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
  foreignKey: 'userId'
});

Media.belongsTo(User, {
  foreignKey: 'userId'
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
User.hasMany(Post, {
  foreignKey: 'userId',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});


User.hasMany(Media, {
  foreignKey: 'userId',
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

Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

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
export { User, Post, Tag, Media, PostTag, MediaCategory, Category, Setting, Role };
