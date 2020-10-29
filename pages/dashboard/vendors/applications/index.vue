<template>
  <v-container style="width: 100%;" overflow-y-auto>
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>


    <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;">
          <v-row style="width: 100%; height: auto;" class="d-flex flex align-center">
            <v-img class="" src="/VendorApplicationsLogo-159.png" style="width: 10%; height: 30vh;"></v-img>
            <v-col class="d-flex flex-column justify-center">
              <p class="mb-8">Vetted Vendors get the job done right, and SOWerk is designed to give you the power to ensure every service provider or supplier meets your requirements. Through this interface, you can build an approved Vendor application specific to a service or supplier category, turn applications on or off, and even customize any application to one of your locations. Create and use a company template that can be implemented across all locations, or in the event you have a special requirement for only one of your locations (i.e. local permit requirement) take that company template and add a custom question that is only visible to that facility.</p>
              <v-col class="d-flex flex-column align-center">
                <v-btn @click="loadApplicationLocationsFunction" class="py-8 my-3" color="primary" style="width: 100%; border-radius: 10px;">Your Vendor Applications<v-icon>mdi-arrow-down</v-icon></v-btn>
                <v-btn @click="loadApplicationTemplatesFunction" class="py-8 my-3" color="#707070" style="color:white; width: 100%;; border-radius: 10px;" >SOWerk Application Templates<v-icon>mdi-arrow-down</v-icon></v-btn>
                <v-btn @click="loadYourCompanyTemplatesFunction" class="py-8 my-3" color="primary" style="width: 100%;; border-radius: 10px;" >Company Approved Templates<v-icon>mdi-arrow-down</v-icon></v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-card>

