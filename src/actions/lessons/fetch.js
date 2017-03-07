import API from '../../middleware/api'

export const FETCHED_LESSONS = 'FETCHED_LESSONS'

const api = new API()
const lessons = api.service('lessons')

export default() => {
  return(dispatch) => {
    lessons.find()
      .then((result) => {
        dispatch(fetchedLessons(result))
      })
  }
}

const fetchedLessons = (result) => {
  return {
    type: FETCHED_LESSONS,
    payload: [].concat(result.data)
  }
}
