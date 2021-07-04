import {shallowMount} from '@vue/test-utils'
import TripButton from '@/components/atoms/TripButton'

describe('TripButton', () => {
  describe('disableでないとき', () => {
    it('classが付与されていないこと', () => {
      const tripButton = shallowMount(TripButton, {
        propsData: {
          label: 'button',
          disabled: false
        }
      })
      expect(tripButton.text()).toBe('button')
      expect(tripButton.classes().length).toBe(0)
    })
  })
  describe('disabelであるとき', () => {
    it('classが付与されていること', () => {
      const tripButton = shallowMount(TripButton, {
        propsData: {
          label: 'button',
          disabled: true
        }
      })
      expect(tripButton.text()).toBe('button')
      expect(tripButton.classes()).toContain('not-allowed')
    })
  })
})