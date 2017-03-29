import API from '../../middleware/api'
export const UPDATED_TRACK = 'UPDATED_TRACK'
import { history } from '../../store'

const api = new API()
const tracks = api.service('tracks')

export default (track) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      tracks.patch(track._id, { course: track.course, name: track.name, order: track.order })
      .then((response) => {
        dispatch({ type: UPDATED_TRACK, payload: response })
        history.push(`/admin/tracks/all`)
      }).catch((error) => {
        console.log(error)
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
