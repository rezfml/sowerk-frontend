<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height d-flex flex-column align-center justify-center" style="text-align: center;">
      <v-card class="d-flex flex-column align-center mb-10">
        <v-card-title>Message #{{individualMessage.id}}</v-card-title>
        <v-card-text>Company: {{individualMessage.company}} - {{individualMessage.location}}</v-card-text>
        <v-card-text>Service: {{individualMessage.service}}</v-card-text>
        <v-card-text>Name: {{individualMessage.primary_contact_first_name}} {{individualMessage.primary_contact_last_name}}</v-card-text>
        <v-card-text>Message: {{individualMessage.message}}</v-card-text>
      </v-card>
      <MessageEditCard :locations="locations" :editFormLoad="editFormLoad" :individualMessage="individualMessage" v-if="individualMessage && editFormLoad"></MessageEditCard>
    </v-container>
  </v-app>
</template>

<script>
  import MessageEditCard from '~/components/dashboard/MessageEditCard';

  export default {
    name: 'message',
    layout: 'app',
    components: {
      MessageEditCard
    },
    data() {
      return {
        messageId: null,
        individualMessage: {

        },
        editFormLoad: false,
        company: {},
        locations: [],
      }
    },
    async mounted() {
      this.messageId = this.$route.params.id;
      await this.getMessage();
      await this.getCompany();
    },
    methods: {
      async getMessage() {
        let {data, status} = await this.$http.get('http://www.sowerkbackend.com/api/messages/' + this.messageId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.individualMessage = data;
        console.log(this.individualMessage, 'message');
        this.editFormLoad = true;
      },
      async getCompany() {
        await this.$http.get('http://www.sowerkbackend.com/api/companies/name/' + this.individualMessage.company)
          .then(async (response) => {
            console.log('company', response.data[0])
            this.company = response.data[0];
            await this.getLocations()
          })
          .catch(err => {
            console.log('err in getting company', err);
          })
      },
      async getLocations() {
        await this.$http.get('http://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.company.id)
          .then(response => {
            console.log('locations', response.data.location)
            this.locations = response.data.location;
          })
          .catch(err => {
            console.log('err in getting locations', err);
          })
      }
    }
  }
</script>

<style scoped>

</style>
