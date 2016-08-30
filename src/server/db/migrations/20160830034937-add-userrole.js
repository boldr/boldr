module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'user_role', {
        userId: {
          type: DataTypes.UUID,
          field: 'user_id'
        },
        roleId: {
          type: DataTypes.INTEGER,
          field: 'role_id'
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('user_role');
  }
};
