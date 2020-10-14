<template>
  <v-card class="d-flex flex-column align-center">
    <v-card-title>Hello, would you like to leave some feedback?</v-card-title>
    <v-card-subtitle>We are constantly trying to improve and grow, and would love to hear any comments, questions, concerns, or feedback that you would love to share with us. We really appreciate it!</v-card-subtitle>
    <v-form style="width: 80%;">
      <v-text-field placeholder="Company Name" v-model="feedbackForm.company_name"></v-text-field>
      <v-text-field placeholder="Your Name" v-model="feedbackForm.name"></v-text-field>
      <v-text-field placeholder="Message" v-model="feedbackForm.message"></v-text-field>
      <v-btn @click="submitFeedback">Send Feedback</v-btn>
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
          message: ''
        }
      }
    },
    methods: {
      async submitFeedback() {
        console.log(this.feedbackForm, 'feedbackForm on submit');
        await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/feedbackform', this.feedbackForm)
          .then(response => {
            console.log('successfully left feedback', response);
          })
          .catch(err => {
            console.log(err, 'error');
          })
        this.$router.push('/dashboard');
      }
    }
  }

</script>

<style scoped>

</style>
