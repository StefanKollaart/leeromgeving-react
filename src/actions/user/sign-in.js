// src/actions/user/sign-in.js
import API from '../../middleware/api'
import { history } from '../../store'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    api.authenticate(user)
    .then((response) => {
      dispatch({
        type: USER_SIGNED_IN,
        payload: response.data
      })
      history.push('/')
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
