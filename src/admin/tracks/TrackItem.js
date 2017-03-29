import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TrackItem extends PureComponent {
  render() {
    const { name, _id } = this.props

    return (
        <li><Link to={`/admin/tracks/${_id}`}>{name}</Link></li>
    )
  }
}

export default TrackItem
