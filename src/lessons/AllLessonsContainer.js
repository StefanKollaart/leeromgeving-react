import React, { PureComponent, PropTypes } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import fetchCurrentUser from '../actions/user/fetch-current'
import UserStats from '../components/UserStats'
import checkWorkingLesson from '../actions/user/check-working-lesson'
import { history } from '../store'
import TrackSelect from '../tracks/TrackSelect'

class AllLessonsContainer extends PureComponent {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    fetchLessons: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.renderLessons = this.renderLessons.bind(this)
    this.props.fetchCurrentUser(this.props.currentUser)
    this.props.checkWorkingLesson(this.props.currentUser)
  }

  renderLessons(lesson, index) {
    if (lesson.track && this.props.currentUserLessonsIds.includes(lesson._id) && lesson.track._id != this.props.currentUser.track) {
      return <LessonItem key={index} {...lesson} currentUser={this.props.currentUser} updateCurrent={false} />
    }
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
      return(
          <div id="main">
            <section id="one" className="tiles">
              {this.props.lessons.map(this.renderLessons)}
            </section>
          </div>
      )


  }
}

const mapStateToProps = ({ lessons, currentUser }) => {
  const currentUserLessonsIds = lessons.map((currentUserLesson) => {
    return currentUserLesson._id
  }, {})

  return {
    lessons, currentUser, currentUserLessonsIds
  }
}

export default connect(mapStateToProps, { fetchLessons, fetchCurrentUser, checkWorkingLesson })(AllLessonsContainer)
