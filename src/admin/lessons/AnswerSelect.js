import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AnswerSelect extends PureComponent {


  render() {
    return(
      <option value={this.props.order}>{this.props.answer}</option>
    )
  }
}


export default AnswerSelect
