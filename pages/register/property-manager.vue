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
          ><img src="https://sowerk-images.s3.us-east-2.amazonaws.com/urbancopy_1.png" style="height:10vh; margin-right: 10px;"alt="property and facility manager Icon">
            <span class="primary--text ml-2 py-6"
            >Business Information</span
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
              v-on:selectFileUrl="selectCompanyUrl"
              ref="companyDetails"
            ></CompanyDetails>

<!--            <CompanyLocations-->
<!--              :company="company"-->
<!--              :user="user"-->
<!--              :editLocation="editLocation"-->
<!--              :deleteLocation="deleteLocation"-->
<!--              :editingLocation="editingLocation"-->
<!--              :location="location"-->
<!--              :locations="locations"-->
<!--              :editingIndex="editingIndex"-->
<!--              :headers="headers"-->
<!--              :companyImageUrl="companyImageUrl"-->
<!--              ref="companyLocations"-->
<!--            ></CompanyLocations>-->

            <CompanyReview
              :company="company"
              :headers="headers"
              :locations="locations"
              :user="user"
              :setPage="setPage"
              :fullAddress="fullAddress"
              :imageUrl="companyImageUrl"
              :userTerms="userTerms"
            ></CompanyReview>
          </v-tabs-items>
          <v-card-actions class="py-10 mx-auto" style="max-width: 80%;">
            <v-btn
              style="background-color: #e0e0e0;"
              outlined
              class="px-8"
              text
              @click="prevPageIfNotFirst"
              v-show="tab !== 0"
            >
              < Back</v-btn
            >
            <v-spacer v-if="editingLocation || tab !== 1"></v-spacer>
<!--            <v-btn-->
<!--              color="primary"-->
<!--              class="px-8"-->
<!--              @click="nextPageIfNotLast"-->
<!--              v-if="tab === 0"-->
<!--            >Next >-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--              color="primary"-->
<!--              outlined-->
<!--              class="px-8 mx-8"-->
<!--              style="flex-grow: 1; border-width: 2px;"-->
<!--              @click="addLocation"-->
<!--              v-if="!editingLocation && tab === 1"-->
<!--            >+ Add Another Channel-->
<!--            </v-btn>-->
            <v-btn
              color="primary"
              class="px-8"
              @click="nextPageIfNotLast"
              v-if="tab === 0"
            >Finish & Review >
            </v-btn>
