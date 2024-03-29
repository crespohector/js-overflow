
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import Modal from "react-modal";
import {deleteOneAnswer} from '../../store/answers';


Modal.setAppElement('#root');

function DeleteModalBtn({answer}) {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const answerId = answer.id;
        const answerObj = {answerId, userId};
        dispatch(deleteOneAnswer(answerObj));
        setModalIsOpen(false);
    }

    return (
        <>
            <button onClick={() => setModalIsOpen(true)}>Delete Answer</button>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h1>Delete Answer?</h1>
                <form className="answer_form" onSubmit={onSubmit}>
                    <button onClick={() => setModalIsOpen(false)}>close</button>
                    <button type="submit">Delete</button>
                </form>
            </Modal>
        </>
    )
}

export default DeleteModalBtn;
