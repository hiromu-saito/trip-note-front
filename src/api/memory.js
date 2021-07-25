import axios from 'axios'

export default {
  addMemory: (memory, token)=> {
    return new Promise((resolve, reject) => {
      axios.post('/memory', memory, { headers: {'x-trip-token': token}})
        .then(() =>{
          resolve()
        }).catch(err => {
          reject(err)
        })
    })
  },
  updateMemory: (id, memory, token)=>{
    return new Promise((resolve, reject) => {
      axios.put(`/memory/${id}`, memory, {headers: {'x-trip-token': token}})
        .then(() => {
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  removeMemory: (id, token)=>{
    return new Promise((resolve, reject) => {
      axios.delete(`/memory/${id}`, {headers: {'x-trip-token': token}})
        .then(() => {
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  fetchMemory: (token) => {
    return new Promise((resolve, reject) => {
      axios.get('/memory', {headers: {'x-trip-token': token}})
        .then(res =>{
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
}