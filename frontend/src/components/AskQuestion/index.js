import { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addQuestions } from "../../store/questions";
import NavBar from "../NavBar";
import "./AskQuestion.css";


function AskQuestion() {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    let history = useHistory();
    const user = useSelector(state => state.session.user);

    const onSubmit = (e) => {
        // e.preventDefault();
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

    }, [title, comment])


    return (
        <div className="ask_question_container">
            <form className="question-form" onSubmit={onSubmit}>
                <ul className="errors">
                    {errors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <div className="title-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter question here..." required />
                </div>
                <div className="comment-container">
                    <label htmlFor="comment">Comment</label>
                    <textarea rows="10" cols="50" value={comment} onChange={e => setComment(e.target.value)} placeholder="Enter comment here..." required></textarea>
                </div>
                <button className="submit_btn" type="submit" disabled={errors.length > 0}>Submit Question</button>
            </form>
            <NavLink className="questions_home_link" to="/">Home</NavLink>
        </div>
    )
}


export default AskQuestion;
