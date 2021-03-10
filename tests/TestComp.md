// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import TestComp from '@/components/dashboard/TestComp'

// Utilities
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuetify)
Vue.config.silent = true

document.body.setAttribute('data-app', true)

test('TestComp', () => {
const wrapper = mount(TestComp)
const movies = wrapper.vm.marvelMovies
wrapper.setData({ marvelMovies: [...movies, 'Endgame'] })
expect(wrapper.html()).toMatchSnapshot()
})

describe('TestComp.vue', () => {
it('should have a data point that is an array with a length of 3 and the value of "Iron Man" in the 0 position', () => {
const wrapper = mount(TestComp)
const movieList = wrapper.vm.marvelMovies
expect(movieList.length).toBe(3)
expect(movieList[0]).toBe('Iron Man')
})

it('should have a button that can be clicked, to emit an action', () => {
const wrapper = mount(TestComp)
const btnTest = wrapper.vm.buttonTest

    expect(btnTest).not.toBeTruthy()

    const event = jest.fn()
    const button = wrapper.find('.emitButton')
    console.log(button)

    wrapper.vm.$on('action-btn:clicked', event)

    expect(event).toHaveBeenCalledTimes(0)

    button.trigger('click')

    expect(event).toHaveBeenCalledTimes(1)

})

it('should have a button that can be clicked, to change a data point from false to true', () => {
const wrapper = mount(TestComp)
const testButton = wrapper.vm.buttonTest
console.log(wrapper.vm.buttonTest)

    expect(testButton).not.toBeTruthy()

    const event = jest.fn()
    const bootIn = wrapper.find('.testButton')
    console.log(bootIn)

    wrapper.vm.$on('testButton', event)

    expect(event).toHaveBeenCalledTimes(0)

    bootIn.trigger('click')

    // expect(event).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.buttonTest).toBe(true)
    console.log(wrapper.vm.buttonTest)

})
})
