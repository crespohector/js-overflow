import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQuestions } from "../../store/questions";
import NavBar from '../NavBar';
import Footer from '../Footer';
import "./AskQuestion.css";


function AskQuestion() {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    let history = useHistory();
    const user = useSelector(state => state.session.user);

    const onSubmit = (e) => {
        e.preventDefault();
        const question = { title, comment, user_id: user.id };
        dispatch(addQuestions(question));
        history.push('/questions');
    }

    useEffect(() => {
        const errors = [];

        if (title.length < 15 || title.length > 256) {
            errors.push("Title field must be between 15 and 256 characters");
        }
        if (comment.length < 30) {
            errors.push("Comment field must be greater than 30 characters");
        }
        if (!user) {
            errors.push("Please login to post a question.");
        }

        setErrors(errors);

    }, [title, comment, user])


    return (
        <>
            <NavBar />
            <div className="ask_question_container">
                <span className="ask_question_title">Ask a public question! Don't be shy! 😄</span>
                <form onSubmit={onSubmit}>
                    <div className="question-form">
                        <ul className="errors">
                            {errors.map(error => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                        <div className="title-container">
                            <label className="title-label">
                                Title
                                <span className="title-span_text">Be specific and imagine you’re asking a question to another person</span>
                                <div>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder="Enter question here..."
                                        className="title-question_input"
                                        required
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="comment-container">
                            <label className="title-label">
                                Body
                                <span className="title-span_text">Include all the information someone would need to answer your question</span>
                                <div>
                                    <textarea
                                    rows="10"
                                    cols="50"
                                    value={comment} onChange={e => setComment(e.target.value)}
                                    placeholder="Enter comment here..."
                                    className="title-question_input"
                                    required>
                                    </textarea>
                                </div>
                            </label>
                        </div>
                    </div>
                    <button className="submit_btn" type="submit" disabled={errors.length > 0}>Review your question</button>
                </form>
            </div>
            <div className="ask_question_footer">
                <Footer />
            </div>
        </>
    )
}


export default AskQuestion;
