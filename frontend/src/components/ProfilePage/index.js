import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getAnswersByUser } from '../../store/answers';
import { getQuestionsByUser } from '../../store/questions';

import NavBar from '../NavBar';
import Footer from '../Footer';
import RenameModalBtn from "./RenameModal";
import DeleteModalBtn from './DeleteModal';

import "./ProfilePage.css";

function ProfilePage() {
    const { userId } = useParams();
    const parseUserId = parseInt(userId);
    const [showQuestions, setShowQuestions] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const answers = useSelector(state => state.answers);
    const answersArr = Object.values(answers).filter(answer => answer.user_id === parseUserId);
    const questions = useSelector(state => state.questions);
    const questionsArr = Object.values(questions).filter(question => question.user_id === parseUserId);

    const sessionUser = useSelector(state => state.session.user);

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

    if (!sessionUser) return (
        <Redirect to="/" />
    );

    return (
        <>
            <NavBar />
            <div className="profile_container">
                <div className="profile_container-header">
                    <div className="profile-header_text">Welcome {user.displayName}!</div>
                    <button onClick={onClickQuestions} className="header-questions_btn">My Questions</button>
                    <button onClick={onClickAnswers} className="header-questions_btn">My Answers</button>
                </div>
                <div className="profile_container-body">
                    {showAnswers && answersArr.map(answer => (
                        <div className="profile_content" key={answer.id}>
                            <RenameModalBtn answer={answer} />
                            <DeleteModalBtn answer={answer} />
                            <p>{answer.comment}</p>
                        </div>
                    ))}
                    {showQuestions && questionsArr.map(question => (
                        <div className="profile_content" key={question.id}>
                            <span className="profile_question_title">{question.title}</span>
                            <p>{question.comment}</p>
                        </div>
                    ))}
                    <Footer />
                </div>
            </div>
        </>
    )
}


export default ProfilePage;
