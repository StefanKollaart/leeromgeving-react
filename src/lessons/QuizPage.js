import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchLessons from '../actions/lessons/fetch'
import QuestionItem from './QuestionItem'
import finishLesson from '../actions/user/done-lesson'

export class QuizPage extends PureComponent {
  static propTypes = {}

  renderItem(question, index) {
    return <QuestionItem {...question} key={index} checkAnswer={this.checkAnswer} />
  }

  componentWillMount() {
    this.props.fetchLessons()
    this.checkAnswer = this.checkAnswer.bind(this)
    this.state = {
      questionId: 0,
      givenAnswers: [],
      quizDone: false,
      succeeded: false,
      average: 0,
    }
  }

  checkAnswer(answerGiven, correctAnswer) {
    var newGivenAnswers = this.state.givenAnswers
    if (answerGiven == correctAnswer) {
      newGivenAnswers.push(1)
    } else {
      newGivenAnswers.push(0)
    }
    if (this.state.questionId + 1 >= this.props.questions.length ) {
      this.setState({
        givenAnswers: newGivenAnswers,
        quizDone: true,
      }, function() {
        let scoreArray = this.state.givenAnswers
        var sum = scoreArray.reduce(function(a, b) { return a + b; });
        var avg = sum / scoreArray.length * 100;
        if (avg > 79) {
          this.props.finishLesson(this.props.currentUser, this.props._id)
          this.setState({
            average: avg,
            succeeded: true,
          })
        } else {
          this.setState({
            average: avg,
            succeeded: false,
          })
        }
      })
    } else {
      var newQuestionId
      newQuestionId = this.state.questionId + 1
      this.setState({
        givenAnswers: newGivenAnswers,
        questionId: newQuestionId,
      })
    }

  }

  render() {
    const { title, questions } = this.props
    if (this.state.quizDone != true) {
      return(
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{ title }</h1>
              </header>
              {(this.props.questions && this.renderItem(questions[this.state.questionId], this.state.questionId))}
            </div>
          </section>
        </div>
      )
    } else {
      return(
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{ title }</h1>
              </header>
              {this.state.succeeded ? "Gehaald!" : "Niet gehaald"}<br/>
              {this.state.average}%
            </div>
          </section>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ lessons, currentUser }, { params }) => {
  const lesson = lessons.reduce((prev, next) => {
    if (next._id === params.lessonId) {
      return next
    }
    return prev
  }, {})

  return {
    ...lesson, currentUser
  }
}



export default connect(mapStateToProps, { fetchLessons, finishLesson })(QuizPage)
