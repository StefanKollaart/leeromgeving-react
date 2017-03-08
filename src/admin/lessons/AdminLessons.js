import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AdminLessons extends PureComponent {
  render() {
    return(
      <div>
        <h1>Lessen</h1>
        <ul>
          <li><Link to="/admin/lessons/create">Nieuwe les</Link></li>
        </ul>
      </div>
    )
  }
}


export default AdminLessons
