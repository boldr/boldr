module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'token', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        kind: {
          type: DataTypes.STRING,
          allowNull: false
        },
        accessToken: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          type: DataTypes.UUID
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('token');
  }
};
