import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    // ES6 shorthand property name
    courses
});

export default rootReducer;