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
                <span class="title font-weight-regular text-center my-12 grey--text text--darken-2">Let's start with the basic information about your company.</span>
                <v-form class="mx-auto">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
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

                      <v-col cols="12" sm="6">
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

                      <v-col cols="12">
                        <v-text-field
                          label="Username (required)"
                          type="text"
                          v-model="form.company.username.value"
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
                              <client-only>
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
                              </client-only>
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
                <span class="title font-weight-regular text-center my-12 grey--text text--darken-2">Now tell us about each location you have</span>
                <v-col cols="12" style="position: sticky; top: 0; z-index: 2;">
                  <v-row style="position: relative;">
                    <v-col cols="12" style="position: sticky; width: 100%; top: 0;">
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
                                :clickable="true"
                              />
                            </template>
                          </GmapCluster>
                        </GmapMap>
                      </client-only>
                    </v-col>
                  </v-row>
                </v-col>
                <v-form class="mx-auto">
                  <v-container>
                    <FormLocation
                      v-for="(location, i) in form.locations"
                      :key="i"
                      :location="location"
                      :index="i"
                      @change="onFormLocationChange"
                      :isProvider="true"
                    />
                  </v-container>
                </v-form>
                <v-btn @click="addLocation" outlined color="primary" class="mx-auto">+ Add Location</v-btn>
              </v-card-text>
            </v-container>
          </v-tab-item>
          <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <span class="title font-weight-regular text-center my-12 grey--text text--darken-2">Please review your information before submitting</span>
                <v-col cols="12" class="align-center">
                  <v-img :src="form.company.image.value" max-height="300px" max-width="300px" aspect-ratio="1" v-if="form.company.image.value && form.company.image.value != ''"></v-img>
                  <v-icon color="grey" style="font-size: 100px; text-align: center;" class="mx-auto" v-else>person</v-icon>
                  <span class="headline font-weight-bold">{{ form.company.name.value }}</span>
                </v-col>

                <v-col cols="12" v-for="item in form.company" :key="item.name" v-if="!item.hide">
                  <template v-if="item.label != 'Company Image'">
                    <v-subheader inset class="mx-0 px-0">
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

                <v-col cols="12" class="mt-6">
                  <v-col cols="12" v-for="(location, i) in form.locations" :key="i" class="px-0">
                    <span class="headline grey--text text--darken-4">Location {{ i + 1 }}</span>
                    <v-divider class="mt-2 light-gray"></v-divider>
                    <template v-for="(item, j) in location">
                      <v-col class="px-0" cols="12" :key="j" v-show="!item.hide">
                        <template v-if="item.label != 'Location Image'">
                          <v-subheader inset class="mx-0 px-0">
                            <span class="primary--text font-weight-bold">{{ item.label }}</span>
                          </v-subheader>
                          <span class="mt-0 mb-4">{{ item.value }}</span>
                        </template>
                        <template v-else>
                          <v-subheader inset class="mx-0 px-0">
                            <span class="primary--text font-weight-bold">{{ item.label }}</span>
                          </v-subheader>
                          <v-img :src="item.value" height="300px" width="300px" aspect-ratio="1"></v-img>
                        </template>
                      </v-col>
                    </template>
                    <v-col cols="12" class="px-0">
                      <v-subheader inset class="mx-0 px-0">
                        <span class="primary--text font-weight-bold">Application Range</span>
                      </v-subheader>
                      <client-only>
                        <GmapMap
                          :center="{lat:location.latitude.value ? location.latitude.value : 37, lng:location.longitude.value ? location.longitude.value : -95}"
                          :zoom="3.5"
                          style="height: 400px"
                        >
                          <GmapMarker
                            v-if="location.latitude.value"
                            :position="{lat: location.latitude.value, lng: location.longitude.value}"
                            :clickable="true"
                          />
                          <GmapCircle
                            v-if="location.radius.value > 0 && location.membership_id.value === 1"
                            :center="{lat:location.latitude.value, lng:location.longitude.value}"
                            :radius="convertMilesToMeters(location.radius.value)"
                            :fillOpacity="0.5"
                            :visible="true"
                            :options="{fillColor: '#a51d02', fillOpacity: '0.5', strokeColor: '#a51d02'}"
                          />
                          <template v-if="location.membership_id.value === 2">
                            <GmapPolygon
                              v-for="(set, i) in location.polygon.value"
                              :key="i"
                              :paths="set"
                              :options="{fillColor: '#a51d02', fillOpacity: '0.5', strokeColor: '#a51d02'}"
                            />
                          </template>
                        </GmapMap>
                      </client-only>
                    </v-col>
                  </v-col>
                </v-col>

                <v-col cols="12">
                  <span class="headline grey--text text--darken-4">Billing</span>
                  <v-divider class="mt-1 mb-8 light-gray"></v-divider>
                  <card
                    :stripe="api_key"
                  />
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
          <v-btn color="primary" text @click="prevPageIfNotFirst" v-show="tab !== 0"> < Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="tab < 2">Next > </v-btn>
          <v-btn color="primary" class="px-8" @click="submitRegistrationForm" v-else>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'
  import { Card, createToken } from 'vue-stripe-elements-plus'

  import Vue from 'vue';
  import FormLocation from '~/components/FormLocation'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
    },
    installComponents: true
  })

  export default {
    name: 'provider',
    components: {
      FormLocation,
      VImageInput,
      GmapCluster,
      Card
    },
    data() {
      return {
        api_key: process.env.VUE_APP_STRIPE_API_KEY,
        loading: false,
        tab: 0,
        items: [
          'Company',
          'Locations',
          'Review'
        ],

        form: {
          company: {
            name: {
              label: 'Name',
              value: null,
            },
            username: {
              label: 'Username',
              value: null
            },
            email: {
              label: 'Email',
              value: null,
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
            },
            city: {
              label: 'City',
              value: null
            },
            state: {
              label: 'State',
              value: null
            },
            zipcode: {
              label: 'Zip',
              value: null
            },
            firstName: {
              label: 'First Name',
              value: null,
            },
            lastName: {
              label: 'Last Name',
              value: null,
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
            }
          },
          locations: [
            {
              name: {
                label: 'Name',
                value: null,
              },
              latitude: {
                label: 'Latitude',
                value: null,
                hide: true
              },
              longitude: {
                label: 'Longitude',
                value: null,
                hide: true
              },
              address: {
                value: null,
                hide: true
              },
              city: {
                value: null,
                hide: true
              },
              state: {
                value: null,
                fullName: null,
                hide: true
              },
              zipcode: {
                value: null,
                hide: true
              },
              membership_id: {
                label: 'Range',
                value: null,
                hide: true
              },
              radius: {
                label: 'Radius',
                value: null,
                hide: true
              },
              polygon: {
                label: 'Polygon',
                value: null,
                hide: true
              },
              firstName: {
                label: 'First Name',
                value: null,
              },
              lastName: {
                label: 'Last Name',
                value: null
              },
              phone: {
                label: 'Phone Number',
                value: null
              },
              email: {
                label: 'Email Address',
                value: null,
              },
              description: {
                label: 'Location Description',
                value: null,
              },
              image: {
                label: 'Location Image',
                value: ''
              }
            }
          ]
        },
        imageUrlLocation: '',
        autocomplete: null,
        markers: [],
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
          this.saveCompanyAddress(addressData);
        } else if(id.includes('location-address')) {
          let locationIndex = id.split('--')[1];
          this.saveLocationAddress(addressData, placeResultData, id, locationIndex);
        }
      },
      onRadiusSlide(value, index) {

      },
      addLocation() {
        let newLocation = {
          name: {
            label: 'Name',
            value: null,
          },
          latitude: {
            label: 'Latitude',
            value: null,
            hide: true
          },
          longitude: {
            label: 'Longitude',
            value: null,
            hide: true
          },
          address: {
            value: null,
            hide: true
          },
          city: {
            value: null,
            hide: true
          },
          state: {
            value: null,
            fullName: null,
            hide: true
          },
          zipcode: {
            value: null,
            hide: true
          },
          membership_id: {
            label: 'Range',
            value: null,
            hide: true
          },
          radius: {
            label: 'Radius',
            value: null,
            hide: true
          },
          polygon: {
            label: 'Polygon',
            value: null,
            hide: true
          },
          firstName: {
            label: 'First Name',
            value: null,
          },
          lastName: {
            label: 'Last Name',
            value: null
          },
          phone: {
            label: 'Phone Number',
            value: null
          },
          email: {
            label: 'Email Address',
            value: null,
          },
          description: {
            label: 'Location Description',
            value: null,
          },
          image: {
            label: 'Location Image',
            value: ''
          }
        };
        this.form.locations.push(newLocation);
      },
      saveCompanyAddress(addressObj) {
        console.log(addressObj.postal_code);
        this.form.company.address.value = addressObj.street_number + ' ' + addressObj.route;
        this.form.company.city.value = addressObj.locality;
        this.form.company.state.value = addressObj.administrative_area_level_1;
        this.form.company.zipcode.value = addressObj.postal_code;
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
      // async submitRegistrationForm() {
      //   let form = this.formatFormDataForSubmission();
      //   console.log(form);
      //   // let {data: {event_id, message, errors}, status} = await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form).catch(e => e);
      //
      //   // console.log(data);
      //   // this.loading = false;
      //   // if (this.$error(status, message, errors)) return;
      //   await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form )
      //     .then(response => {
      //       console.log(response);
      //     })
      // },
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
      onFormLocationChange(location, i) {
        this.form.locations[i] = location;
        this.saveMarker();
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
        let bounds = new google.maps.LatLngBounds();
        markers.forEach(function(marker) {
          bounds.extend(marker);
        });

        this.$refs['location-map'].$mapObject.fitBounds(bounds);
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
          ]
        };
        let profile = {
          address: this.form.company.address.value,
          city: this.form.company.city.value,
          state: this.form.company.state.value,
          zipcode: this.form.company.zipcode.value,
          description: this.form.company.description.value
        }

        console.log(profile);

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

        console.log(submissionData);

        return submissionData;
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

  /* TRANSITIONS */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
