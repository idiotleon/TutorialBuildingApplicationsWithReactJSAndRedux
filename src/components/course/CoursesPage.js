import React, {PropTypes} from 'react';

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
        alert(`Saving ${this.state.course.title}`);
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

export default CoursesPage;