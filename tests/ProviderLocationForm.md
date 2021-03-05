import { mount } from '@vue/test-utils'
import LocationForm from '@/components/register/provider/LocationForm'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
Vue.config.silent = true;

document.body.setAttribute('data-app', true)

describe('LocationForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LocationForm, {
      created() {
        this.$vuetify.lang = {
          t: () => {
          },
        }
        this.$vuetify.theme = { dark: false };
      }
    })
    expect(wrapper).toBeTruthy()
  })
})

describe('LocationForm', () => {
  test('formats full address using address components', () => {
    const wrapper = mount(LocationForm, {
      created() {
        this.$vuetify.lang = {
          t: () => {
          },
        }
        this.$vuetify.theme = { dark: false };
      }
    })
    wrapper.vm.$data.address = "521 N Jefferson Avenue"
    wrapper.vm.$data.city = "Springfield"
    wrapper.vm.$data.state = "MO"
    wrapper.vm.$data.zipcode = "65806"
    wrapper.vm.formatFullAddress()
    expect(wrapper.vm.$data.fullAddress).toBe('521 N Jefferson Avenue, Springfield, MO 65806')
  })
})

describe('LocationForm', () => {
  test('inputs exist', () => {
    const wrapper = mount(LocationForm, {
      created() {
        this.$vuetify.lang = {
          t: () => {
          },
        }
        this.$vuetify.theme = { dark: false };
      }
    })
    let inputs = wrapper.findAll('input')
    expect(inputs.exists()).toBe(true)
    wrapper.destroy()
  })
})

describe('LocationForm',  () => {
  test('inputs throw error messages because invalid', async () => {
    const wrapper = mount(LocationForm, {
      created() {
        this.$vuetify.lang = {
          t: () => {
          },
        }
        this.$vuetify.theme = { dark: false };
      }
    })
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

describe('LocationForm', () => {
  test('formats full name using first and last name', () => {
    const wrapper = mount(LocationForm, {
      created() {
        this.$vuetify.lang = {
          t: () => {
          },
        }
        this.$vuetify.theme = { dark: false };
      }
    })
    wrapper.vm.$data.firstName = "Rez"
    wrapper.vm.$data.lastName = "Delamasa"
    wrapper.vm.formatFullName()
    expect(wrapper.vm.$data.fullName).toBe('Rez Delamasa')
  })
})


