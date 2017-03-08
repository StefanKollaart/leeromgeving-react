import React, { PureComponent, PropTypes } from 'react'
import UserItem from './UserItem'
import { connect } from 'react-redux'
import fetchUsers from '../../actions/user/fetch'

class UsersContainer extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  }
  renderUsers(user, index) {
    return <UserItem key={index} {...user} />
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return(
      <div className="users wrapper">
        <header>
          <h1>Gebruikers</h1>
        </header>

        <main>
          <ul>
            {this.props.users.map(this.renderUsers)}
          </ul>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps, { fetchUsers })(UsersContainer)
