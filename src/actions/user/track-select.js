import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'
import setFirstLesson from '../user/first-lesson'
import { history } from '../../store'

const api = new API()
const users = api.service('users')
const lessons = api.service('lessons')


export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.patch(user._id, { $set: { track: user.track }})
      .then((response) => {
        let newData;
        lessons.find()
        .then((lessonResponse) => {
          newData = lessonResponse.data.filter(function(lesson) {
            if (lesson.track && lesson.track._id == user.track) {
              return true
            }
          })
          authResult.data.unlockedLessons = [newData[0]]
          dispatch(setFirstLesson(authResult.data))
          dispatch({ type: UPDATED_USER, payload: authResult })
          history.push('/')
        })
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
