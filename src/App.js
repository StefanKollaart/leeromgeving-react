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
          <Navigation />
          {this.props.children}
          <footer id="footer">
            <div className="inner">
              <ul className="icons">
                <li><span className="label"><a href="https://www.facebook.com/Kollaart/">Facebook</a></span></li>
                <li><span className="label"><a href="https://www.instagram.com/kollaart_opleidingen/">Instagram</a></span></li>
              </ul>
              <ul className="copyright">
                <li>&copy; 2017 Kollaart Opleidingen</li><li>Works because of <a href="http://www.stefankollaart.com">Stefan Kollaart</a>, looks nice thanks to <a href="https://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </footer>
        </div>
      )
    } else {
      return (
        <div id="wrapper">
          <SignIn />
        </div>
      )
    }
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id),
})

export default connect(mapStateToProps, { SignIn })(App)
