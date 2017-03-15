import API from '../../middleware/api'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      console.log("In here")
      users.update(user._id, { email: user.email, first_name: user.first_name, last_name: user.last_name, groups: user.groups })
      .then((response) => {
        console.log("in hereee!")
        dispatch({ type: USER_SIGNED_UP })
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
