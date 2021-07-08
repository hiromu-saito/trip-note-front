import {Auth, Memory} from '@/api'
import * as types from '@/store/mutation-types'

export default {
  signin: ({commit}, {mail, password}) => {
    Auth.signin({mail, password})
      .then(({token, userId}) => {
        commit(types.AUTH_SIGNIN, {token, userId})
      })
      .catch(err => { throw err })
  },
  signup: ({commit}, {mail, password}) => {
    Auth.signup({mail, password})
      .then(() => Promise.resolve())
      .catch(err => { throw err })
  },
  // signout: ({commit}) => {
    
  // },
  // addMemory: ({commit}) => {
    
  // },
  // updateMemory: ({commit}) => {
    
  // },
  // removeMemory: ({commit}) => {
    
  // },
  // fetchMemory: ({commit}) => {
    
  // }
}