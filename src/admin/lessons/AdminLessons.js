import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AdminLessons extends PureComponent {
  render() {
    return(
      <div className="inner">
        <h1>Lessen</h1>
        <ul>
          <li><Link to="/admin/create-lesson">Nieuwe les</Link></li>
          <li><Link to="/admin/lessons/all">Bewerk lessen</Link></li>
        </ul>
      </div>
    )
  }
}


export default AdminLessons
