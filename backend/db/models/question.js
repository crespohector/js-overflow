'use strict';

const {Validator} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [15, 256],
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [30],
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users"},
      }
    },
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.User, {foreignKey: 'user_id'});
    Question.hasMany(models.Answer, {foreignKey: 'questions_id'});
    // associations can be defined here
  };
  return Question;
};
