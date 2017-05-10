import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import trackSelect from '../actions/user/track-select'

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
    return (
      <article style={{background: 'url(http://i.imgur.com/RRUe0Mo.png)', backgroundSize: 'cover'}}>
        <span className="image">
          <img src="http://i.imgur.com/aj3Pl4y.jpg" alt="" />
        </span>
        <header className="major">
          <h3>{this.props.name}</h3>
          <p>Deze les gaat over..</p>
          <button onClick={this.setTrack} className="lerenButton">Kies deze track</button>
        </header>
      </article>
    )
  }
}

export default connect(null, {trackSelect})(UserTrack)
