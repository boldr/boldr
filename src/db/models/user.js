import crypto from 'crypto';
import DataTypes from 'sequelize';
import boom from 'boom';
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

const authTypes = ['github', 'twitter', 'facebook', 'google'];

/**
 * Check and make sure a value is included where it should be.
 * @param  {String} value  What is being tested for.
 * @return {Boolean}       returns true or false
 */
const validatePresenceOf = function(value) {
  return value && value.length;
};

/**
 * Users Table
 * @param sequelize
 * @param DataTypes
 * @returns {*|{}|Model}
 */
const User = Model.define('user', {
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
  password: {
    type: DataTypes.STRING(4096)
  },
  salt: {
    type: DataTypes.STRING(4096)
  },
  firstName: {
    type: DataTypes.STRING(32),
    defaultValue: ''
  },
  lastName: {
    type: DataTypes.STRING(64),
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
  birthday: {
    type: DataTypes.DATE
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
  tableName: 'user',
  freezeTableName: true,
  classMethods: {
    findByDisplayName,
    findByEmail,
    findByUserId
  },
  instanceMethods: {
    toJSON,
    authenticate,
    updatePassword,
    makeSalt,
    encryptPassword,
    initWithData(data) {
      this.email = data.email;
      this.password = data.password;
      this.displayName = data.displayName;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.gender = data.gender;
      this.location = data.location;
      this.website = data.website;
      this.picture = data.picture;
      this.role = data.role;
    }
  },
  /**
   * Virtual Getters
   */
  getterMethods: {
    // Public profile information
    profile() {
      return {
        firstName: this.firstName,
        role: this.role
      };
    },
    // Non-sensitive info we'll be putting in the token
    token() {
      return {
        id: this.id,
        role: this.role
      };
    }
  },
  hooks: {
    beforeBulkCreate(users, fields, fn) {
      let totalUpdated = 0;
      users.forEach((user) => {
        user.updatePassword((err) => {
          if (err) {
            return fn(err);
          }
          totalUpdated += 1;
          if (totalUpdated === users.length) {
            return fn();
          }
        });
      });
    },
    beforeCreate(user, fields, fn) {
      user.updatePassword(fn);
    },
    beforeUpdate(user, fields, fn) {
      if (user.changed('password')) {
        return user.updatePassword(fn);
      }
      fn();
    }
  }
});

/**
 * Public information that is sent back as a response for users
 * @return {Object} User Returns the user object without password, salt, and private info.
 */
function toJSON() {
  return {
    id: this.id,
    email: this.email,
    profile: {
      displayName: this.displayName,
      firstName: this.firstName,
      gender: this.gender,
      location: this.location,
      website: this.website,
      picture: this.picture,
      role: this.role
    }
  };
}
/**
 * Make salt
 *
 * @param {Number} byteSize Optional salt byte size, default to 16
 * @param {Function} callback
 * @return {String}
 * @api public
 */
function makeSalt(byteSize, callback) {
  const defaultByteSize = 16;

  if (typeof arguments[0] === 'function') { // eslint-disable-line
    callback = arguments[0]; // eslint-disable-line
    byteSize = defaultByteSize;
  }
  else if (typeof arguments[1] === 'function') { // eslint-disable-line
    callback = arguments[1]; // eslint-disable-line
  }

  if (!byteSize) {
    byteSize = defaultByteSize;
  }

  if (!callback) {
    return crypto.randomBytes(byteSize).toString('base64');
  }

  return crypto.randomBytes(byteSize, (err, salt) => {
    if (err) {
      callback(err);
    }
    return callback(null, salt.toString('base64'));
  });
}

/**
 * Encrypt password
 *
 * @param {String} password
 * @param {Function} callback
 * @return {String}
 * @api public
 */
function encryptPassword(password, callback) {
  if (!password || !this.salt) {
    if (!callback) {
      return null;
    }
    return callback(null);
  }

  const defaultIterations = 10000;
  const defaultKeyLength = 64;
  const salt = new Buffer(this.salt, 'base64');

  if (!callback) {
    return crypto.pbkdf2Sync(password, salt, defaultIterations, defaultKeyLength, 'sha1')
             .toString('base64');
  }

  return crypto.pbkdf2(password, salt, defaultIterations, defaultKeyLength, 'sha1',
(err, key) => {
  if (err) {
    callback(err);
  }
  return callback(null, key.toString('base64'));
});
}

/**
 * Authenticate - check if the passwords are the same
 *
 * @param {String} password
 * @param {Function} callback
 * @return {Boolean}
 * @api public
 */
function authenticate(password, callback) {
  if (!callback) {
    return this.password === this.encryptPassword(password);
  }

  const _this = this;
  this.encryptPassword(password, (err, pwdGen) => {
    if (err) {
      callback(err);
    }

    if (_this.password === pwdGen) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  });
}

/**
 * Update password field
 *
 * @param {Function} fn
 * @return {String}
 * @api public
 */
function updatePassword(fn) {
  // Handle new/update passwords
  if (this.password) {
    if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1) {
      fn(new Error('Invalid password'));
    }

    // Make salt with a callback
    const _this = this;
    this.makeSalt((saltErr, salt) => {
      if (saltErr) {
        fn(saltErr);
      }
      _this.salt = salt;
      _this.encryptPassword(_this.password, (encryptErr, hashedPassword) => {
        if (encryptErr) {
          fn(encryptErr);
        }
        _this.password = hashedPassword;
        fn(null);
      });
    });
  } else {
    fn(null);
  }
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

/**
 * Finds a user by its email
 * returns the model of the  user
 *
 * @param {String} email - the user's email address
 *
 * @returns {Promise} Promise user model
*/
function findByEmail(email) {
  return this.find({
    where: { email }
  });
}

export default User;
