// src/actions/users/sign-up.js
import API from '../../middleware/api'
export const CHANGED_PASSWORD_USER = 'CHANGED_PASSWORD_USER'
import { history } from '../../store'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    users.update(user._token, { password: user.password, passwordSet: true, passwordToken: user.passwordToken })
    .then((response) => {
      dispatch({ type: CHANGED_PASSWORD_USER, payload: response })
      history.push(`/`)
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
