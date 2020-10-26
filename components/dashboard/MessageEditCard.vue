<template>
  <v-card class='d-flex flex-column align-center' style="width: 100%;">
    <v-card-title>Edit Sent Message Form</v-card-title>
    <v-form class="d-flex flex-wrap" style="width: 100%;">
      <v-text-field
        class="mx-2"
        style="width: 45%;"
        placeholder="Service Goes Here"
        label="Service"
        v-model="messageEdit.service"
        clearable
      ></v-text-field>
      <v-text-field
        class="mx-2"
        style="width: 45%;"
        placeholder="First Name Goes Here"
        label="First Name"
        v-model="messageEdit.primary_contact_first_name"
        clearable
      ></v-text-field>
      <v-text-field
        class="mx-2"
        style="width: 45%;"
        placeholder="Last Name Goes Here"
        label="Last Name"
        v-model="messageEdit.primary_contact_last_name"
        clearable
      ></v-text-field>
      <v-text-field
        class="mx-2"
        style="width: 45%;"
        placeholder="Message Goes Here"
        label="Message"
        v-model="messageEdit.message"
        clearable
      ></v-text-field>
      <v-select
        v-if="locations"
        class="mx-2"
        style="width: 45%;"
        placeholder="Location Goes Here"
        label="Location"
        v-model="messageEdit.location"
        :items="locations"
        item-text="name"
        clearable
      >
        <template slot="selection" slot-scope="data">
          <p>{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
        </template>
        <template slot="item" slot-scope="data">
          <p>{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
        </template>
      </v-select>
    </v-form>
    <v-btn class="mb-4" color="green" outlined style="width: 40%;" @click="updateMessage()">Update Message</v-btn>
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
          service: this.individualMessage.service,
          company: this.individualMessage.company,
          primary_contact_first_name: this.individualMessage.primary_contact_first_name,
          primary_contact_last_name: this.individualMessage.primary_contact_last_name,
          message: this.individualMessage.message,
          location: this.individualMessage.location,
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
        await this.$http.put('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/messages/' + this.individualMessage.id, this.messageEdit)
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
