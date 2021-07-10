import * as types from './mutation-types'

export default {
  [types.AUTH_SIGNIN](state, payload){
    state.auth = payload
  },
  [types.AUTH_SIGNOUT](state){
    state.auth.token = null
    state.auth.userId = null
  },
  // [types.AUTH_SIGNUP](state, payload){},
  // [types.ADD_MEMORY](state, payload){},
  // [types.REMOVE_MEMORY](state, payload){},
  // [types.UPDATE_MEMORY](state, payload){},
  // [types.FETCH_ALL_MEMORY](state, payload){},
}