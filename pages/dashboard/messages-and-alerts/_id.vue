<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height d-flex flex-column align-center justify-center" style="text-align: center;">
        <v-card class="d-flex flex-column align-center mb-10">
          <v-skeleton-loader
            v-if="!load"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="50vw"
          >
          </v-skeleton-loader>
          <transition name="slide-fade">
            <v-card-text v-if="load">To: {{individualMessage.primary_contact_first_name}} {{individualMessage.primary_contact_last_name}} - {{individualMessage.company}} - {{individualMessage.location}}</v-card-text>
          </transition>
          <transition name="slide-fade">
            <v-card-text v-if="load">From: {{individualMessage.spLocationName}}</v-card-text>
          </transition>
          <transition name="slide-fade">
            <v-card-text v-if="load">Category: {{individualMessage.service}}</v-card-text>
          </transition>
          <transition name="slide-fade">
            <v-card-text v-if="load">Message: {{individualMessage.message}}</v-card-text>
          </transition>
        </v-card>
<!--        <MessageEditCard :individualMessage="individualMessage" v-if="individualMessage"></MessageEditCard>-->
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
        load: false
      }
    },
    mounted() {
      this.messageId = this.$route.params.id;
      this.getMessage();
    },
    methods: {
      async getMessage() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/messages/' + this.messageId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.individualMessage = data;
        this.load=true;
        this.editMessage();
        console.log(this.individualMessage, 'message');
      },
      async editMessage() {
        const changes = {
          pmMessageRead: true
        }
        await this.$http.put('https://www.sowerkbackend.com/api/messages/' + this.individualMessage.id, changes)
          .then(response => {
            console.log(response, 'success in reading message for pm')
          })
          .catch(err => {
            console.log(err, 'err in reading message for pm')
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
