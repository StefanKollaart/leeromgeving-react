import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class RenderCheckboxes extends Component {
  constructor(props) {
    super(props)
    if (this.state == null) {
      if(this.props.userCourses.length == 0) {
        this.state = {
          isChecked: false,
        }
      } else {
        for (var i = 0; i < this.props.userCourses.length; i++) {
          if(this.props.userCourses[i].courseType == this.props.courseType && this.props.userCourses[i].year == this.props.year && this.props.userCourses[i].day == this.props.day) {
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
      let changedCourse = {
        courseType: this.props.courseType
      }
      this.props.handleCourses(changedCourse, this.state.isChecked)
    })
  }

  renderCourse(courseType) {
    switch (courseType) {
      case 1:
        return "Pedicure"
        break;
      case 2:
        return "Sportmassage"
        break;
      default:
        return "Course niet gevonden"
    }
  }

  static propTypes = {
    courseType: PropTypes.number.isRequired,
    userCourses: PropTypes.array,
  }

  render() {
    const { courseType } = this.props

    return(<div><input type="checkbox" checked={this.state.isChecked} onChange={this.handleClick} />{this.renderCourse(courseType)}</div>)
  }
}

export default RenderCheckboxes
