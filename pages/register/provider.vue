<template>
  <v-row
    align="center"
    justify="center"
    style="max-width: 1440px;"
    class="mx-auto py-12"
  >
    <v-col
      cols="12"
    >
      <v-card class="elevation-12 card--has-floating" light>
        <v-card-title class="justify-center headline font-weight-bold">Step 1 - <span class="primary--text ml-2 py-6">Company Information</span></v-card-title>
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
                <v-form class="mx-auto">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-row fill-height class="pl-2">
                          <client-only>
                            <v-image-input
                              v-model="company.image"
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
                          label="Representative Name*"
                          type="text"
                          v-model="user.rep_name"
                        ></v-text-field>

                        <v-text-field
                          label="Email Address*"
                          type="email"
                          class="card__input black--text"
                          v-model="user.email"
                        ></v-text-field>

                        <v-text-field
                          label="Phone*"
                          type="text"
                          class="card__input black--text"
                          v-model="user.phone"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="password"
                          label="Password*"
                          type="password"
                          v-model="user.password"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          id="confirm"
                          label="Confirm Password*"
                          type="password"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <h2 class="mt-8 mb-4">Company Information</h2>
                        <v-divider></v-divider>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-text-field
                          id="company"
                          label="Company Name*"
                          type="text"
                          v-model="company.company_name"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Year Business Was Founded*"
                          type="text"
                          v-model="company.year_founded"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" class="v-input">
                        <div class="v-input__control">
                          <div class="v-input__slot">
                            <div class="v-text-field__slot" style="width: 100%;">
                              <label class="v-label theme--light form__label--address" style="left: 0px; right: auto; position: absolute;">Corporate Address*</label>
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

                      <v-col cols="12">
                        <v-select :items="serviceOptions" v-model="servicesProvided" multiple chips label="What Services Do You Offer?"></v-select>
                      </v-col>

                      <v-col cols="12">
                        <v-textarea
                          id="description"
                          label="Describe Your Business* (A Short Sales Pitch Used In Your Profile)"
                          v-model="company.description"
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
                <template v-if="editingLocation">
                  <span class="title font-weight-regular text-center my-12 grey--text text--darken-2">Now tell us about your first location</span>
                  <v-form class="mx-auto">
                    <v-container>
                      <FormLocation
                        :location="location"
                        :index="editingIndex"
                      />
                    </v-container>
                  </v-form>
                </template>
                <template v-else>
                  <v-data-table
                    :headers="headers"
                    :items="locations"
                    :items-per-page="10"
                  >
                    <template v-slot:item.id="{ item }">{{ locations.indexOf(item) + 1 }}</template>
                    <template v-slot:item.full_name="{ item }">{{ item.contact_first_name }} {{ item.contact_last_name }}</template>
                    <template v-slot:item.actions="{ item }">

                      <v-btn icon @click="editLocation(locations.indexOf(item))">
                        <v-icon
                          small
                          class="mr-2"
                        >
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                      <v-icon
                        small
                        @click="deleteItem(item)"
                      >
                        mdi-delete
                      </v-icon>
                    </template>
                  </v-data-table>
                </template>
              </v-card-text>
            </v-container>
          </v-tab-item>
          <v-tab-item eager>
            <v-container style="max-width: 80%;" mx-auto>
              <v-card-text class="pa-0">
                <p class="title font-weight-regular text-center my-12 grey--text text--darken-2">Review Company Information</p>
                <v-col cols="12" class="align-center text-center mx-auto">
                  <!--                  <v-img :src="company.image" max-height="300px" max-width="300px" aspect-ratio="1" v-if="company.image && company.image != ''"></v-img>-->
                  <v-icon color="grey" style="font-size: 100px; text-align: center" class="mx-auto">person</v-icon>
                  <p class="headline font-weight-bold">{{ company.company_name }}</p>
                </v-col>

                <v-col cols="12" style="max-width: 720px;" class="mx-auto d-flex flex-column align-center">
                  <v-form class="mx-auto">
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <p class="grey--text text--darken-4 font-weight-bold mb-0">First Name*</p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="company.rep_name"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <p class="grey--text text--darken-4 font-weight-bold mb-0">Email*</p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="company.email"
                          >
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <p class="grey--text text--darken-4 font-weight-bold mb-0">Phone*</p>
                          <v-text-field
                            placeholder=" "
                            readonly
                            v-model="company.phone"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <p class="grey--text text--darken-4 font-weight-bold mb-0">Corporate Address*</p>
                          <v-text-field
                            v-model="fullAddress"
                            placeholder=" "
                            readonly
                          >
                          </v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <p class="grey--text text--darken-4 font-weight-bold mb-0" style="font-size: 14px;">Corporate Description*</p>
                          <p class="mb-1" style="font-size: 16px; min-height: 48px;">{{ company.description ? company.description : '\n' }}</p>
                          <v-divider style="border-width: thin 0 0 0; border-color: rgba(0,0,0,0.5);"></v-divider>
                        </v-col>

                      </v-row>
                    </v-container>
                  </v-form>
                  <v-btn class="mx-auto mt-4" color="primary" outlined rounded @click="setPage(0)">Edit Information</v-btn>
                </v-col>

                <!--                <v-divider color="red" class="mt-8 mb-4"></v-divider>-->

                <!--                <v-col cols="12" class="mt-2">-->
                <!--                  <h2 class="mb-4 mx-auto font-weight-bold text-center">Review Company Locations</h2>-->
                <!--                  <v-data-table-->
                <!--                    :headers="headers"-->
                <!--                    :items.sync="locations"-->
                <!--                    :items-per-page="10"-->
                <!--                  >-->
                <!--                    <template v-slot:item.id="{ item }">{{ locations.indexOf(item) + 1 }}</template>-->
                <!--                    <template v-slot:item.full_name="{ item }">{{ item.contact_first_name }} {{ item.contact_last_name }}</template>-->
                <!--                  </v-data-table>-->
                <!--                </v-col>-->

                <!--                <v-col cols="12">-->
                <!--                  <v-checkbox-->
                <!--                    label="I agree to the Terms of Service"-->
                <!--                    v-on:change="getTosDate"-->
                <!--                  >-->
                <!--                  </v-checkbox>-->
                <!--                </v-col>-->

              </v-card-text>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
          <v-btn color="primary" class="px-8" text @click="prevPageIfNotFirst" v-show="tab !== 0 && !editingLocation"> < Back</v-btn>
          <v-spacer v-if="editingLocation || tab !== 1"></v-spacer>
          <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="tab === 0">Next > </v-btn>
          <v-btn color="primary" outlined class="px-8 mx-8" style="flex-grow: 1; border-width: 2px;" @click="addLocation" v-if="!editingLocation && tab === 1">Add Location + </v-btn>
          <v-btn color="primary" class="px-8" @click="nextPageIfNotLast" v-if="!editingLocation && tab === 1">Next > </v-btn>
          <v-btn color="primary" class="px-8" @click="finishEditing" v-else-if="editingLocation && tab === 1">Finish Location </v-btn>
          <v-btn color="primary" class="px-8" @click="register" v-if="tab === 2">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import VImageInput from 'vuetify-image-input'
  import * as VueGoogleMaps from '~/node_modules/gmap-vue'
  import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'


  import Vue from 'vue';
  import FormLocation from '~/components/FormLocation'

  // Vue.use(VueGoogleMaps, {
  //   load: {
  //     key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
  //   },
  //   installComponents: true
  // })

  export default {
    name: 'property-manager',
    components: {
      FormLocation,
      VImageInput,
      GmapCluster
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
        company: {
          email: '',
          company_name: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          description: '',
          phone: '',
          year_founded: '',
          company_type: false
        },
        user: {
          rep_name: '',
          email: '',
          password: '',
          is_superuser: true,
          phone: '',
          companies_id: null
        },
        options: {
          adminLevel: [
            {
              text: 'Super User',
              value: 'superuser',
            },
            {
              text: 'Staff Account',
              value: 'staff'
            }
          ]
        },
        servicesProvided: [],
        serviceOptions: [
          'HVAC',
          'Landscaping',
          'Plumber',
          'Electrician',
          'Painting',
          'Paving',
          'Pest Control'
        ],
        fullAddress: null,
        locations: [],
        location: {
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
          year_founded: '',
        },
        formattedServicesProvided: [],
        editingIndex: 0,
        imageUrlLocation: '',
        autocomplete: null,
        markers: [],
        editingLocation: true,
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Facility', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ]
      }
    },
    methods: {
      nextPageIfNotLast() {
        if(this.tab === 2) return;
        this.tab += 1;
        console.log(this.locations);
      },
      prevPageIfNotFirst() {
        if(this.tab === 0) return;
        this.tab -= 1;
      },
      finishEditing() {
        this.editingLocation = false;
        console.log(this.location);
        this.locations[this.editingIndex] = this.location;
        this.editingIndex = null;
      },
      editLocation(index) {
        console.log(index);
        this.editingIndex = index;
        this.location = this.locations[index];
        console.log(this.location);
        this.editingLocation = true;
      },
      getAddressData(addressData) {
        console.log(addressData);
        this.company.address = addressData.street_number + ' ' + addressData.route;
        this.company.city = addressData.locality;
        this.company.state = addressData.administrative_area_level_1;
        this.company.zipcode = addressData.postal_code;
        this.formatFullAddress();
      },
      formatFullAddress() {
        if(!this.company.address) return;
        this.fullAddress = this.company.address + ', ' + this.company.city + ', ' + this.company.state + ' ' + this.company.zipcode;
      },
      onRadiusSlide(value, index) {

      },
      animateAddressFieldOnFocus(e) {
        let addressLabel = e.target.previousElementSibling;
        addressLabel.classList.toggle('v-label--focus');
      },
      animateAddressFieldOnFilled(e) {
        if(e.target !== "") {
          if (e.target.previousElementSibling.classList.contains('v-label--filled')) {
          } else {
            e.target.previousElementSibling.classList.add('v-label--filled');
          }
        } else {
          e.target.previousElementSibling.classList.remove('v-label--filled');
        }
      },
      convertMilesToMeters(miles) {
        return miles * 1609.34;
      },
      addLocation() {
        let newLocation = {
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
          year_founded: '',
        };
        this.locations.push(newLocation);
        this.location = this.locations[this.locations.length - 1];
        this.editingIndex = this.locations.length - 1;
        this.editingLocation = true;
      },
      saveCompanyAddress(addressObj) {
        this.company.address = addressObj.street_number + ' ' + addressObj.route;
        this.company.city = addressObj.locality;
        this.company.state = addressObj.administrative_area_level_1;
        this.company.zipcode = addressObj.postal_code;
      },
      async register() {
        console.log(this.company);
        console.log(this.locations);
        let {data, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/companies', this.company).catch(e => e);
        console.log('post company: ', data);
        this.user.companies_id = data.companies.id;
        await this.registerUser(data.companies.id);
        // await this.postLocations(data.user.id);
        // await this.$router.push('/login');
        // await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form )
        //   .then(response => {
        //     console.log(response);
        //   })
      },
      async registerUser(company_id) {
        this.user.companies_id = company_id;
        let {data, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/auth/register', this.user).catch(e => e);
        await this.postLocations(data.user.companies_id);
      },
      async postLocations(userId) {
        let {data, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/group-locations/bycompaniesid/' + userId, this.locations).catch(e => e);
        // this.loading = false;
        // if (this.$error(status, message, errors)) return;
        console.log('user locations post: ', data);
        await this.getUserLocations(userId);
      },
      async getUserLocations(userId) {
        let {data, status} = await this.$http.get('https://sowerk-backend.herokuapp.com/api/locations/bycompaniesid/' + userId).catch(e => e);
        console.log('get companys locations: ', data)
        await this.postServicesPerLocation(data);
      },
      async postServicesPerLocation(locations) {
        for (const location of locations) {
          for (const service of this.servicesProvided) {
            let serviceObject = {
              name: service,
            }
            let {data, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/services/byLocationId/' + location.id, serviceObject).catch(e => e);
            console.log(data);
          }
        }
        await this.$router.push('/login');
      },
      formatServices() {
        console.log(this.servicesProvided);
        this.servicesProvided.forEach((serviceProvided, index) => {
          let serviceObject = {
            name: serviceProvided,
            description: serviceProvided
          }

          this.formattedServicesProvided.push(serviceObject);
        });

        console.log(this.formattedServicesProvided);
      },
      // getTosDate(e) {
      //   if(e) {
      //     let today = new Date();
      //     let dateString;
      //     let timeString;
      //     let dd = String(today.getUTCDate()).padStart(2, '0');
      //     let mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
      //     let yyyy = today.getUTCFullYear();
      //     let HH = String(today.getUTCHours()).padStart(2, '0');
      //     let MM = String(today.getUTCMinutes()).padStart(2, '0');
      //     let SS = String(today.getUTCSeconds()).padStart(2, '0');
      //
      //     dateString = [yyyy, mm, dd].join('-');
      //     timeString = [HH, MM, SS].join(':');
      //     today = dateString + ' ' + timeString;
      //     // this.company.tos_date = today;
      //   }
      // },
      setPage(tab) {
        this.tab = tab;
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
