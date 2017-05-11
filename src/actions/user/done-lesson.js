import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'
import { history } from '../../store'

const api = new API()
const users = api.service('users')
const lessons = api.service('lessons')


export default (user, lesson_done) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      lessons.get(lesson_done)
      .then((lesson) => {
        console.log(lesson)
        lessons.find()
        .then((lessons) => {
          var check = false
          let lessonsInTrack = lessons.data.filter(function(soloLesson) {
            if (soloLesson.track && soloLesson.track._id == user.track && soloLesson.active) {
              return true
            }
          })
          let highestLesson = lessonsInTrack.reduce(function(prev, next) {
            if (prev.lessonNumber > next.LessonNumber) {
              return prev
            } else {
              return next
            }
          })
          if (highestLesson._id == lesson_done) {
            users.patch(user._id, { $push: { lesson_done: lesson}, $set: { track: null, content_working: 0, lesson_working: null  }})
            .then((response) => {
              dispatch({ type: UPDATED_USER, payload: response })
              history.push('/track-select')
            }).catch((error) => {
              console.error(error)
            })
          } else {
            let unlockedLesson = lessons.data.reduce(function(prev, next) {
              if (next.track && lesson.track && next.track._id == lesson.track._id && next.lessonNumber == lesson.lessonNumber + 1) {
                return next
              } else {
                return prev
              }
            })
            users.patch(user._id, { $push: { lesson_done: lesson, unlockedLessons: unlockedLesson }, $set: { lesson_working: unlockedLesson, content_working: 0 }})
            .then((response) => {
              console.log(response)
              dispatch({ type: UPDATED_USER, payload: response })
              history.push('/');
            }).catch((error) => {
              console.error(error)
            })
          }
        })
      }).catch((error) => {
        console.error(error)
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}
