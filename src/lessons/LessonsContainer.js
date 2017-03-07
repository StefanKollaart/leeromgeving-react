import React, { PureComponent } from 'react'
import LessonItem from './LessonItem'

class LessonsContainer extends PureComponent {
  renderLessons(lesson, index) {
    return <LessonItem key={index} {...lesson} />
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

export default LessonsContainer
