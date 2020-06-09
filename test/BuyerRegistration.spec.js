import { mount } from '@vue/test-utils'
import Buyer from '@/pages/register/buyer.vue'

describe('Buyer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Buyer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
