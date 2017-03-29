import API from '../../middleware/api'

export const FETCHED_TRACKS = 'FETCHED_TRACKS'

const api = new API()
const tracks = api.service('tracks')

export default() => {
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      tracks.find()
        .then((result) => {
          dispatch(fetchedTracks(result))
        })
    })
  }
}

const fetchedTracks = (result) => {
  return {
    type: FETCHED_TRACKS,
    payload: [].concat(result.data)
  }
}
