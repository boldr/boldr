import DataTypes from 'sequelize';
import boom from 'boom';
import uuid from 'node-uuid';
import Model from '../sequelize';
import { verifyPassword, generateSaltAndHash } from '../../lib';

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

const User = Model.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  displayName: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: {
      msg: 'The specified email address is already in use.'
    },
    validate: {
      isEmail: true
    }
  },
  passwordHash: {
    type: DataTypes.STRING(4096)
  },
  salt: {
    type: DataTypes.STRING(4096)
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  bio: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  gender: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  location: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  website: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  picture: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  resetPasswordToken: {
    type: DataTypes.STRING
  },
  resetPasswordExpires: {
    type: DataTypes.DATE
  },
  provider: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  facebook: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  twitter: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  github: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  google: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  role: {
    type: DataTypes.ENUM('user', 'staff', 'admin'),
    defaultValue: 'user'
  }
}, {
  timestamps: false,
  tableName: 'users',
  freezeTableName: true,

  classMethods: {
    verifyUser,
    createWithPass,
    findByUserId
  },
  instanceMethods: {
    toJSON() {
      return {
        id: this.id,
        email: this.email,
        profile: {
          displayName: this.displayName,
          name: this.name,
          gender: this.gender,
          location: this.location,
          website: this.website,
          picture: this.picture,
          role: this.role
        }
      };
    }
  }
});

/**
 * Verify if the user can be found in db or not
 * @param  {string} email    Email of the user
 * @param  {string} password Password of the user
 * @return {Promise<Boolean,Error>} Returns a true if information is valid
 * throws an Error if not.
 * */
async function verifyUser(email, password) {
  const user = await User.findOne({ where: { email } }); // eslint-disable-line no-use-before-define
  if (!user) {
    throw boom.unauthorized('Could not find an account with matching data.');
  }
  const verify = await verifyPassword(user, password);
  if (!verify) {
    throw boom.unauthorized('Bad email or password combo.');
  }
  return user;
}
/**
 * Creates a user with the give userData object
 * @param  {Object} userData Object which contains a password and email field.
 * @return {Promise<Object, Error>}  Returns promise about the creatd user
 * or throws an error.
 */
async function createWithPass(userData, { transaction } = {}) {
  if (!userData || !userData.password || !userData.email) {
    throw new Error('User can not be created without email and password.');
  }
  const codes = await generateSaltAndHash(userData.password);
  const user = await User.create({  // eslint-disable-line no-use-before-define
    email: userData.email,
    passwordHash: codes.hashCode,
    salt: codes.salt,
    displayName: userData.displayName,
    name: userData.name,
    gender: userData.gender,
    location: userData.location,
    website: userData.website,
    bio: userData.bio,
    picture: userData.picture,
    role: userData.role
  }, { transaction });
  return user;
}
/**
 * Finds a user by userid
 * returns the model of the  user
 *
 * @param {String} userid - userid of the user to find
 *
 * @returns {Promise} Promise user model
*/
function findByUserId(userid) {
  return this.find({ where: { id: userid } });
}

function findByDisplayName(displayName) {
  return this.find({
    include: [{ all: true }],
    where: { displayName }
  });
}

export default User;
