import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';
import CourseList from './CourseList';

/**
 * This is a container component
 */
class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            /*
            *   "course" could also have called this initialCourse for clarity, since
            *   the prop is just for initializing state
            * 
            *   "this"[keyword] is recommended to be omitted 
            *   since passed on contructor: (this.)props.course
            */
            course: Object.assign({}, props.course),
            // Tracking errors in the state would be useful
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        // To avoid mutating state
        // Do NOT: let course = this.state.course;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    course={this.state.course}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course.length) return course[0];    // Since filter returns an array, one has to grab the first item.
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;    // from the path `/course/:id`

    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);