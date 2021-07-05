// frontend/src/components/NavBar/index.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sticky from 'react-sticky-el';
import { getQuestions } from '../../store/questions';
import NavBar from '../NavBar';
import Footer from '../Footer';
import './Questions.css';

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const questionsArr = Object.values(questions);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch])

  return (
    <>
      <Sticky>
        <NavBar />
      </Sticky>
      <div className="questions-main-container">
        <div className="questions-head-container">
          <span className="questions-text">All Questions</span>
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
        <Footer />
      </div>
    </>
  );
}

export default Questions;
