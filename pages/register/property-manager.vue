<template>
  <v-container style="max-width:none !important; width: 100%; background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/typing-690856.jpg');  background-size: cover; background-position: center;">
    <v-row
      align="center"
      justify="center"
      style="max-width: 1440px;"
      class="mx-auto py-12"
    >
      <v-col
        cols="12"
        style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;"
        v-if="loading"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          :size="50"
        ></v-progress-circular>
      </v-col>
      <v-col cols="12">
        <v-card class="elevation-12 card--has-floating" light>
          <v-card-title class="justify-center headline font-weight-bold"
          >Step 1 -
            <span class="primary--text ml-2 py-6"
            >Company Information</span
            ></v-card-title
          >
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
          <v-tabs-items v-model="tab" class="white" light eager>
            <CompanyDetails
              :company="company"
              :getAddressData="getAddressData"
              :user="user"
              :bestSelection="bestSelection"
              :fullAddress="fullAddress"
              v-on:selectFile="selectCompanyFile"
              ref="companyDetails"
            ></CompanyDetails>

            <CompanyLocations
              :company="company"
              :user="user"
              :editLocation="editLocation"
              :editingLocation="editingLocation"
              :location="location"
              :locations="locations"
              :editingIndex="editingIndex"
              :headers="headers"
              ref="companyLocations"
            ></CompanyLocations>

            <CompanyReview
              :company="company"
              :user="user"
              :setPage="setPage"
              :fullAddress="fullAddress"
            ></CompanyReview>
          </v-tabs-items>
          <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
            <v-btn
              style="background-color: #e0e0e0;"
              outlined
              class="px-8"
              text
              @click="prevPageIfNotFirst"
              v-show="tab !== 0 && !editingLocation"
            >
              < Back</v-btn
            >
            <v-spacer v-if="editingLocation || tab !== 1"></v-spacer>
            <v-btn
              color="primary"
              class="px-8"
              @click="nextPageIfNotLast"
              v-if="tab === 0"
            >Next >
            </v-btn>
            <v-btn
              color="primary"
              outlined
              class="px-8 mx-8"
              style="flex-grow: 1; border-width: 2px;"
              @click="addLocation"
              v-if="!editingLocation && tab === 1"
            >+ Save and Add Another Location
            </v-btn>
            <v-btn
              color="primary"
              class="px-8"
              @click="nextPageIfNotLast"
              v-if="!editingLocation && tab === 1"
            >Next >
            </v-btn>
            <v-btn
              color="primary"
              class="px-8"
              @click="finishEditing"
              v-else-if="editingLocation && tab === 1"
            >Finish Location
            </v-btn>
            <v-btn color="primary" class="px-8" @click="register" v-if="tab === 2"
            >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VImageInput from 'vuetify-image-input'
import * as VueGoogleMaps from '~/node_modules/gmap-vue'
import GmapCluster from '~/node_modules/gmap-vue/dist/components/cluster'

import Vue from 'vue'
import FormLocation from '~/components/FormLocation'
import CompanyDetails from '~/components/register/property-manager/CompanyDetails'
import CompanyLocations from '~/components/register/property-manager/CompanyLocations'
import CompanyReview from '~/components/register/property-manager/CompanyReview'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
//   },
//   installComponents: true
// })

