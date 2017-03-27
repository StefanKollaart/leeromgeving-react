import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class CourseSelect extends PureComponent {


  render() {
      switch (this.props.courseType) {
        case 1:
          return(<option value="1">Pedicure</option>)
          break;

        case 2:
          return(<option value="2">Sportmassage</option>)
          break;

        default:
          return(<option value="404">Error not found</option>)
          break;

      }
  }
}


export default CourseSelect
