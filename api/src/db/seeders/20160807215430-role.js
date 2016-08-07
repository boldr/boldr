module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('role', [
      {
        id: 1,
        name: 'Pending Verification'
      },
      {
        id: 2,
        name: 'Member'
      },
      {
        id: 3,
        name: 'Moderator'
      },
      {
        id: 4,
        name: 'Staff'
      },
      {
        id: 5,
        name: 'Admin'
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('role', null, {});
  }
};
