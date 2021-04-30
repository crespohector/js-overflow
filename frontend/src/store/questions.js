// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const ALL_QUESTIONS = 'questions/allQuestions';
const ADD_QUESTIONS = 'questions/add_questions';

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

export const getQuestions = () => async dispatch => {
    const response = await csrfFetch('/api/questions');
    const data = await response.json();
    dispatch(allQuestions(data));
}

export const addQuestions = (question) => async dispatch => {
    // console.log("questions store location. Question: ", question)
    const {title, comment, user_id} = question;
    const response = await csrfFetch('/api/questions', {
        method: "POST",
        body: JSON.stringify({title, comment, user_id})
    });
    const data = await response.json();
    console.log("data: ", data);
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
        default:
            return state;
    }
};

export default questionsReducer;
