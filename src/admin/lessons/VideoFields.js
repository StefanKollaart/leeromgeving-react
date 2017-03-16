import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class VideoFields extends Component {
  constructor(props) {
    super(props)
    if(this.props && this.props.video) {
      this.state = {
        video: this.props.video
      }
    } else {
      this.state = {
        video: ''
      }
    }
  }

  componentWillMount() {
    this.videoPreview = this.videoPreview.bind(this)
  }

  videoPreview(event) {
    this.setState({
      video: event.target.value
    }, function() {
      if(this.state.video.length > 0) {
        this.setState({
          videoPreview: this.state.video
        })
      } else {
        this.setState({
          videoPreview: undefined
        })
      }
    })
  }

  render() {
    return(
      <li>
        <label>Video {this.props.id + 1}</label>
        {this.state.videoPreview ? <iframe className="vimeo" src={"https://player.vimeo.com/video/" + this.state.videoPreview} width="640" height="360" allowFullScreen>
        </iframe>  : null }
        <input type="text" placeholder="Vimeo ID" value={this.state.video} onChange={this.props.handleVideo.bind(this, this.props.id), this.videoPreview} className="field-long"/>
      </li>
    )
  }
}

export default VideoFields
