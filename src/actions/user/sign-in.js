// src/actions/user/sign-in.js
import API from '../../middleware/api'
import { history } from '../../store'
import setFirstLesson from '../user/first-lesson'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()
const lessons = api.service('lessons')

export default (user) => {
  return (dispatch) => {
    api.authenticate(user)
    .then((response) => {
      if (response.data.unlockedLessons.length == 0) {
        lessons.find()
        .then((lessons) => {
          if (response.data.track && response.data.track != null) {
            let userLessons = lessons.data.filter(function(lesson) {
              if (lesson.track && response.data.track == lesson.track._id) {
                return true
              } else {
                return false
              }
            })
            response.data.unlockedLessons = [userLessons[0]]
            dispatch(setFirstLesson(response.data))
            dispatch({
              type: USER_SIGNED_IN,
              payload: response.data
            })
            history.push('/')
          } else {
            dispatch({
              type: USER_SIGNED_IN,
              payload: response.data
            })
            history.push('/track-select')
          }
        })
      } else {
        dispatch({
          type: USER_SIGNED_IN,
          payload: response.data
        })
        history.push('/')
      }
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
