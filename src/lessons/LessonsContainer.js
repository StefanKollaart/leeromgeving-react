import React, { PureComponent } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'


class LessonsContainer extends PureComponent {
  renderLessons(lesson, index) {
    return <LessonItem key={index} {...lesson} />
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
    return(
      <div className="lessons wrapper">
        <header>
          <h1>Lessons</h1>
        </header>

        <main>
          {this.props.lessons.map(this.renderLessons)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ lessons }) => ({
  lessons
})

export default connect(mapStateToProps)(LessonsContainer)
