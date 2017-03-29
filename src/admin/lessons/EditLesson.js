import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TekstInput from './fields/TekstInput'
import fetchLessons from '../../actions/lessons/fetch'
import ContentFields from './ContentFields'
import TekstFields from './TekstFields'
import update from '../../actions/lessons/update'
import TrackSelect from './TrackSelect'
import fetchTracks from '../../actions/tracks/fetch'


export class EditLesson extends Component {

  componentWillMount() {
    this.props.fetchLessons()
    this.props.fetchTracks()
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
    this.handleTrack = this.handleTrack.bind(this)
    this.renderCheckboxes = this.renderCheckboxes.bind(this)
  }

  loadEditLesson() {
    if (this.state == null) {
      let userTrack
      if (this.props.track) {
        userTrack = this.props.track._id
      } else {
        userTrack = {}
      }
      this.state = {
        lessonNumber: this.props.lessonNumber,
        title: this.props.title,
        content: this.props.content,
        track: userTrack,
      }
    }
  }

  renderCheckboxes(track, index) {
    return <TrackSelect key={index} checkBoxId={index} userTrack={this.props.track} {...track} handleTracks={this.handleTracks} />
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

    const newTrack = this.props.allTracks.reduce((prev, next) => {
      if (String(next._id) === String(this.state.track)) {
        return next
      }
      return prev
    }, {})

    const lesson = {
      _id: this.props._id,
      lessonNumber: this.state.lessonNumber,
      title: this.state.title,
      content: this.state.content,
      track: newTrack,
    }
    this.props.update(lesson)
  }

  trackSelect(track, index) {
    return <TrackSelect key={index} trackId={index} {...track}/>
  }

  handleTrack(track) {
    this.setState({
      track: track.target.value
    })
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
                  <label>Track <span className="required">*</span>
                  <select value={this.state.track} onChange={this.handleTrack}>
                    <option>Selecteer</option>
                    {this.props.allTracks.map(this.trackSelect)}
                  </select>
                  </label>
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

const mapStateToProps = ({ lessons, tracks }, { params }) => {
  const lesson = lessons.reduce((prev, next) => {
    if (next._id === params.lessonId) {
      return next
    }
    return prev
  }, {})

  return {
    ...lesson, allTracks: tracks
  }
}

export default connect(mapStateToProps, { fetchLessons, update, fetchTracks})(EditLesson)
