<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container style="max-width: 95%;" mt-12 mx-auto>
      <v-skeleton-loader
        v-if="!loading"
        type="card-avatar, article, article, actions"
        min-height="50vh"
        min-width="50vw"
      ></v-skeleton-loader>
      <v-progress-circular
        indeterminate
        color="primary"
        :size="100"
        v-if="!loadSubmit"
        style="z-index: 10; position: fixed; top: 25vh; left: 50vw;"
      ></v-progress-circular>
      <transition name="slide-fade">
        <v-card v-if="loading">
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Add New Channel</v-card-title>
        <v-card-text class="px-6 pt-12 pb-0 mx-auto">
          <v-row class="px-3 pt-3">
            <v-col cols="12" class="pa-0 elevation-2" style="width: 100%; top: 0; border-radius: 10px; overflow: hidden; height: 50vh; max-height: 500px; z-index: 4;">
              <client-only>
                <GmapMap
                  id="locations-map"
                  style="width: 100%; height: 100%; "
                  ref="location-map"
                  :center="this.mapOptions.center"
                  :zoom="this.mapOptions.zoom"
                  :options="mapOptions"
                >
                  <gmap-marker
                    :position="this.item"
                  />
                </GmapMap>
              </client-only>
            </v-col>
            <v-col cols="12" class="mt-4">
              <v-form>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      placeholder=" "
                      hint="(Consider that this name will be viewed by Service Providers and listed
on your account dashboard. Example: SOWerk Cafe #013)"
                      persistent-hint
                      v-model="form.name"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Channel Name</p>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <div class="v-input theme--light v-text-field v-text-field--is-booted">
                      <div class="v-input__control">
                        <div class="v-input__slot" style="width: 100%;">
                          <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute;"><p class="grey--text text--darken-4 font-weight-bold">Channel Address</p></label>
<!--                          <client-only>-->
                            <vue-google-autocomplete
                              id="company-address"
                              name="company_address"
                              classname="form-control"
                              v-on:placechanged="getAddressData"
                              placeholder=" "
                              style="width: 100%;"
                              validate-on-blur
                              v-model="fullAddress"
                            >
                            </vue-google-autocomplete>
<!--                          </client-only>-->
                        </div>
                        <div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div>
                      </div>
                    </div>
<!--                    <v-row>-->
<!--                      <v-btn :disabled="this.form.latitude === null" @click="useWrittenChannel">Drop Pin At Above Written Channel</v-btn><p class="pb-6 px-8" style="padding-top: 8px">- OR -</p><v-btn @click="getChannel">Use Current Channel</v-btn>-->
<!--                    </v-row>-->
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      placeholder=" "
                      hint="(Does this channel have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                      persistent-hint
                      v-model="form.description"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Channel Description</p>
                      </template>
                    </v-textarea>
                  </v-col>
                  <v-col cols="12" class="mt-4" v-if="company.company_type === 'false'">
                    <v-slider
                      label="Choose your Channel service radius"
                      thumb-label="always"
                      max="1005"
                      min="5"
                      step="10"
                      ticks="always"
                      v-model="form.radius"
                    ></v-slider>
                    <v-subheader class="mt-n8">Choose the number of miles that your channel will operate. IE, I service a 50 mile radius of my channel.</v-subheader>
                  </v-col>
                  <v-col cols="12" class="mt-8">
                    <v-autocomplete
                      :items="vendorTypeOptions"
                      item-text="vendorType"
                      item-value="vendorType"
                      v-model="vendorType"
                      label="Choose your type here"
                      :placeholder="vendorType"
                      multiple
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" class="mt-8">
                    <v-autocomplete
                      v-model="services"
                      :items="naicsList"
                      item-text="name"
                      item-value="name"
                      label="Choose your categories here"
                      solo
                      clearable
                      hint="This is generated from the NAICS directory."
                    >
                      <!--                    <template v-slot:selection="data">-->
                      <!--                      <v-chip-->
                      <!--                        style="width: auto;"-->
                      <!--                        v-for="(item, index) in services"-->
                      <!--                      >-->
                      <!--                        <v-card-text style="" v-if="item.name">{{ item.name }}</v-card-text>-->
                      <!--                        <v-btn @click="removeService(item)" text class="ml-n6">X</v-btn>-->
                      <!--                      </v-chip>-->
                      <!--                    </template>-->
                      <!--                    <template v-slot:item="data">-->
                      <!--                      <v-chip-->
                      <!--                        style="width: auto;"-->
                      <!--                        v-for="(item, index) in services"-->
                      <!--                      >-->
                      <!--                        <v-card-text style="" v-if="item.name">{{ item.name }}</v-card-text>-->
                      <!--                        <v-btn @click="removeService(item)" text class="ml-n6">X</v-btn>-->
                      <!--                      </v-chip>-->
                      <!--                    </template>-->
                      <template slot="selection" slot-scope="data">
                        <p>{{ data.item.name }}</p>
                      </template>
                      <template slot="item" slot-scope="data">
                        <p>{{ data.item.name }}</p>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" class="mt-8">
                    <v-combobox
                      v-model="locationTags"
                      :items="sowerkTags"
                      item-text="name"
                      item-value="name"
                      chips
                      multiple
                      label="Choose your tags here"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          class="v-chip--select-multi"
                          style="width: auto;"
                        >
                          <v-card-text v-if="data.item.name">{{ data.item.name }}</v-card-text>
                          <v-card-text v-else>{{data.item}}</v-card-text>
                          <v-btn @click="removeTag(data.item)" text class="ml-n6">X</v-btn>
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        <p>{{data.item.name}}</p>
                      </template>
                    </v-combobox>
                  </v-col>
                  <v-col cols="12" class="mt-12 mb-4">
                    <h2 class="mx-auto text-center">Channel Manager</h2>
                    <p class="mt-4 mx-auto pb-0" style="max-width: 720px">This should be the main contact person who will be responsible for managing approved vendors at this channel.</p>
                  </v-col>
