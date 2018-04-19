import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

/**
 * Root reducer
 */
const rootReducer = combineReducers({
    // ES6 shorthand property name
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;