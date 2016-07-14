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
          allowNull: true
        },
        password: {
          type: DataTypes.STRING(4096)
        },
        salt: {
          type: DataTypes.STRING(4096)
        },
        firstName: {
          type: DataTypes.STRING(32)
        },
        lastName: {
          type: DataTypes.STRING(64)
        },
        gender: {
          type: DataTypes.STRING,
          defaultValue: ''
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
          type: DataTypes.STRING
        },
        role: {
          type: DataTypes.ENUM('user', 'staff', 'admin'),
          defaultValue: 'user'
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
