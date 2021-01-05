<template>
  <v-container overflow-y-auto>
    <v-row>
      <v-col cols="6">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="30vw"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="6">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="30vw"
        ></v-skeleton-loader>
      </v-col>
    </v-row>

    <transition name="slide-fade">
      <v-row v-if="loading" class="d-flex justify-center wrap-row" style="width: 100%;">
        <v-btn @click="saveUserForm" style="width: 45%;" color="primary" rounded class="mt-n6 mb-2 mx-2 py-8">Save</v-btn>
        <v-btn :href="'../../vendors/applications'" style="width: 45%;" color="#707070" rounded outlined class="mt-n6 mb-2 mx-2 py-8">Exit</v-btn>
      </v-row>
    </transition>

    <transition name="slide-fade">
      <v-divider v-if="loading" style="width: 100%; border: 1px solid #707070"></v-divider>
    </transition>

    <transition name="slide-fade">
      <v-row v-if="loading" class="d-flex justify-center" style="width: 100%;">
        <v-col style="width: 55%;">
          <v-card class="d-flex flex-column align-center" style="width: 100%;">
            <v-card-title style="color: #A61C00; text-align: center">Your Application</v-card-title>
            <v-card-subtitle style="text-align: center">This column represents your questions being asked of a Vendor. You can reorder and edit any question. </v-card-subtitle>

            <v-row style="width: 98%; border-bottom: 1px dashed #A61C00">
              <v-card-title class="d-flex justify-center" style="width: 100%;"><span class="mr-2" style="color:#a61c00;">Application Name:</span></v-card-title>
              <v-text-field style="width: 70%;" v-model="companyTemplate.form_name" clearable></v-text-field>
              <v-card-title class="d-flex justify-center" style="width: 100%;"><span class="mr-2" style="color:#a61c00;">SOWerk Type:</span></v-card-title>
              <v-select
                style="width: 95%;"
                v-model="companyTemplate.vendorType"
                :items="vendorType"
                label="Select A Type That Describes What This Application Provides"
              >
              </v-select>
              <v-card-title class="d-flex justify-center" style="width: 100%;"><span class="mr-2" style="color:#a61c00;">SOWerk Category:</span></v-card-title>
              <v-autocomplete
                style="width: 95%;"
                v-model="companyTemplate.service_name"
                :items="naicsList"
                item-text="name"
                item-value="name"
                label="Select A Category That Describes What This Application Provides"
                solo
                clearable
                hint="This is generated from the NAICS directory."
              >
                <template slot="selection" slot-scope="data">
                  <p>{{ data.item.name }}</p>
                </template>
                <template slot="item" slot-scope="data">
                  <p>{{ data.item.name }}</p>
                </template>
              </v-autocomplete>
              <v-card-title class="d-flex justify-center" style="width: 100%;"><span class="mr-2" style="color:#a61c00;">SOWerk Tags:</span></v-card-title>
              <v-combobox
                style="width: 95%;"
                v-model="locationTagsNew"
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
            </v-row>
            <v-row style="width: 98%; border-bottom: 1px dashed #A61C00" class="d-flex flex-column align-center">
              <v-card-title style="color: #A61C00;">Standard Questions, Add Custom Questions Below</v-card-title>
              <div class="d-flex flex-wrap justify-center" style="width: 100% !important; font-size: 16px;">
                <p v-for="(form, index) in defaultFormFields" style="width: 33%; text-align: center"><span style="color: #A61C00;">#{{ (Number(index) + 1)}}</span> - {{form.name}}</p>
              </div>
            </v-row>
            <v-row style="width: 98%;" class="d-flex flex-column align-center">
              <v-card-title class="d-flex justify-center" style="color: #A61C00;">Custom Application Questions</v-card-title>
              <v-card-subtitle class="d-flex justify-center" style="width: 80%;">Use the following area to add, edit, or rearrange your approved vendor questions. Drag and drop questions from the library to the right or add completely new questions. </v-card-subtitle>
              <draggable
                class="dragArea list-group"
                group="formName"
                :list="companyTemplate.companytemplatesformfields"
                v-model="companyTemplate.companytemplatesformfields"
                @change="reorderFormField"
                style="width: 95%;"
              >
                <v-card style="border:2px outset lightgrey; width: 100% !important;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in companyTemplate.companytemplatesformfields">
                  <transition name="slide-fade">
                    <v-card-title class="d-flex justify-space-between" style="width: 100% !important; font-size: 16px;">
                      <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
                      <p style="width: 70%; text-align: center"><span style="color: #A61C00;">#{{ (Number(index) + 16)}}</span> - {{form.name}}</p>
                      <v-btn style="color: #A61c00; width: 10%;" text @click="openEditFormField(form, index)"><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                    </v-card-title>
                  </transition>
                  <template v-if="form.type === 'select'" class="d-flex flex-column align-center">
                    <v-btn style="background: #707070; color: white;" @click.stop="addOption(form, index)">Add Another Option</v-btn>
                    <v-card-title v-if="form.options !== String" v-for="(option,iVal) in form.options" style="width: 100%; white-space: pre-wrap !important;" class="d-flex justify-center"><v-text-field style="width: 80%;" @click.prevent="" clearable label="Selection Name" v-model="form.options[iVal]">{{option}}</v-text-field> <v-btn class="px-6 ml-12" style="width: 10%; background: #A61C00; color: white;" @click.prevent="removeOption(option, iVal, form, index)" text>X</v-btn></v-card-title>
                    <v-card-title v-else v-for="(option,iVal) in form.options.split(',')" style="width: 100%; white-space: pre-wrap !important;" class="d-flex justify-center"><v-text-field style="width: 80%;" @click.prevent="" clearable label="Selection Name" v-model="form.options[iVal]">{{option}}</v-text-field> <v-btn class="px-6 ml-12" style="width: 10%; background: #A61C00; color: white;" @click.prevent="removeOption(option, iVal, form, index)" text>X</v-btn></v-card-title>
                  </template>
                </v-card>
              </draggable>
            </v-row>
          </v-card>
          <rawDisplayer :value="companyTemplate.companytemplatesformfields" title="List 1" />
        </v-col>
        <v-col style="width: 35%; border-left: 1px dashed #A61C00;" class="d-flex flex-column align-center">
          <v-card-title style="color: #A61C00; text-align: center">New Questions</v-card-title>
          <v-card-subtitle style="text-align: center">Need to add a new/different question? You can drag and drop a new question field over to your application column, then customize it.</v-card-subtitle>
          <!--          <draggable-->
          <!--            style="width: 100%;"-->
          <!--            class="dragArea list-group"-->
          <!--            :list="formTypes"-->
          <!--            :group="{ name: 'formName', pull: 'clone', put: false }"-->
          <!--            :clone="cloneField"-->
          <!--          >-->
          <v-card style="border:2px outset lightgrey; width: 100%;" class="my-2 d-flex flex-column align-center list-group-item" v-for="(form, index) in formTypes" >
            <v-card-title style="font-size: 16px; width: 100% !important;" class="d-flex justify-space-between">
              <v-btn color="primary" @click="addForm(form)" style="color: white; width: 10%;">Add</v-btn>
              <p style="width: 70%; text-align: center">{{form.name}}</p>
              <v-btn style="color: #A61c00; width: 10%;" text><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
            </v-card-title>
            <template v-if="form.type === 'select'" class="d-flex flex-column align-center">
              <v-btn style="background: #707070; color: white;" @click.stop="addOptionInput(form, index)">Add Another Option</v-btn>
              <v-card-text v-for="(option,iVal) in formTypes[1].options" style="width: 100%;" class="d-flex justify-center"><v-text-field style="width: 80%;" @click.prevent="" label="Selection Name" v-model="formTypes[1].options[iVal]" clearable>{{option}}</v-text-field> <v-btn class="px-6 ml-12" style="width: 10%; background: #A61C00; color: white;" @click.prevent="removeOptionSelect(option, iVal, form, index)" text>X</v-btn></v-card-text>
            </template>
          </v-card>
          <!--          </draggable>-->
          <!--          <rawDisplayer title="List 2" :value="formTypes" />-->
          <v-progress-circular
            v-if="saveLoad === false"
            indeterminate
            color="primary"
            :size="20"
          ></v-progress-circular>

          <transition name="slide-fade">
            <v-container class="" overflow-y-auto>
              <v-row class="d-flex justify-center" style="width: 100%; border-top: 1px dashed #A61C00">
                <v-card-title style="color: #A61C00; text-align: center">Question Library</v-card-title>
                <v-card-subtitle style="text-align: center">In this column you can quickly find questions from any existing template in your library. Drag and drop ones you like to your application column, then customize it.</v-card-subtitle>
                <v-col cols="12" class="d-flex flex-column align-center">
                  <v-row class="mb-n8" v-if="$vuetify.breakpoint.xl">
                    <v-btn @click="(sowerkDragNDrop = true) && (companyDragNDrop=false)" color="primary" rounded class="mx-2" style="z-index: 1">Sowerk Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                    <v-btn @click="(companyDragNDrop = true) && (sowerkDragNDrop=false)" color="primary" rounded class="mx-2" style="z-index: 1">Company Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                  </v-row>
                  <v-row style="width: 100%;" class="mb-n8 d-flex flex-column align-center" v-else>
                    <v-btn @click="(sowerkDragNDrop = true) && (companyDragNDrop=false)" color="primary" rounded style="width: 90%; z-index: 1" class="mx-2 my-1">Sowerk Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                    <v-btn @click="(companyDragNDrop = true) && (sowerkDragNDrop=false)" color="primary" rounded style="width: 90%; z-index: 1" class="mx-2 my-1">Company Application Templates <v-icon>mdi-arrow-down</v-icon></v-btn>
                  </v-row>
                  <transition name="slide-fade">
                    <v-data-table
                      :headers="applicationDragNDropHeaders"
                      :items="applicationTemplates"
                      :items-per-page="10"
                      class="pt-16"
                      :expanded.sync="expanded"
                      show-expand
                      single-expand
                      style="width: 100%;"
                      v-if="sowerkDragNDrop"
                    >
                      <template v-slot:expanded-item="{ headers, item }" style="width: 100%;">
                        <td :colspan="headers.length" style="width: 100%;">
                          <v-simple-table style="width: 100%;" fixed-header
                                          height="450px">
                            <template v-slot:default>
                              <!--                            <thead>-->
                              <!--                            <tr class="d-flex justify-space-evenly" style="width: 100%;">-->
                              <!--                              <th style="width: 30%;">Question</th>-->
                              <!--                              <th style="width: 60%;">Name</th>-->
                              <!--                            </tr>-->
                              <!--                            </thead>-->
                              <tbody style="width: 95%;">
                              <draggable
                                style="width: 100% !important;"
                                class="dragArea list-group"
                                :list="item.applicationtemplatesformfields"
                                :group="{ name: 'formName', pull: 'clone', put: false }"
                              >
                                <tr v-for="app in item.applicationtemplatesformfields" :key="app.name" style="width: 100%;" class="d-flex justify-center">
                                  <v-card style="width: 95%; border:2px outset lightgrey;" class="d-flex justify-start">
                                    <v-card-text style="width: 30%;" class="d-flex flex-column align-center"><v-icon style="color: #707070;">mdi-cursor-move</v-icon>Question# {{(app.order)}}</v-card-text>
                                    <v-card-text style="width: 70%;">{{app.name}}</v-card-text>
                                  </v-card>
                                </tr>
                              </draggable>
                              <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                              </tbody>
                            </template>
                          </v-simple-table>
                        </td>
                      </template>
                      <template v-slot:item.questions="{item}">
                        <p v-if="item.applicationtemplatesformfields">{{item.applicationtemplatesformfields.length}}</p>
                      </template>
                    </v-data-table>
                  </transition>
                  <transition name="slide-fade">
                    <v-data-table
                      :headers="applicationDragNDropHeaders"
                      :items="companyTemplates"
                      :items-per-page="10"
                      class="pt-16"
                      :expanded.sync="expanded"
                      show-expand
                      single-expand
                      style="width: 100%;"
                      v-if="companyDragNDrop"
                    >
                      <template v-slot:expanded-item="{ headers, item }" style="width: 100%;">
                        <td :colspan="headers.length" style="width: 100%;">
                          <v-simple-table style="width: 100%;" fixed-header
                                          height="450px">
                            <template v-slot:default>
                              <!--                            <thead>-->
                              <!--                            <tr class="d-flex justify-space-evenly" style="width: 100%;">-->
                              <!--                              <th style="width: 30%;">Question</th>-->
                              <!--                              <th style="width: 60%;">Name</th>-->
                              <!--                            </tr>-->
                              <!--                            </thead>-->
                              <tbody style="width: 95%;">
                              <draggable
                                style="width: 100% !important;"
                                class="dragArea list-group"
                                :list="item.companytemplatesformfields"
                                :group="{ name: 'formName', pull: 'clone', put: false }"
                              >
                                <tr v-for="app in item.companytemplatesformfields" :key="app.name" style="width: 100%;" class="d-flex justify-center">
                                  <v-card style="width: 95%; border:2px outset lightgrey;" class="d-flex justify-start ">
                                    <v-card-text style="width: 30%;" class="d-flex flex-column align-center"><v-icon style="color: #707070;">mdi-cursor-move</v-icon>Question# {{(app.order + 1)}}</v-card-text>
                                    <v-card-text style="width: 70%;">{{app.name}}</v-card-text>
                                  </v-card>
                                </tr>
                              </draggable>
                              <rawDisplayer :value="newAssignUserForm.formfields" title="List 1" />
                              </tbody>
                            </template>
                          </v-simple-table>
                        </td>
                      </template>
                      <template v-slot:item.questions="{item}">
                        <p v-if="item.companytemplatesformfields">{{item.companytemplatesformfields.length}}</p>
                      </template>
                    </v-data-table>
                  </transition>
                </v-col>
              </v-row>
            </v-container>
          </transition>
        </v-col>
      </v-row>
    </transition>

    <transition name="slide-fade">
      <v-card v-if="openEditFormFieldLoad" class="d-flex flex-column align-center justify-center" style="width: 70vw; height: 50vh; position: fixed; left: 25vw; top: 25vh; z-index: 1000;">
        <v-card-text style="text-align: center; width: 100%; font-size: 24px; color: #A61c00;">Edit Question #{{openEditFormFieldVal.order + 1}} For Form - {{openEditFormFieldVal.name}}</v-card-text>
        <v-form style="width: 90%;" class="d-flex flex-wrap justify-center">
          <v-text-field v-model="openEditFormFieldVal.name" class="mx-2" style="width: 45%;" :label="'Question'" :name="openEditFormFieldVal.name"></v-text-field>
          <v-checkbox v-model="openEditFormFieldVal.required" class="mx-2" style="width: 45%;" :label="'Required Question?'" :name="openEditFormFieldVal.required"></v-checkbox>
          <v-select :items="typeSelect" v-model="openEditFormFieldVal.type" class="mx-2" style="width: 45%;" :label="'Type of Question'" :name="openEditFormFieldVal.type"></v-select>
        </v-form>
        <div style="width: 100%;" class="d-flex justify-space-between">
          <v-btn @click="deleteSingleFormfield(openEditFormFieldVal)" class="ml-2 mb-2" color="primary" outlined>Delete Form Field</v-btn>
          <v-btn @click="updateSingleFormfield(openEditFormFieldVal)" class="mr-2 mb-2" color="white" style="background: #707070;" outlined>Update Form Field</v-btn>
        </div>
        <v-btn text style="font-size: 30px; position: absolute; right: 10px; top: 10px;" @click="closeEditFormField">X</v-btn>
      </v-card>
    </transition>

  </v-container>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'application',
    layout: 'app',
    display: "Clone",
    order: 2,
    components: {
      draggable
    },
    data () {
      return {
        vendorType: [
          'Supplier',
          'Servicer'
        ],
        userHasDefaults: false,
        defaultFormFields: [
          {
            name: "Vendor Name",
            order: 1,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Vendor Type",
            order: 2,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Vendor Category",
            order: 3,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Vendor's Address of Application",
            order: 4,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Company Founded",
            order: 5,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Number of Employees",
            order: 6,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "SOWerk Connections",
            order: 7,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Contact Person Name",
            order: 8,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Contact Person Phone",
            order: 9,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Contact Person Email",
            order: 10,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Contact Website",
            order: 11,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          {
            name: "Applicants Service Radius",
            order: 12,
            options: "",
            required: true,
            type: 'text',
            companytemplates_id: this.$route.params.id,
            value: ''
          },
          // {
          //   name: "Company's General Liability Insurance Provider",
          //   order: 13,
          //   options: "",
          //   required: true,
          //   type: 'text',
          //   companytemplates_id: this.$route.params.id,
          //   value: ''
          // },
          // {
          //   name: "List of Certifications",
          //   order: 14,
          //   options: "",
          //   required: true,
          //   type: 'text',
          //   companytemplates_id: this.$route.params.id,
          //   value: ''
          // },
          // {
          //   name: "Published Certificates",
          //   order: 15,
          //   options: "",
          //   required: true,
          //   type: 'text',
          //   companytemplates_id: this.$route.params.id,
          //   value: ''
          // },
        ],
        loading: false,
        userForms: {},
        service: {},
        location: {},
        formTypes: [
          {
            id: 0,
            name: 'Input Field',
            companytemplates_id: Number,
            options: "",
            order: Number,
            required: true,
            type: 'text',
            value: ''
          },
          {
            id: 0,
            name: 'Select Field',
            companytemplates_id: Number,
            options: ['Option 1', 'Option 2', 'Option 3'],
            order: Number,
            required: true,
            type: 'select',
            value: ''
          },
          // {
          //   id: 0,
          //   name: 'File Upload',
          //   companytemplates_id: Number,
          //   options: "",
          //   order: Number,
          //   required: true,
          //   type: 'file',
          //   value: ''
          // },
        ],
        originalUserForms: {},
        finishedFormFields: false,
        totalLength: 0,
        filteredUniqueUserForms: [],
        filteredSameUserForms: [],
        openEditFormFieldLoad: false,
        openEditFormFieldVal: {},
        typeSelect: [
          'text',
          'number',
          'date',
          'checkbox',
          // 'file',
          'select',

        ],
        saveLoad: true,
        colors: ["#a61c00", "#707070"],
        sowerkDragNDrop: true,
        companyDragNDrop: false,
        applicationTemplates: [],
        companyTemplates: [],
        companyTemplate: {},
        applicationDragNDropHeaders: [
          { text: 'Application Name', value: 'form_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: '#Questions', value: 'questions', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Category', value: 'service_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        expanded: [],
        singleExpand: true,
        newAssignUserForm: {},
        globalId: 0,
        itemname: '',
        itemcompanytemplates_id: Number,
        itemoptions: '',
        itemorder: Number,
        itemrequired: Number,
        itemtype: '',
        itemvalue: '',
        newOptionNum: 0,
        one: [],
        locationTagsNew: [],
        originalLocationTags: [],
        sowerkTags: [],
        naicsList: [],
        locationsList: [],
        chosenLocation: [],
      }
    },
    async created() {
    //   await this.getUserforms(this.$route.params.id)
    //   console.log(this.$route.params.id)
      await this.getApplicationTemplates();
      await this.getSowerkTags();
      await this.getNaicsList();
      await this.getCompanyTemplates();
    //   await this.getCompanyTemplatesFormFields();
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
      async getSowerkTags() {
        await this.$http.get('https://www.sowerkbackend.com/api/sowerktags')
          .then(response => {
            console.log(response.data, 'response.data for sowerktags');
            this.sowerkTags = response.data;
            console.log(this.sowerkTags, 'sowerktags')
          })
      },
      async removeTag(item) {
        console.log(this.locationTagsNew, 'before removal', item)
        this.locationTagsNew = this.locationTagsNew.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.locationTagsNew, 'after removal')
      },
      cloneField(item) {
        console.log(item, 'clone clone clone');
        this.itemname =  item.name;
        this.itemcompanytemplates_id = this.companyTemplates.id;
        this.itemoptions =  item.options;
        this.itemorder =  item.order;
        this.itemrequired =  item.required;
        this.itemtype =  item.type;
        this.itemvalue =  item.value;
        let newItem = {
          id: this.globalId,
          name: this.itemname,
          companytemplates_id: this.itemcompanytemplates_id,
          options: this.itemoptions,
          order: this.itemorder,
          required: this.itemrequired,
          type: this.itemtype,
          value: this.itemvalue
        }
        this.formTypes[1].id++
        return newItem
      },
      async getUserforms(id) {
        console.log(id, 'id')
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            // IF GENERAL QUESTIONS ARE NOT PRESENT WITHIN RESPONSE THEN FLIP userHasDefaults TO FALSE
            if(response.data.companytemplatesformfields.some(question => question.name === "Vendor Name")){
              this.userHasDefaults = true
            } else{
              this.userHasDefaults = false
            }
            this.companyTemplates = response.data;
            this.companyTemplate.companytemplatesformfields = this.companyTemplate.companytemplatesformfields.filter(formfield => {
              if(formfield.name !== "Vendor Name" && formfield.name !== "Vendor Type" && formfield.name !== "Vendor Category" && formfield.name !== "Vendor's Address of Application" && formfield.name !== "Company Founded" && formfield.name !== "Number of Employees" && formfield.name !== "SOWerk Connections" && formfield.name !== "Contact Person Name" && formfield.name !== "Contact Person Phone" && formfield.name !== "Contact Person Email" && formfield.name !== "Contact Website" && formfield.name !== "Applicants Service Radius" && formfield.name !== "Company's General Liability Insurance Provider" && formfield.name !== "List of Certifications" && formfield.name !== "Published Certificates") {
                return formfield
              }
            })
            for(let i=0; i<this.companyTemplate.companytemplatesformfields.length; i++) {
              this.companyTemplate.companytemplatesformfields[i].options = this.companyTemplate.companytemplatesformfields[i].options.replace('{', '').replace('}', '').replaceAll('"', '').split(',')
              console.log(this.companyTemplate.companytemplatesformfields[i].options, 'option #', i)
            }
            this.finishedFormFields = true;
            this.companyTemplate.companytemplatesformfields = this.companyTemplate.companytemplatesformfields.sort((a,b) => {
              return a.order - b.order
            })
            console.log(this.companyTemplates, 'this.companyTemplates sort')
            this.getLocation(response.data.locations_id)
            this.getFormFields(response.data.id)
          })
          .catch(err => {
            console.log('err get services', err);
          })
        console.log('this.companyTemplates', this.companyTemplates)
      },
      async getService(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/' + id)
          .then(response => {
            console.log(response.data, 'services!')
            this.service = response.data.service
            this.getLocation(response.data.service.locations_id);
          })
          .catch(err => {
            console.log(err, 'err in getting service')
          })
      },
      async getLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(response => {
            console.log(response.data, 'location')
            this.location = response.data
          })
      },
      async getFormFields(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for userform', id);
            this.originalUserForms = response.data;
            console.log('ORIGINAL USER FORMS RESPONSE DATA', this.originalUserForms);
            this.totalLength += response.data.length;
            this.loading=true;
          })
          .catch(err => {
            console.log('err get services', err);
          })
      },
      async saveUserForm() {
        this.saveLoad = false;
        console.log('this.companyTemplate', this.companyTemplate);
        console.log('this.originaluserForms', this.originalUserForms);
        if(this.originalLocationTags.length > 0) {
          for(let i=0; i<this.originalLocationTags.length; i++) {
            if(!(this.locationTagsNew.includes(this.originalLocationTags[i]))) {
              console.log(this.originalLocationTags[i], 'this.location tags DELETE')
              this.$http.delete('https://www.sowerkbackend.com/api/companytemplatetags/' + this.originalLocationTags[i].id)
                .then(response => {
                  console.log(response, 'success in original tag')
                })
                .catch(err => {
                  console.log(err, 'err in deleting original tag')
                })
            }
          }
        }
        const userformEdit = {
          form_name: this.companyTemplate.form_name,
          service_name: this.companyTemplate.service_name,
          vendorType: this.companyTemplate.vendorType,
        }
        if(this.locationTagsNew.length > 0) {
          console.log(this.locationTagsNew, 'this.locationTags', 'this.companyTemplate!!!!!!!!!!!!!! ', this.companyTemplate);
          for(let i=0; i<this.locationTagsNew.length; i++) {
            if(typeof this.locationTagsNew[i] === 'object' && !(this.originalLocationTags.includes(this.locationTagsNew[i]))) {
              console.log(this.locationTagsNew[i].name,' HELLO POSTING FOR TAGS')
              this.$http.post('https://www.sowerkbackend.com/api/companytemplatetags/byCompanyTemplateId/' + this.$route.params.id, {
                name: this.locationTagsNew[i].name
              })
                .then(responseVal => {
                  console.log(responseVal, 'success in posting location tags')
                })
                .catch(err => {
                  console.log(err, 'err in posting locationtags')
                })
            } else {
              if(!(this.originalLocationTags.includes(this.locationTagsNew[i]))) {
                console.log(this.locationTagsNew[i],' HELLO POSTING FOR TAGS')
                this.$http.post('https://www.sowerkbackend.com/api/companytemplatetags/byCompanyTemplateId/' + this.$route.params.id, {
                  name: this.locationTagsNew[i]
                })
                  .then(responseVal => {
                    console.log(responseVal, 'success in posting location tags')
                  })
                  .catch(err => {
                    console.log(err, 'err in posting locationtags!!!!')
                  })
              }
            }
          }
        }
        // await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + this.$route.params.id, {
        //   name: "Vendor Name",
        //   order: 1,
        //   options: "",
        //   required: true,
        //   type: 'text',
        //   companytemplates_id: this.$route.params.id,
        //   value: ''
        // })
        //   .then(response => {
        //     console.log(response, 'posting new formfield for userform');
        //   })
        //   .catch(err => {
        //     console.log(err, 'err');
        //   })
        if(this.userHasDefaults === false) {
          // ADD THE GENERAL QUESTIONS and THEN ADD CUSTOM QUESTIONS
          this.defaultFormFields.forEach(async (formfield) => {
            await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + this.$route.params.id, formfield)
              .then(response => {
                console.log(response, 'posting new formfield for userform');
              })
              .catch(err => {
                console.log(err, 'err');
              })
          })
          // ALSO ADD CUSTOM QUESTIONS
          this.companyTemplate.companytemplatesformfields.forEach(async (formfield, index) => {
            formfield["companytemplates_id"] = this.companyTemplates.id
            formfield.order = index;
            if(!(this.originalUserForms.some(val => (val.id === formfield.id)))) {
              if(typeof formfield.options === 'string') {
                let newFormField = {
                  companytemplates_id: this.$route.params.id,
                  name: formfield.name,
                  options: formfield.options,
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + this.$route.params.id, newFormField)
                  .then(response => {
                    console.log(response, 'posting new formfield for userform');
                  })
                  .catch(err => {
                    console.log(err, 'err');
                  })
              } else {
                let newFormField = {
                  companytemplates_id: this.$route.params.id,
                  name: formfield.name,
                  options: formfield.options.join(', '),
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + this.$route.params.id, newFormField)
                  .then(response => {
                    console.log(response, 'posting new formfield for userform');
                  })
                  .catch(err => {
                    console.log(err, 'err');
                  })
              }
              this.filteredUniqueUserForms.push(formfield)
            } else {
              this.filteredSameUserForms.push(formfield)
              if(formfield.type !== 'select') {
                const changes = {
                  name: formfield.name,
                  options: formfield.options,
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.put('https://www.sowerkbackend.com/api/companytemplatesformfields/' + formfield.id, changes)
                  .then(response => {
                    console.log(response, 'updating formfield ', formfield.id)
                  })
                  .catch(err => {
                    console.log('error in updating formfield', err)
                  })
              } else {
                const changes = {
                  name: formfield.name,
                  options: formfield.options.join(', '),
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.put('https://www.sowerkbackend.com/api/companytemplatesformfields/' + formfield.id, changes)
                  .then(response => {
                    console.log(response, 'updating formfield ', formfield.id)
                  })
                  .catch(err => {
                    console.log('error in updating formfield', err)
                  })
              }
            }
          })
        } else {
          // ONLY ADD CUSTOM QUESTIONS
          this.companyTemplate.companytemplatesformfields.forEach(async (formfield, index) => {
            formfield["companytemplates_id"] = this.companyTemplates.id
            formfield.order = index;
            if(!(this.originalUserForms.some(val => (val.id === formfield.id)))) {
              if(typeof formfield.options === 'string') {
                let newFormField = {
                  companytemplates_id: this.$route.params.id,
                  name: formfield.name,
                  options: formfield.options,
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + this.$route.params.id, newFormField)
                  .then(response => {
                    console.log(response, 'posting new formfield for userform');
                  })
                  .catch(err => {
                    console.log(err, 'err');
                  })
              } else {
                let newFormField = {
                  companytemplates_id: formfield.companytemplates_id,
                  name: formfield.name,
                  options: formfield.options.join(', '),
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.post('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + this.$route.params.id, newFormField)
                  .then(response => {
                    console.log(response, 'posting new formfield for userform');
                  })
                  .catch(err => {
                    console.log(err, 'err');
                  })
              }
              this.filteredUniqueUserForms.push(formfield)
            } else {
              this.filteredSameUserForms.push(formfield)
              if(typeof formfield.options === 'string') {
                const changes = {
                  name: formfield.name,
                  options: formfield.options,
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.put('https://www.sowerkbackend.com/api/companytemplatesformfields/' + formfield.id, changes)
                  .then(response => {
                    console.log(response, 'updating formfield ', formfield.id)
                  })
                  .catch(err => {
                    console.log('error in updating formfield', err)
                  })
              } else {
                const changes = {
                  name: formfield.name,
                  options: formfield.options.join(', '),
                  order: formfield.order,
                  required: formfield.required,
                  type: formfield.type,
                  value: formfield.value
                }
                await this.$http.put('https://www.sowerkbackend.com/api/companytemplatesformfields/' + formfield.id, changes)
                  .then(response => {
                    console.log(response, 'updating formfield ', formfield.id)
                  })
                  .catch(err => {
                    console.log('error in updating formfield', err)
                  })
              }
            }
          })
        }
        // console.log('this.companyTemplates after loop', this.companyTemplates);
        // console.log(this.filteredUniqueUserForms, 'filtered unique formfields');
        // console.log(this.filteredSameUserForms, 'filtered same formfields')
        // await this.$http.put('https://www.sowerkbackend.com/api/userforms/' + this.companyTemplates.id, userformEdit)
        //   .then(response => {
        //     console.log(response, 'updating formfield ', formfield.id)
        //   })
        //   .catch(err => {
        //     console.log('error in updating formfield', err)
        //   })
        // setTimeout(() => {
        //   this.saveLoad = true;
        //   this.$router.go();
        // }, 1000)
        await this.$http.put('https://www.sowerkbackend.com/api/companytemplates/' + this.$route.params.id, userformEdit)
          .then(response => {
            console.log(response, 'updating template ', response)
          })
          .catch(err => {
            console.log('error in updating template', err)
          })
        setTimeout(() => {
          this.saveLoad = true;
          this.$router.go();
        }, 1000)
      },
      async reorderFormField({moved}) {
        console.log(moved, 'moved information for formfield')
        for(let i=0; i<this.companyTemplate.companytemplatesformfields.length; i++) {
          console.log(this.companyTemplate.companytemplatesformfields[i])
          this.companyTemplate.companytemplatesformfields[i].order = i;
          if(this.companyTemplate.companytemplatesformfields[i].options !== '' && typeof this.companyTemplate.companytemplatesformfields[i].options === 'string') {
            this.companyTemplate.companytemplatesformfields[i].options = this.companyTemplate.companytemplatesformfields[i].options.split(', ')
            console.log(this.companyTemplate.companytemplatesformfields[i].options, 'OPTIONS!!!!!')
          }
        }
        console.log(this.companyTemplate.companytemplatesformfields, 'updating companyTemplate.companytemplatesformfields');
      },
      async reorderFormFieldAdd() {
        for(let i=0; i<this.companyTemplate.companytemplatesformfields.length; i++) {
          console.log(this.companyTemplate.companytemplatesformfields[i])
          this.companyTemplate.companytemplatesformfields[i].order = i;
          console.log(this.companyTemplate.companytemplatesformfields[i].options, 'OPTIONS!!!!!')
        }
        console.log(this.companyTemplate.companytemplatesformfields, 'updating companyTemplate.companytemplatesformfields');
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
          this.companyTemplate.companytemplatesformfields.splice(formfieldVal.order, 1);
          console.log('this.companyTemplates on delete', this.companyTemplate.companytemplatesformfields);
        } else {
          let confirmDelete = confirm('We noticed this question is saved to your application. Are you sure you would like to remove this question from your application');
          if(confirmDelete === true) {
            this.companyTemplate.companytemplatesformfields.splice(formfieldVal.order, 1);
            console.log('this.companyTemplates on delete', this.companyTemplate.companytemplatesformfields);
            this.$http.delete('https://www.sowerkbackend.com/api/companytemplatesformfields/' + formfieldVal.id)
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
        this.companyTemplate.companytemplatesformfields[formfieldVal.order] = formfieldVal
        this.openEditFormFieldLoad = false;
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
        this.getCompanyTemplate();
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplates/byCompanyId/' + this.currentUser.companies_id)
          .then(async(response) => {
            console.log(response, 'companyTemplates');
            for(let i=0; i<response.data.length; i++) {
                let userForm = {
                active: response.data[i].active,
                companies_id: response.data[i].companies_id,
                service_name: response.data[i].service_name,
                form_name: response.data[i].form_name,
                companytemplatesformfields: []
                }
            this.companyTemplates.push(userForm)
            await this.getCompanyTemplatesFormFields(response.data[i].id, i);
            }
            console.log(this.companyTemplates, 'application templates for company')
          })
          .catch(err => {
            console.log(err, 'err in companyTemplates')
          })
          this.loading = true
      },
      async getCompanyTemplatesFormFields(id, indexPostion) {
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for company userform', id);
            this.companyTemplates[indexPostion].companytemplatesformfields = response.data;
            console.log(this.companyTemplates)
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      },
      async getCompanyTemplate() {
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplates/' + this.$route.params.id)
          .then(async(response) => {
            // IF GENERAL QUESTIONS ARE NOT PRESENT WITHIN RESPONSE THEN FLIP userHasDefaults TO FALSE
            let userForm = {
              active: response.data.companytemplate.active,
              companies_id: response.data.companytemplate.companies_id,
              service_name: response.data.companytemplate.service_name,
              form_name: response.data.companytemplate.form_name,
              companytemplatesformfields: response.data.companytemplate.companytemplateformfields
            }
            this.companyTemplate = userForm
            this.originalUserForms = response.data.companytemplate.companytemplateformfields
            await this.getCompanyTag(this.companyTemplate.id)
            // await this.getCompanyTemplateFormFields(response.data.id);
            console.log(this.companyTemplate, 'companyTemplate!!!!!!!!!!!!!!!!!!!')
            if(this.companyTemplate.companytemplatesformfields.some(question => question.name === "Vendor Name")){
              this.userHasDefaults = true
            } else{
              this.userHasDefaults = false
            }

            this.companyTemplate.companytemplatesformfields = this.companyTemplate.companytemplatesformfields.filter(formfield => {
              if(formfield.name !== "Vendor Name" && formfield.name !== "Vendor Type" && formfield.name !== "Vendor Category" && formfield.name !== "Vendor's Address of Application" && formfield.name !== "Company Founded" && formfield.name !== "Number of Employees" && formfield.name !== "SOWerk Connections" && formfield.name !== "Contact Person Name" && formfield.name !== "Contact Person Phone" && formfield.name !== "Contact Person Email" && formfield.name !== "Contact Website" && formfield.name !== "Applicants Service Radius" && formfield.name !== "Company's General Liability Insurance Provider" && formfield.name !== "List of Certifications" && formfield.name !== "Published Certificates") {
                return formfield
              }
            })
            for(let i=0; i<this.companyTemplate.companytemplatesformfields.length; i++) {
              this.companyTemplate.companytemplatesformfields[i].options = this.companyTemplate.companytemplatesformfields[i].options.replace('{', '').replace('}', '').replaceAll('"', '').split(',')
              console.log(this.companyTemplate.companytemplatesformfields[i].options, 'option #', i)
            }

            this.finishedFormFields = true;
            this.companyTemplate.companytemplatesformfields = this.companyTemplate.companytemplatesformfields.sort((a,b) => {
              return a.order - b.order
            })
          })
          .catch(err => {
            console.log(err, 'err in companyTemplate')
          })
          this.loading = true
      },
      async getCompanyTag(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplatetags/byCompanyTemplateId/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'userform tags!!')
            this.locationTagsNew = response.data;
            this.originalLocationTags = response.data;
          })
          .catch(err => {
            console.log(err, 'err in getting compnay tag')
          })
      },
      async getCompanyTemplateFormFields(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companytemplatesformfields/byCompanyTemplatesId/' + id)
          .then(response => {
            console.log(response.data, 'formfields for company userform', id);
            this.companyTemplate.companytemplatesformfields = response.data;
            console.log(this.companyTemplate, "ggggggggggggggggggg")
          })
          .catch(err => {
            console.log(err, 'err in application templates form fields')
          })
      },
      async addForm(form) {
        console.log(form, 'HEY ADD ME')
        form.id= this.globalId;
        form.order = 0;
        form.companytemplates_id = this.companyTemplate.companies_id
        console.log(form, 'after changes add me', this.companyTemplate, 'companyTemplate')
        this.itemname = form.name;
        this.itemoptions = form.options;
        this.itemrequired = form.required;
        this.itemtype = form.type;
        this.itemvalue = form.value;
        let newForm = {
          id: this.globalId,
          order: 0,
          companytemplates_id: this.companyTemplate.companies_id,
          name: this.itemname,
          options: this.itemoptions,
          required: this.itemrequired,
          type: this.itemtype,
          value: this.itemvalue
        }
        this.companyTemplate.companytemplatesformfields.unshift(newForm)
        console.log(this.companyTemplate.companytemplatesformfields)
        this.itemname = "";
        this.itemoptions = [];
        this.itemrequired = Boolean;
        this.itemtype = "";
        this.itemvalue = "";
        this.formTypes[1].id++
        await this.reorderFormFieldAdd()
      },
      async addOption(form, index) {
        console.log(form, 'add option to this form');
        let newOption = "I'm a new option";
        this.companyTemplate.companytemplatesformfields[index].options.push(newOption);
      },
      async addOptionInput(form, index) {
        let newOption = "I'm a new option # " + this.newOptionNum;
        this.formTypes[1].options.push(newOption);
        this.newOptionNum++;
      },
      async removeOption(option, iVal, form, index) {
        console.log(option, 'option to remove', iVal, 'index of option', form, 'remove option to this form', index, 'index of form')
        console.log(this.companyTemplate.companytemplatesformfields[index], 'formfields specific one')
        console.log(this.companyTemplate.companytemplatesformfields, 'formfields all')
        this.companyTemplate.companytemplatesformfields[index].options = this.companyTemplate.companytemplatesformfields[index].options.filter(optionVal => optionVal !== option)
      },
      async removeOptionSelect(option, iVal, form, index) {
        this.formTypes[1].options = this.formTypes[1].options.filter(optionVal => optionVal !== option)
      }
    }
  }
</script>

<style scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
</style>
