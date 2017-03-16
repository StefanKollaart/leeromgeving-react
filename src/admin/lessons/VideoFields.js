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
    this.handleVideo = this.handleVideo.bind(this)
  }


  handleVideo(index, event) {
    this.setState({
      video: event.target.value
    })
    this.props.handleVideo(index, event)
  }

  render() {
    return(
      <li>
        <label>Video {this.props.id + 1} - <span className="removeItem" onClick={() => {this.props.removeVideo(this.props.id)}}>Verwijder</span></label>
        {this.state.video ? <iframe className="vimeo" src={"https://player.vimeo.com/video/" + this.state.video} width="640" height="360" allowFullScreen>
        </iframe>  : null }
        <input type="text" placeholder="Vimeo ID" value={this.state.video} onChange={this.handleVideo.bind(this, this.props.id)} className="field-long"/>
      </li>
    )
  }
}

export default VideoFields
