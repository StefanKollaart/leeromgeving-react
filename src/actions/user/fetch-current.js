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
          let pushResult = result.data.reduce(function(prev, next) {
            if (prev._id == user._id) {
              return prev
            } else if (next._id == user._id) {
              return next
            } else {
              return { _id: "notfound" }
            }
          })
          dispatch(fetchedUser(pushResult))
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
