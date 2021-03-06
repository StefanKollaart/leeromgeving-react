import API from '../../middleware/api'
export const UPDATED_CURRENT_USER = 'UPDATED_CURRENT_USER'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.get(user)
      .then((getResult) => {
        users.patch(user._id, { $set: { unlockedLessons: user.unlockedLessons, content_working: 0, lesson_working: user.unlockedLessons[user.unlockedLessons.length - 1] }})
        .then((response) => {
          console.log(response)
          dispatch({ type: UPDATED_CURRENT_USER, payload: response })
        })
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
