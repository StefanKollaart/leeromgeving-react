import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class UserItem extends PureComponent {
  static propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    groups: PropTypes.array,
  }
  render() {
    const { _id, first_name, last_name, email, groups } = this.props

    return (
        <li><Link to={`/admin/users/${_id}`}>{first_name} { last_name }</Link></li>
    )
  }
}

export default UserItem
