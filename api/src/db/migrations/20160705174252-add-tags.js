module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
        'tag', {
          id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
          },
          tagname: {
            type: DataTypes.STRING(20),
            allowNull: false
          },
          description: {
            type: DataTypes.STRING(256),
            allowNull: true
          }
        }
      );
  },

  down(queryInterface) {
    return queryInterface.dropTable('tag');
  }
};
