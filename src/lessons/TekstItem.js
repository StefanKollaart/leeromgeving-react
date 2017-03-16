import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TekstItem extends PureComponent {

  componentWillMount() {
    this.state = ({
      tekst: this.props.tekst
    })
  }

  render() {
    const { tekst } = this.props

    return (
      <p>{ this.state.tekst }</p>
    )
  }
}

export default TekstItem
