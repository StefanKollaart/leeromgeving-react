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
      if (authResult.data.allTracks) {
        authResult.data.allTracks.push(user.track);
      } else {
        authResult.data.allTracks = [user.track];
      }
      console.log(authResult.data);
      users.patch(user._id, { $set: { track: user.track , allTracks: authResult.data.allTracks }})
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
