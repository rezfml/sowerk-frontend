<template>
  <v-container style="width: 100%;" overflow-y-auto>
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>


        <v-card class="mt-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;">
          <v-row style="width: 100%; height: auto;" class="d-flex">
            <v-img class="" src="/VendorApplicationsLogo-159.png" style="width: 10%; height: 30vh;"></v-img>
            <v-col class="d-flex flex-column justify-center">
              <p class="mb-8">Use SOWerk Vendor requirements to manage your application forms that are required for vendors to become an approved connection. Your Vendor Applications list all access-granted applications you currently have. Sowerk Application Templates list the templates we have provided for every company as a baseline for what you may require for a service form. Company Approved Templates list the templates that you (or other access-granted users) have added to the company wide directory to use as needed for any service form you may require.</p>
              <div class="d-flex flex-column align-center">
                <v-btn @click="loadApplicationLocationsFunction" class="py-8 my-3" color="primary" style="width: 100%; border-radius: 10px;">Your Vendor Applications<v-icon>mdi-arrow-down</v-icon></v-btn>
                <v-btn @click="loadApplicationTemplatesFunction" class="py-8 my-3" color="#707070" style="color:white; width: 100%;; border-radius: 10px;" >SOWerk Application Templates<v-icon>mdi-arrow-down</v-icon></v-btn>
                <v-btn @click="loadYourCompanyTemplatesFunction" class="py-8 my-3" color="primary" style="width: 100%;; border-radius: 10px;" >Company Approved Templates<v-icon>mdi-arrow-down</v-icon></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>

<!--    <v-row class="d-flex flex-column align-center mt-2 mb-4" style="background: #A61C00; width: 100%;">-->
<!--      <v-card-title style="color: white;">Manage Vendor Applications</v-card-title>-->
<!--    </v-row>-->
    <v-card class="mt-8" v-if="loadApplicationLocations">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Your Vendor Applications</v-card-title>
      <template v-if="loading">
        <v-simple-table class="pt-16">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 6%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Service</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Application Name</th>
            <th style="color: #a61c00; width: 10%; text-align: center">#Questions</th>
            <th style="color: #a61c00; width: 14%; text-align: center">Active?</th>
            <th style="color: #a61c00; width: 10%;">Actions</th>
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
                <td style="width: 15%; text-align: center" class="py-1">{{userform.formfields.length}}</td>
                <td style="width: 9%;" class="py-1 center">
                  <v-switch
                    v-model="userform.active"
                    @change="userformEditActive(userform)"
                  >
                  </v-switch>
                </td>
                <td style="width: 10%;" class="d-flex flex-column align-center">
                  <v-btn class="my-1" color="#707070" :to="'/dashboard/vendors/applications/' + userform.id" style="color: white; width: 100%;">View/Edit</v-btn>
                  <v-btn @click="deleteUserForm(userform)" class="my-1" color="primary" style="width: 100%;">Delete</v-btn>
                </td>
              </div>
            </div>
          </tr>
          </tbody>
        </v-simple-table>
      </template>
    </v-card>

<!--    <v-row class="d-flex justify-center align-center mt-4" style="width: 100%; background:#a61c00;" v-if="loadApplicationTemplates">-->
<!--      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>-->
<!--      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Application Templates</v-card-title>-->
<!--    </v-row>-->
    <v-card class="mt-8" v-if="loadApplicationTemplates" style="width: 100%;">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Sowerk Application Templates</v-card-title>
      <template v-if="loading" style="width: 100%;">
        <v-data-table
          :headers="headers"
          :items="applicationTemplates"
          :items-per-page="10"
          class="pt-16"
        >
          <template v-slot:item.questions="{item}">
            <p>{{item.applicationtemplatesformfields.length}}</p>
          </template>
          <template v-slot:item.actions="{item}">
            <div class="d-flex">
              <v-icon class="mx-2" style="width: 25%;">mdi-arrow-down</v-icon>
              <v-btn @click="addtoLocationLoad(item)" class="mx-2" color="#707070" style="color:white; width: 37.5%;">Add to a Location</v-btn>
              <v-btn @click="addToCompanyTemplates(item)" class="mx-2" color="primary" style="width: 37.5%;">Add to Company Templates</v-btn>
            </div>
          </template>
        </v-data-table>
      </template>
    </v-card>

