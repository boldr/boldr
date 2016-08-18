module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('setting', [
      {
        id: '1',
        site_name: 'Boldr',
        site_url: 'http://localhost:3000',
        description: 'A bold CMS for the modern world.',
        logo: 'https://boldr.io/boldrlogo.png',
        favicon: 'https://boldr.io/favicon.ico',
        allow_registration: true,
        analytics_id: 'UA-28905817-7'
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('setting', null, {});
  }
};
