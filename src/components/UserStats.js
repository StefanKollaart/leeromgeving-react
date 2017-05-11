import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class UserStats extends Component {



  getGreeting() {
  var d = new Date();
  var time = d.getHours();

  if (time >= 0 && time < 6) {
    return(<span>Goedenacht</span>)
  }
  if (time >= 6 && time < 12) {
    return(<span>Goedemorgen</span>)
  }
  if (time >= 12 && time < 18) {
    return(<span>Goedemiddag</span>)
  }
  if (time >= 18) {
    return(<span>Goedeavond</span>)
  }
 }

 getMessage() {
   var d = new Date();
   var time = d.getHours();

   if (time >= 0 && time < 6) {
     return(<span>Nu nog aan het studeren? Goed bezig!</span>)
   }
   if (time >= 6 && time < 12) {
     return(<span>Even een bak koffie en aan de bak!</span>)
   }
   if (time >= 12 && time < 18) {
     return(<span>Tijd voor de meest productieve middag van je leven!</span>)
   }
   if (time >= 18) {
     return(<span>Vergeet je leeslampje niet ;)</span>)
   }
 }

 checkIfActive() {

 }


  render() {
    const { signedIn, userName, lessonWorking } = this.props
    if (lessonWorking && lessonWorking.active) {
      return(
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>{this.getGreeting()}, {userName}</h1>
              <h2>{this.getMessage()}</h2>
            </header>
            <div className="content">
              <p>{lessonWorking ? "Je bent nu bezig met: " : ""}{lessonWorking ? lessonWorking.title : ""}
              {lessonWorking ? <Link className="leren" to={`/lessons/${lessonWorking._id}`}><br/><button className="lerenButton">Ga verder met {lessonWorking.title}</button></Link> : ""}</p>
            </div>
          </div>
        </section>
      )
    } else {
      return(
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>{this.getGreeting()}, {userName}</h1>
              <h2>{this.getMessage()}</h2>
            </header>
          </div>
        </section>
      )
    }
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser: currentUser,
  signedIn: (!!currentUser && !!currentUser._id),
  userName: (currentUser.first_name),
  lessonWorking: (currentUser.lesson_working)
})

export default connect(mapStateToProps
)(UserStats)
