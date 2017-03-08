import React, { PureComponent } from 'react'

class TekstInput extends PureComponent {
  getRef() {
    return "tekst" + this.props.index
  }

  render() {
    return(
      <div className="input">
        <input ref="tekst" type="text" placeholder="Tekst" />
      </div>
    )
  }
}

export default TekstInput
