import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        /*
        *  To improve performance, one should avoid defining new functions in the renderer function.
        *  Instead, new functions should be placed in the contructor 
        */
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        // this needs to be bond with the instance of the component
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        // debugger;
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    // debugger;
    return{
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        // "actions" means mapping to all actions
        actions: bindActionCreators(courseActions, dispatch)
    };
}

/*
*   mapDispatchToProps is a function that allows one to fire off his actions
*   which is optional.
*   If it is omitted here in the function parameter,
*   connect[function] will inject a dispatch function for us
*
*   Once mapDispatchToProps has been defined, connect will no longer add a dispatch
*   property on the components: line 51 got ignored
*/
export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
/*  equivalently:
*   const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
*   export default connectedStateAndProps(CoursePage);
*/