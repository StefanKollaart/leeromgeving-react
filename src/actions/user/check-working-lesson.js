import API from '../../middleware/api'

export const FETCHED_CURRENT = 'FETCHED_CURRENT'

const api = new API()
const users = api.service('users')
const lessons = api.service('lessons')


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
          if (pushResult.lesson_working && pushResult.lesson_working.active == false) {
            lessons.find()
            .then((allLessons) => {
              let doneInTrack = pushResult.lesson_done.filter(function(singleLesson){
                if (singleLesson.track._id == pushResult.track) {
                  return true
                }
              })
              let nextLesson;
              for (var i = 0; i < allLessons.data.length; i++) {
                if(allLessons.data[i].lessonNumber = doneInTrack.length + 1 && allLessons.data[i].active && allLessons.data[i].track._id == pushResult.track) {
                  nextLesson = allLessons.data[i]
                }
              }
              pushResult.lesson_working = nextLesson;
              pushResult.unlockedLessons.push(nextLesson);
              users.update(user._id, { $set: { lesson_working: pushResult.lesson_working, unlockedLessons: pushResult.unlockedLessons }});
              dispatch(fetchedUser(pushResult))
            })
          }
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
