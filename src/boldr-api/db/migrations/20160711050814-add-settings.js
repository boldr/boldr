module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
          'setting', {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              defaultValue: DataTypes.INTEGER
            },
            siteName: {
              type: DataTypes.STRING(64),
              allowNull: false,
              field: 'site_name'
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
              field: 'site_url'
            },
            favicon: {
              type: DataTypes.STRING(256),
              allowNull: true
            },
            analyticsId: {
              type: DataTypes.STRING(256),
              allowNull: true,
              field: 'analytics_id'
            },
            allowRegistration: {
              type: DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: true,
              field: 'allow_registration'
            },
            config: {
              type: DataTypes.JSON,
              allowNull: true
            }
          }
        );
  },

  down(queryInterface) {
    return queryInterface.dropTable('setting');
  }
};
