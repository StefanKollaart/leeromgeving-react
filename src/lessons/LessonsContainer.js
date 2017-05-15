import React, { PureComponent, PropTypes } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import fetchCurrentUser from '../actions/user/fetch-current'
import UserStats from '../components/UserStats'
import checkWorkingLesson from '../actions/user/check-working-lesson'
import { history } from '../store'
import TrackSelect from '../tracks/TrackSelect'

class LessonsContainer extends PureComponent {
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
    if (lesson.track) {
      if (String(lesson.track._id) == String(this.props.currentUser.track)) {
        return <LessonItem key={index} {...lesson} currentUser={this.props.currentUser} updateCurrent={true}/>
      }
    }
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
    if (this.props.currentUser.track) {
      return(
          <div id="main">
            <UserStats/>
            <section id="one" className="tiles">
              {this.props.lessons.map(this.renderLessons)}
            </section>
          </div>
      )
    } else {
      return(
        <div>
          <TrackSelect></TrackSelect>
        </div>
      )
    }

  }
}

const mapStateToProps = ({ lessons, currentUser }) => ({
  lessons, currentUser
})

export default connect(mapStateToProps, { fetchLessons, fetchCurrentUser, checkWorkingLesson })(LessonsContainer)
