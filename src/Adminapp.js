import React, { PropTypes } from 'react'
import LessonsContainer from './lessons/LessonsContainer'
import { connect } from 'react-redux'
import SignIn from './users/SignIn'
import Navigation from './admin/components/Navigation'
import './Adminapp.scss'

class Adminapp extends React.Component {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired,
  }

  render() {
    const { isAdmin } = this.props

    if(isAdmin) {
      return (
        <div id="wrapper">
          <header id="header" className="alt">
            <Navigation />
          </header>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div className="app">
          <div className="signin">
            <SignIn />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ currentUser }) => ({
  isAdmin: (currentUser && currentUser.admin == true),
  userName: (currentUser.first_name)
})

export default connect(mapStateToProps, { SignIn })(Adminapp)
