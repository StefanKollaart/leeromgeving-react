import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TekstFields extends Component {
  render() {
    return(<div><textarea placeholder="Vul hier je tekst in" value={this.props.tekst} onChange={this.props.handleTekst.bind(this, this.props.id)}/></div>)
  }
}

export default TekstFields