<!--    <v-row class="d-flex justify-center align-center mt-4" style="width: 100%; background:#a61c00;" v-if="loadYourCompanyTemplates">-->
<!--      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>-->
<!--      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Your Company Application Templates</v-card-title>-->
<!--    </v-row>-->
    <v-card class="mt-8" v-if="loadYourCompanyTemplates">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Company Approved Templates</v-card-title>
      <v-btn style="position: absolute; right: 10px; top: 10px;" color="primary">Add New Template</v-btn>
      <template v-if="loading" style="width: 100%;">
        <v-data-table
          :headers="headers"
          :items="companyTemplates"
          :items-per-page="10"
          class="pt-16"
        >
          <template v-slot:item.questions="{item}">
            <p>{{item.companytemplatesformfields.length}}</p>
          </template>
          <template v-slot:item.actions="{item}">
            <div class="d-flex">
              <v-btn @click="viewCompanyTemplate(item)" class="mx-2" style="width: 30%;">View/Edit</v-btn>
              <v-btn @click="addtoLocationLoad(item)" class="mx-2" color="#707070" style="color:white; width: 30%;">Add to Location</v-btn>
              <v-btn @click="deleteCompanyTemplates(item)" class="mx-2" color="primary" style="width: 30%;">Delete</v-btn>
            </div>
          </template>
        </v-data-table>
      </template>
    </v-card>

    <v-card style="box-shadow: 4px 4px 4px grey; border: 1px solid grey; position:absolute; top: 5vh; left: 20px; width: 95%; height: 70vh;" v-if="addToLocationLoad">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Services For All Locations</v-card-title>
      <template v-if="loading">
        <v-simple-table class="pt-16" style="width: 95%; margin: 0 auto;">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 10%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 20%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Service</th>
            <th style="color: #a61c00; width: 40%;">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="(location, index) in addLocations" style="background: none !important;">
            <div class="d-flex justify-start align-center hover-select" style="border-bottom: 1px solid gray; transition: 0.3s;" v-for="(service, indexService) in location.services">
                <td style="width: 10%; text-align: center" class="py-1">{{service.id}}</td>
                <td style="width: 20%; text-align: center" class="py-1">{{location.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{location.city}}, {{location.state}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{service.name}}</td>
                <td style="width: 40%; margin: 0 auto;" class="d-flex flex-column align-center">
                  <v-btn @click="assignToService(service.id, service.name)" class="my-1" color="#707070" style="color: white; width: 100%;">Assign to this Service & Location</v-btn>
                </td>
            </div>
          </tr>
          </tbody>
        </v-simple-table>
      </template>
      <v-btn text @click="closeAddToLocationLoad" style="position: absolute; top: 10px; right: 10px; font-size: 30px;">X</v-btn>
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
        valueCompanyFormFields: 0,
        loading: false,
        loadApplicationLocations: true,
        loadApplicationTemplates: false,
        loadYourCompanyTemplates: false,
        addToLocationLoad: false,
        addLocation: {},
        applicationTemplates: [],
        companyTemplates: [],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Service', value: 'service_name', class: 'primary--text font-weight-regular' },
          { text: 'Application Name', value: 'form_name', class: 'primary--text font-weight-regular' },
          { text: '#Questions', value: 'questions', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        tableHeaders: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Location', value: 'location', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        addLocations: [

        ],
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
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
          .then(async (response) => {
            console.log(response.data.location, 'locations');
            for(let i=0; i<response.data.location.length; i++) {
              this.locations.push(response.data.location[i]);
              this.addLocations.push(response.data.location[i]);
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
        await this.$http.get('https://www.sowerkbackend.com/api/services/byLocationId/' + id)
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
              this.addLocations[this.valueServices].services[i] = service;
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
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/byServiceId/' + id)
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
        await this.$http.get('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + id)
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
        if(this.loadYourCompanyTemplates != true) {
          await this.getCompanyTemplates();
        }
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = true;

      },
      async loadApplicationTemplatesFunction() {
        if(this.loadApplicationTemplates != true) {
          await this.getApplicationTemplates();
        }
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = true;
        this.loadYourCompanyTemplates = false;
      },
      async getApplicationTemplates() {
        this.applicationTemplates = [];
        await this.$http.get('https://www.sowerkbackend.com/api/applicationtemplates')
          .then(async(response) => {
            console.log(response, 'applicationtemplates');
            for(let i=0; i<response.data.length; i++) {
               let userForm = {
                 active: response.data[i].active,
                 id: response.data[i].id,
                 service_name: response.data[i].service_name,
                 form_name: response.data[i].form_name,
                 applicationtemplatesformfields: []
               }
               this.applicationTemplates.push(userForm);
               await this.getApplicationTemplatesFormFields(response.data[i].id, i);
             }
            console.log(this.applicationTemplates, 'application templates this.applicationtemplates')
          })
          .catch(err => {
            console.log(err, 'err in applicationTemplates')
          })
      },
      async getApplicationTemplatesFormFields(id, indexPostion) {

        await this.$http.get('https://www.sowerkbackend.com/api/applicationtemplatesformfields/byApplicationTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for application template userform', id);
            this.applicationTemplates[indexPostion].applicationtemplatesformfields = response.data;
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      },
      async getCompanyTemplates() {
        this.companyTemplates = [];
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.currentUser.companies_id)
          .then(async(response) => {
            console.log(response, 'companyTemplates');
             for(let i=0; i<response.data.length; i++) {
               let userForm = {
                 active: response.data[i].active,
                 id: response.data[i].id,
                 service_name: response.data[i].service_name,
                 form_name: response.data[i].form_name,
                 companytemplatesformfields: []
               }
               this.companyTemplates.push(userForm);
               await this.getCompanyTemplatesFormFields(response.data[i].id, i);
             }
            console.log(this.companyTemplates, 'application templates for company')
          })
          .catch(err => {
            console.log(err, 'err in companyTemplates')
          })
      },
      async getCompanyTemplatesFormFields(id, indexPostion) {

        await this.$http.get('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for company userform', id);
            this.companyTemplates[indexPostion].companytemplatesformfields = response.data;
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      },
      async addToCompanyTemplates(template) {
        const companyTemplate = {
          service_name: template.service_name,
          form_name: template.form_name,
          companies_id: this.currentUser.companies_id,
          active: true,
        }
        console.log(template);
        await this.$http.post('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.currentUser.companies_id, companyTemplate)
          .then(async (response) => {
            console.log(response, 'success in adding to company templates')
            if(template.applicationtemplatesformfields.length > 0) {
              for(let i=0; i<template.applicationtemplatesformfields.length; i++) {
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + response.data.companytemplate.id)
                  .then(response => {
                    console.log('success in posting formfields to company templates userform', response)
                  })
                  .catch(err => {
                    console.log(err, 'err in posting formfields to company templates userform')
                  })
              }
            }
            alert('Successfully added to company templates')
          })
          .catch(err => {
            console.log(err, 'err for adding to company templates')
          })
      },
      async deleteCompanyTemplates(template) {
        console.log(template, 'template for delete company')
        for(let i=0; i<template.companytemplatesformfields.length; i++) {
          await this.$http.delete('https://www.sowerkbackend.com/api/companytemplatesformfields/' + template.companytemplatesformfields[i].id)
            .then(response => {
              console.log('success in deleting formfield company template')
            })
            .catch(err => {
              console.log('err in deleting formfield company template', err)
            })
        }
        await this.$http.delete('https://www.sowerkbackend.com/api/companytemplates/'+ template.id)
          .then(response => {
            console.log(response, 'success in deleting company template')
            this.$router.go();
          })
          .catch(err => {
            console.log(err, 'err in deleting this company template')
          })
      },
      async deleteUserForm(userform) {
        console.log(userform, 'userform');
        for(let i=0; i<userform.formfields.length; i++) {
          await this.$http.delete('https://www.sowerkbackend.com/api/formfields/' + userform.formfields[i].id)
            .then(response => {
              console.log(response, 'success in deleting formfields');
            })
            .catch(err => {
              console.log(err, 'err in deleting formfields')
            })
        }
        await this.$http.delete('https://www.sowerkbackend.com/api/userforms/' + userform.id)
          .then(response => {
            console.log(response, 'success in deleting userform')
            this.$router.go();
          })
          .catch(err => {
            console.log(err, 'err in deleting userform');
          })
      },
      async addtoLocationLoad(location) {
        this.addToLocationLoad = true;
        console.log(this.addLocations, 'locations on load add')
        this.addLocation = location
        console.log('template form', location)
      },
      async closeAddToLocationLoad() {
        this.addToLocationLoad = false;
      },
      async assignToService(id, name) {
        const userform = {
          service_id: id,
          active: true,
          name: this.addLocation.form_name
        }
          await this.$http.post('https://www.sowerkbackend.com/api/userforms/byServiceId/' + id, userform)
            .then(async(response) => {
              console.log(response, 'success in adding userform from template')
              for(let i=0; i<this.addLocation.applicationtemplatesformfields.length; i++) {
                const formfield = {
                  userform_id: response.data.userform.id,
                  type: this.addLocation.applicationtemplatesformfields[i].type,
                  name: this.addLocation.applicationtemplatesformfields[i].name,
                  value: this.addLocation.applicationtemplatesformfields[i].value,
                  required: this.addLocation.applicationtemplatesformfields[i].required,
                  options: this.addLocation.applicationtemplatesformfields[i].options,
                  order: this.addLocation.applicationtemplatesformfields[i].order,
                }
                await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + response.data.userform.id, formfield)
                  .then(res => {
                    console.log(res, 'successful in posting formfields to userform')
                  })
                  .catch(err => {
                    console.log(err, 'err in posting formfields to userform')
                  })
              }
              await this.$router.go();
            })
            .catch(err => {
              console.log(err, 'err in adding userform from template')
            })
      },
      async userformEditActive(userform) {
        console.log(userform.active, 'active userform');
        const changes = {
          active: userform.active
        }
        await this.$http.put('https://www.sowerkbackend.com/api/userforms/' + userform.id, changes)
          .then(response => {
            console.log(response, 'success, form is now active changed')
          })
          .catch(err => {
            console.log(err, 'err in changing form')
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
