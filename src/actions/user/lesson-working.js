import API from '../../middleware/api'
export const UPDATED_CURRENT_USER = 'UPDATED_USER'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.update(user._id, { $set: { lesson_working: user.lesson_working, content_working: user.content_working }})
      .then((response) => {
        console.log(response)
        dispatch({ type: UPDATED_CURRENT_USER, payload: response })
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
