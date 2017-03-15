import API from '../../middleware/api'
export const UPDATED_USER = 'UPDATED_USER'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      users.update(user._id, { $set: { email: user.email, first_name: user.first_name, last_name: user.last_name, groups: user.groups }})
      .then((response) => {
        console.log(response)
        dispatch({ type: UPDATED_USER, payload: response })
      })
    })

    .catch((error) => {
      console.error(error)
    })
  }
}
