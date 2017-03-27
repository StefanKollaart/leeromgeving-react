import { CREATED_TRACK } from '../actions/tracks/new-track'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case CREATED_TRACK:
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
