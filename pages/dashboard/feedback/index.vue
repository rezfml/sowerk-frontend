<template>
  <v-card class="d-flex flex-column align-center justify-center mt-16" style="width: 100%;">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <v-card-title style="width: 70%; border-radius: 3px; font-size: 18px;"
                  class="primary white--text justify-center font-weight-regular red-gradient mb-10 mt-n8">Hello, do you need support or would you like to leave some feedback?</v-card-title>
    <v-card-subtitle>We are constantly trying to improve and grow, and would love to hear any comments, questions, concerns, or feedback that you would love to share with us. We really appreciate it!</v-card-subtitle>
    <v-form style="width: 80%;" class="justify-center d-flex flex-column align-center">
      <v-text-field style="width: 80%;" label="Company Name"  class="pt-6" placeholder="Company Name" v-model="feedbackForm.company_name"></v-text-field>
      <v-text-field style="width: 80%;" label="Your Name"  class="pt-6" placeholder="Your Name" v-model="feedbackForm.name"></v-text-field>
      <v-text-field style="width: 80%;" label="Your Email"  class="pt-6" placeholder="Your Email" v-model="feedbackForm.email"></v-text-field>
      <v-text-field style="width: 80%;" label="Message" class="pt-6" placeholder="Message" v-model="feedbackForm.message"></v-text-field>
      <v-btn large outlined color="primary" rounded @click="submitFeedback" class="mb-4">Send Feedback</v-btn>
    </v-form>
  </v-card>
</template>

<script>

  export default {
    layout: 'app',
    name: 'feedback',
    data() {
      return {
        feedbackForm: {
          company_name: '',
          name: '',
          email: '',
          message: ''
        },
        loading: false
      }
    },
    async mounted() {
      this.feedbackForm.email = this.currentUser.email;
      this.feedbackForm.name = this.currentUser.first_name + " " + this.currentUser.last_name;
      this.getCompany();
    },
    computed: {
      currentUser() {
        console.log(this.$store.state.user.user.user, 'user')
        return this.$store.state.user.user.user;
      }
    },
    methods: {
      async getCompany() {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.currentUser.companies_id)
          .then(response => {
            this.feedbackForm.company_name = response.data.account_name;
            console.log(response.data, 'company');
            this.loading = true;
          })
          .catch(err => {
            console.log(err);
          })
      },
      async submitFeedback() {
        console.log(this.feedbackForm, 'feedbackForm on submit');
        await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/feedbackform', this.feedbackForm)
          .then(response => {
            console.log('successfully left feedback', response);
          })
          .catch(err => {
            console.log(err, 'error');
          })
        alert('SUCCESSFUL! We will take into account this feedback and make the appropriate changes as soon as possible. We thank you so much for letting us know your issue')
        this.$router.push('/dashboard/home');
      }
    }
  }

</script>

<style scoped>

</style>
