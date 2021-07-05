import {mount} from '@vue/test-utils'
import TripSigninForm from '@/components/moleclues/TripSigninForm'

let loginStub = jest.fn(() => Promise.resolve())

describe('TripSigninForm', () => {
  it('loginが正しく呼ばれること', () => {

    const wrapper = mount(TripSigninForm, {
      propsData: {
        login: loginStub
      }
    })
    wrapper.setData({mail: 'foo@domain.com', password: 'password'})
    const button = wrapper.find('button')

    button.trigger('click')
    expect(wrapper.vm.loginProgress).toBe(true)

    wrapper.vm.$nextTick(() => {
      expect(loginStub.mock.calls.length).toBe(1)
      expect(loginStub.mock.calls[0][0].mail).toBe('foo@domain.com')
      expect(loginStub.mock.calls[0][0].password).toBe('password')
    })
  })
})