import React, { PureComponent, PropTypes } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../../actions/lessons/fetch'
import fetchTracks from '../../actions/tracks/fetch'
import TrackItem from './TrackItem'

class LessonsContainer extends PureComponent {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    fetchLessons: PropTypes.func.isRequired,
  }

  renderTracks(track, index) {
    return <TrackItem key={index} {...track} lessons={this.props.lessons} />
  }

  renderTrackless(lesson, index) {
    if (!lesson.track || lesson.track == null) {
      return <LessonItem key={index} {...lesson} trackLess={true} />
    }
  }

  componentWillMount() {
    this.renderTracks = this.renderTracks.bind(this)
    this.renderTrackless = this.renderTrackless.bind(this)
  }

  componentDidMount() {
    this.props.fetchLessons()
    this.props.fetchTracks()
  }

  render() {
    return(
      <div className="inner">
        <header>
          <h1>Lessen</h1>
        </header>

        <main>
          <ul>
            {this.props.tracks.map(this.renderTracks)}
            <h2>Geen track</h2>
            {this.props.lessons.map(this.renderTrackless)}
          </ul>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ lessons, tracks, currentUser }) => ({
  lessons, tracks, currentUser
})

export default connect(mapStateToProps, { fetchLessons, fetchTracks })(LessonsContainer)
