
<template>
  <v-container style="width: 100%; height: 100%;" overflow-y-auto>
    <!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
    <!--      <v-progress-circular-->
    <!--        indeterminate-->
    <!--        color="primary"-->
    <!--        :size="50"-->
    <!--      ></v-progress-circular>-->
    <!--    </div>-->
    <!-- BANNER CARD -->

    <transition name="slide-fade">
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="loading">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn how to utilize Users on SOWerk.</p>
          </v-col>
          
          <!-- MANAGE USERS VIDEO BUTTON -->
          <v-col cols="4" style="width:100%;text-align:center;">
            <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
              <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">WATCH NOW</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card style="height:450px;width:100%;background-color:#404040;border-radius:10px;" v-if="showVideo === true && company.company_type === 'true'">
        <iframe src="https://player.vimeo.com/video/505426900" allowfullscreen frameborder="0" style="width:100%;height:450px;border-radius:10px;"></iframe>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex flex justify-center align-center">
          <v-col cols="12" sm="12" md="7" style="height:auto;">
            <v-img height="400px" src="/SoWork Logo-179.png"></v-img>
          </v-col>

          <v-col cols="12" sm="12" md="5" class="d-flex flex-column justify-center" style="height:auto">
            <v-row>
              <v-col cols="12">
                <h2 style="color:darkred;font-size:1.5rem">Different Types of Users</h2>
                <p class="mt-4" style="font-size:1rem">Within your SOWerk account you can establish multiple user accounts with different levels of access. You can also assign users to one or multiple channels.
                </p>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-card>
    </transition>
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
        showVideo: false,
        loading: false,
        users: [],
        locations: [],
        headers: [
          { text: 'Name', value: 'first_name', filterable: true, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Admin Level', value: 'useradmin', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Location Access', value: 'locationAccess', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Email', value: 'email', filterable: true, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Phone', value: 'phone', filterable: true, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Created', value: 'usercreated', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Accepted Invite', value: 'userverify', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Actions', value: 'useractions', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        ],
        headersMobile: [
          { text: 'Name', value: 'first_name', filterable: true, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Actions', value: 'useractions', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
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
      showVideoCard(){
        if(this.showVideo === false){
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
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

  table.v-table thead tr th {
    font-size: 50px;
  }
  table.v-table tbody tr td {
    font-size: 50px;
  }
</style>
