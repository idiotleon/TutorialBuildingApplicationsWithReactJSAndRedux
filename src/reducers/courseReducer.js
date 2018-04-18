import * as types from '../actions/actionTypes';

/**
 * Each reducer handles a specific slice of state
 * @param {*} state 
 * @param {*} action 
 */
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}