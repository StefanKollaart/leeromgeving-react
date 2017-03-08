import { FETCHED_USERS } from '../actions/user/fetch'
export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_USERS:
      return [].concat(payload)

    default :
      return state
  }
}
