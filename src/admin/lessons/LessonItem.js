import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LessonItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { _id, title } = this.props

    return (
        <li><Link to={`/admin/lessons/${_id}`}>{title}</Link></li>
    )
  }
}

export default LessonItem
