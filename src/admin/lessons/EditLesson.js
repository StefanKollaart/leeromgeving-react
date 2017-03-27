import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TekstInput from './fields/TekstInput'
import fetchLessons from '../../actions/lessons/fetch'
import ContentFields from './ContentFields'
import TekstFields from './TekstFields'
import update from '../../actions/lessons/update'
import RenderCheckboxes from '../users/RenderCheckboxes'
import fetchCourses from '../../actions/courses/fetch'


export class EditLesson extends Component {

  componentWillMount() {
    this.props.fetchLessons()
    this.props.fetchCourses()
    this.loadEditLesson = this.loadEditLesson.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.addVideoField = this.addVideoField.bind(this)
    this.addTekstField = this.addTekstField.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
    this.handleTekst = this.handleTekst.bind(this)
    this.handleCourses = this.handleCourses.bind(this)
    this.renderCheckboxes = this.renderCheckboxes.bind(this)
  }

  loadEditLesson() {
    if (this.state == null) {
      let userCourses
      if (this.props.courses) {
        userCourses = this.props.courses
      } else {
        userCourses = []
      }
      this.state = {
        lessonNumber: this.props.lessonNumber,
        title: this.props.title,
        content: this.props.content,
        courses: userCourses,
      }
    }
  }

  renderCheckboxes(checkbox, index) {
    return <RenderCheckboxes key={index} checkBoxId={index} userCourses={this.props.courses} {...checkbox} handleCourses={this.handleCourses} />
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

  handleNumber(event) {
    this.setState({
      lessonNumber: event.target.value
    });
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleVideo(index, event) {
    var newContent = this.state.content
    newContent[index].content = event.target.value
    this.setState({
      content: newContent
    })
  }

  handleTekst(index, value) {
    var newContent = this.state.content
    newContent[index].content = value
    this.setState({
      content: newContent
    })
  }

  removeItem(index) {
    var newContent = this.state.content
    newContent.splice(index, 1)
    this.setState({
      content: newContent
    })
  }

  renderContent(content, index) {
    return <ContentFields key={index} {...content} id={index} handleVideo={this.handleVideo} removeItem={this.removeItem} handleTekst={this.handleTekst} />
  }

  addVideoField() {
    var newContent = this.state.content
    newContent.push({type: 1, order: this.state.content.length + 1, content: ""})
    this.setState({
      content: newContent
    })
  }

  addTekstField() {
    var newContent = this.state.content
    newContent.push({type: 2, order: this.state.content.length + 1, content: ""})
    this.setState({
      content: newContent
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const lesson = {
      _id: this.props._id,
      lessonNumber: this.state.lessonNumber,
      title: this.state.title,
      content: this.state.content,
      courses: this.state.courses,
    }
    this.props.update(lesson)
  }

  render() {
    if(this.props.title != undefined) {
      if(this.state == null) {
        {this.loadEditLesson()}
      }
        return (
						<div className="inner">
              <form onSubmit={this.handleSubmit}>
                <section>
                  <h1>{this.state.title}</h1>
                  <label>Lesnummer <span className="required">*</span></label>
                  <input value={this.state.lessonNumber} onChange={this.handleNumber} type="number" placeholder="Number" />
                  <label>Titel <span className="required">*</span></label>
                  <input value={this.state.title} onChange={this.handleTitle} type="text" placeholder="Title" />
                  <label>Opleidingen <span className="required"></span></label>
                  {this.props.allCourses.map(this.renderCheckboxes)}
                </section>
              <section>
                <hr/>
                <h2>Content</h2>
                {this.state.content.map(this.renderContent)}
                <span><button onClick={this.addTekstField}>Voeg tekst toe</button></span>
                <span><button onClick={this.addVideoField}>Voeg video toe</button></span>
                <input type="submit" value="Opslaan" />
            </section>
          </form>
          </div>
      )
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = ({ lessons, courses }, { params }) => {
  const lesson = lessons.reduce((prev, next) => {
    if (next._id === params.lessonId) {
      return next
    }
    return prev
  }, {})

  return {
    ...lesson, allCourses: courses
  }
}

export default connect(mapStateToProps, { fetchLessons, update, fetchCourses})(EditLesson)
