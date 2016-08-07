module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        email: 'admin@boldr.io',
        display_name: 'John Doe',
        password: 'khe0u0a1GyEuVoHLKs3XubiSjlbOofqVdLgssII4WRAK9GpSrt+FKmo7M/ql2gUCLWEaEASlSre/HPuwBAz5zw==',
        salt: 'VUPEt75zr0Z281GepJ+tZw==',
        first_name: 'John',
        last_name: 'Doe',
        gender: 'male',
        bio: 'Zombie nerd. Web practitioner. General music ninja. Infuriatingly humble introvert. Bacon fanatic. Pop culture geek',
        birthday: '08/07/1985',
        location: 'Somewhere, USA',
        website: 'https://boldr.io',
        avatar_url: 'https://boldr.io/boldrlogo.svg',
        verified: true,
        provider: 'local',
        role_id: 5
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
