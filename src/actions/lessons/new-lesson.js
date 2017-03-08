import API from '../../middleware/api'

export const CREATED_LESSON = 'CREATED_LESSON'

const api = new API()
const lessons = api.service('lessons')

export default(lesson) => {
  console.log(lesson)
  return(dispatch) => {
    api.app.authenticate()
    .then((authResult) => {
      lessons.create(lesson)
        .then((result) => {
          dispatch(createdLesson(result))
        }).catch((error) => {
          console.error(error)
        })
    })
  }
}

const createdLesson = (result) => {
  return {
    type: CREATED_LESSON,
    payload: (result.data)
  }
}
