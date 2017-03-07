import React, { PureComponent, PropTypes } from 'react'
import LessonItem from '../lessons/LessonItem'
import { connect } from 'react-redux'

class Admindex extends PureComponent {
  static propTypes = {

  }

  getGreeting() {
  var d = new Date();
  var time = d.getHours();

  if (time >= 0 && time < 6) {
    return(<span>Goedennacht</span>)
  }
  if (time >= 6 && time < 12) {
    return(<span>Goedenmorgen</span>)
  }
  if (time >= 12 && time < 18) {
    return(<span>Goedenmiddag</span>)
  }
  if (time >= 18) {
    return(<span>Goedenavond</span>)
  }
 }

  render() {

    return(
      <div className="lessons wrapper">
        <header>
          <h1>{ this.getGreeting() }, { this.props.currentUser.first_name }</h1>
        </header>

        <main>

        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

export default connect(mapStateToProps)(Admindex)
