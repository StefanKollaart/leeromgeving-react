import API from '../../middleware/api'

export const FETCHED_COURSES = 'FETCHED_GROUPS'

const api = new API()
const courses = api.service('courses')

export default() => {
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      courses.find()
        .then((result) => {
          dispatch(fetchedCourses(result))
        })
    })
  }
}

const fetchedCourses = (result) => {
  return {
    type: FETCHED_COURSES,
    payload: [].concat(result.data)
  }
}
