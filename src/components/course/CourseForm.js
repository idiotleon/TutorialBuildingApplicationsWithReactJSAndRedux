import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// a stateless component
const CourseForm = ({ course, allAuthors, onSave, onChange, saving, error }) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={error.title} />

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={error.authorId} />

            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={error.category} />

            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={error.length} />

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;