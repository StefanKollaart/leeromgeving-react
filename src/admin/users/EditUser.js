import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import editUser from '../../actions/user/update'
import fetchUsers from '../../actions/user/fetch'
import fetchGroups from '../../actions/groups/fetch'
import RenderCheckboxes from './RenderCheckboxes'

export class EditUser extends PureComponent {
  componentWillMount() {
    this.props.fetchUsers()
    this.props.fetchGroups()
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.renderCheckboxes = this.renderCheckboxes.bind(this)
  }

  loadEditUser() {
    if (this.state == null)
      this.state = {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        email: this.props.email,
      }
  }

  renderCheckboxes(checkbox, index) {
    return <RenderCheckboxes key={index} checkBoxId={index} userGroups={this.props.groups} {...checkbox} />
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

  submitForm(event) {
    event.preventDefault()
      const user = {
        _id: this.props._id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
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
            <div className="input">
              <input type="text" placeholder="Voornaam" value={this.state.first_name} onChange={this.handleFirstName}/>
            </div>
            <div className="input">
              <input type="text" placeholder="Achternaam" value={this.state.last_name} onChange={this.handleLastName}/>
            </div>
            <div className="input">
              <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmail}/>
            </div>
            {this.props.allGroups.map(this.renderCheckboxes)}
            <input type="submit" value="Aanmaken" />
          </form>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
  debugger
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
