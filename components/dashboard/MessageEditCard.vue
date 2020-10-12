<template>
  <v-card class='d-flex flex-column align-center' style="width: 100%;">
    <v-card-title>Edit Message Form</v-card-title>
    <v-form style="width: 50%;">
      <v-text-field
        light
        placeholder="Service Goes Here"
        label="Service"
        v-model="messageEdit.service"
        full-width
        clearable
      ></v-text-field>
      <v-text-field
        light
        placeholder="Company Goes Here"
        label="Company"
        v-model="messageEdit.company"
        full-width
        clearable
      ></v-text-field>
      <v-text-field
        light
        placeholder="First Name Goes Here"
        label="First Name"
        v-model="messageEdit.primary_contact_first_name"
        full-width
        clearable
      ></v-text-field>
      <v-text-field
        light
        placeholder="Last Name Goes Here"
        label="Last Name"
        v-model="messageEdit.primary_contact_last_name"
        full-width
        clearable
      ></v-text-field>
      <v-text-field
        light
        placeholder="Message Goes Here"
        label="Message"
        v-model="messageEdit.message"
        full-width
        clearable
      ></v-text-field>
      <v-text-field
        light
        placeholder="Location Goes Here"
        label="Location"
        v-model="messageEdit.location"
        full-width
        clearable
      ></v-text-field>
      <v-btn @click="updateMessage()">Update Message</v-btn>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    name: "MessageEditCard",
    props: [
      'individualMessage',
    ],
    data() {
      return {
        messageEdit: {
          service: this.individualMessage.service,
          company: this.individualMessage.company,
          primary_contact_first_name: this.individualMessage.primary_contact_first_name,
          primary_contact_last_name: this.individualMessage.primary_contact_last_name,
          message: this.individualMessage.message,
          location: this.individualMessage.location,
        }
      }
    },
    methods: {
      async updateMessage() {
        let {data, status} = await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/messages/' + this.individualMessage.id, this.messageEdit)
          .then(response => {
            this.$router.go();
          })
          .catch(e => e);
      }
    }
  }
</script>
