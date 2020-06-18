import { mount } from '@vue/test-utils'
import CompanyForm from '@/components/register/provider/CompanyForm.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
Vue.config.silent = true;

document.body.setAttribute('data-app', true)

describe('CompanyForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CompanyForm)
    expect(wrapper).toBeTruthy()
  })
})

describe('CompanyForm', () => {
  test('formats full address using address components', () => {
    const wrapper = mount(CompanyForm)
    wrapper.vm.$data.address = "521 N Jefferson Avenue"
    wrapper.vm.$data.city = "Springfield"
    wrapper.vm.$data.state = "MO"
    wrapper.vm.$data.zipcode = "65806"
    wrapper.vm.formatFullAddress()
    expect(wrapper.vm.$data.fullAddress).toBe('521 N Jefferson Avenue, Springfield, MO 65806')
  })
})

describe('CompanyForm', () => {
  test('inputs exist', () => {
    const wrapper = mount(CompanyForm)
    let inputs = wrapper.findAll('input')
    expect(inputs.exists()).toBe(true)
    wrapper.destroy()
  })
})

describe('CompanyForm',  () => {
  test('inputs throw error messages because invalid', async () => {
    const wrapper = mount(CompanyForm)
    let inputs = wrapper.findAll('input')
    inputs.trigger('focus')
    await Vue.nextTick()
    inputs.trigger('blur')
    await Vue.nextTick()
    let messages = wrapper.findAll('.v-messages__message')
    expect(messages.exists()).toBe(true)
    wrapper.destroy()
  })
})

describe('CompanyForm', () => {
  test('formats full address using address components', () => {
    const wrapper = mount(CompanyForm)
    wrapper.vm.$data.firstName = "Rez"
    wrapper.vm.$data.lastName = "Delamasa"
    wrapper.vm.formatFullName()
    expect(wrapper.vm.$data.fullName).toBe('Rez Delamasa')
  })
})

// describe('CompanyForm',  () => {
//   test('text inputs validate', async () => {
//     const wrapper = mount(CompanyForm)
//     let inputs = wrapper.findAll('input[type="text"]')
//     inputs.trigger('focus')
//     await Vue.nextTick()
//     inputs.value = 'test'
//     await Vue.nextTick()
//     inputs.trigger('change')
//     await Vue.nextTick()
//     inputs.trigger('blur')
//     await Vue.nextTick()
//     let messages = wrapper.findAll('.v-messages__message')
//     expect(messages.exists()).toBe(false)
//     wrapper.destroy()
//   })
// })

describe('CompanyForm',  () => {
  test('password inputs validate', async () => {
    const wrapper = mount(CompanyForm)
    let inputs = wrapper.findAll('input[type="password"]')
    inputs.trigger('focus')
    await Vue.nextTick()
    inputs.value = 'Passw0rd!!!'
    await Vue.nextTick()
    inputs.trigger('change')
    await Vue.nextTick()
    inputs.trigger('blur')
    await Vue.nextTick()
    let messageWrappers = wrapper.findAll('.v-messages__wrapper')
    expect(messageWrappers.exists()).toBe(true)
    for(let i = 0; i < messageWrappers.length; i++) {
      let message = messageWrappers.at(i);
      expect(message.find('.v-messages__wrapper').exists()).toBe(false)
    }
    wrapper.destroy()
  })
})