export default {
  name: 'property-manager',
  layout: 'fullwidth',
  components: {
    FormLocation,
    VImageInput,
    GmapCluster,
    CompanyDetails,
    CompanyLocations,
    CompanyReview,
  },
  data() {
    return {
      loading: false,
      tab: 0,
      companyImageFile: {},
      items: ['Company', 'Locations', 'Review'],
      bestSelection: [
        {
          text: '- I own this brand',
          value: 0
        },
        {
          text: '- I am a franchisee of this brand',
          value: 1
        }
      ],
      company: {
        email: '',
        account_name: '',
        brand_name: '',
        isFranchise: '',
        llcName: '',
        imgUrl: '',
        address: '',
        city: '',
        state: '',
        zipcode: Number,
        description: '',
        phone: '',
        year_founded: Number,
        company_type: true,
        currentConnections: Number,
        maxConnections: Number,
      },
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        is_superuser: true,
        phone: '',
        companies_id: null,
      },
      services: ['HVAC', 'Landscaping', 'Plumber', 'Electrician'],
      options: {
        adminLevel: [
          {
            text: 'Super User',
            value: 'superuser',
          },
          {
            text: 'Staff Account',
            value: 'staff',
          },
        ],
      },
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
        year_founded: 0,
        description: null,
        adminLevel: 0,
        imageUrl: null,
        pfLogoCheckbox: false,
        companies_id: Number,
      },
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
          class: 'primary--text font-weight-regular',
        },
        {
          text: 'Facility',
          value: 'name',
          class: 'primary--text font-weight-regular',
        },
        {
          text: 'Address',
          value: 'address',
          class: 'primary--text font-weight-regular',
        },
        {
          text: 'Primary Contact',
          value: 'full_name',
          class: 'primary--text font-weight-regular',
        },
        {
          text: 'Email',
          value: 'email',
          class: 'primary--text font-weight-regular',
        },
        {
          text: 'Phone',
          value: 'phone',
          class: 'primary--text font-weight-regular',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          class: 'primary--text font-weight-regular',
        },
      ],
    }
  },
  watch: {
    loading: function () {
      if (this.loading) {
        console.log(document)
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
  },
  mounted() {
    console.log(this.$children);
  },
  methods: {
    nextPageIfNotLast() {
      if (this.tab === 2) return;
      if(!this.validate()) return;
      this.tab += 1
      console.log(this.locations)
    },
    validate() {
      if(this.tab === 0) {
        if (!this.$refs.companyDetails.$refs.register.validate()) {
          this.$nextTick(() => {
            this.$vuetify.goTo('.error--text');
          });
          return false;
        }
      }
      return true;
    },
    prevPageIfNotFirst() {
      if (this.tab === 0) return
      this.tab -= 1
    },
    selectCompanyFile(file) {
      this.companyImageFile = file;
      console.log(this.companyImageFile);
      console.log('wtf mate');
    },
    async uploadCompanyImage() {
      let formData = new FormData();
      let file = this.companyImageFile;
      console.log('this.companyImageFile: ', file)
      formData.append('file', file);
      console.log(formData);
      // await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/upload', formData)
      //   .then(response => {
      //     console.log('success in uploading insurance file', response)
      //     this.insurances[index].documentUrl = response.data.data.Location;
      //     this.loading = false;
      //     console.log(this.insurances);
      //     return this.insurances;
      //   })
      //   .catch(err => {
      //     console.log('error in uploading insurance file', err);
      //   })
      await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/upload', formData)
        .then(response => {
          console.log('success in uploading company image', response)
          this.company.imgUrl = response.data.data.Location;
          console.log(this.company);
        })
        .catch(err => {
          console.log('error in uploading company image', err);
        })
    },
    finishEditing() {
      if(!this.validate()) return false;
      this.editingLocation = false
      console.log(this.location, 'location')
      this.locations[this.editingIndex] = this.location
      this.editingIndex = null;
    },
    editLocation(index) {
      console.log(index)
      this.editingIndex = index
      this.location = this.locations[index]
      console.log(this.location)
      this.editingLocation = true
    },
    getAddressData(addressData) {
      console.log(addressData)
      this.company.address = addressData.street_number + ' ' + addressData.route
      this.company.city = addressData.locality
      this.company.state = addressData.administrative_area_level_1
      this.company.zipcode = addressData.postal_code
      this.formatFullAddress()
    },
    formatFullAddress() {
      if (!this.company.address) return
      this.fullAddress =
        this.company.address +
        ', ' +
        this.company.city +
        ', ' +
        this.company.state +
        ' ' +
        this.company.zipcode
    },
    onRadiusSlide(value, index) {},
    animateAddressFieldOnFocus(e) {
      let addressLabel = e.target.previousElementSibling
      addressLabel.classList.toggle('v-label--focus')
    },
    animateAddressFieldOnFilled(e) {
      if (e.target != '') {
        if (
          e.target.previousElementSibling.classList.contains('v-label--filled')
        ) {
          return
        } else {
          e.target.previousElementSibling.classList.add('v-label--filled')
        }
      } else {
        e.target.previousElementSibling.classList.remove('v-label--filled')
      }
    },
    convertMilesToMeters(miles) {
      return miles * 1609.34
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
        year_founded: null,
        description: null,
        adminLevel: null,
        imageUrl: null,
        pfLogoCheckbox: false,
        companies_id: this.user.companies_id,
      }

      this.locations.push(newLocation)
      this.location = this.locations[this.locations.length - 1]
      this.editingIndex = this.locations.length - 1
      this.editingLocation = true
    },
    saveCompanyAddress(addressObj) {
      this.company.address = addressObj.street_number + ' ' + addressObj.route
      this.company.city = addressObj.locality
      this.company.state = addressObj.administrative_area_level_1
      this.company.zipcode = addressObj.postal_code
    },
    async register() {
      this.loading = true
      console.log(this.company)
      console.log(this.locations)
      await this.uploadCompanyImage();
      let { data, status } = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies', this.company).catch((e) => e)
      console.log('post company: ', data)
      this.user.companies_id = data.companies.id
      await this.registerUser(data.companies.id)
      // await this.postLocations(data.user.id);
      // await this.$router.push('/login');
      // await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form )
      //   .then(response => {
      //     console.log(response);
      //   })
    },
    async registerUser(companyId) {
      let { data, status } = await this.$http
        .post(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/register',
          this.user
        )
        .catch((e) => e)
      console.log('user', data)
      await this.postLocations(data.user.companies_id)
    },
    async loopLocationImages() {
      this.locations.forEach((location, index) => {
        const formData = new FormData();
        console.log(location);
        formData.append('file', location.imageUrl);
        this.uploadLocationImage(formData, index);
      });
      console.log(this.locations);
    },
    async uploadLocationImage(formData, index) {
      let {data, status} = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/upload', formData).catch(err => {
        console.log('error in uploading location image', err)
      })

      this.locations[index].imageUrl = data.data.Location;
    },
    async postLocations(userId) {
      console.log(this.locations, 'this.locations');
      await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/group-locations/byCompaniesId/' + userId, this.locations)
        .then(async (response) => {
          console.log('user locations post: ', response.data);
          await this.getUserLocations(userId)
        })
        .catch((e) => console.log('err', e));
    },
    async getUserLocations(userId) {
      await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/byCompaniesId/' + userId)
        .then(async (response) => {
          console.log('get companys locations: ', response.data.location)
          await this.postServicesPerLocation(response.data.location)
        })
        .catch((e) => e)
    },
    async postServicesPerLocation(locationsVal) {
      console.log(locationsVal, 'locations');
      for (const locationVal of locationsVal) {
        console.log(locationVal, 'location', locationsVal, 'locations');
        for (const service of this.services) {
          console.log(service, 'service', this.services, 'this.services');
          let serviceObject = {
            name: service,
            locations_id: locationVal.id
          };
          let { data, status } = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/services/byLocationId/' + locationVal.id, serviceObject)
            .catch((e) => e)
          console.log(data)
        }
      }
      await this.postUserformsPerService()
    },
    async getServicesPerLocation(id) {
      let { data, status } = await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/services/byLocationId/' +
            id
        )
        .catch((e) => e)
      console.log(data)
    },
    async getAllServices() {
      let { data, status } = await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' +
            this.user.companies_id
        )
        .catch((e) => e)
      console.log(data)
      return data.locations
    },
    async postUserformsPerService() {
      let locations = await this.getAllServices()
      console.log(locations)
      for (const location of locations) {
        for (const service of location.services) {
          let userformObject = {
            name: service.name,
          }
          let { data, status } = await this.$http
            .post(
              'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/userforms/byServiceId/' +
                service.id,
              userformObject
            )
            .catch((e) => e)
          console.log(data)
          await this.getUserforms(service.id)
        }
      }
    },
    async getUserforms(id) {
      let { data, status } = await this.$http
        .get(
          'http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/userforms/byServiceId/' +
            id
        )
        .catch((e) => e)
      console.log(data)
      await this.postFormFieldsToUserforms(data)
    },
 async postFormFieldsToUserforms(userforms) {
        for(const userform of userforms) {
          let fields = [
            {
              "name": "Company Name",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "Company Founded",
              "type": "number",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "Address",
              "type": "address",
              "value": "address",
              "required": true,
              "options": "",
            },
            {
              "name": "Service Provided",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "First Name",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "Last Name",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "Email",
              "type": "email",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "Phone",
              "type": "number",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "What is your regular time/hour rate for your service?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "What are your regular rate hours M-F, 8am - 5pm?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "Do you charge for quotes that do not involve a technician?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "How quick can you return quotes, once you have all of your pricing?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "What markets do you serve?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "What do you consider as local for a service market?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
            {
              "name": "What other similar businesses do you support?*",
              "type": "text",
              "value": "",
              "required": true,
              "options": "",
            },
          ];
          for (const field of fields) {
            let {data, status} = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/formfields/byUserFormId/' + userform.id, field).catch(e => e);
          }
        }
        this.loading = false;
        await this.$router.push('/register/verify');
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
          // this.company.tos_date = today;
        }
      },
    onFormLocationChange(location, i) {
      console.log(location)
      // this.locations[i] = location;
    },
    setPage(tab) {
      this.tab = tab
    },
  },
}
</script>

<style scoped lang="scss">
.form__address::v-deep input {
  border: 2px solid red !important;
  width: 600px;
}

.v-input__slot:before {
  border-color: rgba(0, 0, 0, 0.42);
  border-style: solid;
  border-width: thin 0 0 0;
  bottom: -2px;
  content: '';
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
  top: 0;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
