<template>
  <v-container overflow-y-auto>
    <v-row class="d-flex justify-center" style="width: 100%;">
      <v-col style="width: 55%;">
        <v-card class="d-flex flex-column align-center">
          <v-card-title>UserForm - #{{userForms.id}} {{userForms.name}}</v-card-title>
          <draggable
            class="dragArea list-group"
            group="formName"
            :list="userForms.formfields"
            v-model="userForms.formfields"
            @change="reorderFormField"
          >
            <v-card style="width: 100%;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in {...userForms.formfields}">
              <v-card-text class="d-flex justify-space-between" style="">
                <v-icon style="width: 10%;">mdi-cursor-move</v-icon>
                <p style="width: 70%; text-align: center">{{index}} - {{form.name}} - {{form.id}}</p>
                <v-btn style="width: 10%;" text @click="openEditFormField(form, index)"><v-icon style="width: 100%;">mdi-cog</v-icon></v-btn>
              </v-card-text>
            </v-card>
          </draggable>
        </v-card>
        <rawDisplayer :value="userForms.formfields" title="List 1" />
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
        <v-btn :href="'../vendors/applicants'" style="width: 100%;" color="primary" rounded outlined class="my-2">Go Back To All Applications</v-btn>
        <v-progress-circular
          v-if="saveLoad === false"
          indeterminate
          color="primary"
          :size="20"
        ></v-progress-circular>
      </v-col>
    </v-row>

    <v-card v-if="openEditFormFieldLoad" class="d-flex flex-column align-center justify-center" style="width: 98%; height: 50vh; position: absolute; top: 50px; left: 10px;">
      <v-card-text>Edit Question #{{openEditFormFieldVal.order}} For Form - {{userForms.name}}</v-card-text>
      <v-form style="width: 90%;" class="d-flex flex-wrap justify-center">
        <v-text-field v-model="openEditFormFieldVal.name" class="mx-2" style="width: 45%;" :label="'Question'" :name="openEditFormFieldVal.name"></v-text-field>
        <v-checkbox v-model="openEditFormFieldVal.required" class="mx-2" style="width: 45%;" :label="'Required Question?'" :name="openEditFormFieldVal.required"></v-checkbox>
        <v-select :items="typeSelect" v-model="openEditFormFieldVal.type" class="mx-2" style="width: 45%;" :label="'Type of Question'" :name="openEditFormFieldVal.type"></v-select>
      </v-form>
      <div style="width: 100%;" class="d-flex justify-space-between">
        <v-btn @click="deleteSingleFormfield(openEditFormFieldVal)" class="ml-2 mb-2" color="primary" outlined>Delete Form Field</v-btn>
        <v-btn @click="updateSingleFormfield(openEditFormFieldVal)" class="mr-2 mb-2" color="green" outlined>Update Form Field</v-btn>
      </div>
      <v-btn text style="position: absolute; right: 10px; top: 10px;" @click="closeEditFormField">X</v-btn>
    </v-card>

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
        userForms: {},
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
      }
    },
    created() {
      this.getUserforms(this.$route.params.id)
      console.log(this.$route.params.id)
    },
    methods: {

      async getUserforms(id) {
        console.log(id, 'id')
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/userforms/' + id)
          .then(response => {
            console.log(response, 'userforms');
            this.userForms = {...response.data };
            this.finishedFormFields = true;
            this.userForms.formfields = this.userForms.formfields.sort((a,b) => {
              return a.order - b.order
            })
            console.log(this.userForms, 'this.userForms sort')
            this.getFormFields(response.data.id)
          })
          .catch(err => {
            console.log('err get services', err);
          })
        console.log('this.userForms', this.userForms)
      },
       async getFormFields(id) {
         await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/formfields/byUserFormId/' + id)
           .then(response => {
             console.log(response.data, 'formfields for userform', id);
             this.originalUserForms = response.data;
             this.totalLength += response.data.length;
           })
           .catch(err => {
             console.log('err get services', err);
           })
       },
      async saveUserForm() {
        this.saveLoad = false;
        console.log('this.userForms', this.userForms);
        console.log('this.originaluserForms', this.originalUserForms);
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
            await this.$http.post('http://www.sowerkbackend.com/api/formfields/byUserFormId/' + this.userForms.id, newFormField)
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
            await this.$http.put('http://www.sowerkbackend.com/api/formfields/' + formfield.id, changes)
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
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.openEditFormFieldVal = formfieldVal;
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
            this.$http.delete('http://www.sowerkbackend.com/api/formfields/' + formfieldVal.id)
              .then(response => {
                console.log('response for delete formfield', response)
              })
              .catch(err => {
                console.log('err for delete formfield', err)
              })
          }
        }
        this.openEditFormFieldLoad = false;
        this.saveUserForm();
      },
      async updateSingleFormfield(formfieldVal) {
        console.log('updateSingleFormfield', formfieldVal);
        this.userForms.formfields[formfieldVal.order] = formfieldVal
        this.openEditFormFieldLoad = false;
      }
    }
  }

</script>

<style>

</style>
