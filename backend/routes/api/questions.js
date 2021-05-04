
const express = require('express');
const asyncHandler = require('express-async-handler');   // will wrap asynchronous route handlers and custom middlewares.

const { Question, Answer } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
  const questions = await Question.findAll({
    order: [['updatedAt', 'DESC']]
  });
  return res.json(questions)
}))

router.get('/:questionId', asyncHandler(async function (req, res) {
  const {questionId} = req.params;
  const Answers = await Answer.findAll({
    where: {
      questions_id: questionId,
    },
    order: [['updatedAt', 'DESC']]
  });
  return res.json(Answers)
}))


router.post('/', asyncHandler(async function (req, res) {
  const { title, comment, user_id } = req.body;

  const question = await Question.create({
    title,
    comment,
    user_id
  });
  return res.json({question});
}));

router.post('/:questionId', asyncHandler(async function (req, res) {
  const {comment, questions_id, user_id} = req.body;

  const answer = await Answer.create({
    comment,
    questions_id,
    user_id
  });
  return res.json({answer});
}));



module.exports = router;
