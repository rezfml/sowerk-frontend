<template>
  <v-app class="grey lighten-3">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true ">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;" v-if="company.company_type === 'false'">
        <v-col cols="12">
          <v-card v-for="(userform, index) in userforms" class="my-10">
            <div v-if="userform.active = true">
              <v-card-title v-if="userform">{{ userform.name }}</v-card-title>
              <v-card-text>
                <v-form v-if="userform">
                  <template v-for="(answer, index) in formfields">
                    <v-text-field v-if="answer.type !== 'address'" :type="answer.type" placeholder=" " v-model="answer.value" :required="answer.required">
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">{{ answer.name }}</p>
                      </template>
                    </v-text-field>
                  </template>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" class="px-8" @click="submit">Submit</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row style="height: 100%;" v-if="company.company_type === 'true'">
        <v-col cols="12">
          <v-card v-for="(userform, index) in userforms" class="my-10">
            <div v-if="userform.active = true">
              <v-card-title v-if="userform">{{ userform.name }}</v-card-title>
              <v-card-text>
                <v-form v-if="userform">
                  <template v-for="(answer, index) in formfields">
                    <v-text-field v-if="answer.type !== 'address'" :type="answer.type" placeholder=" " v-model="answer.value" :required="answer.required">
                      <template v-slot:label>
                        <p class="grey--text text--darken-4 font-weight-bold">{{ answer.name }}</p>
                      </template>
                    </v-text-field>
                  </template>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" class="px-8" @click="edit(userform)">Edit</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    layout: 'app',
    name: 'application',
    data() {
      return {
        form_id: null,
        userforms: null,
        formfields: [],
        application: {
          userforms_id: null,
          userprofiles_id: null,
          subData: null,
        },
        user: null,
        company: {},
        loading: false,
      }
    },
    async mounted() {
      console.log('id', this.$route.params.id);
      this.form_id = this.$route.params.id;
      await this.getCompany(this.$store.state.user.user.user.companies_id);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + id)
          .then(async (response) => {
            console.log('company', response.data)
            this.company = response.data;
            await this.getUserform()
          })
          .catch(err => {
            console.log('error in getting company', err)
          })
      },
      async getUserform() {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/userforms/byServiceId/' + this.form_id)
          .then(response => {
            console.log('response.data userform', response.data)
            this.userforms = response.data;
            for (let i = 0; i<response.data.length; i++) {
              this.getFormFields(response.data[i].id);
            }
            console.log('userforms 1', this.userforms);
            console.log(this.loading, 'before load');
            this.loading = true;
            console.log(this.loading, 'after load');
          })
          .catch(e => console.log(e));
      },
      async getFormFields(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/formfields/byUserFormId/' + id)
          .then(response => {
            console.log('formfield', response.data);
            for(let i = 0; i<response.data.length; i++) {
              this.formfields.push(response.data[i])
            }
            console.log(this.formfields, 'formfields');
            console.log(this.userforms, 'userforms');
          })
          .catch(err => {
            console.log('err', err)
          })
      },
      async edit(userform) {
        console.log('userform', userform);
      },
      async submit() {
        let arrayString = JSON.stringify(this.formfields);
        this.application.userforms_id = this.form_id;
        this.application.userprofiles_id = this.currentUser.id;
        this.application.subData = arrayString;
        let {data, status} = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/applications/byUserformid/' + this.form_id, this.application).catch(e => e);
      }
    }
  }
</script>

<style scoped>

</style>
