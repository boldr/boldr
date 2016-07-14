module.exports = {
  up(queryInterface, DataType) {
    return queryInterface.createTable(
      'roles', {
        id: {
          type: DataType.UUID,
          primaryKey: true,
          defaultValue: DataType.UUIDV4
        },
        name: {
          type: DataType.STRING(20),
          allowNull: false
        },
        description: {
          type: DataType.STRING(256),
          allowNull: true
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('roles');
  }
};
