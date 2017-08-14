import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course : { title : null }
    };
  };

  onTitleChange = (event) => {
    const { course } = this.state;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  };

  onClickSave = (event) => {
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
  };

  courseRow = (course, index) => {
    return (
      <div key={index}>  {course.title} </div>
    );
  };

  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses : PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) =>{
  return {
    courses: state.courses
  }
};

//NOTE : klo mapDispatchToProps nggak di inject maka props.dispatch yg di inject
/*
  this method is determine which action
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // createCourse : (course) => dispatch(courseActions.createCourse(course))
    actions : bindActionCreators(courseActions, dispatch)    //so the bindActionCreators bind all actions
    //bisa juga kek gini : bindActionCreators(courseActions.createCourse, dispatch);
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);