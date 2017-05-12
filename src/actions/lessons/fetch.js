import API from '../../middleware/api'

export const FETCHED_LESSONS = 'FETCHED_LESSONS'

const api = new API()
const lessons = api.service('lessons')

export default() => {
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      lessons.find()
        .then((result) => {
          let sortedResult = result.data.sort(function(a, b){return a.lessonNumber - b.lessonNumber});
          let sortedActive = sortedResult.filter(function(lesson) {
            if (lesson.active) {
              return true
            }
          })
          let sortedInactive = sortedResult.filter(function(lesson) {
            if (lesson.active == false) {
              return true
            }
          })
          let finalSortedResult = sortedActive.concat(sortedInactive)
          dispatch(fetchedLessons(finalSortedResult))
        })
    })
  }
}

const fetchedLessons = (result) => {
  return {
    type: FETCHED_LESSONS,
    payload: [].concat(result)
  }
}
