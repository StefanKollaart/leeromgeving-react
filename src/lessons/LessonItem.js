import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LessonItem extends PureComponent {
  static propTypes = {
    lessonNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.array,
    tekst: PropTypes.array,
  }
  render() {
    const { _id, lessonNumber, title, content } = this.props

    return (
      <article className = "Lesson">
        <p><Link to={`/lessons/${_id}`}>{lessonNumber}. { title }</Link></p>
      </article>
    )
  }
}

export default LessonItem
