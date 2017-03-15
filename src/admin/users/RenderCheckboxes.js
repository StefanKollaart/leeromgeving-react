import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class RenderCheckboxes extends PureComponent {
  constructor(props) {
    super(props)
    if (this.state == null) {
      if(this.props.userGroups.length == 0) {
        this.state = {
          isChecked: false,
        }
      } else {
        for(var i = 0; i < this.props.userGroups.length; i++) {
          if(this.props.userGroups[i].courseId == this.props.courseId && this.props.userGroups[i].year == this.props.year && this.props.userGroups[i].day == this.props.day) {
            this.state = {
              isChecked: true,
            }
          } else {
            this.state = {
              isChecked: false,
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
      let changedGroup = {
        year: this.props.year,
        day: this.props.day,
        courseId: this.props.courseId
      }
      this.props.handleGroups(changedGroup, this.state.isChecked)
    })
  }

  renderDay(day) {
    switch (day) {
      case 0:
        return "Zondag"
        break;
      case 1:
        return "Maandag"
        break;
      case 2:
        return "Dinsdag"
        break;
      case 3:
        return "Woensdag"
        break;
      case 4:
        return "Donderdag"
        break;
      case 5:
        return "Vrijdag"
        break;
      case 6:
        return "Zaterdag"
        break;

      default:
      return "Dag niet gevonden"
    }
  }

  renderCourse(courseId) {
    switch (courseId) {
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
    courseId: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    userGroups: PropTypes.array,
  }

  render() {
    const { courseId, year, day, checkBoxId } = this.props

    return(<div><input type="checkbox" checked={this.state.isChecked} onChange={this.handleClick} />{this.renderCourse(courseId)} - {year} - {this.renderDay(day)}</div>)
  }
}

export default RenderCheckboxes
