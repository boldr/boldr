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
          allowNull: true,
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
          field: 'first_name'
        },
        lastName: {
          type: DataTypes.STRING(64),
          field: 'last_name'
        },
        gender: {
          type: DataTypes.ENUM('male', 'female', 'trans')
        },
        bio: {
          type: DataTypes.TEXT,
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
          type: DataTypes.STRING
        },
        avatarUrl: {
          type: DataTypes.STRING,
          defaultValue: '',
          field: 'avatar_url'
        },
        roleId: {
          type: DataTypes.INTEGER,
          field: 'role_id'
        },
        resetPasswordToken: {
          type: DataTypes.STRING,
          field: 'reset_password_token'
        },
        resetPasswordExpires: {
          type: DataTypes.DATE,
          field: 'reset_password_expires'
        },
        verified: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        provider: {
          type: DataTypes.STRING
        },
        google: {
          type: DataTypes.STRING
        },
        facebook: {
          type: DataTypes.STRING
        },
        twitter: {
          type: DataTypes.STRING
        },
        github: {
          type: DataTypes.INTEGER
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
