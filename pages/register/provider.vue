<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
    >
      <v-card class="elevation-12 card--has-floating card" light>
        <v-card-title class="justify-center headline font-weight-light">Build Your Business Profile</v-card-title>
        <v-card-subtitle class="text-center title mt-1 mb-12" style="font-weight: normal;">This information will let us know more about you.</v-card-subtitle>
        <v-tabs
          v-model="tab"
          background-color="grey lighten-2"
          color="black"
          grow
          active-class="primary white--text elevation-10"
          hide-slider
          style="position: relative;"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :disabled="item !== tab"
            style="opacity: 1!important;"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items
          v-model="tab"
          class="white"
          light
          eager
        >
          <v-tab-item
            eager
          >
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Let's start with the basic information about your company.</p>
                <company-form></company-form>
              </v-card-text>
            </v-container>
          </v-tab-item>
          <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <p class="title font-weight-bold text-center mt-12 grey--text text--darken-3 mb-2">Location Listings Are Very Important to Buyers</p>
                <p class="title font-weight-regular text-center grey--text text--darken-2 mt-0">Buyers see services offered, credentials, and your proximity</p>
                <v-col cols="12" style="position: relative; top: 0; z-index: 4;">
                  <v-row style="position: relative;">
                    <v-col cols="12" style="width: 100%; top: 0;" class="px-0">
                      <client-only>
                        <GmapMap
                          id="locations-map"
                          :center="{lat:form.locations[0].latitude.value ? form.locations[0].latitude.value : 37, lng:form.locations[0].longitude.value ? form.locations[0].longitude.value : -95}"
                          :zoom="form.locations[0].latitude.value ? 7 : 4"
                          style="height: 400px"
                          ref="location-map"
                        >
                          <GmapCluster>
                            <template v-for="(m, i) in markers">
                              <GmapMarker
                                :key="i"
                                :position="{lat: m.lat, lng: m.lng}"
                                :label="i + 1 + ''"
                                :clickable="true"
                              />
                            </template>
                          </GmapCluster>
                        </GmapMap>
                      </client-only>
                    </v-col>
                  </v-row>
                </v-col>
                <template v-if="editing">
                  <LocationForm
                    :location="form.locations[editingIndex]"
                    :index="editingIndex"
                    @saveLocation="saveLocation"
                    @createMarker="createMarker"
                  />
<!--                  <v-subheader class="headline px-0">{{ form.locations[editingIndex].name.value ? form.locations[editingIndex].name.value : 'Location ' + (editingIndex + 1) }}</v-subheader>-->
<!--                  <v-form>-->
<!--                    <v-row>-->
<!--                      <v-col cols="6" lg="5" xl="4">-->
<!--                        <client-only>-->
<!--                          <v-image-input-->
<!--                            v-model="form.locations[editingIndex].image.value"-->
<!--                            image-quality="0.85"-->
<!--                            clearable-->
<!--                            image-format="png"-->
<!--                            uploadIcon="person"-->
<!--                            fullWidth-->
<!--                            overlayPadding="10px"-->
<!--                            scalingSliderColor="red"-->
<!--                            :readonly="false"-->
<!--                          />-->
<!--                        </client-only>-->
<!--                      </v-col>-->
<!--                      <v-col cols="6" lg="7" xl="8">-->
<!--                        <v-text-field-->
<!--                          id="location"-->
<!--                          label="Location Name (required)"-->
<!--                          type="text"-->
<!--                          v-model="form.locations[editingIndex].name.value"-->
<!--                        ></v-text-field>-->

<!--                        <div class="v-input__control mt-10">-->
<!--                          <div class="v-input__slot">-->
<!--                            <div class="v-text-field__slot" style="width: 100%;">-->
<!--                              <label class="v-label theme&#45;&#45;light form__label&#45;&#45;address" :class="{'v-label&#45;&#45;filled': form.locations[editingIndex].fullAddress.value}" style="left: 0px; right: auto; position: absolute;">Location Address (required)</label>-->
<!--                              <client-only>-->
<!--                                <vue-google-autocomplete-->
<!--                                  :id="'location-address&#45;&#45;' + editingIndex"-->
<!--                                  classname="form-control"-->
<!--                                  v-on:placechanged="getAddressData"-->
<!--                                  placeholder=""-->
<!--                                  style="width: 100%; font-size: 16px;"-->
<!--                                  v-on:focus.native="animateAddressFieldOnFocus"-->
<!--                                  v-on:blur.native="animateAddressFieldOnFocus"-->
<!--                                  v-on:input.native="animateAddressFieldOnFilled"-->
<!--                                  v-model="form.locations[editingIndex].fullAddress.value"-->
<!--                                >-->
<!--                                </vue-google-autocomplete>-->
<!--                              </client-only>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </v-col>-->

