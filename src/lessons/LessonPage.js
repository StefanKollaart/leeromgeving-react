import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import ContentItem from './ContentItem'

export class LessonPage extends PureComponent {
  static propTypes = {}

  renderItem(content, index) {
    return <ContentItem content = {content} key={index} />
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
    const { title, content } = this.props

    return(
      <section className="panel banner right">
        <div className="content color0 span-8">
        <h1>{ title }</h1>

        <main>
          {(content != undefined && content.map(this.renderItem))}
        </main>
        </div>
      </section>
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
