import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TekstInput from './fields/TekstInput'
import fetchLessons from '../../actions/lessons/fetch'
import ContentFields from './ContentFields'
import TekstFields from './TekstFields'
import update from '../../actions/lessons/update'

export class EditLesson extends Component {

  componentWillMount() {
    this.props.fetchLessons()
    this.loadEditLesson = this.loadEditLesson.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.addVideoField = this.addVideoField.bind(this)
    this.addTekstField = this.addTekstField.bind(this)
    this.removeVideo = this.removeVideo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
    this.handleTekst = this.handleTekst.bind(this)
  }

  loadEditLesson() {
    if (this.state == null) {
      this.state = {
        lessonNumber: this.props.lessonNumber,
        title: this.props.title,
        content: this.props.content,
      }
    }
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
    var newVideos = this.state.video
    newVideos[index] = event.target.value
    this.setState({
      video: newVideos
    })
  }

  removeVideo(index) {
    var newContent = this.state.content
    newContent.splice(index, 1)
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

  renderContent(content, index) {
    return <ContentFields key={index} {...content} id={index} handleVideo={this.handleVideo} removeVideo={this.removeVideo} handleTekst={this.handleTekst} />
  }

  addVideoField() {
    var newVideos = this.state.video
    newVideos.push("")
    this.setState({
      video: newVideos
    })
  }

  addTekstField() {
    var newTekst = this.state.tekst
    newTekst.push("")
    this.setState({
      tekst: newTekst
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const lesson = {
      _id: this.props._id,
      lessonNumber: this.state.lessonNumber,
      title: this.state.title,
      content: this.state.content
    }
    debugger
    this.props.update(lesson)
  }

  render() {
    if(this.props.title != undefined) {
      if(this.state == null) {
        {this.loadEditLesson()}
      }
        return (
        <div>
          <h1>{this.state.title}</h1>
          <form onSubmit={this.handleSubmit}>
            <ul className="form-style-1">
              <div className="lessonGeneral">
                <li>
                  <label>Lesnummer <span className="required">*</span></label>
                  <input value={this.state.lessonNumber} onChange={this.handleNumber} type="number" placeholder="Number" />
                </li>
                <li>
                  <label>Titel <span className="required">*</span></label>
                  <input value={this.state.title} onChange={this.handleTitle} type="text" placeholder="Title" />
                </li>
              </div>
              <div className="lessonDetails">
                <h2>Content</h2>
                {this.state.content.map(this.renderContent)}
              </div>
              <input type="submit" value="Opslaan" />
            </ul>
          </form>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = ({ lessons }, { params }) => {
  const lesson = lessons.reduce((prev, next) => {
    if (next._id === params.lessonId) {
      return next
    }
    return prev
  }, {})

  return {
    ...lesson
  }
}

export default connect(mapStateToProps, { fetchLessons, update })(EditLesson)
