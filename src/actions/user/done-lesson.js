import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'

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
          let unlockedLesson = lessons.data.reduce(function(prev, next) {
            if (next.track && lesson.track && next.track._id == lesson.track._id && next.lessonNumber == lesson.lessonNumber + 1) {
              return next
            } else {
              return prev
            }
          })
          users.patch(user._id, { $push: { lesson_done: lesson, unlockedLessons: unlockedLesson }})
          .then((response) => {
            console.log(response)
            dispatch({ type: UPDATED_USER, payload: response })
          }).catch((error) => {
            console.error(error)
          })
        })
      }).catch((error) => {
        console.error(error)
      })
    }).catch((error) => {
      console.error(error)
    })
  }
}
