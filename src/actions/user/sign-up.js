// src/actions/users/sign-up.js
import API from '../../middleware/api'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    users.create(user)
    .then((response) => {
      dispatch({ type: USER_SIGNED_UP })
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
