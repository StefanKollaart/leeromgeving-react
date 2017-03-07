import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LessonItem extends PureComponent {
  static propTypes = {
    lessonNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.string,
    tekst: PropTypes.string,
  }
  render() {
    const { _id, lessonNumber, title, video, tekst } = this.props

    return (
      <article className = "Lesson">
        <h1><Link to={`/lessons/${_id}`}>{ title }</Link></h1>
        <div>
          <p>{ tekst }</p>
        </div>
      </article>
    )
  }
}

export default LessonItem
