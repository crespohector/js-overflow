'use strict';

const {Validator} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [30],
      },
    },
    questions_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Questions"},
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users"}
    },
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, {foreignKey: 'user_id'});
    Answer.belongsTo(models.Question, {foreignKey: 'questions_id'});
  };
  return Answer;
};
