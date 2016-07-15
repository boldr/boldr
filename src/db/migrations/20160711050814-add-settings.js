module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
          'setting', {
            id: {
              type: DataTypes.UUID,
              primaryKey: true,
              defaultValue: DataTypes.UUIDV4
            },
            siteName: {
              type: DataTypes.STRING(64),
              allowNull: false
            },
            description: {
              type: DataTypes.STRING(256),
              allowNull: true
            },
            logo: {
              type: DataTypes.STRING(256),
              allowNull: true
            },
            siteUrl: {
              type: DataTypes.STRING(256),
              allowNull: false,
              defaultValue: 'http://localhost:3000'
            },
            favicon: {
              type: DataTypes.STRING(256),
              allowNull: true
            },
            analyticsId: {
              type: DataTypes.STRING(256),
              allowNull: true,
              defaultValue: 'UA-XX1234'
            },
            allowRegistration: {
              type: DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: true
            }
          }
        );
  },

  down(queryInterface) {
    return queryInterface.dropTable('setting');
  }
};
