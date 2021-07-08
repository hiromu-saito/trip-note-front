import TripHeader from '@/components/moleclues/TripHeader'
import {mount} from '@vue/test-utils'
import flushPromises from 'flush-promises'

describe('TripHeader', () => {
  describe('signoutボタン押下', () => {
    test('サインアウトを実行し，ボタンの文字が変化すること', async() => {
      const signoutStub = jest.fn(() => Promise.resolve())
      const wrapper = mount(TripHeader, {
        propsData: {
          signout: signoutStub
        }
      })
      
      const button = wrapper.find('button')
      expect(button.text()).toBe('サインアウト')
      button.trigger('click')

      await flushPromises()
      expect(button.text()).toBe('サインアウト中...')
      expect(signoutStub.mock.calls.length).toBe(1)
    })
  })
})