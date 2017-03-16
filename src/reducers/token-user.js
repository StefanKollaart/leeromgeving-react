import { FETCHED_TOKEN_USER } from '../actions/user/fetch-user-token'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_TOKEN_USER:
      return [].concat(payload)

    default :
      return state
  }
}
