module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
        'category', {
          id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
          },
          name: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
          description: {
            type: DataTypes.STRING(256),
            allowNull: true
          },
          image: {
            type: DataTypes.STRING(256),
            allowNull: true
          }
        }
      );
  },

  down(queryInterface) {
    return queryInterface.dropTable('category');
  }
};
