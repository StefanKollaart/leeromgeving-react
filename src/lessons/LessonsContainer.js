import React, { PureComponent, PropTypes } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'

class LessonsContainer extends PureComponent {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    fetchLessons: PropTypes.func.isRequired,
  }
  renderLessons(lesson, index) {
    return <LessonItem key={index} {...lesson} />
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
    return(
      <section className="panel banner right">
        <div className="content color0 span-3-75">
        <header>
          <h1 className="major">Lessons</h1>
        </header>

        <main>
          {this.props.lessons.map(this.renderLessons)}
        </main>
        </div>
        <div className="image filtered span-1-75" data-position="25% 25%">
          <img src="http://i.imgur.com/fRw3gJl.jpg" alt="" />
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ lessons }) => ({
  lessons
})

export default connect(mapStateToProps, { fetchLessons })(LessonsContainer)
