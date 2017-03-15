import API from '../../middleware/api'
import { history } from '../../store'

export const CREATED_LESSON = 'CREATED_LESSON'

const api = new API()
const lessons = api.service('lessons')

export default(lesson) => {
  debugger
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      lessons.create(lesson)
        .then((result) => {
          debugger
          dispatch({ type: CREATED_LESSON, payload: result })
          debugger
          history.push(`/admin/lessons/${result._id}`)
        }).catch((error) => {
          console.error(error)
        })
    })
  }
}
