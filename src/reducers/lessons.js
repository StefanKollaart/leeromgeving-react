import { FETCHED_LESSONS } from '../actions/lessons/fetch'
import { CREATED_LESSON } from '../actions/lessons/new-lesson'
import { UPDATED_LESSON } from '../actions/lessons/update'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_LESSONS:
      return [].concat(payload)

    case CREATED_LESSON:
      return [Object.assign({}, payload)].concat(state)

    case UPDATED_LESSON:
      return state.map((lesson) => {
          if (lesson._id === payload._id) {
            return Object.assign({}, payload)
          }
          return lesson
        })

    default :
      return state
  }
}
