import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import trackSelect from '../actions/user/track-select'
import Fade from 'react-fade'

class UserTrack extends PureComponent {

  componentWillMount() {
    this.setTrack = this.setTrack.bind(this);
  }

  setTrack(e) {
    e.preventDefault()
    const user = {
      _id: this.props.userId,
      track: this.props._id
    };
    this.props.trackSelect(user);
  }

  render() {
    if (this.props.userTracks.includes(this.props._id)) {
      return (
        <article style={{background: `url(${this.props.image})`, backgroundSize: 'cover'}}>
          <span className="image">
            <img src="https://s27.postimg.org/am1ifej1f/aj3_Pl4y.jpg" alt="" />
          </span>
          <header className="major">
            <h3>{this.props.name}</h3>
            <h3><img width="40px" height="40px" src="https://s3.postimg.org/hmhb6eqqb/5zuae_A9.png"></img> Afgerond</h3>
          </header>
        </article>
      )
    } else {
      return (
        <article style={{background: `url(${this.props.image})`, backgroundSize: 'cover'}}>
          <span className="image">
            <img src="https://s27.postimg.org/am1ifej1f/aj3_Pl4y.jpg" alt="" />
          </span>
          <header className="major">
            <h3>{this.props.name}</h3>
            <button onClick={this.setTrack} className="lerenButton">Kies deze track</button>
          </header>
        </article>
      )
    }

  }
}

export default connect(null, {trackSelect})(UserTrack)
