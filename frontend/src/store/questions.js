// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const ALL_QUESTIONS = 'questions/ALL_QUESTIONS';
const ADD_QUESTIONS = 'questions/ADD_QUESTIONS';

const allQuestions = (data) => {
    return {
        type: ALL_QUESTIONS,
        data
    };
}

const addOneQuestion = (data) => {
    return {
        type: ADD_QUESTIONS,
        data
    }
}

export const getQuestionsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/questions`);
    const data = await response.json();
    dispatch(allQuestions(data));
}

export const getQuestions = () => async dispatch => {
    const response = await csrfFetch('/api/questions');
    const data = await response.json();
    dispatch(allQuestions(data));
}

export const addQuestions = (question) => async dispatch => {
    const {title, comment, user_id} = question;
    const response = await csrfFetch('/api/questions', {
        method: "POST",
        body: JSON.stringify({title, comment, user_id})
    });
    const data = await response.json();
    dispatch(addOneQuestion(data));
    return response;
}


const questionsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ALL_QUESTIONS:
            newState = {...state};
            action.data.forEach(question => {
                newState[question.id] = question;
            });
            return newState;
        case ADD_QUESTIONS:
            newState = {...state};
            newState[action.data.question.id] = action.data.question;
            return newState;
        default:
            return state;
    }
};

export default questionsReducer;
