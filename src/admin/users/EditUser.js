import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import editUser from '../../actions/user/update'
import fetchUsers from '../../actions/user/fetch'
import fetchGroups from '../../actions/groups/fetch'
import RenderCheckboxes from './RenderCheckboxes'

export class EditUser extends Component {
  componentWillMount() {
    this.props.fetchUsers()
    this.props.fetchGroups()
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.renderCheckboxes = this.renderCheckboxes.bind(this)
    this.handleGroups = this.handleGroups.bind(this)
  }

  loadEditUser() {
    if (this.state == null)
      this.state = {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        email: this.props.email,
        groups: this.props.groups,
      }
  }

  renderCheckboxes(checkbox, index) {
    return <RenderCheckboxes key={index} checkBoxId={index} userGroups={this.props.groups} {...checkbox} handleGroups={this.handleGroups} />
  }

  handleFirstName(event) {
    this.setState({
      first_name: event.target.value
    });
  }

  handleLastName(event) {
    this.setState({
      last_name: event.target.value
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleGroups(changedGroup, isChecked) {
    var newGroups = this.state.groups
    var fullGroup = this.props.allGroups.find(function(group) {
      return group.courseId == changedGroup.courseId && group.day == changedGroup.day && group.year == changedGroup.year
    })
    if(isChecked) {
      newGroups.push(fullGroup)
    } else {
      newGroups = this.state.groups.filter(function(group) {
        if (group.day != fullGroup.day || group.year != fullGroup.year || group.courseId != fullGroup.courseId) {
          return true
        } else {
          return false
        }
      })
    }
    this.setState({
      groups: newGroups
    })
  }

  submitForm(event) {
    event.preventDefault()
      const user = {
        _id: this.props._id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        groups: this.state.groups,
      }
      this.props.editUser(user)
  }

  render() {
    if(this.props.email != undefined) {
      {this.loadEditUser()}
      return (
        <div className="sign-up form">
          <h1>{this.state.first_name} {this.state.last_name}</h1>

          <form onSubmit={this.submitForm.bind(this)}>
            <ul className="form-style-1">
              <div className="form-fields">
                <li>
                  <label>Voornaam <span className="required">*</span></label>
                  <input type="text" placeholder="Voornaam" value={this.state.first_name} onChange={this.handleFirstName} className="field-long"/>
                </li>
                <li>
                  <label>Achternaam <span className="required">*</span></label>
                  <input type="text" placeholder="Achternaam" value={this.state.last_name} onChange={this.handleLastName} className="field-long"/>
                </li>
                <li>
                  <label>E-mail <span className="required">*</span></label>
                  <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmail} className="field-long"/>
                </li>
                  <h2>Groepen</h2>
                  {this.props.allGroups.map(this.renderCheckboxes)}
              </div>
              <input type="submit" value="Aanmaken" />
            </ul>
          </form>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

const mapStateToProps = ({ users, groups }, { params }) => {
  const user = users.reduce((prev, next) => {
    if (next._id === params.userId) {
      return next
    }
    return prev
  }, {})

  return {
    ...user, allGroups: groups
  }
}

export default connect(mapStateToProps, { editUser, fetchUsers, fetchGroups })(EditUser)
