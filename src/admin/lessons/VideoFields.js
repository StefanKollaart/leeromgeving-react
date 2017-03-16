import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class VideoFields extends Component {
  render() {
    return(
      <li>
        <label>Video {this.props.id + 1} - <span className="removeItem" onClick={() => {this.props.removeVideo(this.props.id)}}>Verwijder</span></label>
        {this.props.video ? <iframe className="vimeo" src={"https://player.vimeo.com/video/" + this.props.video} width="640" height="360" allowFullScreen>
        </iframe>  : null }
        <input type="text" placeholder="Vimeo ID" value={this.props.video} onChange={this.props.handleVideo.bind(this, this.props.id)} className="field-long"/>
      </li>
    )
  }
}

export default VideoFields
