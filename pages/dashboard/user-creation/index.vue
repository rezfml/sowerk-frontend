<template>
  <v-container style="height: 100%;" overflow-y-auto>

<!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
<!--      <v-progress-circular-->
<!--        indeterminate-->
<!--        color="primary"-->
<!--        :size="50"-->
<!--      ></v-progress-circular>-->
<!--    </div>-->

    <v-card class="my-16 height:auto;">
      <v-skeleton-loader
        v-if="!loading"
        type="card-avatar, article, article, actions"
        min-height="60vh"
      ></v-skeleton-loader>
      <transition name="slide-fade">
        <UserCard
          v-if="users.length > 0 && loading === true && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
          :title="'List of Users - ' + company.account_name"
          :items="users"
          :tableProperties="headers"
          :viewAll="false"
          action="View"
          slug="/dashboard/user-creation"
          :company="company"
          :currentUser="currentUser"
          :locations="locations"
          :getUsers="getUsers"
          :getLocations="getLocations"
          :viewLocation='viewLocation'
        >
        </UserCard>
        <UserCard
          v-if="users.length > 0 && loading === true"
          :title="'List of Users - ' + company.account_name"
          :items="users"
          :tableProperties="headersMobile"
          :viewAll="false"
          action="View"
          slug="/dashboard/user-creation"
          :company="company"
          :currentUser="currentUser"
          :locations="locations"
          :getUsers="getUsers"
          :getLocations="getLocations"
          :viewLocation='viewLocation'
        >

        </UserCard>
      </transition>
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
      locations: [],
      headers: [
        { text: 'Name', value: 'first_name', filterable: true, class: 'primary--text font-weight-regular' },
        { text: 'Admin Level', value: 'useradmin', class: 'primary--text font-weight-regular' },
        { text: 'Location Access', value: 'locationAccess', class: 'primary--text font-weight-regular'},
        { text: 'Email', value: 'email', filterable: true, class: 'primary--text font-weight-regular' },
        { text: 'Phone', value: 'phone', filterable: true, class: 'primary--text font-weight-regular' },
        { text: 'Created', value: 'usercreated', class: 'primary--text font-weight-regular' },
        { text: 'Accepted Invite', value: 'userverify', class: 'primary--text font-weight-regular'},
        { text: 'Actions', value: 'useractions', class: 'primary--text font-weight-regular' },
        ],
      headersMobile: [
        { text: 'Name', value: 'first_name', filterable: true, class: 'primary--text font-weight-regular' },
        { text: 'Actions', value: 'useractions', class: 'primary--text font-weight-regular' },
      ],
      company: {},
      viewLocation: false,
    }
  },
  async mounted() {
    await this.getCompany();
    await this.getLocations();
    await this.getUsers();
  },
  computed: {
    currentUser() {
      return this.$store.getters['user/user'].user.user;
    },
  },
  methods: {
    async getLocations() {
      this.locations = [];
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id).catch(e => e);
      if (this.$error(status, data.message, data.errors)) return;
      this.$nextTick(function() {
        this.locations = data.location;
        console.log(this.locations, 'locations', data, 'data')
      })
    },
    async getUsers() {
      this.users = [];
      await this.$http.get('https://www.sowerkbackend.com/api/auth/users/company/' + this.currentUser.companies_id)
        .then(response => {
          console.log(response.data, 'response.data users of company');
          for(let i=0; i<response.data.user.length; i++) {
            response.data.user[i].created = moment(response.data.user[i].created).format('L')
            if(response.data.user[i].is_superuser === true) {
              response.data.user[i].locationAccess = this.locations.length;
            } else {
              response.data.user[i].locationAccess = this.locations.filter(location => {
                if(response.data.user[i].email === location.email && response.data.user[i].first_name === location.contact_first_name && response.data.user[i].last_name === location.contact_last_name && response.data.user[i].phone === location.phone) {
                  return location
                }
              }).length;
            }
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
