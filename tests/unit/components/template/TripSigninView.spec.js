import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import TripSigninView from '@/components/template/TripSigninView'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TripSigninView', () => {
  let signinFormComponentStub
  const triggerSignin = (signinView, signinForm) => {
    const form = signinView.findComponent(signinForm)
    form.vm.signin('foo@domain.com', 'password')
  }

  beforeEach(()=> {
    signinFormComponentStub = {
      name: 'TripSigninForm',
      props: ['signin'],
      render: h => ('p', ['signin form'])
    }
  })

  describe('Signin', () => {
    let actions
    let signinView
    let store
    describe('Signin成功', () => {
      let $router
      it('ルートにリダイレクトすること', async() => {
        $router = { push: jest.fn() }
        actions = { signin: jest.fn(()=> Promise.resolve()) }
        store = new Vuex.Store({ state: {}, actions })
        signinView = mount(TripSigninView, {
          mocks: {$router},
          stubs: {
            'TripSigninForm': signinFormComponentStub
          },
          store,
          localVue
        })
        triggerSignin(signinView, signinFormComponentStub)

        await flushPromises()
        expect($router.push.mock.calls.length).toBe(1)
        expect($router.push.mock.calls[0][0].path).toBe('/')
      })
      
    })
    describe('Signin失敗', () => {
      it('エラーが帰ること', async() => {
        actions = { signin: jest.fn(() => Promise.reject(new Error('failed signin'))) }
        store = new Vuex.Store({ state: {}, actions })
        signinView = mount(TripSigninView, {
          stubs: {
            'TripSigninForm': signinFormComponentStub
          },
          store,
          localVue
        })

        signinView.vm.throwReject = jest.fn()

        triggerSignin(signinView, signinFormComponentStub)

        await flushPromises()

        const throwReject = signinView.vm.throwReject
        expect(throwReject.mock.calls.length).toBe(1)
        expect(throwReject.mock.calls[0][0].message).toBe('failed signin')
      })
    })
  })
})