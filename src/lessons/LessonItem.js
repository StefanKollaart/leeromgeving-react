import React, {PureComponent} from 'react'

class LessonItem extends PureComponent {
  render() {
    const { lessonNumber, title, video, tekst } = this.props

    return (
      <article className = "Lesson">
        <h1>{ title }</h1>
        <div>
          <p>{ tekst }</p>
        </div>
      </article>
    )
  }
}

export default LessonItem
