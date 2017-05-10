import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class UserTrack extends PureComponent {
  render() {
    return (
      <p>{this.props.name}</p>
    )
  }
}

export default UserTrack
