import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      console.log("In here")
      users.patch(user._id, { email: user.email, first_name: user.first_name, last_name: user.last_name, groups: user.groups })
      .then((response) => {
        console.log("in hereee!")
        console.log(response)
        dispatch({ type: UPDATED_USER, payload: response })
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
