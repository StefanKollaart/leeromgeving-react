import React, { PropTypes } from 'react'
import LessonsContainer from './lessons/LessonsContainer'
import Navigation from './components/Navigation'
import { connect } from 'react-redux'
import SignIn from './users/SignIn'
import './App.scss'

class App extends React.Component {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  render() {
    const { signedIn } = this.props

    if(signedIn) {
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
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { SignIn })(App)
