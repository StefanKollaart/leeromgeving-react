import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TekstFields extends Component {
  render() {
    return(<li><label>Tekstveld {this.props.id + 1}</label>
<textarea placeholder="Vul hier je tekst in" value={this.props.tekst} onChange={this.props.handleTekst.bind(this, this.props.id)} className="field-textarea field-long"/></li>)
  }
}

export default TekstFields
