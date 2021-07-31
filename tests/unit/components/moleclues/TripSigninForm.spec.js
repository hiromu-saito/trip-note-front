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
      wrapper.setData({mailAddress: 'foo@domain.com', password: 'password'})
      wrapper.find('form').trigger('submit.prevent')
      expect(wrapper.vm.signinProgress).toBe(true)
      
      wrapper.vm.$nextTick(() => {
        expect(signinStub.mock.calls.length).toBe(1)
        expect(signinStub.mock.calls[0][0].mailAddress).toBe('foo@domain.com')
        expect(signinStub.mock.calls[0][0].password).toBe('password')
        done()
      })
    })
  })
})