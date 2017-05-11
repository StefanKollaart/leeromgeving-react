import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import fetchTracks from '../actions/tracks/fetch'
import UserTrack from './UserTrack'
import Fade from 'react-fade'
import { history } from '../store'
import LessonsContainer from '../lessons/LessonsContainer'

class TrackSelect extends PureComponent {

  componentWillMount() {
    this.props.fetchTracks();
    this.renderTrack = this.renderTrack.bind(this)
  }

  renderTrack(track, index) {
    const currentUser = this.props.currentUser
    return <UserTrack key={index} {...track} userId={currentUser._id} userTracks={currentUser.allTracks} />
  }

  render() {
    if (this.props.currentUser.track == null) {
      let h1Fade;
      let h2Fade;
      let tileFade;
      if (!this.props.currentUser.allTracks || this.props.currentUser.allTracks.length == 0) {
        h1Fade = 2;
        h2Fade = 4;
        tileFade = 6;
      } else {
        h1Fade = 0;
        h2Fade = 0;
        tileFade = 0;
      }

      return (
        <div id="main">
          <section id="one" className="track-select">
            <div className="inner">
              <Fade duration={h1Fade}>
                {h1Fade = 2 ? <h1>Welkom bij Kollaart Opleidingen, {this.props.currentUser.first_name}.</h1> : <h1>Gefeliciteerd met het voltooien van een track, {this.props.currentUser.first_name}</h1>}
              </Fade>
              <Fade duration={h2Fade}>
                {h2Fade = 4 ? <h2>Met welk onderwerp wil je starten?</h2> : <h2>Welk onderwerp wil je nu aan gaan pakken?</h2>}
              </Fade>
            </div>
            <Fade duration={tileFade}>
            <section className='tiles'>
              {this.props.tracks.map(this.renderTrack)}
            </section>
            </Fade>
          </section>
        </div>
      )
    } else {
      return(
        <div>
          <LessonsContainer/>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ tracks, currentUser }, { params }) => {
  return {
    currentUser, tracks
  }
}

export default connect(mapStateToProps, {fetchTracks})(TrackSelect)
