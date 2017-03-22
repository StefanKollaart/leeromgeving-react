import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AdminUsers extends PureComponent {
  render() {
    return(
      <div className="inner">
        <h1>Gebruikers</h1>
        <ul>
          <li><Link to="/admin/sign-up">Nieuwe gebruiker</Link></li>
          <li><Link to="/admin/users/all">Bewerk gebruikers</Link></li>
        </ul>
      </div>
    )
  }
}


export default AdminUsers
