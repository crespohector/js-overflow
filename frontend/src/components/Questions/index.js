// frontend/src/components/NavBar/index.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getQuestions} from '../../store/questions';
import NavBar from "../NavBar";
import './Questions.css';

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const questionsArr = Object.values(questions);
  // console.log("questions: ", questionsArr)

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch])

  return (
    <div className="questions-main-container">
      <div className="questions-head-container">
        <span className="questions-text">All Questions</span>
        <NavLink className="questions-home" to="/">Home</NavLink>
        <NavLink className="ask-question" to="/questions/ask">Ask Question</NavLink>
      </div>
      <div className="questions-body-container">
        {questionsArr.map(question => (
          <div key={question.id} className="post-question">
            <NavLink className="post-question_navlink" to={`/questions/${question.id}`}>{question.title}</NavLink>
            <p className="post-question_comment">{question.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// comment: "I have some JavaScript code that gives this error\n );\n  var i2 = document.getElementById('i2');\n
// createdAt: "2021-04-27T22:17:20.140Z"
// id: 1
// title: "Uncaught TypeError: Cannot read property \"value\" of undefined"
// updatedAt: "2021-04-27T22:17:20.140Z"




export default Questions;
