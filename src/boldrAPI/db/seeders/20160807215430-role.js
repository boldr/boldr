module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('role', [
      {
        id: 1,
        name: 'Pending Verification',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Member',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Moderator',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'Staff',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('role', null, {});
  }
};
