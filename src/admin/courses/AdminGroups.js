import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AdminGroups extends PureComponent {
  render() {
    return(
      <div>
        <h1>Groepen</h1>
        <ul>
          {/* <li><Link to="/admin/groups/create">Nieuwe groep</Link></li> */}
        </ul>
      </div>
    )
  }
}


export default AdminGroups
