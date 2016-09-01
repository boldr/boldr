module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_role', [
      {
        user_id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        role_id: 5
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_role', null, {});
  }
};
