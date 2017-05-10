import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import fetchTracks from '../actions/tracks/fetch'
import UserTrack from './UserTrack'

class TrackSelect extends PureComponent {

  componentWillMount() {
    this.props.fetchTracks();
  }

  renderTrack(track, index) {
    return <UserTrack key={index} {...track} />
  }

  render() {
    debugger
    return (
      <div id="main">
        <section id="one">
          <div className="inner">
            <h1>Welkom, {this.props.currentUser.first_name}.</h1>
            <h2>Met welk onderwerp wil je starten?</h2>
            {this.props.tracks.map(this.renderTrack)}
          </div>

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
