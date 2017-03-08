import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AdminLessons extends PureComponent {
  render() {
    return(
      <div>
        <h1>Lessons</h1>
        <ul>
          <li><Link to="/admin/lessons/create">Add lesson</Link></li>
        </ul>
      </div>
    )
  }
}


export default AdminLessons
