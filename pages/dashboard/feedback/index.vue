<template>
  <div overflow-y-auto>
    <v-skeleton-loader
      v-if="!loading"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      max-width="80vw"
    ></v-skeleton-loader>
    <transition name="slide-fade">
    <v-card class="d-flex flex-column align-center justify-center" style="width: 100%; height: auto;" v-if="feedbackSuccess === false && loading">

<!--      <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
<!--        <v-progress-circular-->
<!--          indeterminate-->
<!--          color="primary"-->
<!--          :size="50"-->
<!--        ></v-progress-circular>-->
<!--      </div>-->
      <v-img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs " style="max-height: 450px;" class="my-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-img v-else style="max-height: 250px;" class="mt-3" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-card-title v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs " style="width: 70%; border-radius: 3px; font-size:1.8vw;" class="primary white--text justify-center font-weight-regular red-gradient mb-10 mt-8">Do You Have Feedback, Need Support, Or Have An Idea? </v-card-title>
      <v-card-title v-else-if="!$vuetify.breakpoint.xs" style="width: 90%; border-radius: 3px; font-size:2.8vw; text-align: center;" class="primary white--text justify-center font-weight-regular red-gradient mb-10 mt-n8">Do You Have Feedback, Need Support, Or Have An Idea?</v-card-title>
      <v-card-title v-else style="width: 90%; border-radius: 3px; font-size:4.3vw; line-height:1.5; text-align: center;" class="primary white--text justify-center font-weight-regular red-gradient mb-10 ">Do You Have Feedback, Need <br/> Support, Or Have An Idea? </v-card-title>
      <v-card-subtitle style="width: 70%; font-size: 14px;">At SOWerk, our entire team is dedicated to your success and happiness. Please, if you have any ideas, questions, or have found an issue we need to fix, don't hesitate to send us a message here. Our team monitors for feedback 24/7. </v-card-subtitle>
      <v-form style="width: 80%;" class="justify-center d-flex flex-column align-center">
        <v-textarea style="width: 80%;" label="Message" class="pt-6" placeholder="Message" v-model="feedbackForm.message" :rules="rules.requiredRules"></v-textarea>
        <v-btn large outlined color="primary" rounded @click="submitFeedback" class="mb-4">Send Feedback</v-btn>
      </v-form>
    </v-card>
    </transition>
    <transition name="slide-fade">
    <v-card v-if="feedbackSuccess === true" style="height: auto;" class="d-flex flex-column align-center">
      <v-img style="max-height: 450px;" class="mt-10" :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'"></v-img>
      <v-card-title style="color: #A61C00">Feedback Submitted</v-card-title>
      <v-card-subtitle color="primary">We will take your feedback into account and make the appropriate changes as soon as possible. We thank you so much for reporting your issue!</v-card-subtitle>
      <v-btn class="my-4" color="primary" :href="'../../../dashboard'" rounded>Return To SOWerk Request Dashboard</v-btn>
    </v-card>
    </transition>
  </div>
</template>

<script>

  export default {
    layout: 'app',
    name: 'feedback',
    data() {
      return {
        feedbackSuccess: false,
        feedbackForm: {
          company_name: '',
          name: '',
          email: '',
          message: ''
        },
        loading: false,
        rules: {
          requiredRules: [(v) => !!v && v === 0 || 'Field is required'],
        }
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
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
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
        if(this.feedbackForm.message === '') {
          return;
        } else {
          await this.$http.post('https://www.sowerkbackend.com/api/feedbackform', this.feedbackForm)
            .then(response => {
              console.log('successfully left feedback', response);
              this.feedbackSuccess = true
            })
            .catch(err => {
              console.log(err, 'error');
            })
        }
      }
    }
  }

</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
