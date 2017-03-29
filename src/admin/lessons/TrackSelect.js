import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TrackSelect extends Component {
  constructor(props) {
    super(props)
    if (this.state == null) {
      if(!this.props.userTrack || this.props.userTrack.length == 0) {
        this.state = {
          isChecked: false,
        }
      } else {
        console.log(this.props.userTrack)
        for (var i = 0; i < this.props.userTrack.length; i++) {
          console.log(this.props.userTrack[i].name)
          console.log(this.props.name)
          console.log(this.props.userTrack[i].name == this.props.name)
          if(this.props.userTrack[i].name == this.props.name) {
            this.state = {
              isChecked: true
            }
            break;
          } else {
            this.state = {
              isChecked: false
            }
          }
        }
      }
    }
  }

  componentWillMount() {
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isChecked: !this.state.isChecked
    }, function() {
      let changedTrack = {
        name: this.props.name
      }
      this.props.handleTracks(changedTrack, this.state.isChecked)
    })
  }

  render() {
        return(<option value={this.props._id}>{this.props.name}</option>)
      }
  }

export default TrackSelect
