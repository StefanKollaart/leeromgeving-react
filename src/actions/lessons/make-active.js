import API from '../../middleware/api'
export const UPDATED_LESSON = 'UPDATED_LESSON'
import { history } from '../../store'

const api = new API()
const lessons = api.service('lessons')
const tracks = api.service('tracks')

export default (lesson) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      lessons.find()
      .then((allLessons) => {
        let trackLessons = allLessons.data.filter(function(singleLesson) {
          if (singleLesson.track && singleLesson.track._id == lesson.track._id && singleLesson.active) {
            return true
          }
        })
        lesson.lessonNumber = trackLessons.length + 1
        lessons.patch(lesson._id, { lessonNumber: lesson.lessonNumber, active: true })
        .then((response) => {
          dispatch({ type: UPDATED_LESSON, payload: response })
          history.push(`/admin/lessons/${lesson._id}`)
        }).catch((error) => {
          console.log(error)
        })
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
