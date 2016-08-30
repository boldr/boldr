module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        email: 'admin@boldr.io',
        display_name: 'John Doe',
        password: 'ER4wZ2s7RSGPWkPZIkfZOuZ661Auucssny3VpBcRT29+wDYlZUCeBs8fM/u3oMzONokicl3dMIMM4ZUNNuNPVw==',
        salt: 'KCQgnOAD8TO+lvs9Z0ULuA==',
        first_name: 'John',
        last_name: 'Doe',
        gender: 'male',
        bio: 'Zombie nerd. Web practitioner. General music ninja. Infuriatingly humble introvert. Bacon fanatic. Pop culture geek',
        birthday: '08/07/1985',
        location: 'Somewhere, USA',
        website: 'https://boldr.io',
        avatar_url: 'https://boldr.io/boldrlogo.svg',
        github_profile: 'https://github.com/strues',
        twitter_handle: 'StruesCO',
        facebook_profile: 'http://facebook.com',
        google_plus: 'http://googlecom',
        linkedIn: 'http://linkedin.com',
        verified: true,
        provider: 'local',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
