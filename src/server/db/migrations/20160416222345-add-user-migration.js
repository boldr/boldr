module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'user', {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        displayName: {
          type: DataTypes.STRING,
          allowNull: false,
          field: 'display_name'
        },
        password: {
          type: DataTypes.STRING(4096)
        },
        salt: {
          type: DataTypes.STRING(4096)
        },
        firstName: {
          type: DataTypes.STRING(32),
          allowNull: false,
          field: 'first_name'
        },
        lastName: {
          type: DataTypes.STRING(64),
          allowNull: false,
          field: 'last_name'
        },
        bio: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        gender: {
          type: DataTypes.ENUM('male', 'female', 'trans')
        },
        birthday: {
          type: DataTypes.DATE,
          allowNull: true
        },
        location: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        website: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        avatarUrl: {
          type: DataTypes.STRING(256),
          allowNull: true,
          field: 'avatar_url'
        },
        roleId: {
          type: DataTypes.INTEGER,
          field: 'role_id',
          defaultValue: 1
        },
        resetPasswordToken: {
          type: DataTypes.STRING,
          allowNull: true,
          field: 'reset_password_token'
        },
        resetPasswordExpires: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'reset_password_expires'
        },
        provider: {
          type: DataTypes.STRING,
          defaultValue: ''
        },
        facebookId: {
          type: DataTypes.STRING,
          defaultValue: ''
        },
        facebookProfile: {
          type: DataTypes.STRING,
          field: 'facebook_profile',
          defaultValue: ''
        },
        twitterId: {
          type: DataTypes.STRING,
          defaultValue: ''
        },
        twitterHandle: {
          type: DataTypes.STRING,
          field: 'twitter_handle',
          defaultValue: ''
        },
        githubId: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        githubProfile: {
          type: DataTypes.STRING,
          field: 'github_profile',
          allowNull: true
        },
        googleId: {
          type: DataTypes.STRING,
          defaultValue: ''
        },
        googlePlus: {
          type: DataTypes.STRING,
          field: 'google_plus',
          defaultValue: ''
        },
        linkedIn: {
          type: DataTypes.STRING,
          defaultValue: ''
        },
        verified: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: new Date(),
          field: 'created_at'
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: new Date(),
          field: 'updated_at'
        },
        deletedAt: {
          allowNull: true,
          type: DataTypes.DATE,
          field: 'deleted_at'
        }
      }
    ).then(() =>
      queryInterface.addIndex(
        'user',
        [DataTypes.fn('lower', DataTypes.col('email'))],
        {
          indexName: 'user_email',
          indicesType: 'unique'
        }
      )
    );
  },
  down(queryInterface) {
    return queryInterface.dropTable('user');
  }
};
