import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import newLesson from '../../actions/lessons/new-lesson'
import TekstInput from './fields/TekstInput'

export class CreateLesson extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      numberValue: '',
      titleValue: '',
      tekstFields: [],
      tekstFieldsValue: [],
    }

    this.handleNumber = this.handleNumber.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.addTextField = this.addTextField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTekstField = this.handleTekstField.bind(this)
  }

  handleNumber(event) {
    this.setState({
      numberValue: event.target.value
    });
  }

  handleTitle(event) {
    this.setState({
      titleValue: event.target.value
    });
  }

  handleTekstField(event) {
    this.setState({
      tekstFieldsValue: event.target.value
    })
  }

  addTextField() {
    let thisId = this.state.tekstFields.length + 1
    this.setState({
      tekstFields: this.state.tekstFields.concat(<div className="input" key={thisId}>
        <input type="text" placeholder="Tekst" value={this.state.tekstFields[thisId]} key={thisId} onChange={this.handleTekstField} />
      </div>)
    })
  }

  handleSubmit(event) {
    debugger
    event.preventDefault()
    const lesson = {
      lessonNumber: this.state.numberValue,
      title: this.state.titleValue,
    }
    this.props.newLesson(lesson)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="lessonGeneral">
          <div className="input">
            <input value={this.state.number} onChange={this.handleNumber} type="number" placeholder="Number" />
          </div>
          <div className="input">
            <input value={this.state.title} onChange={this.handleTitle} type="text" placeholder="Title" />
          </div>
        </div>
        <div className="lessonDetails">
          {this.state.tekstFields.map((Element, index) => {
            return Element
          })}
          <span onClick={ this.addTextField }>Add</span>
        </div>
        <input type="submit" value="Toevoegen" />
      </form>
    );
  }
}

export default connect(null, { newLesson })(CreateLesson)