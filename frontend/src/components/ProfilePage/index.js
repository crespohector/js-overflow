
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnswersByUser } from '../../store/answers';
import { getQuestionsByUser } from '../../store/questions';
// import Footer from '../Footer';

import RenameModalBtn from "./RenameModal";
import DeleteModalBtn from './DeleteModal';

import "./ProfilePage.css";

function ProfilePage() {
    const { userId } = useParams();
    const parseUserId = parseInt(userId);
    const [showQuestions, setShowQuestions] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const dispatch = useDispatch();
    //to-do list:
    //4.) on each answer render a rename and delete btn, then implement a modal
    //5.) on each question render a rename and delete btn but only if it contains no answers
    const user = useSelector(state => state.session.user);
    const answers = useSelector(state => state.answers);
    const answersArr = Object.values(answers).filter(answer => answer.user_id === parseUserId);
    const questions = useSelector(state => state.questions);
    const questionsArr = Object.values(questions).filter(question => question.user_id === parseUserId);

    // console.log("answer: ", answersArr);

    function onClickQuestions() {
        setShowQuestions(true);
        setShowAnswers(false);
    }
    function onClickAnswers() {
        setShowAnswers(true);
        setShowQuestions(false);
    }

    useEffect(() => {
        dispatch(getAnswersByUser(parseUserId));
        dispatch(getQuestionsByUser(parseUserId));
    }, [dispatch])

    return (
        <div className="profile_container">
            <div className="profile_container-header">
                <h1>Welcome {user.displayName}!</h1>
                <button onClick={onClickQuestions} className="header-questions_btn">My Questions</button>
                <button onClick={onClickAnswers} className="header-questions_btn">My Answers</button>
            </div>
            <div className="profile_container-body">
                {showAnswers && answersArr.map(answer => (
                    <div key={answer.id}>
                        <h3>Answer</h3>
                        <RenameModalBtn answer={answer} />
                        <DeleteModalBtn answer={answer} />
                        <p>{answer.comment}</p>
                    </div>
                ))}
                {showQuestions && questionsArr.map(question => (
                    <div className="question" key={question.id}>
                        <h3>Question</h3>
                        <p>{question.title}</p>
                        <p>{question.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ProfilePage;
