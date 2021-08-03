import * as types from './mutation-types'

export default {
  [types.AUTH_SIGNIN](state, payload){
    state.auth = payload
  },
  [types.AUTH_SIGNOUT](state){
    state.auth.token = null
    state.auth.userId = null
    state.memories = []
  },
  [types.ADD_MEMORY](state, payload){
    state.memories.push(payload)
  },
  [types.REMOVE_MEMORY](state, payload){
    state.memories = state.memories.filter(memory => memory.id !== payload)
  },
  [types.UPDATE_MEMORY](state, {id, memory}){
    const m = state.memories.find(memory => memory.id === id)
    m.impression = memory.impression
    m.accommodationDate = memory.accommodationDate
  },
  [types.FETCH_ALL_MEMORY](state, payload){
    state.memories　= payload
  },
  [types.UPDATE_IS_SEARCHING](state, payload){
    state.isSearching = payload
  }
}