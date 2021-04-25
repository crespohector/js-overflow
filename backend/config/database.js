// backend/config/database.js
const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
<<<<<<< HEAD
    use_env_variable: 'DATABASE_URL',
=======
    use_env_variable: 'DATABASE_URL',    // when this app is deployed to production, the database will read from this / a URL instead of the username, pw and DB name
>>>>>>> c2957eb2bcfc6c5ef808b7fa95c082aab7ec495e
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
