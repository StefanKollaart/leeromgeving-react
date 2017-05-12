import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import LessonItem from './LessonItem'

class TrackItem extends PureComponent {
  componentWillMount() {
    this.renderLessons = this.renderLessons.bind(this)
    this.getHighestLessonNumber = this.getHighestLessonNumber.bind(this)
  }

  renderLessons(lesson, index) {
    let trackLessons = this.getHighestLessonNumber()
    return <LessonItem key={index} {...lesson} trackId={this.props._id} highestLessonNumber={trackLessons}/>
  }

  getHighestLessonNumber() {
    let trackId = this.props._id
    let trackLessons = this.props.lessons.filter(function(lesson) {
      if (lesson.track && lesson.track._id == trackId && lesson.active) {
        return true
      }
    })
    return trackLessons.length
  }

  render() {
    return (
        <div>
          <h2>{this.props.name}</h2>
          {this.props.lessons.map(this.renderLessons)}
        </div>
    )
  }
}

export default TrackItem
