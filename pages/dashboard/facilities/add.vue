<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container style="max-width: 95%;" mt-12 mx-auto>
      <v-card>
        <v-card-title style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient">Add New Location</v-card-title>
        <v-card-text class="px-6 pt-12 pb-0 mx-auto">
          <v-row class="px-3 pt-3">
            <v-col cols="12" class="pa-0 elevation-2" style="width: 100%; top: 0; border-radius: 10px; overflow: hidden; height: 50vh; max-height: 500px; z-index: 10;">
              <client-only>
                <GmapMap
                  id="locations-map"
                  style="width: 100%; height: 100%"
                  ref="location-map"
                  :center="{lat:38, lng:-95.5}"
                  :zoom="4"
                >
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
                        <p class="grey--text text--darken-4 font-weight-bold">Location Name</p>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <div class="v-input theme--light v-text-field v-text-field--is-booted">
                      <div class="v-input__control">
                        <div class="v-input__slot" style="width: 100%;">
                          <label class="v-label v-label--active theme--light black--text font-weight-bold" style="left: 0px; right: auto; position: absolute;"><p class="grey--text text--darken-4 font-weight-bold">Location Address</p></label>
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
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      placeholder=" "
                      hint="(Does this property have unique details you want to share with approved and applying vendors, Directions, Features, Etc.)"
                      persistent-hint
                      v-model="form.description"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Location Description</p>
                      </template>
                    </v-textarea>
                  </v-col>
                  <v-col cols="12" class="mt-12 mb-4">
                    <h2 class="mx-auto text-center">Location Manager</h2>
                    <p class="mt-4 mx-auto pb-0" style="max-width: 720px">This should be the main point person who will be responsible for managing approved vendors at this location. The information provided here will help create a staff account within your company and the contact information will only be available to approved vendors at that location.</p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      placeholder=" "
                      v-model="form.contact_first_name"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">First Name</p>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      placeholder=" "
                      v-model="form.contact_last_name"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Last Name</p>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      placeholder=" "
                      v-model="form.phone"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Phone</p>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      placeholder=" "
                      v-model="form.email"
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Email</p>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-checkbox
                      label="This location will be managed by: ADMIN NAME PLACEHOLDER"
                    >
                    </v-checkbox>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      :items="adminOptions"
                      v-model="form.adminLevel"
                      placeholder=" "
                    >
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">Admin Level*</p>
                      </template>
                    </v-select>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pb-6 px-8">
          <v-spacer></v-spacer>
          <v-btn right @click="submit" color="primary" large class="px-4">Register Location</v-btn>
        </v-card-actions>
      </v-card>
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
        filters: [
          {
            name: 'Location',
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
        ]
      }
    },
    async mounted() {
      vueGoogleMapsInit();
      console.log(this.currentUser);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
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
        console.log(this.currentUser);
        console.log(this.form);
        let {data, status} = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/byCompaniesId/' + this.currentUser.companies_id, this.form).catch(e => e);
        console.log(data);
      }
    }
  }
</script>

<style scoped>
  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
</style>
