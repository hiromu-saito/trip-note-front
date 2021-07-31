import {mount} from '@vue/test-utils'
import TripSignupForm from '@/components/moleclues/TripSignupForm'
import flushPromises from 'flush-promises'

const signup = jest.fn(() => Promise.resolve())

describe('TripSignupForm', () => {
  test('signupが意図通りの引数で呼ばれること', async() => {
    const wrapper= mount(TripSignupForm, {
      propsData: {
        signup: signup
      }
    })
    wrapper.setData({mailAddress: 'foo@domain.com', password: 'password', confirmPassword: 'password'})
    wrapper.find('form').trigger('submit.prevent')

    expect(signup.mock.calls.length).toBe(1)
    expect(signup.mock.calls[0][0].mailAddress).toBe('foo@domain.com')
    expect(signup.mock.calls[0][0].password).toBe('password')
    
  })
  test('ボタンのクリック前後で表示がかわること', async() => {
    const wrapper= mount(TripSignupForm, {
      propsData: {
        signup
      }
    })
    wrapper.setData({mailAddress: 'foo@domain.com', password: 'password', confirmPassword: 'password'})
    const button = wrapper.find('button')

    expect(button.text()).toBe('サインアップ')
    wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect(wrapper.vm.signupProgress).toBe(true)
    expect(button.text()).toBe('サインアップ中...')
  })
  describe('パスワードと確認様パスワードの一致バリデーション', () => {
    test('エラーメッセージが表示されること', async() => {
      const wrapper = mount(TripSignupForm, {propsData: {signup: () => {}}})
      wrapper.findAll('input').at(1).setValue('pass')
      wrapper.findAll('input').at(2).setValue('confirmpass')
   
      await flushPromises()

      const spans = wrapper.findAll('span')

      const error = spans.at(spans.length-1)
      expect(error.text()).toBe('確認用パスワードとパスワードは同じ値を入力してください')
    })
  })
})