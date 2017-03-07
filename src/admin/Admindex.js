import React, { PureComponent, PropTypes } from 'react'
import LessonItem from '../lessons/LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'

class Admindex extends PureComponent {
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

export default connect(mapStateToProps, { fetchLessons })(Admindex)
