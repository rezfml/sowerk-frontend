<template>
  <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
    <v-container v-if="items" class="pt-0" fluid>
      <v-card-title
        style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
        class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2">
        <v-data-table
          :headers="tableProperties"
          :items="items"
          :items-per-page="5"
        >
          <template v-slot:item.full_name="{ item }">
            <v-icon color="primary">mdi-account</v-icon>
            {{ item.primary_contact_first_name }}
            {{ item.primary_contact_last_name }}
          </template>
          <template v-slot:item.actions="{ item }">
            <nuxt-link :to="slug + item.id" append>
              <v-btn class="my-1" style="width: 90%; text-decoration: none!important;" color="green" outlined>View</v-btn>
            </nuxt-link>
            <v-btn class="my-1" style="width: 90%;" color="primary" outlined @click="deleteMessage(item)">Delete</v-btn>
          </template>
          <template v-slot:footer>
            <v-row class="d-flex justify-center my-4" style="width: 100%;">
              <v-btn to='/dashboard/messages-and-alerts/add' color="primary" class="px-16" rounded outlined large>Send New Message</v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
        <v-btn
          color="primary"
          class="px-8"
          rounded
          outlined
          small
          style="font-size: 12px"
        >View All</v-btn
        >
      </v-card-actions>
    </v-container>
    <v-container v-if="sent" class="pt-0" fluid>
      <v-card-title
        style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
        class="primary white--text font-weight-regular red-gradient"
      >{{ title }}</v-card-title>
      <v-card-actions class="d-flex justify-end px-4 py-0">
        <v-row class="py-0">
          <v-spacer></v-spacer>
          <v-col cols="4" class="py-0">
            <v-text-field label="Search" light></v-text-field>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-card-text class="pt-0 pb-2">
        <v-data-table
          :headers="tableProperties"
          :items="sent"
          :items-per-page="5"
        >
          <template v-slot:item.full_name="{ item }">
            <v-icon color="primary">mdi-account</v-icon>
            {{ item.primary_contact_first_name }}
            {{ item.primary_contact_last_name }}
          </template>
          <template v-slot:item.actions="{ item }">
            <nuxt-link :to="'../../../dashboard/messages-and-alerts/sent/' + item.id" append>
              <v-btn class="my-1" style="width: 90%; text-decoration: none!important;" color="green" outlined>Edit</v-btn>
            </nuxt-link>
            <v-btn class="my-1" style="width: 90%;" color="primary" outlined @click="deleteMessage(item)">Delete</v-btn>
          </template>
          <template v-slot:footer>
            <v-row class="d-flex justify-center my-4" style="width: 100%;">
              <v-btn to='/dashboard/messages-and-alerts/add' color="primary" class="px-16" rounded outlined large>Send New Message</v-btn>
            </v-row>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="d-flex justify-end px-4" v-if="viewAll">
        <v-btn
          color="primary"
          class="px-8"
          rounded
          outlined
          small
          style="font-size: 12px"
        >View All</v-btn
        >
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'HomeCard',
  props: ['items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'sent'],
  data() {
    return {
      messages: null
    }
  },
  mounted() {
    console.log(this.items, 'this.items')
  },
  methods: {
    deleteMessage(messageParam) {
      let confirmDelete = confirm('Are you sure you want to delete this message? Cannot be undone.');
      if (confirmDelete === true) {
        this.$http.delete('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/messages/' + messageParam.id)
        .then(response => {
          alert('Message successfully deleted');
          this.$router.go()
        })
        .catch(err => {
          alert('Error - could not delete message');
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.red-gradient {
  background: rgb(166, 28, 0);
  background: linear-gradient(
      90deg,
      rgba(166, 28, 0, 1) 0%,
      rgba(116, 21, 2, 1) 100%
  );
}
</style>
