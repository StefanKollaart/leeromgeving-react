import { FETCHED_USERS } from '../actions/user/fetch'
import { UPDATED_USER } from '../actions/user/update'
import { CREATED_USER } from '../actions/user/sign-up'
export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_USERS:
      return [].concat(payload)

    case CREATED_USER:
      return [].concat(payload)

    case UPDATED_USER:
      return state.map((user) => {
          if (user._id === payload._id) {
            return Object.assign({}, payload)
          }
          return user
        })

    default :
      return state
  }
}
