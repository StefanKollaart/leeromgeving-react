import React, {PureComponent, PropTypes} from 'react'

class LessonItem extends PureComponent {
  static propTypes = {
    lessonNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.string,
    tekst: PropTypes.string, 
  }
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
