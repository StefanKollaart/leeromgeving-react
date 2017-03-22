import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../../actions/user/sign-out'


export class Adminnavigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className="menubar">
          <li><Link to="/admin/users">Gebruikers</Link></li>
          <li><Link to="/admin/lessons">Lessen</Link></li>
          <li><Link to="/">Leeromgeving</Link></li>
          <li><a href="#" onClick={this.signOut.bind(this)}>Log uit</a></li>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Adminnavigation)
