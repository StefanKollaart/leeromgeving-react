import { FETCHED_GROUPS } from '../actions/groups/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_GROUPS:
      return [].concat(payload)

    default :
      return state
  }
}
