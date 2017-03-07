import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'

export class LessonPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
    const { title } = this.props

    return(
      <div className="lesson page">
        <h1>{ title }</h1>
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
