<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;">
        <v-col cols="12">
          <v-card>
            <v-card-title v-if="userform">{{ userform.name }}</v-card-title>
            <v-card-text>
              <v-form v-if="userform">
                <template v-for="(answer, index) in answers">
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
        userform: null,
        answers: [],
        application: {
          userforms_id: null,
          userprofiles_id: null,
          subData: null,
        },
        user: null,
      }
    },
    async mounted() {
      this.form_id = this.$route.params.id;
      await this.getUserform();
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    methods: {
      async getUserform() {
        let {data, status} = await this.$http.get('https://sowerk-backend.herokuapp.com/api/userforms/' + this.form_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.userform = data;
        for (const field of data.formfields) {
          this.answers.push(field);
        }
      },
      async submit() {
        let arrayString = JSON.stringify(this.answers);
        this.application.userforms_id = this.form_id;
        this.application.userprofiles_id = this.currentUser.id;
        this.application.subData = arrayString;
        let {data, status} = await this.$http.post('https://sowerk-backend.herokuapp.com/api/applications/byUserformid/' + this.form_id, this.application).catch(e => e);
      }
    }
  }
</script>

<style scoped>

</style>
