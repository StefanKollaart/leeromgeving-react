import React, { PureComponent, PropTypes } from 'react'
import LessonItem from './LessonItem'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import fetchCurrentUser from '../actions/user/fetch-current'
import UserStats from '../components/UserStats'

class LessonsContainer extends PureComponent {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    fetchLessons: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.renderLessons = this.renderLessons.bind(this)
    this.props.fetchCurrentUser(this.props.currentUser)

  }
  renderLessons(lesson, index) {
    return <LessonItem key={index} {...lesson} currentUser={this.props.currentUser} />
  }

  componentDidMount() {
    this.props.fetchLessons()
  }

  render() {
    return(
        <div id="main">
          <UserStats/>
          <section id="one" className="tiles">
            {this.props.lessons.map(this.renderLessons)}
          </section>
        </div>
    )
  }
}

const mapStateToProps = ({ lessons, currentUser }) => ({
  lessons, currentUser
})

export default connect(mapStateToProps, { fetchLessons, fetchCurrentUser })(LessonsContainer)
