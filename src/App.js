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
    const { signedIn, userName } = this.props

    if(signedIn) {
      return (
        <div id="wrapper">
          <header id="header" className="alt">
            <a href="index.html" className="logo"><strong>Kollaart Leeromgeving</strong></a> <span>{this.props.userName}</span>
            <Navigation />
          </header>
          {this.props.children}
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
  signedIn: (!!currentUser && !!currentUser._id),
  userName: (currentUser.first_name)
})

export default connect(mapStateToProps, { SignIn })(App)
