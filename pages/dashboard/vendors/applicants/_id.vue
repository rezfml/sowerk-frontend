<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="success === false && failure === false">
        <v-col cols="4">
          <v-card class="mt-16 d-flex flex-column align-center">
            <v-row>
              <v-col cols="12" align="center">
                <v-avatar size="100" class="text-center mx-auto mt-n16 rounded-circle elevation-5" color="white">
                  <v-img :src="location.imageUrl" v-if="location.imageUrl && location.imageUrl !== '{}'"></v-img>
                  <v-icon v-else size="60">person</v-icon>
                </v-avatar>
              </v-col>
            </v-row>
<!--            <v-img :src="location.imageUrl" v-if="location" style="width: 40%; margin-top: -70px; border-radius: 50%; border: 1px solid #707070; box-shadow: 3px 6px 10px #707070;"></v-img>-->
            <v-card-title style="color:#A61C00;">{{location.name}}</v-card-title>
            <v-card-text style="text-align: center">Approved at <span style="color:#A61C00;">{{connections.length}}</span> Properties</v-card-text>
            <v-card-text style="color:#A61C00; text-align: center">Radius Provider ({{location.radius}}mi)</v-card-text>
            <v-btn outlined color="primary" rounded md class="px-16">Share</v-btn>
            <v-divider class="mx-auto mt-10" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">About</v-card-title>
            <v-card-text>Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text>Founded: {{location.year_founded}}</v-card-text>
            <v-card-text v-if="location.created">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Main Contact</v-card-title>
            <v-card-text>{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
            <v-card-text>{{location.email}}</v-card-text>
            <v-card-text>{{location.phone}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Insurances</v-card-title>
            <template v-for="(insurance, index) in insurances">
              <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>
              <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
            </template>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Licenses</v-card-title>
            <template v-for="(license, index) in licenses">
              <v-card-text>{{license.name}} - {{license.licenseLocation}}</v-card-text>
              <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
            </template>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card class="flex-column d-flex mt-16">
            <div class="d-flex justify-center align-center" style="background: #A61C00; width: 5%; height: 50px; position: absolute; left: 10px; top: -20px;">
              <v-icon color="white">mdi-account</v-icon>
            </div>
            <v-row class="d-flex justify-space-around my-5" style="width: 100%;">
              <v-card-title style="color: #A61C00; font-size: 24px; width: 50%;"><p style="word-break: normal;">Service Vendor Application - {{ location.name }}</p></v-card-title>
              <div style="font-size: 18px; width: 40%;">
                <p>Submitted: {{application.created}}</p>
                <p>Application Facility: <span style="color: #A61C00;">{{pmlocation.name}} {{pmlocation.city}}, {{pmlocation.state}}</span></p>
              </div>
            </v-row>
            <v-row class="px-12">
              <v-col cols="12" v-for="(formfield, index) in userform.formfields" style="margin: auto;">
                <p style="color: #D9D9D9; font-size: 14px;" class="mb-n1 mt-1">Question #{{index}} - {{formfield.name}}</p>
                <v-text-field readonly style="width: 100%; font-size: 18px;" :value="application.subData[index].value" :name="formfield.name">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-space-between my-10" style="width: 90%; margin: auto;">
              <v-btn @click="Deny" large>Deny</v-btn>
              <v-btn @click="Approve" color="primary" large>Approve</v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-card v-if="success === true" style="height: auto;" class="d-flex flex-column align-center">
        <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
        <v-card-title class="mt-2" color="primary">Your SOWerk Application Has Been Approved!</v-card-title>
        <v-btn color="primary" :href="'../../../dashboard/vendors/applicants'" class="mb-4" rounded>Return To SOWerk Request Dashboard</v-btn>
      </v-card>

      <v-card v-if="failure === true" style="height: auto;" class="d-flex flex-column align-center">
        <v-img style="max-height: 250px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
        <v-card-title class="mt-n16" color="primary">You have denied this application. Would you like to leave them a message letting the applicant know why? If not, just click below to return to the applicants page.</v-card-title>
        <v-form style="width: 80%;">
          <v-text-field style="width: 100%; font-size: 18px;" v-model="messageForm.message"></v-text-field>
          <v-btn @click="submit">Send Message</v-btn>
        </v-form>
        <v-btn class="my-4" color="primary" :href="'../../../dashboard/vendors/applicants'" rounded>Return To SOWerk Request Dashboard</v-btn>
      </v-card>

    </v-container>
  </v-app>
</template>

<script>
import * as moment from 'moment'

  export default {
    name: 'activeapplicant',
    layout: 'app',
    components: {
    },
    data() {
      return {
        application: {},
        location: {},
        pmlocation: {},
        pmcompany: {},
        licenses: [],
        insurances: [],
        connections: [],
        userform: {},
        service: {},
        success: false,
        failure: false,
        messageForm: {
          service: '',
          company: '',
          primary_contact_first_name: this.$store.state.user.user.user.first_name,
          primary_contact_last_name: this.$store.state.user.user.user.last_name,
          message: '',
          location: '',
          userprofiles_id: this.$store.state.user.user.user.id,
        },
        sendToId: Number,
      }
    },
    async mounted() {
      await this.getApplication(this.$route.params.id)
      console.log(this.messageForm, 'messageForm');
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getApplication(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/' + id)
          .then(response => {
            console.log(response.data, 'response application');
            this.application = response.data;
            this.application.created = moment(response.data).format('lll');
            this.application.subData = JSON.parse(this.application.subData);
            this.sendToId = this.application.spcompanies_id;
            if (this.application.required === 'required') {
              this.application.required = true
            }
            console.log(this.application, 'this.application');
            this.getSPLocation(response.data.splocations_id);
            this.getPMLocation(response.data.pmlocations_id);
            this.getPMUserForm(response.data.pmuserforms_id);
            this.getPMService(response.data.pmservices_id);
            this.getPMCompany(response.data.pmcompanies_id);
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getSPLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(async (response) => {
            console.log(response.data, 'response sp location');
            this.location = response.data;
            await this.getInsurances();
            await this.getLicenses();
            await this.getConnections(this.location);
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(async (response) => {
            console.log(response.data, 'response pm location');
            this.pmlocation = response.data;
            console.log(this.pmlocation, 'pm location');
            this.messageForm.location = `${response.data.name} - ${response.data.address} ${response.data.city}, ${response.data.state} ${response.data.zipcode}`
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async (response) => {
            console.log(response.data, 'response pm company');
            this.pmcompany = response.data;
            this.messageForm.company = response.data.account_name;
            console.log(this.messageForm, 'this.messageForm');
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMUserForm(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(async (response) => {
            console.log(response.data, 'response pm userform');
            this.userform = response.data;
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getPMService(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/' + id)
          .then(async (response) => {
            console.log(response.data.service, 'response pm service');
            this.service = response.data.service;
            this.messageForm.service = response.data.service.name
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getInsurances() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data insurances');
            for(let i = 0; i<response.data.length; i++) {
              this.insurances.push(response.data[0]);
            }
            console.log(this.insurances, 'this.insurances')
          })
          .catch(err => {
            console.log('err', err);
          })
      },async getLicenses() {
        await this.$http.get('https://www.sowerkbackend.com/api/license/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data licenses');
            for(let i = 0; i<response.data.length; i++) {
              this.licenses.push(response.data[i]);
            }
            console.log(this.licenses, 'this.licenses')
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getConnections(location) {
        await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/bySpId/' + location.companies_id)
          .then(response => {
            console.log(response.data, 'connections');
              for(let i=0; i<response.data.length; i++) {
                this.connections.push(response.data[i]);
              }
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async Approve() {
        const approvalChanges = {
          approval_status: 1
        };
        const approvedproviderconnection = {
          propertymanager_id: this.application.pmcompanies_id,
          serviceprovider_id: this.application.spcompanies_id
        }
        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + this.application.id, approvalChanges)
          .then(response => {
            console.log('success in changes', response)
          })
          .catch(err => {
            console.log('err', err);
          })
        await this.$http.post('https://www.sowerkbackend.com/api/approvedproviderconnection', approvedproviderconnection)
          .then(response => {
            console.log('success', response);
            this.success = true;
          })
          .catch(err => {
            console.log('err', err)
          })
      },
      async Deny() {
        const denialChanges = {
          approval_status: 2
        }
        await this.$http.put('https://www.sowerkbackend.com/api/applications/' + this.application.id, denialChanges)
          .then(response => {
            console.log('success in changes', response)
            this.failure = true;
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async submit() {
        console.log(this.messageForm)
        await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, this.messageForm)
          .then(response => {
            console.log('SUCCESS', response)
          })
          .catch(err => {
            console.log(err);
          })
        this.$router.push('/dashboard/vendors/applicants');
      },
    }
  }

</script>

<style scoped>
</style>
