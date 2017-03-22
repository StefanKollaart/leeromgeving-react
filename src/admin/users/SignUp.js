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
      const user = {
        first_name: this.refs.firstname.value,
        last_name: this.refs.lastname.value,
        email: this.refs.email.value,
      }
      this.props.signUp(user)
  }

  render() {
    return (
        <div className="inner">
          <section>
            <h1>Nieuwe gebruiker</h1>

            <form onSubmit={this.submitForm.bind(this)}>
                <div className="form-fields">
                    <label>Voornaam <span className="required">*</span></label>
                    <input ref="firstname" type="text" placeholder="Voornaam" className="field-long" />
                    <label>Achternaam <span className="required">*</span></label>
                    <input ref="lastname" type="text" placeholder="Achternaam" className="field-long" />
                    <label>E-mail <span className="required">*</span></label>
                    <input ref="email" type="text" placeholder="E-mail" className="field-long"/>
                </div>
                <input type="submit" value="Aanmaken" />
            </form>
          </section>
        </div>
    )
  }
}

export default connect(null, { signUp })(SignUp)
