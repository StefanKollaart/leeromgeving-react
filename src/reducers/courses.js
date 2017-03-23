import { FETCHED_COURSES } from '../actions/courses/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_COURSES:
      return [].concat(payload)

    default :
      return state
  }
}
