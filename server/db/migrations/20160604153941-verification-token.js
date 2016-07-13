module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'verification_tokens', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        expiresAt: DataTypes.DATE,
        userId: {
          type: DataTypes.UUID
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('verification_tokens');
  }
};
