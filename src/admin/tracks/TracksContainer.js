import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchTracks from '../../actions/tracks/fetch'
import TrackItem from './TrackItem'

class TracksContainer extends PureComponent {
  renderTracks(user, index) {
    return <TrackItem key={index} {...user} />
  }

  componentDidMount() {
    this.props.fetchTracks()
  }

  render() {
    return(
      <div className="inner">
        <header>
          <h1>Tracks</h1>
        </header>

        <main>
          <ul>
            {this.props.tracks.map(this.renderTracks)}
          </ul>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ tracks }) => ({
  tracks
})

export default connect(mapStateToProps, { fetchTracks })(TracksContainer)
