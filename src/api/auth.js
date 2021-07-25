import axios from 'axios'
const URL = 'https://localhost:18080'

export default {
  signin: (authInfo) =>{
    return new Promise((resolve, reject) =>{
      axios.put('/auth', authInfo)
        .then(res => {
          resolve({token: res.data.token, userId: res.data.userId})
        })
        .catch(err =>{
          reject(err)
        })
    })
  },
  signup: (authInfo) => {
    return new Promise((resolve, reject) => {
      axios.post('/auth', authInfo)
        .then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
    })
  },
  signout: () => Promise.resolve()
}