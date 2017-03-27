import API from '../../middleware/api'
import { history } from '../../store'

export const CREATED_TRACK = 'CREATED_TRACK'

const api = new API()
const tracks = api.service('tracks')

export default(track) => {
  debugger
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      tracks.create(track)
        .then((result) => {
          dispatch({ type: CREATED_TRACK, payload: result })
          // history.push(`/admin/tracks/${result._id}`)
        }).catch((error) => {
          console.error(error)
        })
    })
  }
}
