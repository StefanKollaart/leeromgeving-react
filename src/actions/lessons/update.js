import API from '../../middleware/api'
export const UPDATED_LESSON = 'UPDATED_LESSON'
import { history } from '../../store'

const api = new API()
const lessons = api.service('lessons')

export default (lesson) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      lessons.patch(lesson._id, { lessonNumber: lesson.lessonNumber, title: lesson.title, tekst: lesson.tekst, video: lesson.video })
      .then((response) => {
        dispatch({ type: UPDATED_LESSON, payload: response })
        history.push(`/admin/lessons/all`)
      }).catch((error) => {
        console.log(error)
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
