<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
    >
      <v-card class="elevation-12 card--has-floating" light>
        <v-card-title class="justify-center headline font-weight-light">Build Your Business Profile</v-card-title>
        <v-card-subtitle class="text-center title mt-1 mb-12" style="font-weight: normal;">This information will let us know more about you.</v-card-subtitle>
        <v-tabs
          v-model="tab"
          background-color="grey lighten-2"
          color="black"
          grow
          active-class="primary white--text elevation-10"
          hide-slider
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
        >
          <v-tab-item
            eager
          >
              <v-container style="max-width: 80%;" mx-auto>
                <v-card-text class="pa-0">
                  <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Let's start with the basic information about your company.</p>
                  <v-form class="mx-auto">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-row fill-height class="pl-2">
                            <client-only>
                              <v-image-input
                                v-model="form.company.image.value"
                                image-quality="0.85"
                                clearable
                                image-format="png"
                                uploadIcon="person"
                                fullWidth
                                overlayPadding="10px"
                                scalingSliderColor="red"
                                :readonly="false"
                              />
                            </client-only>
                          </v-row>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="company"
                            label="Company Name (required)"
                            type="text"
                            v-model="form.company.name.value"
                          ></v-text-field>

                          <v-text-field
                            label="Email Address (required)"
                            type="email"
                            class="card__input black--text"
                            v-model="form.company.email.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="password"
                            label="Password (required)"
                            type="password"
                            v-model="form.company.password.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="confirm"
                            label="Confirm Password (required)"
                            type="password"
                            v-model="form.company.confirm.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" class="v-input">
                          <div class="v-input__control">
                            <div class="v-input__slot">
                              <div class="v-text-field__slot" style="width: 100%;">
                                <label for="company_address" class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Company Address (required)</label>
                                <vue-google-autocomplete
                                  id="company-address"
                                  name="company_address"
                                  classname="form-control"
                                  v-on:placechanged="getAddressData"
                                  placeholder=""
                                  style="width: 100%;"
                                  v-on:focus.native="animateAddressFieldOnFocus"
                                  v-on:blur.native="animateAddressFieldOnFocus"
                                  v-on:input.native="animateAddressFieldOnFilled"
                                >
                                </vue-google-autocomplete>
                              </div>
                            </div>
                          </div>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="first_name"
                            label="First Name (required)"
                            type="text"
                            v-model="form.company.firstName.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text-field
                            id="last_name"
                            label="Last Name (required)"
                            type="text"
                            v-model="form.company.lastName.value"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-textarea
                            id="description"
                            label="Business Description (required)"
                            v-model="form.company.description.value"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-container>
          </v-tab-item>
          <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Now tell us about each location you have</p>
                <v-form class="mx-auto">
                  <v-container>
                    <v-row v-for="(location, i) in form.locations" :key="i" class="mb-12" :class="{'pt-12': i != 0 }">

                      <v-col cols="12">
                        <p class="headline">Location {{ i + 1 }}</p>
                        <v-divider></v-divider>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-row fill-height class="pl-3">
                          <client-only>
                            <v-image-input
                              v-model="location.image.value"
                              image-quality="0.85"
                              clearable
                              image-format="png"
                              uploadIcon="person"
                              fullWidth
                              overlayPadding="10px"
                              scalingSliderColor="red"
                              :readonly="false"
                            />
                          </client-only>
                        </v-row>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="location"
                          label="Location Name (required)"
                          type="text"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" class="v-input">
                        <div class="v-input__control">
                          <div class="v-input__slot">
                            <div class="v-text-field__slot" style="width: 100%;">
                              <label class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Location Address (required)</label>
                              <vue-google-autocomplete
                                :id="'location-address--' + i"
                                classname="form-control"
                                v-on:placechanged="getAddressData"
                                placeholder=""
                                style="width: 100%;"
                                v-on:focus.native="animateAddressFieldOnFocus"
                                v-on:blur.native="animateAddressFieldOnFocus"
                                v-on:input.native="animateAddressFieldOnFilled"
                              >
                              </vue-google-autocomplete>
                            </div>
                          </div>
                        </div>
                      </v-col>

                      <v-col cols="12" md="6" class="my-8" align-self="center">
                        <v-slider
                          min="0"
                          max="200"
                          thumb-label="always"
                          :thumb-size="36"
                          track-color="grey"
                          track-fill-color="primary"
                          step="10"
                          ticks
                          :tick-labels="miles"
                          :readonly="false"
                        >

                        </v-slider>
                      </v-col>

                      <v-col cols="12" md="6">
                        <GmapMap
                          :center="{lat:location.address.coords ? location.address.coords.lat : 37, lng:location.address.coords ? location.address.coords.lng : -95}"
                          :zoom="location.address.zoom"
                          style="width: 500px; height: 300px"
                        >
                          <GmapMarker
                            :position="location.address.coords"
                            :clickable="true"
                          />
                        </GmapMap>
                      </v-col>

                      <v-col cols="12" class="mt-8">
                        <p class="headline mb-0">Primary Point of Contact Info</p>
                        <p class="subtitle-1 my-0">(Only Public to Approved Vendor)</p>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="first_name"
                          label="First Name (required)"
                          type="text"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="last_name"
                          label="Last Name (required)"
                          type="text"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="phone"
                          label="Phone (required)"
                          type="number"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="email"
                          label="Email Address (required)"
                          type="email"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-textarea
                          id="description"
                          label="Location Description (required)"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <v-btn @click="addLocation" outlined color="primary" class="mx-auto">+ Add Location</v-btn>
              </v-card-text>
            </v-container>
          </v-tab-item>
          <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Please review your information before submitting</p>
                <v-col cols="12" class="align-center">
                  <v-img :src="form.company.image.value" max-height="300px" max-width="300px" aspect-ratio="1" v-if="form.company.image.value && form.company.image.value != ''"></v-img>
                  <v-icon color="grey" style="font-size: 100px; text-align: center;" class="mx-auto" v-else>person</v-icon>
                  <p class="headline font-weight-bold">{{ form.company.name.value }}</p>
                </v-col>

                <v-col cols="12" v-for="item in form.company" :key="item.name" v-if="!item.hide">
                  <template v-if="item.name !== 'Company Image'">
                    <v-subheader inset class="mx-0 px-0">
                      <span class="primary--text font-weight-bold">{{ item.name }}</span>
                    </v-subheader>
                    <p class="mt-0 mb-4">{{ item.value }}</p>
                  </template>
                  <template v-else>
                    <v-subheader inset class="mx-0 px-0">
                      <span class="primary--text font-weight-bold">{{ item.name }}</span>
                    </v-subheader>
                    <v-img :src="item.value" max-height="300px" max-width="300px" aspect-ratio="1"></v-img>
                  </template>
                </v-col>

              </v-card-text>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
          <v-btn color="primary" text @click="prevPageIfNotFirst" v-show="tab !== 0"> < Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="tab !== 2">Next > </v-btn>
          <v-btn color="primary" class="px-8" @click="submitRegistrationForm" v-else>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'

  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
    },
    installComponents: true
  })

  export default {
    name: 'buyer',
    components: {
      VImageInput,
    },
    data() {
      return {
        loading: false,
        tab: 0,
        items: [
          'Company',
          'Locations',
          'Review'
        ],
        miles: [
          '','','','','','','','','','','100','','','','','150','','','','','200'
        ],
        form: {
          company: {
            name: {
              name: 'Company Name',
              value: null,
              hide: true,
            },
            email: {
              name: 'Email',
              value: null,
            },
            password: {
              name: 'Password',
              value: null,
              hide: true,
            },
            confirm: {
              name: 'Confirm',
              value: null,
              hide: true,
            },
            address: {
              name: 'Address',
              value: null,
            },
            firstName: {
              name: 'First Name',
              value: null,
            },
            lastName: {
              name: 'Last Name',
              value: null,
            },
            description: {
              name: 'Company Description',
              value: null,
            },
            image: {
              name: 'Company Image',
              value: '',
              hide: true
            }
          },
          locations: [
            {
              name: {
                name: 'Location Name',
                value: null,
              },
              address: {
                name: 'Address',
                value: null,
                coords: null,
                zoom: 4
              },
              range: {
                name: 'Range',
                value: null
              },
              firstName: {
                name: 'First Name',
                value: null
              },
              lastName: {
                name: 'Last Name',
                value: null
              },
              phone: {
                name: 'Phone Number',
                value: null
              },
              email: {
                name: 'Email Address',
                value: null,
              },
              description: {
                name: 'Location Description',
                value: null,
              },
              image: {
                name: 'Location Image',
                value: ''
              }
            }
          ]
        },
        imageUrlLocation: '',
        autocomplete: null
      }
    },
    methods: {
      nextPageIfNotLast() {
        if(this.tab === 2) return;
        this.tab += 1;
      },
      prevPageIfNotFirst() {
        if(this.tab === 0) return;
        this.tab -= 1;
      },
      getAddressData(addressData, placeResultData, id) {
        if(id == 'company-address') {
          this.saveCompanyAddress(addressData, placeResultData);
        } else if(id.includes('location-address')) {
          let locationId = id.split('--')[1];
          this.saveLocationAddress(addressData, placeResultData, locationId);
        }
      },
      addLocation() {
        let newLocation = {
          name: {
            name: 'Location Name',
            value: null,
          },
          address: {
            name: 'Address',
            value: null,
          },
          range: {
            name: 'Range',
            value: null
          },
          firstName: {
            name: 'First Name',
            value: null
          },
          lastName: {
            name: 'Last Name',
            value: null
          },
          phone: {
            name: 'Phone Number',
            value: null
          },
          email: {
            name: 'Email Address',
            value: null,
          },
          description: {
            name: 'Location Description',
            value: null,
          },
          image: {
            name: 'Location Image',
            value: ''
          }
        };
        this.form.locations.push(newLocation);
      },
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling;
        addressLabel.classList.toggle('v-label--focus');
      },
      animateAddressFieldOnFilled(e) {
        if(e.target.value != "") {
          if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
            return;
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled');
            console.log()
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled');
        }
      },
      saveCompanyAddress(addressObj, placeObj) {
        console.log(placeObj);
        this.form.company.address.value = placeObj.formatted_address;
        this.form.company.address.coords = {
          lng: addressObj.longitude,
          lat: addressObj.latitude,
        }
      },
      saveLocationAddress(addressObj, placeObj, locationId) {
        this.form.locations[locationId].address.value = placeObj.formatted_address;
        this.form.locations[locationId].address.coords = {
          lat: addressObj.latitude,
          lng: addressObj.longitude,
        }
        this.form.locations[locationId].address.zoom = 7;
        console.log(this.form.locations[locationId].address.coords);
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
    padding: 2px 0;
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
</style>
