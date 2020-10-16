<template>
  <v-row
    align="stretch"
    justify="center"
    class="mx-auto py-12"
    style="width: 90%;"
  >
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <v-col cols="12">
      <h1 class="font-weight-regular">Messages & Alerts</h1>
    </v-col>
    <v-col cols="12">
      <MessageCard
        :items="messages"
        title="Messages & Alerts"
        :tableProperties="headers"
        slug="/dashboard/messages-and-alerts/"
      ></MessageCard>
    </v-col>
  </v-row>
</template>

<script>
import MessageCard from "~/components/dashboard/MessageCard";

export default {
  layout: 'app',
  name: "messages-and-alerts",
  components: {
    MessageCard
  },
  data() {
    return {
      loading: false,
      messages: [
      ],
      company: {

      },
      headers: [
        { text: 'ID', value: 'id', class: 'primary--text font-weight-regular'},
        { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
        { text: 'Company', value: 'company', class: 'primary--text font-weight-regular' },
        { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
        { text: 'Message', value: 'message', class: 'primary--text font-weight-regular' },
        { text: 'Facility Location', value: 'location', class: 'primary--text font-weight-regular' },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
      ]
    }
  },
  watch: {
    loading: function() {
      if(this.loading){
        console.log(document);
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  async mounted() {
    await this.getCompany();
    await this.getMessages();
  },
  computed: {
    currentUser() {
      return this.$store.state.user.user.user;
    },
  },
  methods: {
    async getCompany() {
      let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.company = data;
        console.log(this.company, 'company');
      })
    },
    async getMessages() {
      await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/messages/byRecieverId/' + this.company.id)
        .then(response => {
          console.log('messages', response)
          this.messages = response.data
          this.loading = true;
        })
        .catch(err => {
          console.log('cannot get messages', err)
          this.loading = true;
        })
    }
  }
};
</script>

<style scoped>
.card-bg >>> .v-image__image {
  background-size: 140%;
}

.red-gradient {
  background: rgb(166,28,0);
  background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
}
</style>
