import API from '../../middleware/api'

export const FETCHED_CURRENT = 'FETCHED_CURRENT'

const api = new API()
const users = api.service('users')

export default(user) => {
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.find()
        .then((result) => {
          dispatch(fetchedUser(result.data[0]))
        }).catch((error) => {
          console.error(error)
        })
    })
  }
}

const fetchedUser = (result) => {
  return {
    type: FETCHED_CURRENT,
    payload: [].concat(result)
  }
}
