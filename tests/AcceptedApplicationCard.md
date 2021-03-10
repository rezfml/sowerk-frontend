// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import AcceptedApplicationCard from '@/components/dashboard/AcceptedApplicationCard'

// Utilities
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuetify)
Vue.config.silent = true

document.body.setAttribute('data-app', true)

describe('AcceptedApplicationCard', () => {
  it('The card renders after loading is done', async () => {
    const wrapper = mount(AcceptedApplicationCard)

    // FIND CLASS SELECTOR FOR EXPAND ARROW BUTTON, DEMONSTRATING THAT COMPONENT HAS RENDERED
    let expandArrowButton = wrapper.findAll('.expandArrow__Button')
    expect(expandArrowButton).toBeTruthy()
    // console.log(expandArrowButton)

    let cardTitleText = wrapper.findAll('.cardTitle__Text')
    expect(cardTitleText).toBeTruthy()
    expect(cardTitleText.text()).toBe('My Approved Vendors')

    let test = wrapper.findAll('v-card-title')
    expect(test).toBeTruthy()
  })

  // it('The expand button can be clicked', async () => {
  //   const wrapper = mount(AcceptedApplicationCard)

  // FIND EXPAND ARROW BUTTON AND CLICK IT, THEN CHECK THAT INTERIOR DATA CAN BE FOUND
  // })
})
