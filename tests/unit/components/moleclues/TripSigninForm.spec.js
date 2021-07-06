import {mount} from '@vue/test-utils'
import TripSigninForm from '@/components/moleclues/TripSigninForm'

let signinStub

describe('TripSigninForm', () => {
  describe('signinが成功', () => {
    it('signinが正しく呼ばれること', done => {
      signinStub = jest.fn(() => Promise.resolve())
      const wrapper = mount(TripSigninForm, {
        propsData: {
          signin: signinStub
        }
      })
      wrapper.setData({mail: 'foo@domain.com', password: 'password'})
      const button = wrapper.find('button')
      
      button.trigger('click')
      expect(wrapper.vm.signinProgress).toBe(true)
      
      wrapper.vm.$nextTick(() => {
        expect(signinStub.mock.calls.length).toBe(1)
        expect(signinStub.mock.calls[0][0].mail).toBe('foo@domain.com')
        expect(signinStub.mock.calls[0][0].password).toBe('password')
        done()
      })
    })
  })
})