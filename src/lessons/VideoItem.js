import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class VideoItem extends PureComponent {
  render() {
    const { video } = this.props

    return (
      <iframe src={"https://player.vimeo.com/video/" + video} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    )
  }
}

export default VideoItem
