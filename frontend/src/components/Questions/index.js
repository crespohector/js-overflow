// frontend/src/components/NavBar/index.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getQuestions} from '../../store/questions';
import Footer from '../Footer';
import NavBar from "../NavBar";
import './Questions.css';

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const questionsArr = Object.values(questions);

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
            <h3>Question</h3>
            <NavLink className="post-question_navlink" to={`/questions/${question.id}`}>{question.title}</NavLink>
            <p className="post-question_comment">{question.comment}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Questions;
