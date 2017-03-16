import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import newLesson from '../../actions/lessons/new-lesson'
import VideoFields from './VideoFields'
import TekstFields from './TekstFields'

export class CreateLesson extends Component {

  componentWillMount() {
    this.state = {
      lessonNumber: '',
      title: '',
      video: [],
      tekst: [],
    }
    this.handleNumber = this.handleNumber.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.addVideoField = this.addVideoField.bind(this)
    this.addTekstField = this.addTekstField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderVideoFields = this.renderVideoFields.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
    this.handleTekst = this.handleTekst.bind(this)
    this.renderTekst = this.renderTekst.bind(this)
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

  handleTekst(index, event) {
    var newTekst = this.state.tekst
    newTekst[index] = event.target.value
    this.setState({
      tekst: newTekst
    })
  }

  renderVideoFields(video, index) {
    return <VideoFields key={index} video={video} id={index} handleVideo={this.handleVideo} />
  }

  renderTekst(tekst, index) {
    return <TekstFields key={index} tekst={tekst} id={index} handleTekst={this.handleTekst} />
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
      lessonNumber: this.state.lessonNumber,
      title: this.state.title,
      video: this.state.video,
      tekst: this.state.tekst,
    }
    this.props.newLesson(lesson)
  }

  render() {
        return (
        <div>
          <h1>{this.state.title ? this.state.title : "Nieuwe les"}</h1>
          <form onSubmit={this.handleSubmit}>
            <ul className="form-style-1">
              <div className="form-fields">
                <li>
                  <label>Lesnummer <span className="required">*</span></label>
                  <input value={this.state.lessonNumber} onChange={this.handleNumber} type="number" placeholder="Number" className="field-long" />
                </li>
                <li>
                  <label>Titel <span className="required">*</span></label>
                  <input value={this.state.title} onChange={this.handleTitle} type="text" placeholder="Title" className="field-long"/>
                </li>
              </div>
              <div className="lessonDetails">
                <h2>Video's</h2>
                {this.state.video.map(this.renderVideoFields)}
                <span onClick={ this.addVideoField }>+</span>
              </div>
              <div className="lessonDetails">
                <h2>Tekst</h2>
                {this.state.tekst.map(this.renderTekst)}
                <span onClick={ this.addTekstField }>+</span>
              </div>
            <input type="submit" value="Opslaan" />
            </ul>
          </form>
        </div>
      )
  }
}

export default connect(null, { newLesson })(CreateLesson)
