// src/actions/users/sign-up.js
import API from '../../middleware/api'
export const USER_TOKEN_FOUND = 'USER_TOKEN_FOUND'
import { history } from '../../store'

const api = new API()
const users = api.service('users')

export default (tokenId) => {
  return(dispatch) => {
      users.find({
        query: {
          passwordToken: {
            $in: tokenId
          }
        }
      })
      .then((response) => {
        dispatch({ type: USER_TOKEN_FOUND, payload: response })
      }).catch((error) => {
        console.error(error)
      })
    }
}
