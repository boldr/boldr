module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
        'verification_token', {
          token: {
            type: DataTypes.STRING
          },
          userId: {
            type: DataTypes.UUID
          },
          expiresAt: {
            type: DataTypes.DATE
          }
        }
      );
  },

  down(queryInterface) {
    return queryInterface.dropTable('verification_token');
  }
};