<!--                      <v-col cols="12" class="mt-8">-->
<!--                        <span class="headline mb-0">Primary Point of Contact Info</span>-->
<!--                        <span class="subtitle-1 my-0">(Only Public to Approved Vendor)</span>-->
<!--                      </v-col>-->

<!--                      <v-col cols="12" md="6">-->
<!--                        <v-text-field-->
<!--                          id="first_name"-->
<!--                          label="First Name (required)"-->
<!--                          type="text"-->
<!--                          v-model="form.locations[editingIndex].firstName.value"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col cols="12" md="6">-->
<!--                        <v-text-field-->
<!--                          id="last_name"-->
<!--                          label="Last Name (required)"-->
<!--                          type="text"-->
<!--                          v-model="form.locations[editingIndex].lastName.value"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col cols="12" md="6">-->
<!--                        <v-text-field-->
<!--                          id="phone"-->
<!--                          label="Phone (required)"-->
<!--                          type="number"-->
<!--                          v-model="form.locations[editingIndex].phone.value"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col cols="12" md="6">-->
<!--                        <v-text-field-->
<!--                          id="email"-->
<!--                          label="Email Address (required)"-->
<!--                          type="email"-->
<!--                          v-model="form.locations[editingIndex].email.value"-->
<!--                        ></v-text-field>-->
<!--                      </v-col>-->

<!--                      <v-col cols="12">-->
<!--                        <v-textarea-->
<!--                          id="description"-->
<!--                          label="Location Description (required)"-->
<!--                          v-model="form.locations[editingIndex].description.value"-->
<!--                        ></v-textarea>-->
<!--                      </v-col>-->
<!--                    </v-row>-->
<!--                  </v-form>-->
<!--                  <v-btn-->
<!--                    block-->
<!--                    color="primary"-->
<!--                    @click="finishEditingLocation"-->
<!--                  >-->
<!--                    Save Location-->
<!--                  </v-btn>-->
                </template>
                <template v-else>
                  <v-row class="my-8">
                    <v-col
                      cols="12"
                      v-for="(location, i) in form.locations"
                      :key="i"
                    >
                      <v-divider v-show="i > 0"></v-divider>
                      <v-row class="pt-6 pb-0">
                        <v-col cols="2">
                          <v-img v-if="location.image.value" aspect-ratio="1" :src="location.image.value"></v-img>
<!--                          <v-icon color="grey" style="font-size: 100px; text-align: center;" class="mx-auto" v-else>person</v-icon>-->
                          <p v-else>hello</p>
                        </v-col>
                        <v-col cols="8">
                          <p class="title mb-2">{{ location.name.value }}</p>
                          <p class="subtitle grey--text font-weight-medium">{{ location.fullAddress.value }}</p>
                        </v-col>
                        <v-col cols="2" style="display: flex; justify-content: flex-end;">
                          <v-btn @click="editLocation(i)" style="height: 100%;" depressed text ripple><v-icon color="grey" class="darken-3 mx-auto" style="font-size: 40px; text-align: center;">mdi-pencil</v-icon></v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
