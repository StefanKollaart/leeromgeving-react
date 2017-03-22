import React, { PureComponent, PropTypes } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../../actions/lessons/fetch'

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
      <div className="inner">
        <header>
          <h1>Lessen</h1>
        </header>

        <main>
          <ul>
            {this.props.lessons.map(this.renderLessons)}
          </ul>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ lessons }) => ({
  lessons
})

export default connect(mapStateToProps, { fetchLessons })(LessonsContainer)
