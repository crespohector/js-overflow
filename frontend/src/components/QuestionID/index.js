/* IMPORTANT: when the user reloads the page, it restarts the redux store
  ---Notice: I noticed how when we have two dispatches (which is synchronous), it will render the answers first
            then render the question. You will notice a delay when refreshing the page which may look unpleasant. Will fix*/

import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import {  getAnswers, addOneAnswer } from '../../store/answers';
import { getQuestions } from '../../store/questions';
import NavBar from "../NavBar";
import './QuestionID.css';

Modal.setAppElement('#root');

function QuestionID() {
  const { questionId } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers);
  const answersArr = Object.values(answers).filter(answer => answer.questions_id == questionId);
  const questions = useSelector(state => state.questions);
  const question = Object.values(questions).find(question => question.id == questionId);
  const user = useSelector(state => state.session.user);

  const onSubmit = (e) => {
    e.preventDefault();
    const questions_id = parseInt(questionId);
    const answer = { comment, questions_id, user_id: user.id };
    dispatch(addOneAnswer(answer));
  }

  useEffect(() => {
    dispatch(getAnswers(questionId));
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    const errors = [];

    if (comment.length < 30) {
      errors.push("Comment field must be greater than 30 characters");
    }
    if (!user) {
      errors.push("Please login to post a question.");
    }
    setErrors(errors);
  }, [comment])

  return (
    <div className="QuestionID-main-container">
      <div className="QuestionID-head-container">
        <span className="QuestionID-text">All Answers</span>
        <NavLink className="QuestionID-home" to="/">Home</NavLink>

        <button onClick={() => setModalIsOpen(true)}>Create Answer</button>
        <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h1>Feeling Smart! 🤔</h1>
          <h2>Well put that brain to good use and post an answer!</h2>
          <ul className="answer_errors">
            {errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form onSubmit={onSubmit}>
            <label htmlFor="comment">Comment</label>
            <textarea rows="10" value={comment} onChange={e => setComment(e.target.value)} placeholder="Enter comment here..." required></textarea>
            <button onClick={() => setModalIsOpen(false)}>close</button>
            <button type="submit" disabled={errors.length > 0}>submit</button>
          </form>
        </Modal>

      </div>
      <div className="QuestionID-body-container">
        {question ? <div className="title-question">{question.title}</div> : null}
        {question ? <div className="comment-question">{question.comment}</div> : null}
        {answersArr.map(answer => (
          <div key={answer.id} className="post-answer">
            <p className="post-answer_comment">{answer.comment}</p>
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




export default QuestionID;
