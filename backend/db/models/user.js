'use strict';

const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,256]
      },
    },
    hashedPw: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60,60],
      },
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Question, {foreignKey: 'user_id'});
    User.hasMany(models.Answer, {foreignKey: 'user_id'});
  };
  return User;
};