<!--                  <v-form class="mx-auto">-->
<!--                    <v-container>-->
<!--                      <FormLocation-->
<!--                        v-for="(location, i) in form.locations"-->
<!--                        :key="i"-->
<!--                        :location="location"-->
<!--                        :index="i"-->
<!--                        @change="onFormLocationChange"-->
<!--                        :isProvider="true"-->
<!--                      />-->
<!--                    </v-container>-->
<!--                  </v-form>-->
                  <v-btn v-on:click.native="addLocation" outlined block large color="primary" class="mx-auto my-12">+ Add Location</v-btn>
                </template>
              </v-card-text>
            </v-container>
          </v-tab-item>
          <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <v-col cols="12">
                  <p class="title font-weight-regular text-center mt-12 mb-0 grey--text text--darken-2">Please review your company profile before submitting</p>
                </v-col>
                <v-col cols="12" class="d-flex flex-column align-center justify-center mb-4">
                  <v-img class="mx-auto" :src="form.company.image.value" max-height="300px" max-width="300px" aspect-ratio="1" v-if="form.company.image.value && form.company.image.value != ''"></v-img>
                  <v-icon color="grey" style="font-size: 200px; text-align: center; border: 2px solid #ccc; padding: 20px; border-radius: 100%;" class="mx-auto" v-else>person</v-icon>
                  <span class="headline font-weight-bold">{{ form.company.name.value }}</span>
                </v-col>

                <v-card class="deep-orange lighten-5 px-8 py-4 elevation-0">
                  <v-row>
                    <v-col :cols="item.width" :offset="item.offset ? item.offset : 0" v-for="item in form.company" :key="item.name" v-if="!item.hide">
                      <template v-if="item.label != 'Company Image'">
                        <v-subheader inset class="mx-0 px-0" style="height: 32px;">
                          <span class="primary--text font-weight-bold">{{ item.label }}</span>
                        </v-subheader>
                        <span class="mt-0 mb-4">{{ item.value }}</span>
                      </template>
                      <template v-else>
                        <v-subheader inset class="mx-0 px-0">
                          <span class="primary--text font-weight-bold">{{ item.label }}</span>
                        </v-subheader>
                        <v-img :src="item.value" max-height="300px" max-width="300px" aspect-ratio="1"></v-img>
                      </template>
                    </v-col>
                  </v-row>
                </v-card>

                <v-col cols="12" class="mt-6 px-0">
                  <v-col cols="12" class="px-0">
                    <span class="title font-weight-regular text-center my-12 grey--text text--darken-2">Now please review your locations</span>
                  </v-col>
                  <v-col cols="12" style="position: relative; top: 0; z-index: 4;">
                    <v-row style="position: relative;">
                      <v-col cols="12" style="width: 100%; top: 0;" class="px-0">
                        <client-only>
                          <GmapMap
                            id="reciew-map"
                            :center="{lat:form.locations[0].latitude.value ? form.locations[0].latitude.value : 37, lng:form.locations[0].longitude.value ? form.locations[0].longitude.value : -95}"
                            :zoom="form.locations[0].latitude.value ? 7 : 4"
                            style="height: 400px"
                            ref="location-map"
                          >
                            <GmapCluster>
                              <template v-for="(m, i) in markers">
                                <GmapMarker
                                  :key="i"
                                  :position="{lat: m.lat, lng: m.lng}"
                                  :label="i + 1 + ''"
                                  :clickable="true"
                                />
                              </template>
                            </GmapCluster>
                          </GmapMap>
                        </client-only>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" class="px-0">
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-center grey--text text--darken-4">Location Name</th>
                            <th class="text-center grey--text text--darken-4">Address</th>
                            <th class="text-center primary--text">Contact Name</th>
                            <th class="text-center primary--text">Phone</th>
                            <th class="text-center primary--text">Email</th>
                            <th class="text-center primary--text"></th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(location, index) in form.locations" :key="index" :class="{'grey lighten-3': index % 2 === 0, 'white': index % 2 !== 0}">
                          <td class="text-center py-6">{{ location.name.value }}</td>
                          <td class="text-center py-6">
                            <p class="mb-0">{{ location.address.value }}</p>
                            <p class="mb-0">{{ location.city.value + ', ' + location.state.value + ' ' + location.zipcode.value }}</p>
                          </td>
                          <td class="text-center py-6">{{ location.firstName.value + ' ' + location.lastName.value }}</td>
                          <td class="text-center py-6">{{ location.phone.value }}</td>
                          <td class="text-center py-6">{{ location.email.value }}</td>
                          <td class="text-center py-6">
                            <v-btn text class="primary--text">Edit</v-btn>
                          </td>
                        </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                </v-col>

                <v-col cols="12" class="px-0">
                  <span class="headline grey--text text--darken-4">Checkout</span>
                  <v-divider class="mt-1 mb-8 light-gray"></v-divider>
                  <v-row>
                    <v-col cols="1" style="display: flex; justify-content: center;">
                      <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="12">
                      <v-subheader inset class="mx-0 px-0">
                        <span class="primary--text font-weight-bold">Order Summary</span>
                      </v-subheader>
                      <template v-for="(location, i) in form.locations" v-if="location.name.value && plans">
                        <p class="title mb-0">{{ location.name.value }}</p>
                        <p class="grey--text text--darken-1">{{ location.address.value  + ' ' +  location.city.value + ', ' +  location.state.value + ' ' +  location.zipcode.value }}</p>
                        <v-row class="mt-8">
                          <v-col cols="6" class="py-0">
                            <p>{{ getNameForPlan(location.membership_id.value) }}</p>
                          </v-col>
                          <v-col cols="6" class="py-0">
                            <p class="text-right font-weight-bold">{{ getPriceForPlan(location.membership_id.value) }}</p>
                          </v-col>
                        </v-row>
                        <v-divider class="my-6" />
                      </template>
                        <v-row v-if="form.locations[0].address.value">
                          <v-col cols="6" class="py-0">
                            <p class="text-uppercase font-weight-bold">Total</p>
                          </v-col>
                          <v-col cols="6" class="py-0">
                            <p class="text-right font-weight-bold">{{ calculateTotalPrice() }}</p>
                          </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                      <v-subheader inset class="mx-0 px-0">
                        <span class="primary--text font-weight-bold">Billing</span>
                      </v-subheader>
