import {Auth, Memory} from '@/api'
import * as types from '@/store/mutation-types'

export default {
  signin: ({commit}, {mail, password}) => {
    return Auth.signin({mail, password})
      .then(({token, userId}) => {
        localStorage.setItem('token', token)
        commit(types.AUTH_SIGNIN, {token, userId})
      })
      .catch(err => { throw err })
  },
  signup: ({commit}, {mail, password}) => {
    return Auth.signup({mail, password})
      .then(() => Promise.resolve())
      .catch(err => { throw err })
  },
  signout: ({commit, state}) => {
    return Auth.signout(state.auth)
      .then(() => {
        localStorage.removeItem('token')
        commit(types.AUTH_SIGNOUT)
      })
      .catch(err => { throw err })
  },
  addMemory: ({commit}, memory) => {
    return Memory.addMemory(memory)
      .then(() => {
        commit(types.ADD_MEMORY, memory)
      })
      .catch(err => { throw err })
  },
  // updateMemory: ({commit}) => {
    
  // },
  // removeMemory: ({commit}) => {
    
  // },
  // fetchMemory: ({commit}) => {
    
  // }
}