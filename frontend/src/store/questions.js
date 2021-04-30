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
    const {title, comment} = question;
    const response = await csrfFetch('/api/questions', {
        method: "POST",
        body: JSON.stringify({title, comment})
    });
    const data = response.json();
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
        // case ADD_QUESTIONS:
            // newState = {...state};
            // return

        default:
            return state;
    }
};

export default questionsReducer;