<!--                      <card-->
<!--                        class="stripe-card"-->
<!--                        :stripe="api_key"-->
<!--                        :options="stripeOptions"-->
<!--                      />-->
                      <div ref="card"></div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12">
                  <v-checkbox
                    label="I agree to the Terms of Service"
                    v-on:change="getTosDate"
                  >
                  </v-checkbox>
                </v-col>

              </v-card-text>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
          <template v-if="tab != 1 || !editing">
            <v-btn color="primary" text @click="prevPageIfNotFirst" v-show="tab !== 0"> < Back</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="tab < 2">Next > </v-btn>
            <v-btn color="primary" class="px-8" @click="submitRegistrationForm" v-else>Submit</v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'
  import { Card, createToken } from 'vue-stripe-elements-plus'
  import states from '~/static/states.js'

  import FormLocation from '~/components/FormLocation'
  import CompanyForm from "~/components/register/provider/CompanyForm";
  import LocationForm from "~/components/register/provider/LocationForm";

  let stripe,
    elements,
    card;

  export default {
    name: 'provider',
    components: {
      FormLocation,
      VImageInput,
      GmapCluster,
      Card,
      CompanyForm,
      LocationForm
    },
    data() {
      return {
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
              },
              services: {
                label: 'Services',
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
    },
    mounted() {
      this.getPlans();
      // this.loadStates();
      this.states = states;
      // stripe = Stripe(process.env.VUE_APP_STRIPE_API_KEY);
      // elements = stripe.elements();
      // card = elements.create('card');
      // card.mount(this.$refs.card);
    },
    methods: {
      async loadStates() {
        this.$http.get('/static/states.js').then(response => {
          console.log(response);
        })
      },
      nextPageIfNotLast() {
        if(this.tab === 2) return;
        this.tab += 1;
      },
      prevPageIfNotFirst() {
        if(this.tab === 0) return;
        this.tab -= 1;
      },
      getAddressData(addressData, placeResultData, id) {
        this.form.locations[this.editingIndex].address.value = addressData.street_number + ' ' + addressData.route;
        this.form.locations[this.editingIndex].city.value = addressData.locality;
        this.form.locations[this.editingIndex].state.value = addressData.administrative_area_level_1;
        this.form.locations[this.editingIndex].zipcode.value = addressData.postal_code;
        this.form.locations[this.editingIndex].latitude.value = addressData.latitude;
        this.form.locations[this.editingIndex].longitude.value = addressData.longitude;
        this.form.locations[this.editingIndex].fullAddress.value = addressData.street_number + ' ' + addressData.route + ' ' + addressData.locality + ', ' + addressData.administrative_area_level_1 + ' ' + addressData.postal_code;
        this.getStateFullNameForQuery(placeResultData, this.editingIndex);
        this.saveMarker();
      },
      getStateFullNameForQuery(place) {
        let location = this.form.locations[this.editingIndex];
        place.address_components.forEach(function(component) {
          if(component.short_name === location.state.value) {
            location.state.fullName = component.long_name;
          }
        });

        this.location = location;
      },
      async getPlans() {
        let {data: {plans, message, errors}, status} = await this.$http.get('https://api.sowerk.com/v1/chargebees').catch(e => e);
        if (this.$error(status, message, errors)) return;
        this.plans = plans;
      },
      onRadiusSlide(value, index) {

      },
      convertMilesToMeters(miles) {
        return miles * 1609.34;
      },
      addLocation() {
        let newLocation = {
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
          },
          services: {
            label: 'Services',
            value: null
          }
        };
        this.form.locations.push(newLocation);
        this.editing = true;
        this.editingIndex = (this.form.locations.length - 1);
        console.log(this.editing);
        console.log(this.editingIndex);
      },
      editLocation(index) {
        this.editing = true;
        this.editingIndex = index;
      },
      getPriceForPlan(membership) {
        let selectedPlan = this.plans.find(plan => plan.id === membership);
        let dollars = selectedPlan.price / 100;
        dollars = dollars.toLocaleString("en-US", {style:"currency", currency: "USD"});
        return dollars;
      },
      getNameForPlan(membership) {
        console.log(membership);
        console.log(this.plans);
        // let selectedPlan = this.plans.find(plan => plan.id === membership);
        // return selectedPlan.name;
      },
      calculateTotalPrice() {
        let total = 0;

        this.form.locations.forEach(function(location) {
          total += location.price.value;
        });

        total = total / 100;
        total = total.toLocaleString("en-US", {style:"currency", currency: "USD"});

        this.total = total;
        return total;
      },
      saveCompanyAddress(addressObj) {
        this.form.company.address.value = addressObj.street_number + ' ' + addressObj.route;
        this.form.company.city.value = addressObj.locality;
        this.form.company.state.value = addressObj.administrative_area_level_1;
        this.form.company.zipcode.value = addressObj.postal_code;
        this.formatFullAddress();
      },
      finishEditingLocation() {
        this.editing = false;
        this.editingIndex = null;
      },

      // will get to this later.
      // need this to auto zoom and center on region select
      // initGetBoundsPrototype() {
      //   if (!google.maps.Polygon.prototype.getBounds) {
      //     google.maps.Polygon.prototype.getBounds = function() {
      //       var bounds = new google.maps.LatLngBounds();
      //       var paths = this.getPaths();
      //       var path;
      //       for (var i = 0; i < paths.getLength(); i++) {
      //         path = paths.getAt(i);
      //         for (var ii = 0; ii < path.getLength(); ii++) {
      //           bounds.extend(path.getAt(ii));
      //         }
      //       }
      //       return bounds;
      //     }
      //   }
      // },
      async submitRegistrationForm() {
        let token;
        await stripe.createToken(card).then(function(result) {
          // Access the token with result.token
          token = result.token;
        });

        this.token = token;

        console.log('token:');
        console.log(this.token);

        let form = this.formatFormDataForSubmission();
        // console.log(form);
        // let {data: {form, message, errors}, status} = await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form).catch(e => e);
        //
        // console.log(data);
        // this.loading = false;
        // if (this.$error(status, message, errors)) return;
        await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form )
          .then(response => {
            console.log(response);
          })
      },
      formatFullName() {
        this.form.company.fullName.value = this.form.company.firstName.value + ' ' + this.form.company.lastName.value;
      },
      formatFullAddress() {
        this.form.company.fullAddress.value = this.form.company.address.value + ' ' + this.form.company.city.value + ', ' + this.form.company.state.value + ' ' + this.form.company.zipcode.value;
      },
      getTosDate(e) {
        if(e) {
          let today = new Date();
          let dateString;
          let timeString;
          let dd = String(today.getUTCDate()).padStart(2, '0');
          let mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
          let yyyy = today.getUTCFullYear();
          let HH = String(today.getUTCHours()).padStart(2, '0');
          let MM = String(today.getUTCMinutes()).padStart(2, '0');
          let SS = String(today.getUTCSeconds()).padStart(2, '0');

          dateString = [yyyy, mm, dd].join('-');
          timeString = [HH, MM, SS].join(':');
          today = dateString + ' ' + timeString;
          this.form.company.tos_date.value = today;
        }
      },
      saveMarker() {
        let markers = [];
        let marker;
        this.form.locations.forEach(function(location) {
          marker = {
            lat: location.latitude.value,
            lng: location.longitude.value
          }
          markers.push(marker);
        });

        this.markers = markers;
        this.fitBounds();
      },
      fitBounds() {
        let markers = this.markers;
        console.log(markers);
        // let bounds = new google.maps.LatLngBounds();
        // markers.forEach(function(marker) {
        //   bounds.extend(marker);
        // });
        //
        // this.$refs['location-map'].$mapObject.fitBounds(bounds);
      },
      formatFormDataForSubmission() {
        let submissionData = {
          "name": this.form.company.name.value,
          "primary_email": this.form.company.email.value,
          "company_profiles": [
            // {
            //   "address": "",
            //   "state": "",
            //   "city": "",
            //   "zipcode": 0,
            //   "description": ""
            // }
          ],
          "locations": [
            // {
            //   "name": "string",
            //   "address": "string",
            //   "state": "string",
            //   "city": "string",
            //   "zipcode": 0,
            //   "description": "string",
            //   "membership_id": 0,
            //   "radius": "string",
            //   "company_id": "string",
            //   "services": {
            //     "_ids": [
            //       0
            //     ]
            //   }
            // }
          ],
          "users": [
            {
              "username": this.form.company.username.value,
              "email": this.form.company.email.value,
              "password": this.form.company.email.value,
              "first_name": this.form.company.firstName.value,
              "last_name": this.form.company.lastName.value,
              "tos_date": null,
            }
          ],
          token: this.token
        };
        let profile = {
          address: this.form.company.address.value,
          city: this.form.company.city.value,
          state: this.form.company.state.value,
          zipcode: this.form.company.zipcode.value,
          description: this.form.company.description.value
        }

        let locationsArray = [];
        this.form.locations.forEach(function(location) {

          let tempLocationObject = {
            "name": location.name.value,
            "address": location.address.value,
            "state": location.state.value,
            "city": location.city.value,
            "zipcode": location.zipcode.value,
            "latitude": location.latitude.value,
            "longitude": location.longitude.value,
            "description": location.description.value,
            "membership_id": location.membership_id.value,
            "radius": location.radius.value,
            "company_id": "string",
            "services": {
              "_ids": [
                0
              ]
            }
          }

          locationsArray.push(tempLocationObject);

        });

        submissionData.company_profiles.push(profile);
        submissionData.locations = locationsArray;

        return submissionData;
      },
      saveLocation(location) {
        console.log(location);
        this.form.locations[this.editingIndex].name.value = location.name;
        this.form.locations[this.editingIndex].services.value = location.providedServices;
        this.form.locations[this.editingIndex].address.value = location.address;
        this.form.locations[this.editingIndex].city.value = location.city;
        this.form.locations[this.editingIndex].state.value = location.state;
        this.form.locations[this.editingIndex].zipcode.value = location.zipcode;
        this.form.locations[this.editingIndex].firstName.value = location.firstName;
        this.form.locations[this.editingIndex].lastName.value = location.lastName;
        this.form.locations[this.editingIndex].phone.value = location.phone;
        this.form.locations[this.editingIndex].email.value = location.email;
        this.form.locations[this.editingIndex].description.value = location.description;
        this.form.locations[this.editingIndex].latitude.value = location.latitude;
        this.form.locations[this.editingIndex].longitude.value = location.longitude;
        this.saveMarker();
        this.finishEditingLocation();
      },

      createMarker(latitude, longitude) {
        console.log(latitude);
        console.log(longitude);

        this.form.locations[this.editingIndex].latitude.value = latitude;
        this.form.locations[this.editingIndex].longitude.value = longitude;

        let markers = [];
        let marker;
        this.form.locations.forEach(function(location) {
          marker = {
            lat: location.latitude.value,
            lng: location.longitude.value
          }
          markers.push(marker);
        });

        this.markers = markers;
        this.fitBounds();
      }
    }
  }
</script>

<style scoped lang="scss">
  .form__address::v-deep input {
    border: 2px solid red!important;
    width: 600px;
  }

  .v-input__slot:before {
    border-color: rgba(0,0,0,0.42);
    border-style: solid;
    border-width: thin 0 0 0;
    bottom: -2px;
    content: "";
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
  }

  .form-control {
    position: relative;
    z-index: 3;
  }

  .v-label {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    top: 0
  }

  .v-label--focus {
    top: -1.5em;
    color: #a61c00;
    font-size: 0.75em;
  }

  .v-label--filled {
    top: -1.5em;
    font-size: 0.75em;
  }

  .stripe-card {
    padding-bottom: 8px;
    border-bottom: 1px solid grey;
  }

  .card::v-deep .v-label {
    color: #8f8f8f;
  }

  /* TRANSITIONS */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .rounded-xl {
    border-radius: 20px;
  }
</style>
