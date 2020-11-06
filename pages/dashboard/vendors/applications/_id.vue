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
      <v-row v-if="loading" class="d-flex justify-start wrap-row" style="width: 100%;">
      <v-card-text style="width: 40%;">Location - {{location.name}}</v-card-text>
      <v-card-text style="width: 40%;">Category - {{service.name}}</v-card-text>
      <v-spacer style="width: 20%;"></v-spacer>
      <v-btn @click="saveUserForm" style="width: 30%;" color="primary" rounded class="my-2 mx-2">Save</v-btn>
      <v-btn :href="'../../vendors/applications'" style="width: 30%;" color="#707070" rounded outlined class="my-2 mx-2">Exit</v-btn>
    </v-row>
    </transition>
    <transition name="slide-fade">
      <v-divider v-if="loading" style="width: 100%;"></v-divider>
    </transition>
    <transition name="slide-fade">
      <v-row v-if="loading" class="d-flex justify-center" style="width: 100%;">
      <v-col style="width: 55%;">
        <v-card class="d-flex flex-column align-center">
          <v-text-field v-model="userForms.name"></v-text-field>
          <draggable
            class="dragArea list-group"
            group="formName"
            :list="userForms.formfields"
            v-model="userForms.formfields"
            @change="reorderFormField"
            style="width: 95%;"
          >

            <v-card style="border:2px outset lightgrey; width: 100% !important;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in {...userForms.formfields}">
              <transition name="slide-fade">
                <v-card-title class="d-flex justify-space-between" style="width: 100% !important; font-size: 16px;">
                  <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
                  <p style="width: 70%; text-align: center">#{{ (Number(index) + 1)}} - {{form.name}}</p>
                  <v-btn style="color: #A61c00; width: 10%;" text @click="openEditFormField(form, index)"><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
                </v-card-title>
              </transition>
            </v-card>
          </draggable>
        </v-card>
        <rawDisplayer :value="userForms.formfields" title="List 1" />
      </v-col>
      <v-col style="width: 35%;" class="d-flex flex-column align-center">
        <v-card-title>Add New Requirement</v-card-title>
        <draggable
          style="width: 100%;"
          class="dragArea list-group"
          :list="formTypes"
          :group="{ name: 'formName', pull: 'clone', put: false }"
        >
          <v-card style="border:2px outset lightgrey; width: 100%;" class="my-2 d-flex flex-column align-center" v-for="(form, index) in formTypes" >
            <v-card-title style="font-size: 16px; width: 100% !important;" class="d-flex justify-space-between">
              <v-icon style="color: #707070; width: 10%;">mdi-cursor-move</v-icon>
              <p style="width: 70%; text-align: center">{{form.name}}</p>
              <v-btn style="color: #A61c00; width: 10%;" text><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
            </v-card-title>
          </v-card>
        </draggable>
        <rawDisplayer title="List 2" :value="formTypes" />
        <v-progress-circular
          v-if="saveLoad === false"
          indeterminate
          color="primary"
          :size="20"
        ></v-progress-circular>
      </v-col>
    </v-row>
    </transition>

    <transition name="slide-fade">
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
        loading: false,
        userForms: {},
        service: {},
        location: {},
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
        finishedFormFields: false,
        totalLength: 0,
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
        colors: ["#a61c00", "#707070"]
      }
    },
    created() {
      this.getUserforms(this.$route.params.id)
      console.log(this.$route.params.id)
    },
    methods: {

      async getUserforms(id) {
        console.log(id, 'id')
        await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + id)
          .then(response => {
            console.log(response, 'userforms');
            this.userForms = {...response.data };
            this.finishedFormFields = true;
            this.userForms.formfields = this.userForms.formfields.sort((a,b) => {
              return a.order - b.order
            })
            console.log(this.userForms, 'this.userForms sort')
            this.getService(response.data.service_id)
            this.getFormFields(response.data.id)
          })
          .catch(err => {
            console.log('err get services', err);
          })
        console.log('this.userForms', this.userForms)
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
        console.log('this.userForms', this.userForms);
        console.log('this.originaluserForms', this.originalUserForms);
        const userformEdit = {
          name: this.userForms.name
        }
        this.userForms.formfields.forEach(async (formfield, index) => {
          formfield["userform_id"] = this.userForms.id
          formfield.order = index;
          if(!(this.originalUserForms.some(val => (val.id === formfield.id)))) {
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
            await this.$http.post('https://www.sowerkbackend.com/api/formfields/byUserFormId/' + this.userForms.id, newFormField)
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
        await this.$http.put('https://www.sowerkbackend.com/api/userforms/' + this.userForms.id, userformEdit)
          .then(response => {
            console.log(response, 'updating formfield ', formfield.id)
          })
          .catch(err => {
            console.log('error in updating formfield', err)
          })
        setTimeout(() => {
          this.saveLoad = true;
          this.$router.go();
        }, 1000)
      },
      async reorderFormField({moved}) {
        console.log(moved, 'moved information for formfield')
        for(let i=0; i<this.userForms.formfields.length; i++) {
          console.log(this.userForms.formfields[i])
          this.userForms.formfields[i].order = i;
        }
        console.log(this.userForms.formfields, 'updating userForms.formfields');
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
          this.userForms.formfields.splice(formfieldVal.order, 1);
          console.log('this.userForms on delete', this.userForms);
        } else {
          let confirmDelete = confirm('We noticed this formfield is saved to your userform. If you confirm this, it will delete the question permanently.');
          if(confirmDelete === true) {
            this.userForms.formfields.splice(formfieldVal.order, 1);
            console.log('this.userForms on delete', this.userForms);
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
        this.userForms.formfields[formfieldVal.order] = formfieldVal
        this.openEditFormFieldLoad = false;
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
</style>
