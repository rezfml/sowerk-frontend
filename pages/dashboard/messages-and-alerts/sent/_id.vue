<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height d-flex flex-column align-center justify-center" style="text-align: center;">
      <v-card class="d-flex flex-column align-center mb-10" style="width:80%">
        <v-skeleton-loader
          v-if="!editFormLoad"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="50vw"
        >
        </v-skeleton-loader>
        <transition name="slide-fade">
          <v-card-text>To: {{individualMessage.spLocationName}}</v-card-text>
        </transition>
        <transition name="slide-fade">
          <v-card-text>From: {{individualMessage.primary_contact_first_name}} {{individualMessage.primary_contact_last_name}} - {{individualMessage.company}} - {{individualMessage.location}}</v-card-text>
        </transition>
        <transition name="slide-fade">
          <v-card-text>Channel: {{individualMessage.service}}</v-card-text>
        </transition>
        <transition name="slide-fade">
          <v-card-text>Message: {{individualMessage.message}}</v-card-text>
        </transition>
        <transition name="slide-fade">
          <MessageEditCard class="mt-4" :locations="locations" :editFormLoad="editFormLoad" :individualMessage="individualMessage" v-if="individualMessage && editFormLoad"></MessageEditCard>
        </transition>
      </v-card>
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
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/messages/' + this.messageId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.individualMessage = data;
        console.log(this.individualMessage, 'message');
        this.editFormLoad = true;
      },
      async getCompany() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/name/' + this.individualMessage.company)
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
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.company.id)
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
