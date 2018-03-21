import * as types from './actionTypes';

export function createCourse(course){
    // debugger;
    // The only requirement of an action is it has a 'type' property
    return { type: types.CREATE_COURSE, course };
}