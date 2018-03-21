import * as types from '../actions/actionTypes';

/**
 * Each reducer handles a specific slice of state
 * @param {*} state 
 * @param {*} action 
 */
export default function courseReducer(state = [], action){
    switch(action.type){
        case types.CREATE_COURSE:
            // debugger;
            // representing the existing array. It ends up returning a new state array
            return [...state,
                // a deep copy of the course passed in
                Object.assign({}, action.course)
            ];
        
        default:
            return state;
    }
}