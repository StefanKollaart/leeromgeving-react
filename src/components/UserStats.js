import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class UserStats extends PureComponent {

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


  render() {
    const { signedIn, userName } = this.props
    return(
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>{this.getGreeting()}, {userName}</h1>
            <h2>{this.getMessage()}</h2>
          </header>
          <div className="content">
            <p>Je was hiermee bezig [LES PLACEHOLDER]. <br/><br/><button>Verder gaan</button></p>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id),
  userName: (currentUser.first_name)
})

export default connect(mapStateToProps)(UserStats)
