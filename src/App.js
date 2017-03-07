import React from 'react'
import LessonsContainer from './lessons/LessonsContainer'
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

export default App
