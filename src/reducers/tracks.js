import { CREATED_TRACK } from '../actions/tracks/new-track'
import { FETCHED_TRACKS } from '../actions/tracks/fetch'
import { UPDATED_TRACK } from '../actions/tracks/update'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_TRACKS:
      return [].concat(payload)

    case CREATED_TRACK:
      return [Object.assign({}, payload)].concat(state)

    case UPDATED_TRACK:
    return state.map((track) => {
        if (track._id === payload._id) {
          return Object.assign({}, payload)
        }
        return track
      })

    default :
      return state
  }
}
