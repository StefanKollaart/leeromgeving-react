import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import signUp from '../../actions/user/sign-up'

export class SignUp extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        first_name: this.refs.firstname.value,
        last_name: this.refs.firstname.value,
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.props.signUp(user)
    }
  }

  validateAll() {
    return this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validatePassword() {
    const { password, passwordConfirmation } = this.refs

    if (password.value.length < 6) {
      this.setState({
        passwordError: 'Wachtwoord is te kort'
      })
      return false
    }

    if (password.value.match(/[a-zA-Z]+/) && password.value.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Het wachtwoord moet zowel letters als nummers bevatten'
    })
    return false
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    if (password.value === passwordConfirmation.value) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Wachtwoorden zijn niet gelijk'
    })
    return false
  }

  render() {
    return (
      <div className="sign-up form">
        <h1>Nieuwe gebruiker</h1>

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="firstname" type="text" placeholder="Voornaam" />
          </div>
          <div className="input">
            <input ref="lastname" type="text" placeholder="Achternaam" />
          </div>
          <div className="input">
            <input ref="email" type="text" placeholder="E-mail" />
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Wachtwoord"
              onChange={this.validatePassword.bind(this)} />
            { this.state.passwordError ?
              <p className="formError">{ this.state.passwordError }</p> :
              null
            }
          </div>
          <div className="input">
            <input ref="passwordConfirmation" type="password" placeholder="Wachtwoord"
              onKeyUp={this.validatePasswordConfirmation.bind(this)}
              onChange={this.validatePasswordConfirmation.bind(this)} />
            { this.state.passwordConfirmationError ?
              <p className="formError">{ this.state.passwordConfirmationError }</p> :
              null
            }
          </div>
          <input type="submit" value="Aanmaken" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp })(SignUp)
