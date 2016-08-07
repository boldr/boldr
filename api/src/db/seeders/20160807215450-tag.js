module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tag', [
      {
        id: 1,
        name: 'Development',
        description: 'Content for web development'
      },
      {
        id: 2,
        name: 'JavaScript',
        description: 'All JS, all the time'
      },
      {
        id: 3,
        name: 'React',
        description: 'React resources'
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tag', null, {});
  }
};
