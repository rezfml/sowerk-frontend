<template>
  <div style="width: 100%;" class="d-flex flex-column align-center">
    <v-form class="mt-10" style="width: 80%;">
      <v-text-field placeholder="Service Goes Here" v-model="messageForm.service"></v-text-field>
      <v-text-field placeholder="Company Goes Here" v-model="messageForm.company"></v-text-field>
      <v-text-field placeholder="First Name Goes Here" v-model="messageForm.primary_contact_first_name"></v-text-field>
      <v-text-field placeholder="Last Name Goes Here" v-model="messageForm.primary_contact_last_name"></v-text-field>
      <v-text-field placeholder="Message Goes Here" v-model="messageForm.message"></v-text-field>
      <v-text-field placeholder="Location Goes Here" v-model="messageForm.location"></v-text-field>
      <v-btn @click="submit">Send Message</v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'addMessage',
    layout: 'app',
    components: {

    },
    data() {
      return {
        messageForm: {
          service: null,
          company: null,
          primary_contact_first_name: null,
          primary_contact_last_name: null,
          message: null,
          location: null,
        }
      }
    },
    async mounted() {
      console.log(this.currentUser);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      }
    },
    methods: {
      async submit() {
        console.log(this.messageForm)
        let {data, status} = await this.$http.post('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/messages/byUserId/' + this.currentUser.id, this.messageForm)
        .catch(err => {
          console.log(err);
        })

        console.log(data);
        this.$router.push('/dashboard/messages-and-alerts');
      }
    }
  }

</script>

<style scoped>

</style>
