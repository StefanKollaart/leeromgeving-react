import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'
import './Navigation.scss'

export class Navigation extends PureComponent {
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
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            { signedIn ?
              <a href="#" onClick={this.signOut.bind(this)}>Log uit</a> :
              <div><Link to="/sign-in">Log in</Link></div>
            }
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)