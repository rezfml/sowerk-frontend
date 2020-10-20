<template>
  <v-container overflow-y-auto>
    <v-row class="d-flex justify-center" style="width: 100%;">
      <v-col style="width: 55%;">
        <v-card class="d-flex flex-column align-center">
          <v-card-title>UserForm - #{{userForms.id}} {{userForms.name}}</v-card-title>
          <v-card style="width: 100%;" class="my-4 d-flex flex-column align-center" v-for="(form, index) in userForms.formfields">
            <v-card-text style="text-align: center">{{form.name}}</v-card-text>
          </v-card>
        </v-card>
      </v-col>
      <v-col style="width: 35%;" class="d-flex flex-column align-center">
        <v-card style="width: 100%;" class="my-2">
          <v-card-text>Input Field</v-card-text>
        </v-card>
        <v-card style="width: 100%;" class="my-2">
          <v-card-text>Select Field</v-card-text>
        </v-card>
        <v-card style="width: 100%;" class="my-2">
          <v-card-text>File Upload</v-card-text>
        </v-card>
        <v-btn style="width: 100%;" color="primary" rounded class="my-2">Save</v-btn>
        <v-btn :href="'../vendors/applicants'" style="width: 100%;" color="primary" rounded outlined class="my-2">Go Back To All Applications</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'application',
    layout: 'app',
    data () {
      return {
        userForms: {},
        finishedFormFields: false,
        totalLength: 0
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
            this.userForms = response.data;
            this.getFormFields(response.data.id);
            this.finishedFormFields = true;
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
            this.userForms.formfields = response.data;
            this.totalLength += response.data.length;
          })
          .catch(err => {
            console.log('err get services', err);
          })
      }
    }
  }

</script>

<style>

</style>
