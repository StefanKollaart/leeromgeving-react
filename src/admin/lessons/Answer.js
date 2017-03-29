import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Answer extends Component {

  render() {
      return(
        <span>
          <label>Antwoord ({this.props.order}) - <span className="removeItem" onClick={() => {this.props.removeAnswer(this.props.id)}}>Verwijder</span></label>
          <input type="text" placeholder="Antwoord" value={this.props.answer} onChange={this.props.handleAnswer.bind(this, this.props.questionIndex, this.props.answerId)} className="field-long"/>
        </span>
      )
  }
}

export default Answer
