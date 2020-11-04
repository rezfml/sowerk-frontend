<template>
  <v-card class='d-flex flex-column align-center' style="width: 100%;">
    <v-card-title>Edit Sent Message Form</v-card-title>
    <v-form class="d-flex flex-wrap" style="width: 80%;">
      <v-text-field
        class="mx-2"
        style="width: 45%;"
        placeholder="Message Goes Here"
        label="Message"
        v-model="messageEdit.message"
        clearable
      ></v-text-field>
    </v-form>
    <v-btn color="primary" class="px-16 mb-4" rounded outlined large @click="updateMessage()">Update Message</v-btn>
  </v-card>
</template>

<script>
  export default {
    name: "MessageEditCard",
    props: [
      'individualMessage',
      'editFormLoad',
      'locations'
    ],
    data() {
      return {
        messageEdit: {
          message: this.individualMessage.message,
        },
        updateSuccess: false,
      }
    },
    created() {
      console.log(this.individualMessage, 'messageEdit individualMessage')
      this.editFormLoad = true;
    },
    methods: {
      async updateMessage() {
        console.log('messageEdit', this.messageEdit)
        await this.$http.put('https://www.sowerkbackend.com/api/messages/' + this.individualMessage.id, this.messageEdit)
          .then(response => {
            console.log('updateMessage', response);
            this.updateSuccess = true;
          })
          .catch(e => e);
        this.$router.go();
      },
    }
  }
</script>
