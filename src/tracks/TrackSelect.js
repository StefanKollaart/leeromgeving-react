import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import fetchTracks from '../actions/tracks/fetch'
import UserTrack from './UserTrack'
import Fade from 'react-fade'

class TrackSelect extends PureComponent {

  componentWillMount() {
    this.props.fetchTracks();
    this.renderTrack = this.renderTrack.bind(this)
  }

  renderTrack(track, index) {
    const currentUser = this.props.currentUser
    return <UserTrack key={index} {...track} userId={currentUser._id} />
  }

  render() {
    return (
      <div id="main">
        <section id="one" className="track-select">
          <div className="inner">
            <Fade duration='2'>
              <h1>Welkom bij Kollaart Opleidingen, {this.props.currentUser.first_name}.</h1>
            </Fade>
            <Fade duration='4'>
              <h2>Met welk onderwerp wil je starten?</h2>
            </Fade>
          </div>
          <Fade duration='5'>
          <section className='tiles'>
            {this.props.tracks.map(this.renderTrack)}
          </section>
          </Fade>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ tracks, currentUser }, { params }) => {
  return {
    currentUser, tracks
  }
}

export default connect(mapStateToProps, {fetchTracks})(TrackSelect)
