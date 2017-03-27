import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchCourses from '../../actions/courses/fetch'
import CourseSelect from './CourseSelect'
import newTrack from '../../actions/tracks/new-track'

export class CreateTrack extends PureComponent {

  componentWillMount() {
    this.props.fetchCourses()
    this.courseSelect = this.courseSelect.bind(this)
    this.handleCourse = this.handleCourse.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      name: "",
      course: {},
      order: 1,
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const track = {
      course: this.state.course,
      name: this.state.name,
      order: this.state.order,
    }
    this.props.newTrack(track)
  }

  courseSelect(course, index) {
    return <CourseSelect key={index} courseId={index} {...course}/>
  }

  handleCourse(course) {
    debugger
    const newCourse = this.props.allCourses.reduce((prev, next) => {
      if (String(next.courseType) === String(course.target.value)) {
        return next
      }
      return prev
    }, {})
    this.setState({
      course: newCourse
    })
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOrder(event) {
    this.setState({
      order: event.target.value
    });
  }

  render() {
    return (
      <div className="inner">
        <form onSubmit={this.handleSubmit}>
          <h1>Nieuwe track</h1>
          <div className="courseGeneral">
            <div className="input">
              <label>Naam <span className="required">*</span></label>
              <input value={this.state.name} onChange={this.handleName} type="text" placeholder="Title" />
              <label>Volgorde <span className="required">*</span></label>
              <input value={this.state.order} onChange={this.handleOrder} type="number" placeholder="Number" />
              <label>Opleiding <span className="required">*</span>
              <select value={this.state.courseId} onChange={this.handleCourse}>
                <option>Selecteer</option>
                {this.props.allCourses.map(this.courseSelect)}
              </select>
              </label>
            </div>
          </div>
          <input type="submit" value="Aanmaken" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => ({
  allCourses: courses
})

export default connect(mapStateToProps, {fetchCourses, newTrack})(CreateTrack)
