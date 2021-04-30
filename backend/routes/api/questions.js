
const express = require('express');
const asyncHandler = require('express-async-handler');   // will wrap asynchronous route handlers and custom middlewares.

const { Question } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
  const questions = await Question.findAll({
    order: [['updatedAt', 'DESC']]
  });
  return res.json(questions)
}))

router.post('/', asyncHandler(async function (req, res) {
  // console.log("-------Request.body-------: ", req.body);
  const { title, comment, user_id } = req.body;

  const question = await Question.create({
    title,
    comment,
    user_id
  });
  return res.json({question});
}));



module.exports = router;
