<template>
  <v-card min-height="90vh" style="position: relative;" light class="d-flex flex-column">
    <v-img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>
    <div style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center">
      <v-avatar style=" border: 3px solid #212121;" size="150" rounded class="text-center mx-auto elevation-10">
        <v-img src="https://prociseoutdoors.com/wp-content/uploads/2018/10/bass-pro-shops-logo-png-transparent-2.png" ></v-img>
      </v-avatar>
    </div>

    <v-card-title class="text-center mt-12 pt-12">

      <v-row v-if="location">
        <v-col cols="12" class="py-1">
          <p class="mx-auto text-center primary--text mb-0" style="font-size: 24px;">{{ location.name }}</p>
        </v-col>
        <v-col cols="12" class="py-1">
          <p class="mb-2" style="word-break: break-word!important;"><span class="primary--text">142</span> Approved SOWerk Providers At This Facility</p>
        </v-col>
        <v-col cols="12" md="6" class="py-1">
          <v-btn outlined rounded block color="primary" class="px-5">View Facility Dashboard</v-btn>
        </v-col><v-col cols="12" md="6" class="py-1">
          <v-btn outlined rounded block color="primary" class="px-10">Share This Property</v-btn>
        </v-col>
      </v-row>

      <v-row v-else-if="user">
        <v-col cols="12" class="py-1">
          <p class="mx-auto text-center primary--text mb-0" style="font-size: 24px;">{{ company.account_name }}</p>
        </v-col>
        <v-col cols="12" class="py-1">
          <p class="mb-2"><span class="primary--text">{{company.currentConnections}}</span> Approved SOWerk Providers</p>
          <p><span class="primary--text" v-if="company.locations">{{company.locations.length}}</span> Facilities Nationwide</p>
          <v-btn outlined rounded color="primary" class="px-10">Share</v-btn>
        </v-col>
      </v-row>

    </v-card-title>

    <v-divider class="mx-auto" style="width: 90%;"></v-divider>

    <v-card-text class="mx-auto" style="width: 80%;">
      <template v-if="location">
        <p class="title text-center primary--text">About</p>
        <p class="body-2">Address: {{location.address}}, {{location.city}} {{location.state}} {{location.zipcode}}</p>
        <p class="body-2">Founded: 1971</p>
        <p class="body-2">Joined SOWerk: 2020</p>
      </template>
      <template v-else>
        <p class="title text-center primary--text">About</p>
        <p class="body-2">{{company.description}}</p>
        <p class="body-2">Address: {{company.address}} {{company.city}}, {{company.state}} {{company.zipcode}}</p>
        <p class="body-2">Founded: {{company.year_founded}}</p>
        <p class="body-2" v-if="company.creationDate">Joined SOWerk: {{company.creationDate.slice(0,4)}}</p>
      </template>
    </v-card-text>

    <v-divider class="mx-auto" style="width: 90%;"></v-divider>

    <v-card-text class="mx-auto" style="width: 80%;">
      <template v-if="location">
        <p class="title text-center primary--text">Main Contact</p>
        <p class="body-2">{{location.contact_first_name}} {{location.contact_last_name}}</p>
        <p class="body-2">{{location.email}}</p>
        <p class="body-2">{{location.phone}}</p>
        <p class="body-2" v-if="location.adminLevel === 1"><v-icon color="primary">mdi-account</v-icon>Staff Admin</p>
        <p class="body-2" v-if="location.adminLevel === 0"><v-icon color="primary">mdi-account</v-icon>Super Admin</p>
      </template>
      <template v-else-if="user">
        <p class="title text-center primary--text">Profile Contact</p>
        <p class="body-2">{{user.first_name}} {{user.last_name}}</p>
        <p class="body-2">{{user.email}}</p>
        <p class="body-2">{{user.phone}}</p>
      </template>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions class="d-flex justify-center">
      <v-btn color="blue" @click="logout">Logout</v-btn>
      <v-btn color="primary" @click="deleteLocation(location)" v-if="location">DELETE THIS LOCATION</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "ProfileCard",
    props: [
      'location',
      'user',
      'deleteLocation'
    ],
    data() {
      return {
        company: {}
      }
    },
    mounted() {
      console.log(this.location);
      if(this.user) {
        this.getCompany(this.user.companies_id)
      }
    },
    methods: {
      async logout() {
        await this.$store.dispatch('user/logout');
      },
      async getCompany(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company');
            this.company = response.data;
          })
          .catch(err => {
            console.log('err company', err)
          })
      },
    }
  };
</script>

<style scoped>

</style>
