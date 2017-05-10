import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.update(user, { $set: { lesson_done: [], unlockedLessons: [], content_working: 0, lesson_working: null, track: null, tracks: [] }})
      .then((response) => {
        console.log(response)
        dispatch({ type: UPDATED_USER, payload: response })
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
