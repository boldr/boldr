module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tag', [
      {
        id: 1,
        name: 'Development',
        description: 'Content for web development',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'JavaScript',
        description: 'All JS, all the time',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'React',
        description: 'React resources',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tag', null, {});
  }
};
