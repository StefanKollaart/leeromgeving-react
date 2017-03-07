import React, { PropTypes } from 'react'
import LessonsContainer from './lessons/LessonsContainer'
import { connect } from 'react-redux'
import SignIn from './users/SignIn'
import Navigation from './admin/components/Navigation'

class Adminapp extends React.Component {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired,
  }

  render() {
    const { isAdmin } = this.props

    if(isAdmin) {
      return (
        <div className="app">
          <Navigation />
          <div className="content">
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <SignIn />
        </div>
      )
    }
  }
}

const mapStateToProps = ({ currentUser }) => ({
  isAdmin: (currentUser && currentUser.admin == true)
})

export default connect(mapStateToProps, { SignIn })(Adminapp)
