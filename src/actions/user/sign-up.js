// src/actions/users/sign-up.js
import API from '../../middleware/api'
export const CREATED_USER = 'CREATED_USER'
import { history } from '../../store'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    users.create(user)
    .then((response) => {
      dispatch({ type: CREATED_USER, payload: response })
      history.push(`/admin/users/${response._id}`)
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
