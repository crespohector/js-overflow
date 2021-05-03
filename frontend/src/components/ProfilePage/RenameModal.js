
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import Modal from "react-modal";
import {updateOneAnswer} from '../../store/answers';



Modal.setAppElement('#root');

function RenameModalBtn({answer}) {
    const {userId} = useParams();
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const answerId = answer.id;
        const answerObj = { comment, answerId, userId};
        setComment('');
        dispatch(updateOneAnswer(answerObj));
        setModalIsOpen(false)
    }

    useEffect(() => {
        const errors = [];
        if (comment.length < 30) {
            errors.push("Comment field must be greater than 30 characters");
        }
        setErrors(errors);
    }, [comment])


    return (
        <>
            <button onClick={() => setModalIsOpen(true)}>Edit Answer</button>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h1>Made a mistake? ❌</h1>
                <h2>Don't worry, you can edit your answer!</h2>
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
        </>
    )
}


export default RenameModalBtn;
