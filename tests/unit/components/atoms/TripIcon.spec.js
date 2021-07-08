import {mount} from '@vue/test-utils'
import TripIcon from '@/components/atoms/TripIcon'
//slotが入ること
//クラスが付与されること

describe('TripIcon', () => {
  test('slotが挿入されること', ()=> {
    const wrapper = mount(TripIcon, {
      slots: {
        default: 'アイコン'
      }
    })
    expect(wrapper.text()).toBe('アイコン')
  })
  test('disabledのときクラスが付与されること', () => {
    const wrapper = mount(TripIcon, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('not-allowed')
  })
})