<!--                  <v-col cols="12" md="6">-->
<!--                    <v-text-field-->
<!--                      placeholder=" "-->
<!--                      v-model="form.contact_first_name"-->
<!--                    >-->
<!--                      <template v-slot:label>-->
<!--                        <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">First Name</p>-->
<!--                      </template>-->
<!--                    </v-text-field>-->
<!--                  </v-col>-->
<!--                  <v-col cols="12" md="6">-->
<!--                    <v-text-field-->
<!--                      placeholder=" "-->
<!--                      v-model="form.contact_last_name"-->
<!--                    >-->
<!--                      <template v-slot:label>-->
<!--                        <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Last Name</p>-->
<!--                      </template>-->
<!--                    </v-text-field>-->
<!--                  </v-col>-->
<!--                  <v-col cols="12" md="6">-->
<!--                    <v-text-field-->
<!--                      placeholder=" "-->
<!--                      v-model="form.phone"-->
<!--                    >-->
<!--                      <template v-slot:label>-->
<!--                        <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Phone</p>-->
<!--                      </template>-->
<!--                    </v-text-field>-->
<!--                  </v-col>-->
<!--                  <v-col cols="12" md="6">-->
<!--                    <v-text-field-->
<!--                      placeholder=" "-->
<!--                      v-model="form.email"-->
<!--                    >-->
<!--                      <template v-slot:label>-->
<!--                        <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Email</p>-->
<!--                      </template>-->
<!--                    </v-text-field>-->
<!--                  </v-col>-->
                  <v-col cols="12">
                    <v-select
                      label="Select From List of Users Your Manager For This Channel"
                      :items="users"
                      class="text-caption"
                    >
                      <template slot="selection" slot-scope="data">
                        <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
                      </template>
                      <template slot="item" slot-scope="data">
                        <p @click="getUserValue(data.item)">Name: {{ data.item.first_name }} {{ data.item.last_name }} Email: {{ data.item.email}} Phone: {{data.item.phone}}</p>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-checkbox
                      :label="'This location will be managed by: Admin ' + currentUser.first_name + ' ' + currentUser.last_name"
                      v-model="managerIsUser"
                      @click="setManagerToUser"
                    >
                    </v-checkbox>
                  </v-col>
