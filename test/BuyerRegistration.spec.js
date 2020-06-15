import { mount } from '@vue/test-utils'
import Provider from '@/pages/register/provider.vue'

describe('Provider', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Provider)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
