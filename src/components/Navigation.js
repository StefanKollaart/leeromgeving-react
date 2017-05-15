import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'
import './Navigation.scss'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn, isAdmin, userName } = this.props
    return (
      <header id="header" className="alt">
        <nav className="menubar">
            <li><Link to="/">Leren</Link></li>
            <li><Link to="/all">Voltooide lessen</Link></li>
            <li>
              {(isAdmin && <Link to="/admin">Admin</Link>) }
            </li>
            <li>
              { signedIn ?
                <a href="#" onClick={this.signOut.bind(this)}>Uitloggen</a> :
                <div><Link to="/sign-in">Log in</Link></div>
              }
            </li>
            <li><a>{userName}</a></li>
          </nav>
        </header>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id),
  isAdmin: (currentUser && currentUser.admin == true),
  userName: (currentUser.first_name)
})

export default connect(mapStateToProps, { signOut })(Navigation)
