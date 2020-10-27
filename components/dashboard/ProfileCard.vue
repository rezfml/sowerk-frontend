<template>
  <v-card min-height="90vh" style="position: relative;" light class="d-flex flex-column" max-height="auto">
    <v-img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" max-height="150px"></v-img>
    <div style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center" v-if="location">
      <v-avatar style=" border: 3px solid #212121;" size="150" rounded class="text-center mx-auto elevation-10">
        <v-img  :src="location.imageUrl" ></v-img>
      </v-avatar>
    </div>

    <div style="width: 100%; position: absolute; z-index: 3; top: 75px;" class="d-flex justify-center" v-else>
      <v-avatar style=" border: 3px solid #212121;" size="150" rounded class="text-center mx-auto elevation-10">
        <v-img  :src="company.imgUrl" ></v-img>
      </v-avatar>
    </div>
    <v-card-title class="text-center mt-12 pt-12">

      <v-row v-if="location" style="text-align: center;" class="">
          <v-card-text class="mx-auto text-center primary--text mb-n6" style="font-size: 24px;">{{ location.name }}</v-card-text>
          <v-card-text class="mx-auto text-center mb-n6" style="font-size: 14px !important; text-align: center;">{{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
        <v-row class="d-flex justify-center" style="width: 100%;">
          <v-card-text class="mx-auto text-center mb-n6" style="width: 50%; font-size: 14px !important; text-align: center;">Founded: {{location.year_founded}}</v-card-text>
          <v-card-text class="mx-auto text-center mb-n6" style="width: 50%; font-size: 14px !important; text-align: center;">Joined SOWerk: {{location.created}}</v-card-text>
        </v-row>

          <v-card-text class="mb-n6 mx-auto text-center" style="word-break: break-word!important;"><span class="primary--text">{{approvedProviders}}</span> Approved SOWerk Providers At This Facility</v-card-text>

          <v-card-text class="mx-auto text-center mb-n6" style=" font-size: 14px !important; word-break: break-word!important;">{{location.contact_first_name}} {{location.contact_last_name}} - <span class="mb-2" style="font-size: 14px !important; text-align: center;word-break: break-word!important;" v-if="location.adminLevel === 1"><v-icon color="primary">mdi-account</v-icon>Staff Admin</span>
            <span class="mb-n6" style="font-size: 14px !important; text-align: center;word-break: break-word!important;" v-if="location.adminLevel === 0"><v-icon color="primary">mdi-account</v-icon>Super Admin</span></v-card-text>

            <v-card-text class="mx-auto mb-n6" style="font-size: 14px !important; word-break: break-word!important;">{{location.email}}</v-card-text>

            <v-card-text class="mx-auto mb-6" style="font-size: 14px !important; ;word-break: break-word!important;">{{location.phone}}</v-card-text>
<!--          <v-btn outlined rounded block color="primary" class="px-5" style="font-size: 18px;">View Facility Dashboard</v-btn>-->
<!--          <v-btn outlined rounded block color="primary" class="px-10 my-4" style="font-size: 18px;">Share This Property</v-btn>-->
      </v-row>

      <v-row v-else-if="user">
        <v-col cols="12" class="py-1">
          <p class="mx-auto text-center primary--text mb-0" style="font-size: 24px;">{{ company.account_name }}</p>
            <v-card-subtitle><a style="text-decoration: none; color: #1e1e1e" @click="websiteLink">{{company.website}}</a></v-card-subtitle>
        </v-col>
        <v-col cols="12" class="py-1">
          <p class="mb-2"><span class="primary--text">{{company.currentConnections}}</span> Approved SOWerk Providers</p>
          <p><span class="primary--text" v-if="company.locations">{{company.locations.length}}</span> Facilities Nationwide</p>
          <v-btn outlined rounded color="primary" class="px-10">Share</v-btn>
        </v-col>
      </v-row>

    </v-card-title>

    <v-divider v-if="user" class="mx-auto" style="width: 90%;"></v-divider>

    <v-card-text class="mx-auto" style="width: 80%;" v-if="user">
      <template v-if="user">
        <p class="title text-center primary--text">About</p>
        <p class="body-2">{{company.description}}</p>
        <p class="body-2">Address: {{company.address}} {{company.city}}, {{company.state}} {{company.zipcode}}</p>
        <p class="body-2">Founded: {{company.year_founded}}</p>
        <p class="body-2" v-if="company.creationDate">Joined SOWerk: {{company.creationDate.slice(0,4)}}</p>
      </template>
    </v-card-text>

    <v-divider v-if="user" class="mx-auto" style="width: 90%;"></v-divider>

    <v-card-text class="mx-auto" style="width: 80%;">
      <template v-if="user">
        <p class="title text-center primary--text">Profile Contact</p>
        <p class="body-2">{{user.first_name}} {{user.last_name}}</p>
        <p class="body-2">{{user.email}}</p>
        <p class="body-2">{{user.phone}}</p>
      </template>
    </v-card-text>

      <v-btn @click="locationApproval" style="width: 80%;" class="d-flex justify-center mx-auto mt-n12" color="primary" outlined rounded v-if="location">Location Approved Vendors</v-btn>
      <v-btn @click="pendingApplication" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Pending Applicants</v-btn>

      <v-btn @click="editVendorRequirement" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Edit Vendor Requirements</v-btn>
      <v-btn @click="editLocationDetail" style="width: 80%;" class="d-flex justify-center mx-auto my-1" color="primary" outlined rounded v-if="location">Edit Location Details</v-btn>


    <v-spacer></v-spacer>
    <v-card-actions class="d-flex justify-center">
      <v-btn v-if="this.user" style="color:white;" color="#802525" @click="logout">Logout</v-btn>
      <v-btn class="mt-4" small color="primary" @click="deleteLocation(location)" v-if="location && this.currentUser.is_superuser === true">DELETE LOCATION</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "ProfileCard",
    props: [
      'location',
      'user',
      'deleteLocation',
      'approvedProviders',
      "locationApproved",
      "pendingApplicants",
      "editVendorRequirements",
      "editLocationDetails",
      "locationApproval",
      "pendingApplication",
      "editVendorRequirement",
      "editLocationDetail",
    ],
    data() {
      return {
        company: {}
      }
    },
    mounted() {
      console.log(this.location, 'location this', 'this.locationApproved', this.locationApproved, 'this.pendingApplicants', this.pendingApplicants, this.editVendorRequirements, this.editLocationDetails);
      if(this.user) {
        this.getCompany(this.user.companies_id)
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
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
      async websiteLink() {
        this.$router.push('../../../../' + this.company.website)
      }
    }
  };
</script>

<style scoped>

</style>
