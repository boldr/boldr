module.exports = {
  up(queryInterface, DataType) {
    return queryInterface.createTable(
      'tags', {
        id: {
          type: DataType.UUID,
          primaryKey: true,
          defaultValue: DataType.UUIDV4
        },
        tagname: {
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
    return queryInterface.dropTable('tags');
  }
};
