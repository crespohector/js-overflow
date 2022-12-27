'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
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
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-User', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4'] }
    }, {});
  }
};
