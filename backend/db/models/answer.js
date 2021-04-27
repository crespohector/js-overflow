'use strict';

const {Validator} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [30,256],
      },
    },
    questions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        models: {
          tableName: 'Questions'
        },
        key: 'id'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {tableName: "Users"},
        key: 'id',
      }
    }
  }, {});
  Answer.associate = function(models) {
    Answer.hasOne(models.User, {foreignKey: 'user_id'});
    Answer.hasOne(models.Questions, {foreignKey: 'questions_id'});
    // associations can be defined here
  };
  return Answer;
};
