import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
// import newGroup from '../../actions/lessons/new-group'

export class CreateGroup extends PureComponent {

  constructor(props) {
    super(props);
    var today = new Date()
    var year = String(today.getFullYear());
    this.state = {
      courseId: "1",
      year: year,
      day: "1",
    }

    this.handleCourseId = this.handleCourseId.bind(this)
    this.handleYear = this.handleYear.bind(this)
    this.handleDay = this.handleDay.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCourseId(event) {
    this.setState({
      courseId: event.target.value
    });
  }

  handleYear(event) {
    this.setState({
      year: event.target.value
    });
  }

  handleDay(event) {
    this.setState({
      day: event.target.value
    });
  }

  handleSubmit(event) {
    debugger
    event.preventDefault()
    const group = {
      courseId: this.state.courseId,
      year: this.state.year,
      day: this.state.day,
    }
    // this.props.newGroup(group)
  }

  getTwentyYears() {
    var today = new Date();
    var year = today.getFullYear();
    var yearArray = [];
    for (var i = 0; i < 20; i++) {
      yearArray.push(year - i)
    }
    let yearsHTML = yearArray.map(function(year, index) {
      return (<option value={year} key={index}>{year}</option>)
    })
    return yearsHTML
  }

  getDays() {
    if(this.state.courseId == "1") {
      return(
        <div className="input">
          <select value={this.state.year} onChange={this.handleYear}>
            <option value="1">Maandag</option>
            <option value="3">Woensdag</option>
            <option value="4">Donderdag</option>
          </select>
        </div>
      )
    } else if(this.state.courseId == "2") {
      return(
        <div className="input">
          <select value={this.state.year} onChange={this.handleYear}>
            <option value="1">Maandag</option>
            <option value="2">Dinsdag</option>
          </select>
        </div>
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Nieuwe groep</h1>
        <div className="courseGeneral">
          <div className="input">
            <label>
            <select value={this.state.courseId} onChange={this.handleCourseId}>
              <option value="1">Pedicure</option>
              <option value="2">Sportmassage</option>
            </select>
            </label>
          </div>
          <div className="input">
            <select value={this.state.year} onChange={this.handleYear}>
              {this.getTwentyYears()}
            </select>
          </div>
            {this.getDays()}
        </div>
        <input type="submit" value="Aanmaken" />
      </form>
    );
  }
}

export default connect(null)(CreateGroup)
// export default connect(null, { newGroup })(CreateGroup)
