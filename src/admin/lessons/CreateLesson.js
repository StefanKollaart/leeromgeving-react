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
      videoFields: [],
    }

    this.handleNumber = this.handleNumber.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.addTextField = this.addTextField.bind(this)
    this.addVideoField = this.addVideoField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleTekstField(thisId, event) {
        var newTekstFieldsValues = this.state.tekstFieldsValue
        newTekstFieldsValues[thisId -1] = event.target.value
        this.setState({
          tekstFieldsValue: newTekstFieldsValues
        })
  }

  handleVideoField(thisId, event) {
        var newVideoFieldsValues = this.state.videoFieldsValue
        newVideoFieldsValues[thisId -1] = event.target.value
        this.setState({
          videoFieldsValue: newVideoFieldsValues
        })
  }

  addTextField() {
    let thisId = this.state.tekstFields.length + 1
    this.setState({
      tekstFields: this.state.tekstFields.concat(<div className="input" key={thisId}>
        <textarea placeholder="Tekst" value={this.state.tekstFields[thisId]} key={thisId} onChange={this.handleTekstField.bind(this, thisId)} />
      </div>)
    })
  }

  addVideoField() {
    let thisId = this.state.videoFields.length + 1
    this.setState({
      videoFields: this.state.videoFields.concat(<div className="input" key={thisId}>
        <input type="text" placeholder="Vimeo ID" value={this.state.videoFields[thisId]} key={thisId} onChange={this.handleTekstField.bind(this, thisId)} />
      </div>)
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const lesson = {
      lessonNumber: this.state.numberValue,
      title: this.state.titleValue,
      tekst: this.state.tekstFieldsValue,
      video: this.state.videoFieldsValue,
    }
    this.props.newLesson(lesson)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Nieuwe les</h1>
        <div className="lessonGeneral">
          <div className="input">
            <input value={this.state.number} onChange={this.handleNumber} type="number" placeholder="Number" />
          </div>
          <div className="input">
            <input value={this.state.title} onChange={this.handleTitle} type="text" placeholder="Title" />
          </div>
        </div>
        <div className="lessonDetails">
          <h2>Tekstblokken</h2>
          {this.state.tekstFields.map((Element, index) => {
            return Element
          })}
          <span onClick={ this.addTextField }>Toevoegen</span>
        </div>
        <div className="lessonDetails">
          <h2>Video's</h2>
          {this.state.videoFields.map((Element, index) => {
            return Element
          })}
          <span onClick={ this.addVideoField }>Toevoegen</span>
        </div>
        <input type="submit" value="Aanmaken" />
      </form>
    );
  }
}

export default connect(null, { newLesson })(CreateLesson)