<!--                  <v-col cols="12" md="6">-->
<!--                    <v-select-->
<!--                      :items="adminOptions"-->
<!--                      v-model="form.adminLevel"-->
<!--                      placeholder=" "-->
<!--                    >-->
<!--                      <template v-slot:label>-->
<!--                        <p class="grey&#45;&#45;text text&#45;&#45;darken-4 font-weight-bold">Admin Level*</p>-->
<!--                      </template>-->
<!--                    </v-select>-->
<!--                  </v-col>-->
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pb-6 px-8">
          <v-spacer></v-spacer>
          <v-btn right @click="submit" color="primary" large class="px-4">Register Channel</v-btn>
        </v-card-actions>
      </v-card>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'
  import * as GmapVue from 'gmap-vue'

  export default {
    name: 'add',
    layout: 'app',
    components: {
      GmapCluster,
      GmapVue
    },
    data() {
      return {
        managerIsUser: false,
        form: {
          name: null,
          address: null,
          city: null,
          state: null,
          zipcode: null,
          contact_first_name: null,
          contact_last_name: null,
          phone: null,
          email: null,
          latitude: null,
          longitude: null,
          radius: 0,
          year_founded: 0,
          adminLevel: false,
          imageUrl: ''
        },
        item: {
          lat: null,
          lng: null
        },
        mapOptions: {
          center: { lat: 38, lng: -95.5 },
          zoom: 4,
          fullscreenControl: false,
          mapTypeControl: false,
          rotateControl: false,
          scaleControl: false,
          streetViewControl: false,
          zoomControl: false
        },
        filters: [
          {
            name: 'Proximity',
            items: [
              'State',
              'National',
              'Under 10 Miles',
              'Under 25 Miles',
              'Under 50 Miles',
              'Under 100 Miles',
              'Under 150 Miles',
              'Under 200 Miles',
              '200+ Miles',
            ]
          },
          {
            name: 'State',
            items: [
              "Alaska",
              "Alabama",
              "Arkansas",
              "American Samoa",
              "Arizona",
              "California",
              "Colorado",
              "Connecticut",
              "District of Columbia",
              "Delaware",
              "Florida",
              "Georgia",
              "Guam",
              "Hawaii",
              "Iowa",
              "Idaho",
              "Illinois",
              "Indiana",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Massachusetts",
              "Maryland",
              "Maine",
              "Michigan",
              "Minnesota",
              "Missouri",
              "Mississippi",
              "Montana",
              "North Carolina",
              " North Dakota",
              "Nebraska",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "Nevada",
              "New York",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Virginia",
              "Virgin Islands",
              "Vermont",
              "Washington",
              "Wisconsin",
              "West Virginia",
              "Wyoming"
            ]
          },
          {
            name: 'Service Needs',
            items: [
              'HVAC',
              'Electrical',
              'Plumbing',
              'Cleaning',
              'Landscaping'
            ]
          },
          {
            name: 'Years in Business',
            items: [
              'Less Than 1 Year',
              '1 - 3 Years',
              '3 - 5 Years',
              '5 - 10 Years',
              '10+ Years',
            ]
          },
          {
            name: 'Approved Applications',
            items: [
              'Less than 5',
              '6 - 15',
              '16 - 24',
              '25+',
            ]
          }
        ],
        fullAddress: null,
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Facility', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        adminOptions: [
          {
            text: 'Super Admin',
            value: 1
          },
          {
            text: 'Staff Account',
            value: 0
          }
        ],
        loading: false,
        users: [],
        company: {},
        loadSubmit: true,
        locationTags: [],
        sowerkTags: [],
        search: null,
        services: '',
        naicsList: [],
        vendorType: [],
        originalVendorType: [],
        vendorTypeOptions: [
          'Supplier',
          'Servicer'
        ]
      }
    },
    async mounted() {
      vueGoogleMapsInit();
      console.log(this.currentUser);
      await this.getCompany(this.currentUser.companies_id);
      await this.getUsers(this.currentUser.companies_id);
      await this.getSowerkTags();
        //this.getServices(this.location.id);
      await this.getNaicsList();
      this.loading = true;
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getNaicsList() {
        await this.$http.get('https://www.sowerkbackend.com/api/naicslist')
          .then(response => {
            console.log('naicslist', response)
            this.naicsList = response.data
          })
          .catch(err => {
            console.log(err, 'err on getting naicslist')
          })
      },
      async getServices(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/byLocationId/' + id)
          .then(response => {
            console.log('services', response)
            this.services = response.data;
            this.originalServices = response.data;
          })
          .catch(err => {
            console.log(err, 'err on getting services for locations')
          })
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response, 'company response')
            this.company = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting company')
          })
      },
      async getUsers(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/auth/users/company/' + id)
          .then(response => {
            console.log(response.data, 'USERS!')
            this.users = response.data.user
          })
          .catch(err => {
            console.log(err, 'err in getting users from company')
          })
      },
      async getUserValue(user) {
        console.log(user, 'USER VALUE!')
        this.form.contact_first_name = user.first_name;
        this.form.contact_last_name = user.last_name;
        this.form.phone = user.phone;
        this.form.email = user.email;
        if(user.is_superuser) {
          this.form.adminLevel = this.adminOptions[0].value
        } else {
          this.form.adminLevel = this.adminOptions[1].value
        }
        console.log(this.form, 'FORM VALUE!');
      },
      setManagerToUser() {
        console.log(this.managerIsUser)
        if(this.managerIsUser) {
          this.form.contact_first_name = this.currentUser.first_name;
          this.form.contact_last_name  = this.currentUser.last_name;
          this.form.phone              = this.currentUser.phone;
          this.form.email              = this.currentUser.email;
          if(this.currentUser.is_superuser === true) {
            this.form.adminLevel = this.adminOptions[0].value
          } else {
            this.form.adminLevel = this.adminOptions[1].value
          }
        }
      },
      getAddressData(addressData) {
        console.log(addressData);
        this.form.address = addressData.street_number + ' ' + addressData.route;
        this.form.city = addressData.locality;
        this.form.state = addressData.administrative_area_level_1;
        this.form.zipcode = Number(addressData.postal_code);
        this.form.latitude = addressData.latitude;
        this.form.longitude = addressData.longitude;
        this.formatFullAddress();
      },
      // This method formats the address components into a readable string for display purposes
      formatFullAddress() {
        this.fullAddress = this.form.address + ', ' + this.form.city + ', ' + this.form.state + ' ' + this.form.zipcode;
      },
      async submit() {
        this.loadSubmit = false;
        console.log(this.currentUser);
        console.log(this.form, 'this.form');
        await this.$http.post('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.currentUser.companies_id, this.form)
          .then(response => {
            console.log(response, 'success in submitting new location')
            console.log(this.services, 'this.services')
            // this.services = {
            //   name: this.services
            // }
            if(this.services !== '') {
              this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + response.data.location.id, {
                name: this.services
              })
                .then(responseVal => {
                  console.log(responseVal, 'success in posting service')
                })
                .catch(err => {
                  console.log(err, 'err in posting service')
                })
            }
            if(this.locationTags.length > 0) {
              for(let i=0; i<this.locationTags.length; i++) {
                if(typeof this.locationTags[i] === 'object') {
                  this.$http.post('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + response.data.location.id, {
                    name: this.locationTags[i].name
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                } else {
                  this.$http.post('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + response.data.location.id, {
                    name: this.locationTags[i]
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                }
              }
            }
            if(this.vendorType.length > 0) {
              console.log(this.vendorType, 'this.vendorType');
              for(let i=0; i<this.vendorType.length; i++) {
                if(typeof this.vendorType[i] === 'object') {
                  this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + response.data.location.id, {
                    vendorType: this.vendorType[i].name
                  })
                    .then(responseVal => {
                      console.log(responseVal, 'success in posting location tags')
                    })
                    .catch(err => {
                      console.log(err, 'err in posting locationtags')
                    })
                } else {
                    this.$http.post('https://www.sowerkbackend.com/api/vendortypes/byLocationId/' + response.data.location.id, {
                      vendorType: this.vendorType[i]
                    })
                      .then(responseVal => {
                        console.log(responseVal, 'success in posting vendor tag')
                      })
                      .catch(err => {
                        console.log(err, 'err in posting vendor tag')
                      })
                  }
              }
            }
            this.loadSubmit = true;
            this.$router.push('../../../dashboard/channels')
          })
          .catch(e => e);
      },
      getChannel() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this.setChannel, this.locationError)
        else alert('Geolocation is not supported by this browser.')
      },
      setChannel(pos) {
        this.mapOptions = { ...this.mapOptions, center: { lat: pos.coords.latitude, lng: pos.coords.longitude } }
        this.center = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        this.mapOptions.zoom = 11
        this.item.lat = pos.coords.latitude
        this.item.lng = pos.coords.longitude
      },
      locationError(error) {
        if (error.PERMISSION_DENIED) alert('User denied the request for Geolocation.')
        else if (error.POSITION_UNAVAILABLE) alert('Channel information is unavailable.')
        else if (error.TIMEOUT) alert('The request to get user location timed out.')
        else alert('An unknown error occurred.')
      },
      useWrittenChannel() {
        this.item.lat = this.form.latitude
        this.item.lng = this.form.longitude
        this.mapOptions = { ...this.mapOptions, center: { lat: this.form.latitude, lng: this.form.longitude }, radius: this.form.radius }
        this.center = { lat: this.form.latitude, lng: this.form.longitude}
        this.mapOptions.zoom = 13
      },
      async getSowerkTags() {
        await this.$http.get('https://www.sowerkbackend.com/api/sowerktags')
          .then(response => {
            console.log(response.data, 'response.data for sowerktags');
            this.sowerkTags = response.data;
            console.log(this.sowerkTags, 'sowerktags')
          })
      },
      async removeTag(item) {
        console.log(this.locationTags, 'before removal', item)
        this.locationTags = this.locationTags.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.locationTags, 'after removal')
      },
      async removeService(item) {
        console.log(this.services, 'before removal', item)
        this.services = this.services.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.services, 'after removal')
      },
    }
  }
</script>

<style scoped>
  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
    @media (max-width:1264px ){
    #app{
      margin-top:-22px;
    }
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .7s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>