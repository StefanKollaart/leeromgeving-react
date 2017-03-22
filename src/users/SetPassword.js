import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import passwordUser from '../actions/user/password-user'

export class SetPassword extends PureComponent {

  constructor() {
    super()

    this.state = {

    }
  }
  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        password: this.refs.password.value,
        passwordToken: this.props.params.tokenId
      }
      this.props.passwordUser(user)
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
        passwordError: 'Het wachtwoord is te kort, maak het wachtwoord langer.'
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
      passwordError: 'Het wachtwoord moet zowel letters als cijfers bevatten.'
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
      passwordConfirmationError: 'De wachtwoorden zijn niet hetzelfde'
    })
    return false
  }


  render() {
    return (
      <div id="wrapper">
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>Welkom bij Kollaart Opleidingen!</h1>
              <h3>Om de leeromgeving te kunnen gebruiken, moet je een wachtwoord aanmaken.</h3>
            </header>
            <form onSubmit={this.submitForm.bind(this)}>
              <div className="input">
                <input ref="password" type="password" placeholder="Wachtwoord"
                  onChange={this.validatePassword.bind(this)} />
                { this.state.passwordError ?
                  <p className="formError">{ this.state.passwordError }</p> :
                  null
                }
              </div>
              <div className="input">
                <input ref="passwordConfirmation" type="password" placeholder="Herhaal wachtwoord"
                  onKeyUp={this.validatePasswordConfirmation.bind(this)}
                  onChange={this.validatePasswordConfirmation.bind(this)} />
                { this.state.passwordConfirmationError ?
                  <p className="formError">{ this.state.passwordConfirmationError }</p> :
                  null
                }
              </div>
              <input type="submit" value="Aanmelden" />
            </form>
          </div>
        </section>
      </div>
    )
  }
}


export default connect(null, { passwordUser })(SetPassword)
