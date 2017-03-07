import React from 'react'
import LessonsContainer from './lessons/LessonsContainer'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

export default App
