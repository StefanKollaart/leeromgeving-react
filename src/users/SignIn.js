import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/user/sign-in'
import Brand from '../components/Brand'

export class SignIn extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()

    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signIn(user)
  }

  render() {
    return (
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Welkom bij Kollaart Opleidingen!</h1>
            <h2>Wie ben je?</h2>
          </header>

          <form onSubmit={this.submitForm.bind(this)}>
            <div class="row uniform">
              <div class="6u 12u$(xsmall)">
                <input ref="email" type="email" placeholder="E-mail"/>
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input ref="password" type="password" placeholder="Wachtwoord" />
              </div>
            <input type="submit" value="Inloggen" />
          </div>
        </form>
      </div>
    </section>
    )
  }
}

{/* <section id="banner" className="major">
  <div className="inner">
    <header className="major">
      <h1>{this.getGreeting()}, {userName}</h1>
      <h2>{this.getMessage()}</h2>
    </header>
    <div className="content">
      <p>Je was hiermee bezig [LES PLACEHOLDER]. <br/><br/><button>Verder gaan</button></p>
    </div>
  </div>
</section> */}

export default connect(null, { signIn })(SignIn)
