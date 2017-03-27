import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class AdminTracks extends PureComponent {
  render() {
    return(
      <div className="inner">
        <h1>Tracks</h1>
        <ul>
          <li><Link to="/admin/create-track">Nieuwe track</Link></li>
        </ul>
      </div>
    )
  }
}


export default AdminTracks
