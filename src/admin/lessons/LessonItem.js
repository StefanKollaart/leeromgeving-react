import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LessonItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { _id, title, trackId, track } = this.props

    if (track && trackId == track._id) {
      return (
          <li><Link to={`/admin/lessons/${_id}`}>{title}</Link></li>
      )
    } else {
      if(this.props.trackLess) {
        return (
          <li><Link to={`/admin/lessons/${_id}`}>{title}</Link></li>
        )
      } else {
        return (
          <span></span>
        )
      }
    }
  }
}

export default LessonItem
