import feathers from 'feathers-client'
import rest from 'feathers-rest/client'
import superagent from 'superagent'

const host = 'http://localhost:3030'

// API Middleware
// -----------------------------------------------------------------------------
// Usage:
// import API from './api'
// const api = new API()
//
// const recipes = api.service('recipes')
// recipes.find()
// recipes.create({ title: 'Apple Pie', ... })
//
// See: https://docs.feathersjs.com/services/readme.html
//
// The above service callse return a Promise, so to use the response data, you
// will need to write something like:
//
// recipes.find()
//   .then((result) => {
//     // result has your data!
//   })
//   .catch((error) => {
//     // optionally catch errors and act on them
//   })
//
class API {
  constructor() {
    this.app = feathers()
      .configure(feathers.hooks())
      .configure(feathers.authentication({
        type: 'local',
        // when logged in, store the token in localStorage
        storage: window.localStorage,
      }))
      .configure(rest(host).superagent(superagent));
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    const { email, password } = user
    return this.app.authenticate(
      Object.assign({}, { type: 'local' }, {
      email,
      password,
    }))
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
