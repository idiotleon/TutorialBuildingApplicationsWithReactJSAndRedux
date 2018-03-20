import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
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
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                {this.props.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    };
}

/*
*   mapDispatchToProps is a function that allows one to fire off his actions
*   which is optional.
*   If it is omitted here in the function parameter,
*   connect[function] will inject a dispatch function for us
*/
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps) (CoursesPage);
/*  equivalently:
*   const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
*   export default connectedStateAndProps(CoursePage);
*/