import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Answer from './Answer'
import AnswerSelect from './AnswerSelect'

class Question extends Component {

  componentWillMount() {
    this.renderAnswers = this.renderAnswers.bind(this)
  }

  renderAnswers(answer, index) {
    return <Answer key={index} answerId={index} {...answer} handleAnswer={this.props.handleAnswer} questionIndex={this.props.id} handleCorrectAnswer={this.props.handleCorrectAnswer}/>
  }

  answerSelect(answer, index) {
    return <AnswerSelect key={index} answerId={index} {...answer}/>
  }

  render() {

      return(
        <span>
          <label>Vraag ({this.props.order}) - <span className="removeItem" onClick={() => {this.props.removeQuestion(this.props.id)}}>Verwijder</span></label>
          <input type="text" placeholder="Vraag" value={this.props.question} onChange={this.props.handleQuestion.bind(this, this.props.id)} className="field-long"/>
          <label>Correcte antwoord</label>
          <select value={this.props.correctAnswer} onChange={this.props.handleCorrectAnswer.bind(this, this.props.id)} >
            <option>Selecteer</option>
            {this.props.answers.map(this.answerSelect)}
          </select>
          <hr/>
          {this.props.answers.map(this.renderAnswers)}
          <span><button onClick={this.props.addAnswer.bind(this, this.props.id)}>Voeg antwoord toe</button></span>
          <hr/>
        </span>
      )
  }
}

export default Question
