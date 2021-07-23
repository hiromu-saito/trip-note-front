import TripSignupView from '@/components/template/TripSignupView'
import {mount, createLocalVue} from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TripSignupViwe', () => {
  let signupFormStub
  const triggerSignup = (signupView, signupForm) => {
    const form = signupView.findComponent(signupForm)
    form.vm.signup('foo@domain.com', 'password')
  }
  beforeEach(() => {
    signupFormStub = {
      name: 'TripSignupForm',
      props: ['signup'],
      render: h => ('p', ['signup form'])
    }
  })
  describe('signupが成功', () =>{
    test('ログインページに遷移すること', async() =>{
      const actions = { signup: jest.fn(() => Promise.resolve()) }
      const store = new Vuex.Store({
        state: {},
        actions
      })
      const $router = { push: jest.fn() }
      const wrapper = mount(TripSignupView, {
        mocks: { $router },
        stubs: {
          'TripSignupForm': signupFormStub
        },
        store,
        localVue
      })

      triggerSignup(wrapper, signupFormStub)
      await flushPromises()

      expect($router.push.mock.calls.length).toBe(1)
      expect($router.push.mock.calls[0][0].path).toBe('/signin')
    })
  })
  describe('signinが失敗', () => {
    test('エラーが投げられること', async() => {
      const actions = {signup: jest.fn(() => Promise.reject(new Error('failed signup')))}
      const store = new Vuex.Store({
        state: {},
        actions
      })
      const wrapper = mount(TripSignupView, {
        stubs: {
          'TripSignupForm': signupFormStub
        },
        store,
        localVue
      })
      wrapper.vm.throwReject = jest.fn()

      triggerSignup(wrapper, signupFormStub)
      await flushPromises()

      const throwReject = wrapper.vm.throwReject
      expect(throwReject.mock.calls.length).toBe(1)
      expect(throwReject.mock.calls[0][0].message).toBe('failed signup')
    })
  })
})