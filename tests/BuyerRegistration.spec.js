import { createLocalVue, shallowMount } from '@vue/test-utils'
import Provider from '@/pages/register/provider.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

describe('Provider', () => {
  it('When foo is set to -something-, set bar to true', () => {
    const myItems = [
      {
        baseUrl: process.env.VUE_APP_BASE_URL,
        api_key: process.env.VUE_APP_STRIPE_API_KEY,
        stripeOptions: {
          style: {
            base: {
              color: '#32325d',
              lineHeight: '24px',
              fontFamily: 'Helvetica Neue',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#8f8f8f'
              }
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a'
            }
          }
        },
        loading: false,
        tab: 0,
        items: [
          'Company',
          'Locations',
          'Review'
        ],
        plans: null,
        form: {
          company: {
            name: {
              label: 'Company Name',
              value: null,
              width: 12,
              hide: true
            },
            fullName: {
              label: 'Name',
              value: null,
              width: 5
            },
            username: {
              label: 'Username',
              value: null,
              width: 5,
              offset: 2
            },
            email: {
              label: 'Email',
              value: null,
              width: 5,
            },
            phone: {
              label: 'Phone',
              value: null,
              width: 5,
              offset: 2
            },
            fullAddress: {
              label: 'Corporate Address',
              value: null,
              width: 12,
            },
            password: {
              label: 'Password',
              value: null,
              hide: true,
            },
            confirm: {
              label: 'Confirm',
              value: null,
              hide: true,
            },
            address: {
              label: 'Address',
              value: null,
              hide: true,
            },
            city: {
              label: 'City',
              value: null,
              hide: true,
            },
            state: {
              label: 'State',
              value: null,
              hide: true,
            },
            zipcode: {
              label: 'Zip',
              value: null,
              hide: true,
            },
            firstName: {
              label: 'First Name',
              value: null,
              hide: true
            },
            lastName: {
              label: 'Last Name',
              value: null,
              hide: true
            },
            description: {
              label: 'Company Description',
              value: null,
            },
            image: {
              label: 'Company Image',
              value: '',
              hide: true
            },
            tos_date: {
              hide: true,
              value: null,
            },
          },
          locations: [
            {
              name: {
                label: 'Name',
                value: null,
              },
              radius: {
                value: null,
                hide: true,
              },
              address: {
                label: 'Address',
                value: null,
                hide: true,
              },
              city: {
                label: 'City',
                value: null,
                hide: true,
              },
              state: {
                label: 'State',
                value: null,
                hide: true,
              },
              zipcode: {
                label: 'Zipcode',
                value: null,
                hide: true,
              },
              membership_id: {
                value: 'yearly-national',
                hide: true,
              },
              price: {
                value: 300000,
                hide: true
              },
              latitude: {
                value: null,
                hide: true,
              },
              longitude: {
                value: null,
                hide: true,
              },
              polygon: {
                value: null,
                hide: true,
              },
              state_full: {
                value: null,
                hide: true,
              },
              firstName: {
                label: 'First Name',
                value: null,
              },
              lastName: {
                label: 'Last Name',
                value: null,
              },
              phone: {
                label: 'Phone Number',
                value: null,
              },
              email: {
                label: 'Email Address',
                value: null,
              },
              description: {
                label: 'Description',
                value: null,
              },
              image: {
                label: 'Image',
                value: null
              },
              fullAddress: {
                label: 'Address',
                value: null
              }
            }
          ],
          billing: {
            name: null,
            address: null,
            city: null,
            state: null,
            zipcode: null
          }
        },
        imageUrlLocation: '',
        autocomplete: null,
        markers: [],
        total: 0,
        states: null,
        token: null,
        editing: true,
        editingIndex: 0,
        rules: {
          requiredRules: [
            v => !!v || v === 0 || 'Field is required',
          ],
          usernameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 100) || 'Name must be less than 100 characters'
          ],
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
            v => (v && v.length <= 100) || 'Email must be less than 100 characters'
          ],
          emailNotRequiredRules: [
            v => /.+@.+/.test(v) || v === "" || v === null || 'E-mail must be valid',
            v => (v && v.length <= 100) || v === "" || v === null || 'Email must be less than 100 characters'
          ],
          phoneRules: [
            v => !!v || 'Phone Number is required',
            v => (v && v.length === 10) || 'Phone Number must be 10 digits',
          ],
          passwordRules: [
            v => !!v || 'Password is required',
            v => /[*@!?#%&()^~{}]+/.test(v) || 'Password must contain 1 special character',
            v => /[A-Z]+/.test(v) || 'Password must contain at least 1 Uppercase character',
            v => /[a-z]+/.test(v) || 'Password must contain at least 1 Lowercase character',
            v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            v => (v && v.length <= 255) || 'Password must be less than 255 characters'
          ],
          addressRules: [
            v => !!(this.form.address && this.form.city && this.form.state && this.form.zip) || 'Invalid Address'
          ],

        }
      }
    ]
    const localVue = createLocalVue()
    const wrapper = shallowMount(Provider, {
      localVue,
      propsData: {
        myItems
      }
    })

    wrapper.vm.foo = 'something'
    wrapper.vm.addLocation()

    expect(myItems[0].bar).toBe(true)
  })
})
