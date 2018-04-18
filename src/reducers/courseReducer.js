import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Each reducer handles a specific slice of state
 * @param {*} state 
 * @param {*} action 
 */
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}