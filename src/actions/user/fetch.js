import API from '../../middleware/api'

export const FETCHED_USERS = 'FETCHED_USERS'

const api = new API()
const users = api.service('users')

export default() => {
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.find()
        .then((result) => {
          dispatch(fetchedUsers(result))
        })
    })
  }
}

const fetchedUsers = (result) => {
  return {
    type: FETCHED_USERS,
    payload: [].concat(result.data)
  }
}
