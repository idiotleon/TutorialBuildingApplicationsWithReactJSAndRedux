export function createCourse(course){
    // debugger;
    // The only requirement of an action is it has a 'type' property
    return { type: 'CREATE_COURSE', course }
}