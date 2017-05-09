import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AnswerItem extends PureComponent {

  componentWillMount() {
    this.getOrder = this.getOrder.bind(this)
  }

  getOrder() {
    switch (this.props.order) {
      case 1:
        return "A"
        break;

      case 2:
        return "B"
        break;

      case 3:
        return "C"
        break;

      case 4:
        return "D"
        break;

      case 5:
        return "E"
        break;

      case 6:
        return "F"
        break;

      case 7:
        return "G"
        break;

      case 8:
        return "H"
        break;

      case 9:
        return "I"
        break;

      case 10:
        return "J"
        break;

      default:
        return ""

    }
  }

  render() {
    const { answer, order, correctAnswer } = this.props
      return(
        <button onClick={() => {this.props.checkAnswer(order, correctAnswer)}}>{this.getOrder()}. {answer}</button>
      )
  }
}

export default AnswerItem
