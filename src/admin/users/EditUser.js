import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import editUser from '../../actions/user/update'
import resetUserProgress from '../../actions/user/reset'
import fetchUsers from '../../actions/user/fetch'
import fetchCourses from '../../actions/courses/fetch'
import RenderCheckboxes from './RenderCheckboxes'

export class EditUser extends Component {
  componentWillMount() {
    this.props.fetchUsers()
    this.props.fetchCourses()
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.renderCheckboxes = this.renderCheckboxes.bind(this)
    this.handleCourses = this.handleCourses.bind(this)
  }

  loadEditUser() {
    if (this.state == null)
      this.state = {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        email: this.props.email,
        courses: this.props.courses,
      }
  }

  renderCheckboxes(checkbox, index) {
    return <RenderCheckboxes key={index} checkBoxId={index} userCourses={this.props.courses} {...checkbox} handleCourses={this.handleCourses} />
  }

  handleFirstName(event) {
    this.setState({
      first_name: event.target.value
    });
  }

  handleLastName(event) {
    this.setState({
      last_name: event.target.value
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleCourses(changedCourse, isChecked) {
    var newCourses = this.state.courses
    var fullCourse = this.props.allCourses.find(function(course) {
      return course.courseType == changedCourse.courseType
    })
    if(isChecked) {
      newCourses.push(fullCourse)
    } else {
      newCourses = this.state.courses.filter(function(course) {
        if (course.courseType != fullCourse.courseType) {
          return true
        } else {
          return false
        }
      })
    }
    this.setState({
      courses: newCourses
    }, function() {
    })
  }

  submitForm(event) {
    event.preventDefault()
      const user = {
        _id: this.props._id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        courses: this.state.courses,
      }
      this.props.editUser(user)
  }

  resetProgress() {
    this.props.resetUserProgress(this.props.params.userId)
  }

  render() {
    if(this.props.email != undefined) {
      {this.loadEditUser()}
      return (
          <div className="inner">
            <section>
              <h1>{this.state.first_name} {this.state.last_name}</h1>

              <form onSubmit={this.submitForm.bind(this)}>
                      <label>Voornaam <span className="required">*</span></label>
                      <input type="text" placeholder="Voornaam" value={this.state.first_name} onChange={this.handleFirstName} className="field-long"/>
                      <label>Achternaam <span className="required">*</span></label>
                      <input type="text" placeholder="Achternaam" value={this.state.last_name} onChange={this.handleLastName} className="field-long"/>
                      <label>E-mail <span className="required">*</span></label>
                      <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmail} className="field-long"/>
                      <h2>Opleidingen</h2>
                      {this.props.allCourses.map(this.renderCheckboxes)}
                  <input type="submit" value="Aanmaken" />
              </form>
              <button onClick={this.resetProgress.bind(this)}>Reset</button>
            </section>
          </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

const mapStateToProps = ({ users, courses }, { params }) => {
  const user = users.reduce((prev, next) => {
    if (next._id === params.userId) {
      return next
    }
    return prev
  }, {})

  return {
    ...user, allCourses: courses
  }
}

export default connect(mapStateToProps, { editUser, resetUserProgress, fetchUsers, fetchCourses })(EditUser)
