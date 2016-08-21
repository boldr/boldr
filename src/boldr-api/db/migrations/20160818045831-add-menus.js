module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'menu', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        primary: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        restricted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        location: {
          type: DataTypes.STRING(256),
          allowNull: true
        },
        items: {
          type: DataTypes.JSON,
          allowNull: false
        }
      });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('menu');
  }
};
