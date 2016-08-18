module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('post_tag', [
      {
        tag_id: 1,
        post_id: 'fa543b68-1c7a-478d-babb-06db9cda0d99'
      },
      {
        tag_id: 2,
        post_id: 'fa524b68-1c7a-478d-babb-06db9cda0d99'
      },
      {
        tag_id: 3,
        post_id: 'fa543b68-1c7a-478d-babb-06db9cda0d99'
      },
      {
        tag_id: 3,
        post_id: 'fa524b68-1c7a-378d-babb-06db4cda0d99'
      },
      {
        tag_id: 1,
        post_id: 'fa524b68-1c7a-478d-babb-06db9cda0d99'
      },
      {
        tag_id: 2,
        post_id: 'fc424b68-1c7a-478d-babb-06db9cda0d99'
      },
      {
        tag_id: 3,
        post_id: 'ec424b28-1c7a-478d-babb-06db2cda0d99'
      },
      {
        tag_id: 2,
        post_id: 'ec424b28-1c7a-478d-babb-06db2cda0d99'
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('post_tag', null, {});
  }
};
