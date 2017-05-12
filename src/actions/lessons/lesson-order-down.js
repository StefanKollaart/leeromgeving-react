import API from '../../middleware/api'
export const FETCHED_LESSONS = 'FETCHED_LESSONS'
import { history } from '../../store'
import fetchLessons from './fetch'

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
        let movingDownLesson;
        for (var i = 0; i < trackLessons.length; i++) {
          if (trackLessons[i].lessonNumber == lesson.lessonNumber + 1) {
            trackLessons[i].lessonNumber = trackLessons[i].lessonNumber - 1
            movingDownLesson = trackLessons[i]
          }
        }
        lesson.lessonNumber = lesson.lessonNumber + 1
        lessons.patch(movingDownLesson._id, { lessonNumber: movingDownLesson.lessonNumber })
        lessons.patch(lesson._id, { lessonNumber: lesson.lessonNumber })
        dispatch(fetchLessons())
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