<!--    <v-row class="d-flex flex-column align-center mt-2 mb-4" style="background: #A61C00; width: 100%;">-->
<!--      <v-card-title style="color: white;">Manage Vendor Applications</v-card-title>-->
<!--    </v-row>-->
    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loadApplicationLocations">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Your Vendor Applications</v-card-title>
      <v-btn @click="addNewVendorFormLoading" class="py-6 mb-2" color="primary" style="position: absolute; right: 10px; top: -20px; width: 25%;"><v-icon>mdi-plus</v-icon>Add New Vendor Form</v-btn>
      <template v-if="loading">
        <v-simple-table class="pt-16">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 6%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Application Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Category</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
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
                <td style="width: 15%; text-align: center" class="py-1">{{userform.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{service.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">{{location.name}}</td>
                <td style="width: 15%; text-align: center" class="py-1">
                  <div class="d-flex flex-column align-center">
                    <p>{{location.address}}</p>
                    <p>{{location.city}}, {{location.state}}</p>
                  </div>
                </td>
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
    </transition>
<!--    <v-row class="d-flex justify-center align-center mt-4" style="width: 100%; background:#a61c00;" v-if="loadApplicationTemplates">-->
<!--      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>-->
<!--      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Application Templates</v-card-title>-->
<!--    </v-row>-->
    <transition name="slide-fade">
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
    </transition>
<!--    <v-row class="d-flex justify-center align-center mt-4" style="width: 100%; background:#a61c00;" v-if="loadYourCompanyTemplates">-->
<!--      <v-btn text @click="loadApplicationLocationsFunction" class="" color="#707070" style="color:white; width: 20%; border-radius: 10px;" ><- Back</v-btn>-->
<!--      <v-card-title class="center" style="color: white; width: 80%; text-align: center;">Your Company Application Templates</v-card-title>-->
<!--    </v-row>-->
    <transition name="slide-fade">
      <v-card class="mt-8" v-if="loadYourCompanyTemplates">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Company Approved Templates</v-card-title>
      <v-btn class="py-6 mb-2" color="primary" style="position: absolute; right: 10px; top: -20px; width: 25%;"><v-icon>mdi-plus</v-icon>Add New Template</v-btn>
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
    </transition>

    <transition name="slide-fade">
      <v-card style="box-shadow: 4px 4px 4px grey; border: 1px solid grey; position:absolute; top: 5vh; left: 20px; width: 95%; height: 70vh;" v-if="addToLocationLoad">
      <v-card-title class="mb-8" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius: 10px;">Categories For All Locations</v-card-title>
      <template v-if="loading">
        <v-simple-table class="pt-16" style="width: 95%; margin: 0 auto;">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 10%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 20%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Category</th>
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
    </transition>

    <transition name="slide-fade">
      <v-card class="mt-12 d-flex flex-column" v-if="addNewVendorFormLoad">
      <v-card-title class="mb-10" style="color: white; background-color: #a61c00; width: 50%; text-align: center; position: absolute; left: 10px; top: -20px; border-radius-top-left: 20px; border-radius-top-right: 20px;">Add New Vendor Form</v-card-title>
      <v-card-title v-if="step1" class="my-10 mt-14" style="position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 1 - Choose a Location</v-card-title>
      <v-card-title v-if="step2" class="my-10 mt-14" style="position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 2 - Enter in the form name</v-card-title>
      <v-card-title v-if="step3" class="my-10 mt-14" style="position: absolute; left: 10px; text-align: center; width: 80%; color: white; background-color: #a61c00; border-radius-bottom-left: 20px; border-radius-bottom-right: 20px;">Step 3 - Drag and Drop questions and edit them to your liking, then hit submit!</v-card-title>
      <v-simple-table class="py-16 mt-16" style="width: 95%; margin: 0 auto;" v-if="addNewVendorFormLoad && step1">
          <thead >
          <tr class="d-flex justify-start">
            <th style="color: #a61c00; width: 10%; text-align: center">Id</th>
            <th style="color: #a61c00; width: 20%; text-align: center">Location Name</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Location Address</th>
            <th style="color: #a61c00; width: 15%; text-align: center">Category</th>
<!--            <th style="color: #a61c00; width: 40%;">Actions</th>-->
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
                <v-btn @click="assignToServiceVendor(service.id)" class="my-1" color="#707070" style="color: white; width: 100%;">Assign to this Service & Location</v-btn>
              </td>
            </div>
          </tr>
          </tbody>
        </v-simple-table>

      <v-form class="py-16 mt-16 d-flex flex-column align-center" style="width: 80%; margin: 0 auto;" v-if="addNewVendorFormLoad && step2">
        <v-text-field
          label="User Form Name Goes Here"
          v-model="assignUserform.name"
          style="width: 100%; align-self: center;"
        >
        </v-text-field>
        <v-btn @click="assignToServiceVendorSubmit" color="primary" style="width: 50%;" class="my-2 px-10 py-7" rounded>Submit</v-btn>
      </v-form>

      <v-container class="py-16 mt-16" overflow-y-auto v-if="addNewVendorFormLoad && step3">
        <v-row class="d-flex justify-center" style="width: 100%;">
          <v-col style="width: 55%;">
            <v-card class="d-flex flex-column align-center">
              <v-card-title>UserForm - #{{newAssignUserForm.id}} {{newAssignUserForm.name}}</v-card-title>
              <draggable
                class="dragArea list-group"
                group="formName"
                :list="newAssignUserForm.formfields"
                v-model="newAssignUserForm.formfields"
                @change="reorderFormField"
              >
                <v-card style="width: 100%;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in {...newAssignUserForm.formfields}">
                  <v-card-text class="d-flex justify-space-between" style="">
                    <v-icon style="width: 10%;">mdi-cursor-move</v-icon>
                    <p style="width: 70%; text-align: center">{{index}} - {{form.name}} - {{form.id}}</p>
                    <v-btn style="width: 10%;" text @click="openEditFormField(form, index)"><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                  </v-card-text>
                </v-card>
              </draggable>
            </v-card>
            <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
          </v-col>
          <v-col style="width: 35%;" class="d-flex flex-column align-center">
            <draggable
              style="width: 100%;"
              class="dragArea list-group"
              :list="formTypes"
              :group="{ name: 'formName', pull: 'clone', put: false }"
            >
              <v-card style="width: 100%;" class="my-2 d-flex flex-column align-center" v-for="(form, index) in formTypes">
                <v-card-text class="d-flex justify-space-between" style="">
                  <v-icon style="width: 10%;">mdi-cursor-move</v-icon>
                  <p>{{form.name}}</p>
                  <v-btn style="width: 10%;" text><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                </v-card-text>
              </v-card>
            </draggable>
            <rawDisplayer title="List 2" :value="formTypes" />
            <v-btn @click="saveUserForm" style="width: 100%;" color="primary" rounded class="my-2">Save</v-btn>
            <v-btn :href="'../../vendors/applications'" style="width: 100%;" color="primary" rounded outlined class="my-2">Go Back To All Applications</v-btn>
            <v-progress-circular
              v-if="saveLoad === false"
              indeterminate
              color="primary"
              :size="20"
            ></v-progress-circular>
          </v-col>
        </v-row>

        <v-card v-if="openEditFormFieldLoad" class="d-flex flex-column align-center justify-center" style="width: 70vw; height: 50vh; position: fixed; left: 25vw; top: 25vh; z-index: 1000;">
          <v-card-text>Edit Question #{{openEditFormFieldVal.order}} For Form - {{openEditFormFieldVal.name}}</v-card-text>
          <v-form style="width: 90%;" class="d-flex flex-wrap justify-center">
            <v-text-field v-model="openEditFormFieldVal.name" class="mx-2" style="width: 45%;" :label="'Question'" :name="openEditFormFieldVal.name"></v-text-field>
            <v-checkbox v-model="openEditFormFieldVal.required" class="mx-2" style="width: 45%;" :label="'Required Question?'" :name="openEditFormFieldVal.required"></v-checkbox>
            <v-select :items="typeSelect" v-model="openEditFormFieldVal.type" class="mx-2" style="width: 45%;" :label="'Type of Question'" :name="openEditFormFieldVal.type"></v-select>
          </v-form>
          <div style="width: 100%;" class="d-flex justify-space-between">
            <v-btn @click="deleteSingleFormfield(openEditFormFieldVal)" class="ml-2 mb-2" color="primary" outlined>Delete Form Field</v-btn>
            <v-btn @click="updateSingleFormfield(openEditFormFieldVal)" class="mr-2 mb-2" color="green" outlined>Update Form Field</v-btn>
          </div>
          <v-btn text style="font-size: 30px; position: absolute; right: 10px; top: 10px;" @click="closeEditFormField">X</v-btn>
        </v-card>

      </v-container>
    </v-card>
    </transition>

  </v-container>
</template>

<script>

import CustomFormCard from '@/components/dashboard/CustomFormCard'
import draggable from "vuedraggable"

  export default {
    name: 'applications',
    layout: 'app',
    components: {
      CustomFormCard,
      draggable
    },
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
        addNewVendorFormLoad: false,
        step1: false,
        step2: false,
        step3: false,
        assignServiceId: Number,
        assignUserform: {
          name: '',
        },
        newAssignUserForm: {},
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
        formTypes: [
          {
            id: 0,
            name: 'Input Field',
            userform_id: Number,
            options: "",
            order: Number,
            required: true,
            type: 'text',
            value: ''
          },
          {
            id: 0,
            name: 'Select Field',
            userform_id: Number,
            options: "[]",
            order: Number,
            required: true,
            type: 'select',
            value: ''
          },
          {
            id: 0,
            name: 'File Upload',
            userform_id: Number,
            options: "",
            order: Number,
            required: true,
            type: 'file',
            value: ''
          },
        ],
        originalUserForms: {},
        step3finishedFormFields: false,
        step3totalLength: 0,
        filteredUniqueUserForms: [],
        filteredSameUserForms: [],
        openEditFormFieldLoad: false,
        openEditFormFieldVal: {},
        typeSelect: [
          'text',
          'number',
          'date'
        ],
        saveLoad: true,
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
        this.addNewVendorFormLoad = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step3finishedFormFields = false;
      },
      async loadYourCompanyTemplatesFunction() {
        if(this.loadYourCompanyTemplates != true) {
          await this.getCompanyTemplates();
        }
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
        this.loadYourCompanyTemplates = true;
        this.addNewVendorFormLoad = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step3finishedFormFields = false;

      },
      async loadApplicationTemplatesFunction() {
        if(this.loadApplicationTemplates != true) {
          await this.getApplicationTemplates();
        }
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = true;
        this.loadYourCompanyTemplates = false;
        this.addNewVendorFormLoad = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step3finishedFormFields = false;
      },
      async addNewVendorFormLoading() {
        this.addNewVendorFormLoad = true;
        this.step1 = true;
        this.loadApplicationLocations = false;
        this.loadApplicationTemplates = false;
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
                let formfield = {
                  type: template.applicationtemplatesformfields[i].type,
                  name: template.applicationtemplatesformfields[i].name,
                  value: template.applicationtemplatesformfields[i].value,
                  required: template.applicationtemplatesformfields[i].required,
                  options: template.applicationtemplatesformfields[i].options,
                  order: template.applicationtemplatesformfields[i].order,
                }
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + response.data.companytemplate.id, formfield)
                  .then(response => {
                    console.log('success in posting formfields to company templates userform', response.data.formfield)
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
        console.log('template form', this.addLocation)
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
              if(this.addLocation.applicationtemplatesformfields) {
                for(let i=0; i<this.addLocation.applicationtemplatesformfields.length; i++) {
                  let formfield = {
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
              }
              if(this.addLocation.companytemplatesformfields) {
                for(let i=0; i<this.addLocation.companytemplatesformfields.length; i++) {
                  let formfield = {
                    userform_id: response.data.userform.id,
                    type: this.addLocation.companytemplatesformfields[i].type,
                    name: this.addLocation.companytemplatesformfields[i].name,
                    value: this.addLocation.companytemplatesformfields[i].value,
                    required: this.addLocation.companytemplatesformfields[i].required,
                    options: this.addLocation.companytemplatesformfields[i].options,
                    order: this.addLocation.companytemplatesformfields[i].order,
                  }

                  console.log(formfield, 'formfield')
                  await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + response.data.userform.id, formfield)
                    .then(res => {
                      console.log(res, 'successful in posting formfields to userform')
                    })
                    .catch(err => {
                      console.log(err, 'err in posting formfields to userform')
                    })
                }
                await this.$router.go();
              }
            })
            .catch(err => {
              console.log(err, 'err in adding userform from template')
            })
      },
      async assignToServiceVendor(id) {
        this.step1 = false;
        this.step2 = true;
        this.assignServiceId = id
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
      },
      async assignToServiceVendorSubmit() {
        console.log(this.assignUserform, 'userform for assigning')
        await this.$http.post('https://www.sowerkbackend.com/api/userforms/byServiceId/' + this.assignServiceId, this.assignUserform)
          .then(response => {
            console.log(response.data, 'userform posting on assign success')
            this.newAssignUserForm = response.data.userform;
            this.step2=false;
            this.step3=true;
            this.getUserformsVal(response.data.userform.id)
          })
          .catch(err => {
            console.log(err, 'err in posting new userform on assign')
          })
      },
      async getUserformsVal(id) {
        console.log(id, 'id')
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            console.log(response, 'userforms');
            this.newAssignUserForm = {...response.data };
            this.step3finishedFormFields = true;
            this.newAssignUserForm.formfields = this.newAssignUserForm.formfields.sort((a,b) => {
              return a.order - b.order
            })
            console.log(this.newAssignUserForm, 'this.userForms sort')
            if(this.newAssignUserForm.formfields[0] === 'There are no formfields') {
              this.newAssignUserForm.formfields[0] = {
                id: 0,
                name: "Hey I'm blank",
                options: "",
                order: 0,
                required: true,
                type: 'text',
                userform_id: this.newAssignUserForm.id,
                value: ''
              }
              this.originalUserForms = [{
                id: 0,
                name: "Hey I'm blank",
                options: "",
                order: 0,
                required: true,
                type: 'text',
                userform_id: this.newAssignUserForm.id,
                value: ''
              }]
            } else {
              this.getFormFieldsVal(response.data.id)
            }
          })
          .catch(err => {
            console.log('err get services', err);
          })
        console.log('this.userForms', this.newAssignUserForm)
      },
      async getFormFieldsVal(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for userform', id);
            this.originalUserForms = response.data;
            this.step3totalLength += response.data.length;
          })
          .catch(err => {
            console.log('err get services', err);
          })
      },
      async saveUserForm() {
        this.saveLoad = false;
        console.log('this.userForms', this.newAssignUserForm);
        console.log('this.originaluserForms', this.originalUserForms);
        this.newAssignUserForm.formfields.forEach(async (formfield, index) => {
          formfield["userform_id"] = this.newAssignUserForm.id
          formfield.order = index;
          if(this.originalUserForms.some(val => (val.id === 0))) {
            let newFormField = {
              userform_id: formfield.userform_id,
              name: formfield.name,
              options: formfield.options,
              order: formfield.order,
              required: formfield.required,
              type: formfield.type,
              value: formfield.value
            }
            this.filteredUniqueUserForms.push(formfield)
            await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + this.newAssignUserForm.id, newFormField)
              .then(response => {
                console.log(response, 'posting new formfield for userform');
              })
              .catch(err => {
                console.log(err, 'err');
              })
          } else {
            this.filteredSameUserForms.push(formfield)
            const changes = {
              name: formfield.name,
              options: formfield.options,
              order: formfield.order,
              required: formfield.required,
              type: formfield.type,
              value: formfield.value
            }
            await this.$http.put('https://www.sowerkbackend.com/api/formfields/' + formfield.id, changes)
              .then(response => {
                console.log(response, 'updating formfield ', formfield.id)
              })
              .catch(err => {
                console.log('error in updating formfield', err)
              })
          }
        })
        console.log('this.userForms after loop', this.userForms);
        console.log(this.filteredUniqueUserForms, 'filtered unique formfields');
        console.log(this.filteredSameUserForms, 'filtered same formfields')
        setTimeout(() => {
          this.saveLoad = true;
          this.$router.go();
        }, 1000)
      },
      async reorderFormField({moved}) {
        console.log(moved, 'moved information for formfield')
        for(let i=0; i<this.newAssignUserForm.formfields.length; i++) {
          console.log(this.newAssignUserForm.formfields[i])
          this.newAssignUserForm.formfields[i].order = i;
        }
        console.log(this.newAssignUserForm.formfields, 'updating userForms.formfields');
      },
      async updateFormField() {
        console.log(this.items, 'updating this.items');
      },
      async openEditFormField(formfieldVal, position) {
        console.log(formfieldVal, 'openEditFormField formfield', Number(position));
        // window.scrollTo({top: 0, behavior: 'smooth'});
        this.openEditFormFieldVal = formfieldVal;
        this.openEditFormFieldVal.order =  Number(position);
        this.openEditFormFieldLoad = true
      },
      async closeEditFormField() {
        this.openEditFormFieldLoad = false
      },
      async deleteSingleFormfield(formfieldVal) {
        console.log('deleteSingleFormfield', formfieldVal);
        if(formfieldVal.id === 0) {
          this.newAssignUserForm.formfields.splice(formfieldVal.order, 1);
          console.log('this.userForms on delete', this.userForms);
        } else {
          let confirmDelete = confirm('We noticed this formfield is saved to your userform. If you confirm this, it will delete the question permanently.');
          if(confirmDelete === true) {
            this.newAssignUserForm.formfields.splice(formfieldVal.order, 1);
            console.log('this.userForms on delete', this.newAssignUserForm);
            this.$http.delete('https://www.sowerkbackend.com/api/formfields/' + formfieldVal.id)
              .then(response => {
                console.log('response for delete formfield', response)
              })
              .catch(err => {
                console.log('err for delete formfield', err)
              })
          }
        }
        this.openEditFormFieldLoad = false;
        // this.saveUserForm();
      },
      async updateSingleFormfield(formfieldVal) {
        console.log('updateSingleFormfield', formfieldVal);
        this.newAssignUserForm.formfields[formfieldVal.order] = formfieldVal
        this.openEditFormFieldLoad = false;
      }
    }
  }

</script>

<style scoped>
  .hover-select:hover {
    background-color: lightgrey !important;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
