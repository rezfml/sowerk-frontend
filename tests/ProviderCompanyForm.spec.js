import { mount } from '@vue/test-utils'
import CompanyForm from '@/components/register/provider/CompanyForm.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

describe('CompanyForm', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CompanyForm)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('CompanyForm', () => {
  test('formats full address using address components', () => {
    const wrapper = mount(CompanyForm)
    wrapper.vm.$data.address = "521 N Jefferson Avenue";
    wrapper.vm.$data.city = "Springfield";
    wrapper.vm.$data.state = "MO";
    wrapper.vm.$data.zipcode = "65806";
    wrapper.vm.formatFullAddress();
    expect(wrapper.vm.$data.fullAddress).toBe('521 N Jefferson Avenue, Springfield, MO 65806');
  })
})

// describe('CurrencyInput.vue', () => {
//   it("changing the element's value, updates the v-model", () => {
//     var parent = mount({
//       data: { price: null },
//       template: '<div> <currency-input v-model="price"></currency-input> </div>',
//       components: { 'currency-input': CurrencyInput }
//     })
//
//     var currencyInputInnerTextField = parent.find('input');
//     currencyInputInnerTextField.element.value = 13.467;
//     currencyInputInnerTextField.trigger('input');
//
//     expect(parent.vm.price).toBe(13.46);
//   });
// });
//
// wrapper.find('input').simulate('keypress', {key: 'Enter'})

