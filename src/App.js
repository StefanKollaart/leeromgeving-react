import React from 'react'
import LessonsContainer from './lessons/LessonsContainer'

const lessons = [
  {
    lessonNumber: 1,
    title: "Pedicure les 1",
    video: "http://www.google.nl",
    tekst: "Hello World",
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <LessonsContainer lessons={lessons} />
      </div>
    )
  }
}

export default App
