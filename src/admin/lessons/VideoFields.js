import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class VideoFields extends Component {
  render() {
    return(<div><input type="text" placeholder="Vimeo ID" value={this.props.video} onChange={this.props.handleVideo.bind(this, this.props.id)}/></div>)
  }
}

export default VideoFields
