import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchTracks from '../../actions/tracks/fetch'
import fetchCourses from '../../actions/courses/fetch'
import CourseSelect from './CourseSelect'
import updateTrack from '../../actions/tracks/update'

export class EditTrack extends PureComponent {

  componentWillMount() {
    this.props.fetchTracks()
    this.props.fetchCourses()
    this.loadEditTrack = this.loadEditTrack.bind(this)
    this.courseSelect = this.courseSelect.bind(this)
    this.handleCourse = this.handleCourse.bind(this)
    this.handleOrder = this.handleOrder.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  loadEditTrack() {
    if (this.state == null) {
      let userCourse
      if (this.props.course) {
        userCourse = this.props.course.courseType
      } else {
        userCourse = {}
      }
      this.state = {
        course: userCourse,
        name: this.props.name,
        order: this.props.order,
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const newCourse = this.props.allCourses.reduce((prev, next) => {
      console.log(next.courseType)
      console.log(this.state.course)
      if (String(next.courseType) === String(this.state.course)) {
        return next
      }
      return prev
    }, {})
    const track = {
      course: newCourse,
      name: this.state.name,
      order: this.state.order,
    }
    debugger
    this.props.updateTrack(track)
  }

  courseSelect(course, index) {
    return <CourseSelect key={index} courseId={index} {...course}/>
  }

  handleCourse(course) {
    this.setState({
      course: course.target.value
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
    if(this.props.name != undefined) {
      if(this.state == null) {
        {this.loadEditTrack()}
      }
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
                <select value={this.state.course} onChange={this.handleCourse}>
                  <option>Selecteer</option>
                  {this.props.allCourses.map(this.courseSelect)}
                </select>
                </label>
              </div>
            </div>
            <input type="submit" value="Aanmaken" />
          </form>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

const mapStateToProps = ({ tracks, courses }, { params }) => {
  const track = tracks.reduce((prev, next) => {
    if (next._id === params.trackId) {
      return next
    }
    return prev
  }, {})

  return {
    ...track, allCourses: courses
  }
}


export default connect(mapStateToProps, {fetchTracks, updateTrack, fetchCourses})(EditTrack)
