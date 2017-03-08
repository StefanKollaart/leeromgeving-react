import { FETCHED_LESSONS } from '../actions/lessons/fetch'
import { CREATED_LESSON } from '../actions/lessons/new-lesson'
export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_LESSONS:
      return [].concat(payload)

    case CREATED_LESSON:
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
