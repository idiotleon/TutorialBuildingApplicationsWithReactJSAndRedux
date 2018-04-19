import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';

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
            authors: Object.assign({}, props.authors),
            // Tracking errors in the state would be useful
            errors: {}
        };
    }

    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

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