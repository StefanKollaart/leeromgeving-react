import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import newLesson from '../../actions/lessons/new-lesson'

export class CreateLesson extends PureComponent {
  submitForm(event) {
    event.preventDefault()
      const lesson = {
        lessonNumber: this.refs.lessonNumber.value,
        title: this.refs.title.value,
        links: [this.refs.links.value],
        tekst: [this.refs.tekst.value],
        video: [this.refs.video.value],
      }
      this.props.newLesson(lesson)
  }

  render() {
    return (
      <div className="sign-up form">
        <h1>Voeg les toe</h1>

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="lessonNumber" type="number" placeholder="Number" />
          </div>
          <div className="input">
            <input ref="title" type="text" placeholder="Title" />
          </div>
          <div className="input">
            <input ref="links" type="text" placeholder="Link" />
          </div>
          <div className="input">
            <input ref="tekst" type="text" placeholder="Tekst" />
          </div>
          <div className="input">
            <input ref="tekst" type="text" placeholder="Tekst" />
          </div>
          <div className="input">
            <input ref="video" type="text" placeholder="Video" />
          </div>
          <input type="submit" value="Aanmaken" />
        </form>
      </div>
    )
  }
}

export default connect(null, { newLesson })(CreateLesson)
