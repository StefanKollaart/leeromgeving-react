import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import TekstItem from './TekstItem'
import VideoItem from './VideoItem'

export class LessonPage extends PureComponent {
  static propTypes = {}

  renderTekst(tekst, index) {
    return <TekstItem tekst = {tekst} />
  }

  renderVideo(video, index) {
    return <VideoItem video = {video} />
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  debugger

  render() {
    const { title, video, tekst } = this.props

    return(
      <div className="lesson page">
        <h1>{ title }</h1>

      <main>
        {(tekst != undefined && tekst.map(this.renderTekst))}
        {(video != undefined && video.map(this.renderVideo))}
      </main>

      </div>
    )
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

export default connect(mapStateToProps, { fetchLessons })(LessonPage)
