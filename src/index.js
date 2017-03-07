import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Adminapp from './Adminapp'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { Router, Route, IndexRoute } from 'react-router'

import LessonsContainer from './lessons/LessonsContainer'
import LessonPage from './lessons/LessonPage'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'
import Admindex from './admin/Admindex'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LessonsContainer} />
        <Route path="/lessons/:lessonId" component={LessonPage} />
        <Route path="/sign-in" component={SignIn} />
      </Route>
      <Route path="/admin" component={Adminapp}>
        <IndexRoute component={Admindex} />
        <Route path="/sign-up" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
