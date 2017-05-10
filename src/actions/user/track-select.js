import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.patch(user._id, { $set: { track: user.track }})
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
