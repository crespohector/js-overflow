import {csrfFetch} from "./csrf";

const ALL_ANSWERS = "answers/ALL_ANSWERS";
const ADD_ANSWER = "answers/ADD_ANSWER";
const UPDATE_ANSWER = "answers/UPDATE_ANSWER";
const DELETE_ANSWER = "answers/DELETE_ANSWER";

export const allAnswers = (data) => {
    return {
        type: ALL_ANSWERS,
        data
    }
}

export const addAnswer = (data) => {
    return {
        type: ADD_ANSWER,
        data
    }
}

export const updateAnswer = (data) => {
    return {
        type: UPDATE_ANSWER,
        data
    }
}

export const deleteAnswer = (data) => {
    return {
        type: DELETE_ANSWER,
        data
    }
}

export const getAnswersByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/answers`);
    const data = await response.json();
    dispatch(allAnswers(data));
    return response;
}

export const getAnswers = (questionId) => async dispatch => {
    const response = await csrfFetch(`/api/questions/${questionId}`);
    const data = await response.json();
    dispatch(allAnswers(data));
    return response;
}

export const addOneAnswer = (answer) => async dispatch => {
    const {comment, questions_id, user_id} = answer;
    const response = await csrfFetch(`/api/questions/${questions_id}`, {
        method: "POST",
        body: JSON.stringify({comment,questions_id, user_id}),
    })
    const data = await response.json();
    dispatch(addAnswer(data));
    return response;
}



export const updateOneAnswer = (answerObj) => async dispatch => {
    const {comment, answerId, userId} = answerObj;
    const response = await csrfFetch(`/api/users/${userId}/answers/${answerId}`, {
        method: 'PUT',
        body: JSON.stringify({comment})
    });
    const data = await response.json();
    dispatch(updateAnswer(data));
}

export const deleteOneAnswer = (answerObj) => async dispatch => {
    const {answerId, userId} = answerObj;
    const response = await csrfFetch(`/api/users/${userId}/answers/${answerId}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    // console.log('data: ', data.answersId);
    dispatch(deleteAnswer(data));
}


const answersReducer = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case ALL_ANSWERS:
            newState = {...state};
            action.data.forEach(answer => {
                newState[answer.id] = answer;
            })
            return newState;
        case ADD_ANSWER:
            newState = {...state};
            newState[action.data.answer.id] = action.data.answer;
            return newState;
        case UPDATE_ANSWER:
            newState = {...state};
            newState[action.data.answer.id] = action.data.answer;
            return newState;
        case DELETE_ANSWER:
            newState = {...state};
            delete newState[action.data.answersId];
            return newState;
        default:
            return state;
    }
}

export default answersReducer;
