import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AnswerItem from './AnswerItem'

class QuestionItem extends PureComponent {
  componentWillMount() {
    this.renderAnswers = this.renderAnswers.bind(this)
  }

  renderAnswers(answer, index) {
    return <AnswerItem key={index} {...answer} checkAnswer={this.props.checkAnswer} correctAnswer={this.props.correctAnswer}/>
  }

  render() {
    const { question, answers } = this.props
      return(
        <div>
          <p>{question}</p>
          {answers.map(this.renderAnswers)}
        </div>
      )
  }
}

export default QuestionItem
