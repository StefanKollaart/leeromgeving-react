import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { Router, Route, IndexRoute } from 'react-router'

import LessonsContainer from './lessons/LessonsContainer'
import LessonPage from './lessons/LessonPage'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LessonsContainer} />
        <Route path="/lessons/:lessonId" component={LessonPage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Route>
      <Route path ="/admin">
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
