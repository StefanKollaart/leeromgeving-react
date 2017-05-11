import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import LessonItem from './LessonItem'

class TrackItem extends PureComponent {
  componentWillMount() {
    this.renderLessons = this.renderLessons.bind(this)
  }

  renderLessons(lesson, index) {
    return <LessonItem key={index} {...lesson} trackId={this.props._id} />
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
