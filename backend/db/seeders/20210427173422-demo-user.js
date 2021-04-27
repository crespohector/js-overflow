'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        displayName: 'Demo-User',
        email: 'demo@user.io',
        hashedPw: bcrypt.hashSync('password'),
      },
      {
        displayName: 'FakeUser1',
        email: faker.internet.email(),
        hashedPw: bcrypt.hashSync(faker.internet.password()),
      },
      {
        displayName: 'FakeUser2',
        email: faker.internet.email(),
        hashedPw: bcrypt.hashSync(faker.internet.password()),
      },
      {
        displayName: 'FakeUser3',
        email: faker.internet.email(),
        hashedPw: bcrypt.hashSync(faker.internet.password()),
      },
      {
        displayName: 'FakeUser4',
        email: faker.internet.email(),
        hashedPw: bcrypt.hashSync(faker.internet.password()),
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-User', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4'] }
    }, {});
  }
};
