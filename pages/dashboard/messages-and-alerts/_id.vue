<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height d-flex flex-column align-center justify-center" style="text-align: center;">
        <v-card class="d-flex flex-column align-center mb-10">
          <v-card-title>Inbox Message #{{individualMessage.id}}</v-card-title>
          <v-card-text>From: {{individualMessage.primary_contact_first_name}} {{individualMessage.primary_contact_last_name}} - {{individualMessage.company}} - {{individualMessage.location}}</v-card-text>
          <v-card-text>Service: {{individualMessage.service}}</v-card-text>
          <v-card-text>Message: {{individualMessage.message}}</v-card-text>
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
      }
    },
    mounted() {
      this.messageId = this.$route.params.id;
      this.getMessage();
    },
    methods: {
      async getMessage() {
        let {data, status} = await this.$http.get('http://www.sowerkbackend.com/api/messages/' + this.messageId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.individualMessage = data;
        console.log(this.individualMessage, 'message');
      }
    }
  }
</script>

<style scoped>

</style>
