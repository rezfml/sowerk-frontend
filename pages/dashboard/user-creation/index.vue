<template>
  <v-container style="width: 100vw; height: 100%;" overflow-y-auto>

    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>

    <v-card v-if="currentUser.is_superuser === true" style="width: 100%; background: #a61c00; color: white;" class="d-flex justify-space-between mb-16">
      <v-card-title>Need to Add A New User?</v-card-title>
      <v-btn :to="'../../dashboard/user-creation/add'" outlined color="white" large rounded class="mt-2 mr-3">Add Here</v-btn>
    </v-card>

    <v-card class="my-16 height:auto;">
      <UserCard
        v-if="users.length > 0 && loading === true"
        :title="'List of Users - ' + company.account_name"
        :items="users"
        :tableProperties="headers"
        :viewAll="false"
        action="View"
        slug="/dashboard/user-creation"
        :company="company"
        :currentUser="currentUser"
      >
      </UserCard>
    </v-card>
  </v-container>
</template>

<script>

import UserCard from '@/components/dashboard/UserCard'
import * as moment from 'moment'

export default {
  name: 'user-creation',
  layout: 'app',
  components: {
    UserCard
  },
  data() {
    return {
      loading: false,
      users: [],
      headers: [
        { text: 'Name', value: 'userfull_name', class: 'primary--text font-weight-regular' },
        { text: 'Admin Level', value: 'useradmin', class: 'primary--text font-weight-regular' },
        { text: 'Email', value: 'useremail', class: 'primary--text font-weight-regular' },
        { text: 'Phone', value: 'userphone', class: 'primary--text font-weight-regular' },
        { text: 'Created', value: 'usercreated', class: 'primary--text font-weight-regular' },
        { text: 'Accepted Invite', value: 'userverify', class: 'primary--text font-weight-regular'},
        { text: 'Actions', value: 'useractions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
      company: {},
    }
  },
  async mounted() {
    await this.getCompany();
    await this.getUsers();
  },
  computed: {
    currentUser() {
      return this.$store.getters['user/user'].user.user;
    },
  },
  methods: {
    async getUsers() {
      await this.$http.get('https://www.sowerkbackend.com/api/auth/users/company/' + this.currentUser.companies_id)
        .then(response => {
          console.log(response.data, 'response.data users of company');
          for(let i=0; i<response.data.user.length; i++) {
            response.data.user[i].created = moment(response.data.user[i].created).format('L')
            console.log(response.data.user[i], 'individual user')
            this.users.push(response.data.user[i])
          }
          this.loading = true
        })
    },
    async getCompany() {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id)
        .then(response => {
          console.log(response.data, 'company');
          this.company = response.data
        })
    }
  }
}
</script>

<style>

</style>
