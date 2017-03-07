import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TekstItem extends PureComponent {
  render() {
    const { tekst } = this.props

    return (
      <p>{ tekst }</p>
    )
  }
}

export default TekstItem
