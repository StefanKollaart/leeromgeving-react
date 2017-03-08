import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Adminapp from './Adminapp'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { Router, Route, IndexRoute } from 'react-router'

import LessonsContainer from './lessons/LessonsContainer'
import LessonPage from './lessons/LessonPage'

import SignIn from './users/SignIn'

import Admindex from './admin/Admindex'

import AdminLessons from './admin/lessons/AdminLessons'
import CreateLesson from './admin/lessons/CreateLesson'

import AdminUsers from './admin/users/AdminUsers'
import SignUp from './admin/users/SignUp'
import EditUser from './admin/users/EditUser'
import UsersContainer from './admin/users/UsersContainer'


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
        <Route path="/admin/users" component={AdminUsers} />
        <Route path="/admin/users/all" component={UsersContainer} />
        <Route path="/admin/users/:userId" component={EditUser} />
        <Route path="/admin/users/sign-up" component={SignUp} />
        <Route path="/admin/users/edit" component={EditUser} />
        <Route path="/admin/lessons" component={AdminLessons} />
        <Route path="/admin/lessons/create" component={CreateLesson} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
