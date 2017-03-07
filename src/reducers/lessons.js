import { FETCHED_LESSONS } from '../actions/lessons/fetch'
export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_LESSONS:
      return [].concat(payload)
  }
  return state
}
