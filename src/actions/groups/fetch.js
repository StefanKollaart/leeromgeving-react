import API from '../../middleware/api'

export const FETCHED_GROUPS = 'FETCHED_GROUPS'

const api = new API()
const groups = api.service('groups')

export default() => {
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      groups.find()
        .then((result) => {
          dispatch(fetchedGroups(result))
        })
    })
  }
}

const fetchedGroups = (result) => {
  return {
    type: FETCHED_GROUPS,
    payload: [].concat(result.data)
  }
}