<!--            <v-btn-->
<!--              color="primary"-->
<!--              class="px-8"-->
<!--              @click="finishEditing"-->
<!--              v-else-if="editingLocation && tab === 1"-->
<!--            >Finish Channel-->
<!--            </v-btn>-->
<!--            <v-btn-->
<!--              color="#707070"-->
<!--              style="color: white;"-->
<!--              class="px-8"-->
<!--              @click="goBackLocations"-->
<!--              v-if="editingLocation && tab === 1 && locations.length >0"-->
<!--            >Cancel And Go Back To Channels</v-btn>-->
            <v-checkbox
              v-model="userTerms"
              v-if="tab === 1"
            >
              <template v-slot:label>
                Check here if you have read our <a target="_blank" href="https://www.sowerk.com/UserTerms" class="px-2" @click.stop>User Terms</a> and <a target="_blank" href="https://www.sowerk.com/CustomerTerms" class="mx-2" @click.stop>Customer Terms</a>
              </template>
            </v-checkbox>
            <v-btn color="primary" class="px-8" @click="register" v-if="tab === 1 && userTerms === true"
            >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-card v-if="successPopup" style="position: fixed; width: 100%; height: 100%;" class="d-flex flex-column align-center justify-center">
      <v-card-title style="color: #A61C00; width: 80%;">Thank you for your registration. Please check your email for a verification email from SOWerk! You will be redirected to the login portal momentarily.</v-card-title>
    </v-card>

    <!-- FACEBOOK PIXEL CODE -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '296647381768376');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=296647381768376&ev=PageView&noscript=1"
    /></noscript>

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
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBwenW5IeaHFqdpup30deLmFlTdDgOMM6Q',
  },
  installComponents: true
})

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
      userTerms: false,
      successPopup: false,
      loading: false,
      tab: 0,
      companyImageFile: {},
      companyImageUrl: null,
      items: ['Company', 'Review'],
      bestSelection: [
        {
          text: '- I/We Own The Brand',
          value: 0
        },
        {
          text: '- I/We Are A Franchise Of This Brand',
          value: 1
        }
      ],
      company: {
        website: '',
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
        // phone: '',
        year_founded: Number,
        company_type: true,
        currentConnections: Number,
        maxConnections: Number,
        public_name: '',
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
      long: 0,
      lat: 0,
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
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
        {
          text: 'Channel',
          value: 'name',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
        {
          text: 'Address',
          value: 'address',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
        {
          text: 'Primary Contact',
          value: 'full_name',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
        {
          text: 'Email',
          value: 'email',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
        {
          text: 'Phone',
          value: 'phone',
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          class: 'primary--text font-weight-bold text-h6 text-left text-justify-start',
        },
      ],
    }
  },
  watch: {
    loading: function () {
      if (this.loading) {
        console.log(document)
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
    },
    selectCompanyUrl(url) {
      this.companyImageUrl = url;
      console.log(this.companyImageUrl);
    },
    async uploadCompanyImage() {
      let formData = new FormData();
      let file = this.companyImageFile;
      console.log('this.companyImageFile: ', file)
      formData.append('file', file);
      console.log(formData);
      // await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
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
      await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
        .then(response => {
          console.log('success in uploading company image', response)
          this.company.imgUrl = response.data.data.Location;
          console.log(this.company);
        })
        .catch(err => {
          console.log('error in uploading company image', err);
          return;
        })
    },
    finishEditing() {
      if(!this.validate()) return false;
      this.editingLocation = false
      console.log(this.location, 'location')
      this.locations[this.editingIndex] = this.location
      this.locations[this.editingIndex].contact_first_name = this.user.first_name;
      this.locations[this.editingIndex].contact_last_name = this.user.last_name;
      this.locations[this.editingIndex].phone = this.user.phone;
      this.locations[this.editingIndex].email = this.user.email;
      this.editingIndex = null;
    },
    editLocation(index) {
      console.log(index)
      this.editingIndex = index
      this.location = this.locations[index]
      console.log(this.location)
      this.editingLocation = true
    },
    deleteLocation(index) {
      console.log(index, 'deleteLocation!')
      this.locations.splice(1, index)
      console.log(this.locations, 'locations')
    },
    getAddressData(addressData) {
      console.log(addressData)
      this.company.address = addressData.street_number + ' ' + addressData.route
      this.company.city = addressData.locality
      this.company.state = addressData.administrative_area_level_1
      this.company.zipcode = addressData.postal_code
      this.long = addressData.longitude;
      this.lat = addressData.latitude;
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
      }

      this.locations.push(newLocation)
      this.location = this.locations[this.locations.length - 1]
      this.editingIndex = this.locations.length - 1
      this.editingLocation = true
    },
    goBackLocations() {
      this.editingLocation = false;
      this.locations.pop();
    },
    saveCompanyAddress(addressObj) {
      this.company.address = addressObj.street_number + ' ' + addressObj.route
      this.company.city = addressObj.locality
      this.company.state = addressObj.administrative_area_level_1
      this.company.zipcode = addressObj.postal_code
    },
    async register() {
      this.loading = true
      this.company.public_name = this.company.account_name.replace(/[^0-9a-z]/gi, '')
      console.log(this.company);
      // console.log(this.locations);
      await this.uploadCompanyImage();
      let { data, status } = await this.$http.post('https://www.sowerkbackend.com/api/companies', this.company).catch((e) => e);
      console.log('post company: ', data)
      this.user.companies_id = data.companies.id
      await this.registerCompanyDocument(data);
      await this.registerUser(data)
      // await this.postLocations(data.user.id);
      // await this.$router.push('/login');
      // await this.$http.post('https://api.sowerk.com/v1/companies/buyer', form )
      //   .then(response => {
      //     console.log(response);
      //   })
    },
    async registerCompanyDocument(company) {
      await this.$http.post('https://www.sowerkbackend.com/api/companydocuments/byCompaniesId/' + company.companies.id, {
        documentName: 'W9 Template.pdf',
        documentUrl: 'https://sowerk-uploads.s3.us-east-2.amazonaws.com/sowerk-2fbfbcc9-5f86-4d5a-bee4-35d2cb6a0754-unique-W9%20Template.pdf',
        required: true
      })
        .then(response => {
          console.log('success in posting company document')
        })
        .catch(err => {
          console.log(err)
        })
    },
    async registerUser(company) {
      this.user.email = this.user.email.toLowerCase()
      let { data, status } = await this.$http
        .post(
          'https://www.sowerkbackend.com/api/auth/register',
          this.user
        )
        .catch((e) => e)
      console.log('user', data);
      let admin = 0;
      if(this.user.is_superuser === true) {
        admin = 1
      } else if (this.user.is_superuser === false) {
        admin = 0
      }
      let locationPost = {
        name: company.companies.account_name,
        email: this.user.email,
        address: company.companies.address,
        state: company.companies.state,
        city: company.companies.city,
        zipcode: company.companies.zipcode,
        year_founded: company.companies.year_founded,
        radius: 0,
        longitude: this.long,
        latitude: this.lat,
        contact_first_name: this.user.first_name,
        contact_last_name: this.user.last_name,
        phone: this.user.phone,
        adminLevel: admin,
        pfLogoCheckbox: false,
        description: company.companies.description,
        imageUrl: company.companies.imgUrl,
      }
      console.log(locationPost, 'locationPost')
      await this.$http.post('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + company.companies.id, locationPost)
        .then(response => {
          console.log(response, 'location posted')
          this.loading = false;
          this.successPopup = true;
          setTimeout(() => {
            this.$router.push('/register/verify')
          }, 2000)
        })
        .catch(err => {
          console.log(err, 'err in posting location')
        })
      // await this.loopLocationImages();
    },
    async loopLocationImages() {
      this.locations.forEach((location, index) => {
        const formData = new FormData();
        console.log(location);
        formData.append('file', location.imageUrl);
        this.uploadLocationImage(formData, index);
      });
      console.log(this.locations);
      this.loading = false;
      this.successPopup = true;
      // setTimeout(() => {
      //   this.$router.push('/login');
      // }, 2000)
    },
    async uploadLocationImage(formData, index) {
      // let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/upload', formData).catch(err => {
      //   console.log('error in uploading location image', err)
      // })

      await this.$http.post('https://www.sowerkbackend.com/api/upload', formData)
        .then(async (response) => {
          console.log('image upload response ', response.data.data.Location);
          this.locations[index].imageUrl = response.data.data.Location;
          console.log(this.locations[index]);
          await this.postLocation(this.locations[index]);
        })
        .catch((e) => console.log('err', e));
    },
    async postLocation(location) {
      console.log(this.locations, 'this.locations');
      location.phone = location.phone.replace(/[^\d]/g, '');
      await this.$http.post('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.user.companies_id, location)
        .then(async (response) => {
          console.log('user location post: ', response.data);
        })
        .catch((e) => console.log('err', e));
    },
    // async postLocations(userId) {
    //   console.log(this.locations, 'this.locations');
    //   await this.$http.post('https://www.sowerkbackend.com/api/group-locations/byCompaniesId/' + userId, this.locations)
    //     .then(async (response) => {
    //       console.log('user locations post: ', response.data);
    //     })
    //     .catch((e) => console.log('err', e));
    // },
 //    async getUserLocations(userId) {
 //      await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + userId)
 //        .then(async (response) => {
 //          console.log('get companys locations: ', response.data.location)
 //          await this.postServicesPerLocation(response.data.location)
 //        })
 //        .catch((e) => e)
 //    },
 //    async postServicesPerLocation(locationsVal) {
 //      console.log(locationsVal, 'locations');
 //      for (const locationVal of locationsVal) {
 //        console.log(locationVal, 'location', locationsVal, 'locations');
 //        for (const service of this.services) {
 //          console.log(service, 'service', this.services, 'this.services');
 //          let serviceObject = {
 //            name: service,
 //            locations_id: locationVal.id
 //          };
 //          let { data, status } = await this.$http.post('https://www.sowerkbackend.com/api/services/byLocationId/' + locationVal.id, serviceObject)
 //            .catch((e) => e)
 //          console.log(data)
 //        }
 //      }
 //      await this.postUserformsPerService()
 //    },
 //    async getServicesPerLocation(id) {
 //      let { data, status } = await this.$http
 //        .get(
 //          'https://www.sowerkbackend.com/api/services/byLocationId/' +
 //            id
 //        )
 //        .catch((e) => e)
 //      console.log(data)
 //    },
 //    async getAllServices() {
 //      let { data, status } = await this.$http
 //        .get(
 //          'https://www.sowerkbackend.com/api/companies/' +
 //            this.user.companies_id
 //        )
 //        .catch((e) => e)
 //      console.log(data)
 //      return data.locations
 //    },
 //    async postUserformsPerService() {
 //      let locations = await this.getAllServices()
 //      console.log(locations)
 //      for (const location of locations) {
 //        for (const service of location.services) {
 //          let userformObject = {
 //            name: service.name,
 //          }
 //          let { data, status } = await this.$http
 //            .post(
 //              'https://www.sowerkbackend.com/api/userforms/byServiceId/' +
 //                service.id,
 //              userformObject
 //            )
 //            .catch((e) => e)
 //          console.log(data)
 //          await this.getUserforms(service.id)
 //        }
 //      }
 //    },
 //    async getUserforms(id) {
 //      let { data, status } = await this.$http
 //        .get(
 //          'https://www.sowerkbackend.com/api/userforms/byServiceId/' +
 //            id
 //        )
 //        .catch((e) => e)
 //      console.log(data)
 //      await this.postFormFieldsToUserforms(data)
 //    },
 // async postFormFieldsToUserforms(userforms) {
 //        for(const userform of userforms) {
 //          let fields = [
 //            {
 //              "name": "Company Name",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Company Founded",
 //              "type": "number",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Address",
 //              "type": "address",
 //              "value": "address",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Service Provided",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "First Name",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Last Name",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Email",
 //              "type": "email",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Phone",
 //              "type": "number",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "What is your regular time/hour rate for your service?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "What are your regular rate hours M-F, 8am - 5pm?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "Do you charge for quotes that do not involve a technician?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "How quick can you return quotes, once you have all of your pricing?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "What markets do you serve?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "What do you consider as local for a service market?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //            {
 //              "name": "What other similar businesses do you support?*",
 //              "type": "text",
 //              "value": "",
 //              "required": true,
 //              "options": "",
 //            },
 //          ];
 //          for (const field of fields) {
 //            let {data, status} = await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + userform.id, field).catch(e => e);
 //          }
 //        }
 //        this.loading = false;
 //        await this.$router.push('/register/verify');
 //      },
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
