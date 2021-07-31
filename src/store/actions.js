import {Auth, Memory} from '@/api'
import * as types from '@/store/mutation-types'
import { FETCH_ALL_MEMORY } from './mutation-types'

export default {
  signin: ({commit}, {mailAddress, password}) => {
    return Auth.signin({mailAddress, password})
      .then(({token, userId}) => {
        localStorage.setItem('token', token)
        commit(types.AUTH_SIGNIN, {token, userId})
      })
      .catch(err => Promise.reject(err))
  },
  signup: ({commit}, {mailAddress, password}) => {
    return Auth.signup({mailAddress, password})
      .then(() =>{
        commit(types.AUTH_SIGNOUT)
      })
      .catch(err => Promise.reject(err))
  },
  signout: ({commit, state}) => {
    return Auth.signout(state.auth.token)
      .then(() => {
        localStorage.removeItem('token')
        commit(types.AUTH_SIGNOUT)
      })
      .catch(err => Promise.reject(err))
  },
  addMemory: ({commit, state}, memory) => {
    return Memory.addMemory(memory, state.auth.token)
      .then(() => {
        commit(types.ADD_MEMORY, memory)
      })
      .catch(err => Promise.reject(err))
  },
  updateMemory: ({commit, state}, {id, memory}) => {
    return Memory.updateMemory(id, memory, state.auth.token)
      .then(() => {
        commit(types.UPDATE_MEMORY, {id, memory})
      })
      .catch(err => Promise.reject(err))
  },
  removeMemory: ({commit, state}, id) => {
    return Memory.removeMemory(id, state.auth.token)
      .then(()=>{
        commit(types.REMOVE_MEMORY, id)
      })
      .catch(err => Promise.reject(err))
  },
  fetchMemory: ({commit, state}) => {
    return Memory.fetchMemory(state.auth.token)
      .then(res => {
        commit(FETCH_ALL_MEMORY, res.data)
      })
      .catch(err => Promise.reject(err))
  }
}