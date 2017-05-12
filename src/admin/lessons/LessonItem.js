import React, {PureComponent, PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './LessonItem.scss'
import lessonUp from '../../actions/lessons/lesson-order-up'
import lessonDown from '../../actions/lessons/lesson-order-down'


class LessonItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  componentWillMount() {
    this.higherLessonNumber = this.higherLessonNumber.bind(this)
    this.lowerLessonNumber = this.lowerLessonNumber.bind(this)
  }

  higherLessonNumber() {
    const lesson = {
      track: this.props.track,
      _id: this.props._id,
      lessonNumber: this.props.lessonNumber,
    }
    this.props.lessonUp(lesson)
  }

  lowerLessonNumber() {
    const lesson = {
      track: this.props.track,
      _id: this.props._id,
      lessonNumber: this.props.lessonNumber,
    }
    this.props.lessonDown(lesson)
  }

  render() {
    const { _id, title, trackId, track, active, lessonNumber, highestLessonNumber } = this.props

    if (track && trackId == track._id) {
      if (active) {
        return (
            <li><Link to={`/admin/lessons/${_id}`}>{title}</Link>
            {lessonNumber != 1 ? <img className="arrow-img" onClick={this.higherLessonNumber} src="https://s4.postimg.org/7jsutj33h/placing-arrow-up.png"></img> : ""}
            {lessonNumber != highestLessonNumber ? <img className="arrow-img" onClick={this.lowerLessonNumber} src="https://s4.postimg.org/4bodghgtp/placing-arrow-down.png"></img> : ""}
            </li>
        )
      } else {
        return (
            <li><Link to={`/admin/lessons/${_id}`}>{title}</Link> <span className="inactive"><img src="https://s29.postimg.org/454ahirh3/cancel-146131_1280.png"/> les niet actief</span></li>
        )
      }
    } else {
      if(this.props.trackLess) {
        return (
          <li><Link to={`/admin/lessons/${_id}`}>{title}</Link> <span className="inactive"><img src="https://s29.postimg.org/454ahirh3/cancel-146131_1280.png"/> les niet actief</span></li>
        )
      } else {
        return (
          <span></span>
        )
      }
    }
  }
}

export default connect(null, { lessonUp, lessonDown })(LessonItem)
