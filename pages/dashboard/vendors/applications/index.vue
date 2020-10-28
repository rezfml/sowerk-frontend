<template>
  <v-container overflow-y-auto>
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <v-row class="d-flex" style="width: 100%;" v-if="loadApplicationLocations">
      <v-btn @click="loadApplicationTemplatesFunction" class="py-4 px-10 mx-4" color="#707070" style="color:white; width: 30%; border-radius: 10px;" >Application Templates</v-btn>
      <v-btn @click="loadYourCompanyTemplatesFunction" class="py-4 px-10 mx-4" color="primary width: 50%; border-radius: 10px;"  >Your Company Application Templates</v-btn>
    </v-row>
    <v-card class="mt-8" v-if="loadApplicationLocations">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Applications for All Locations</v-card-title>
      <template v-if="loading">
        <v-simple-table class="pt-16">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 6%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Service</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Application Name</th>
            <th style="color: #a61c00; width: 25%; text-align: center">#Questions</th>
            <th style="color: #a61c00; width: 9%;">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="(location, index) in locations" style="background: none !important;">
            <div v-for="(service, indexService) in location.services">
              <div class="d-flex justify-start align-center hover-select" style="border-bottom: 1px solid gray; transition: 0.3s;" v-for="(userform, indexUserForm) in service.userforms">
                <td style="width: 6%; text-align: center" class="py-1">{{userform.id}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{location.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{location.city}}, {{location.state}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{service.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{userform.name}}</td>
                <td style="width: 20%; text-align: center" class="py-1">{{userform.formfields.length}}</td>
                <td style="width: 9%; margin: 0 auto;" class="d-flex flex-column align-center">
                  <v-btn class="my-1" color="#707070" :to="'/dashboard/vendors/applications/' + userform.id" style="color: white; width: 100%;">View/Edit</v-btn>
                  <v-btn class="my-1" color="primary" style="width: 100%;">Delete</v-btn>
                </td>
              </div>
            </div>
          </tr>
          </tbody>
        </v-simple-table>
      </template>
    </v-card>

    <v-row class="d-flex justify-center align-center" style="width: 100%; background:#a61c00;" v-if="loadApplicationTemplates">
      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>
      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Application Templates</v-card-title>
    </v-row>
    <v-card class="mt-8" v-if="loadApplicationTemplates" style="width: 100%;">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Application Templates</v-card-title>
      <template v-if="loading" style="width: 100%;">
        <v-simple-table class="pt-16" style="width: 100%;">
          <thead style="width: 100%; max-width: 100%;">
          <tr class="d-flex " style="width: 100%; max-width: 100%;">
            <th style="color: #a61c00;  text-align: center">Id</th>
            <th style="color: #a61c00;  text-align: center">Service</th>
            <th style="color: #a61c00;  text-align: center">Application Name</th>
            <th style="color: #a61c00;  text-align: center">#Questions</th>
            <th style="color: #a61c00; ">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr   v-for="(app, index) in applicationTemplates" style="width: 100%; background: none !important;">
                <td style="width: 10%; text-align: center" class="py-1">{{app.id}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{app.service_name}}</td>
                <td style="width: 20%; text-align: center" class="py-1">{{app.service_name}}</td>
                <td v-if="app.applicationtemplatesformfields" style="width: 25%; text-align: center" class="py-1">{{app.applicationtemplatesformfields.length}}</td>
                <td style="width: 30%; margin: 0 auto;" class="d-flex align-center">
                  <v-btn class="mx-2" color="#707070" :to="'/dashboard/vendors/applications/' + app.id" style="color: white; width: 100%;">View/Edit</v-btn>
                  <v-btn class="mx-2" color="primary" style="width: 100%;">Delete</v-btn>
                </td>
          </tr>
          </tbody>
        </v-simple-table>
      </template>
    </v-card>

    <v-row class="d-flex justify-center align-center" style="width: 100%; background:#a61c00;" v-if="loadYourCompanyTemplates">
      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>
      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Your Company Application Templates</v-card-title>
    </v-row>
    <v-card class="mt-8" v-if="loadYourCompanyTemplates">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Applications for All Locations</v-card-title>
      <template v-if="loading">
        <v-simple-table class="pt-16">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 6%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Service</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Application Name</th>
            <th style="color: #a61c00; width: 25%; text-align: center">#Questions</th>
            <th style="color: #a61c00; width: 9%;">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="(location, index) in locations" style="background: none !important;">
            <div v-for="(service, indexService) in location.services">
              <div class="d-flex justify-start align-center hover-select" style="border-bottom: 1px solid gray; transition: 0.3s;" v-for="(userform, indexUserForm) in service.userforms">
                <td style="width: 6%; text-align: center" class="py-1">{{userform.id}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{location.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{location.city}}, {{location.state}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{service.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{userform.name}}</td>
                <td style="width: 20%; text-align: center" class="py-1">{{userform.formfields.length}}</td>
                <td style="width: 9%; margin: 0 auto;" class="d-flex flex-column align-center">
                  <v-btn class="my-1" color="#707070" :to="'/dashboard/vendors/applications/' + userform.id" style="color: white; width: 100%;">View/Edit</v-btn>
                  <v-btn class="my-1" color="primary" style="width: 100%;">Delete</v-btn>
                </td>
              </div>
            </div>
          </tr>
          </tbody>
        </v-simple-table>
      </template>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'applications',
    layout: 'app',
    data () {
      return {
        locations: [],
        services: [],
        userForms: [],
        finishedFormFields: false,
        totalLength: 0,
        valueServices: 0,
        valueUserForms: 0,
        valueFormFields: 0,
        valueApplicationFormFields: 0,
        loading: false,
        loadApplicationLocations: true,
        loadApplicationTemplates: false,
        loadYourCompanyTemplates: false,
        applicationTemplates: [],
        companyTemplates: [],
      }
    },
    mounted() {
      this.getLocations(this.currentUser.companies_id);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getLocations(id) {
        await this.$http.get('http://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
          .then(async (response) => {
            console.log(response.data.location, 'locations');
            for(let i=0; i<response.data.location.length; i++) {
              this.locations.push(response.data.location[i]);
              console.log(this.locations, 'this.locations');
              console.log(this.valueServices, 'this.valueServices')
              await this.getServices(response.data.location[i].id)
              this.valueServices++;
            }
          })
          .catch(err => {
            console.log('err get locations', err);
          })
        console.log(this.userForms, 'userForms with formfields Locations');
        console.log(this.locations, 'locations Locations');
        this.loading = true;
      },
      async getServices(id) {
        await this.$http.get('http://www.sowerkbackend.com/api/services/byLocationId/' + id)
          .then(async (response) => {
            console.log(response.data, 'services');
            for(let i=0; i<response.data.length; i++) {
              let service = {
                id: response.data[i].id,
                name: response.data[i].name,
                userforms: []
              }
              this.services.push(service)
              this.locations[this.valueServices].services[i] = service;
              console.log(this.services, 'this.services', this.locations, 'this.locations');
              console.log(this.valueUserForms, 'valueUserForms');
              await this.getUserforms(response.data[i].id)
              this.valueUserForms++
            }
          })
          .catch(err => {
            console.log('err get services', err);
          })
      },
      async getUserforms(id) {
        await this.$http.get('http://www.sowerkbackend.com/api/userforms/byServiceId/' + id)
          .then(async (response) => {
            console.log(response.data, 'userforms response.data');
            for(let i=0; i<response.data.length; i++) {
              let userForm = {
                active: response.data[i].active,
                id: response.data[i].id,
                name: response.data[i].name,
                service_id: response.data[i].service_id,
                formfields: []
              }
              await this.userForms.push(userForm);
              console.log(this.valueServices, 'this.valueServices', this.valueUserForms, 'this.valueUserForms', this.locations, 'this.locations')
              await this.locations[this.valueServices].services[this.valueUserForms].userforms.push(userForm);
              console.log(this.userForms, 'userForms', this.locations, 'this.locations');
              await this.getFormFields(response.data[i].id);
            }
            this.finishedFormFields = true;
            console.log(this.userForms, 'userForms with formfields');
          })
          .catch(err => {
            console.log('err get userforms', err);
          })
      },
      async getFormFields(id) {
        await this.$http.get('http://www.sowerkbackend.com/api/formfields/byUserFormId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for userform', id);
            this.userForms[this.valueFormFields].formfields = response.data;
            this.valueFormFields++
            console.log(this.valueFormFields, 'valueFormFields');
            this.totalLength += response.data.length;
            console.log(this.totalLength, 'totalLength');
          })
          .catch(err => {
            console.log('err get form fields', err);
          })
      },
      async loadApplicationLocationsFunction() {
        this.loadApplicationLocations = true;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = false;
      },
      async loadYourCompanyTemplatesFunction() {
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = true;

      },
      async loadApplicationTemplatesFunction() {
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = true;
        this.loadYourCompanyTemplates = false;
        await this.getApplicationTemplates();
      },
      async getApplicationTemplates() {
        await this.$http.get('http://www.sowerkbackend.com/api/applicationtemplates')
          .then(async(response) => {
            console.log(response, 'applicationtemplates');
            this.applicationTemplates = response.data;
            // for(let i=0; i<response.data.length; i++) {
            //   let userForm = {
            //     // active: response.data[i].active,
            //     id: response.data[i].id,
            //     service_name: response.data[i].service_name,
            //     form_name: response.data[i].form_name,
            //     applicationtemplatesformfields: []
            //   }
            //   await this.applicationTemplates.push(userForm);
            //   //await this.getApplicationTemplatesFormFields(response.data[i].id);
            // }
            console.log(this.applicationTemplates)
          })
          .catch(err => {
            console.log(err, 'err in applicationTemplates')
          })
      },
      async getApplicationTemplatesFormFields(id) {

        await this.$http.get('http://www.sowerkbackend.com/api/applicationtemplatesformfields/byApplicationTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for userform', id);
            this.applicationTemplates[this.valueApplicationFormFields].applicationtemplatesformfields = response.data;
            this.valueApplicationFormFields++
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      }
    }
  }

</script>

<style scoped>
  .hover-select:hover {
    background-color: lightgrey !important;
  }
</style>
