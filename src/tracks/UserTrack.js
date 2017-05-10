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
    debugger
    this.props.trackSelect(user);
  }

  render() {
    return (
      <a onClick={this.setTrack}>{this.props.name}</a>
    )
  }
}

export default connect(null, {trackSelect})(UserTrack)
