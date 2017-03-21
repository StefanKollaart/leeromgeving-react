import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import newLesson from '../../actions/lessons/new-lesson'
// import VideoFields from './VideoFields'
import TekstFields from './TekstFields'

export class CreateLesson extends Component {

  componentWillMount() {
    this.state = {
      lessonNumber: '',
      title: '',
    }
    this.handleNumber = this.handleNumber.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNumber(event) {
    this.setState({
      lessonNumber: event.target.value
    });
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const lesson = {
      lessonNumber: this.state.lessonNumber,
      title: this.state.title,
    }
    this.props.newLesson(lesson)
  }

  render() {
        return (
        <div>
          <h1>{this.state.title ? this.state.title : "Nieuwe les"}</h1>
          <form onSubmit={this.handleSubmit}>
            <ul className="form-style-1">
              <div className="form-fields">
                <li>
                  <label>Lesnummer <span className="required">*</span></label>
                  <input value={this.state.lessonNumber} onChange={this.handleNumber} type="number" placeholder="Number" className="field-long" />
                </li>
                <li>
                  <label>Titel <span className="required">*</span></label>
                  <input value={this.state.title} onChange={this.handleTitle} type="text" placeholder="Title" className="field-long"/>
                </li>
              </div>
            <input type="submit" value="Opslaan" />
            </ul>
          </form>
        </div>
      )
  }
}

export default connect(null, { newLesson })(CreateLesson)
