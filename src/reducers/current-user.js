import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'
import { FETCHED_CURRENT } from '../actions/user/fetch-current'
import { UPDATED_CURRENT_USER } from '../actions/user/lesson-working'


const CURRENT_USER_KEY = 'kollaart.currentUser'

const initialState = JSON.parse(localStorage.getItem(CURRENT_USER_KEY))

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case USER_SIGNED_IN :
      const currentUser = Object.assign({}, payload)
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
      return currentUser

    case USER_SIGNED_OUT :
      localStorage.removeItem(CURRENT_USER_KEY)
      return null

      case UPDATED_CURRENT_USER :
          const updatedCurrentUser = Object.assign({}, payload)
          localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedCurrentUser))
          return updatedCurrentUser


    default :
      return state
  }
}
