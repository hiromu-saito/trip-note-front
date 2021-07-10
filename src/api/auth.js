export default {
  signin: () => Promise.resolve({token: 'token', userId: 1}),
  signup: () => Promise.resolve(),
  signout: () => Promise.resolve()
}