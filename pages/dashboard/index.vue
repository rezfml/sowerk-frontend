<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
<!--    <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">-->
<!--      <v-progress-circular-->
<!--        indeterminate-->
<!--        color="primary"-->
<!--        :size="50"-->
<!--      ></v-progress-circular>-->
<!--    </v-col>-->
    <v-container class="px-8" fluid id="v-step-0">
<!--      <v-row v-if="hidden !== true">-->
<!--        <v-card color="primary" class="d-flex" style="width: 100%;">-->
<!--          <v-card-text class="ml-16" style="color: white; font-size: 24px; align-items:baseline;">New to SOWerk?-->
<!--            <span>-->
<!--                <v-btn :href="'../../landingpage/about'" color="white" class="mt-2 mr-16" style="margin-bottom: 10px !important;" outlined rounded >Learn More</v-btn>-->
<!--            </span>-->
<!--          </v-card-text>-->

<!--          <v-btn @click="exit" color="white" class="mt-2" style="z-index:7"text depressed>X</v-btn>-->
<!--        </v-card>-->
<!--      </v-row>-->
      <v-row class="d-flex justify-center">
        <v-col cols="12">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="50vw"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <transition name="slide-fade">
        <HomeCard
          v-if="locations && locationApproved===true"
          :items="locations"
          :title="'Locations You Manage - ' + locations.length"
          :tableProperties="headers"
          slug="/dashboard/facilities/"
        ></HomeCard>
      </transition>
<!--      <v-row v-if="company && company.company_type !== 'false'">-->
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->

      <v-row v-if="company && company.company_type !== 'false'">
        <v-col col-md-12 col-xs-12 col-sm-12 v-for="(stat, index) in stats" :key="index">
          <transition name="slide-fade">
          <StatCard v-if="statApproved" :stat="stat"></StatCard>
          </transition>
        </v-col>
      </v-row>
<!--      <v-row v-if="company && company.company_type === 'false'">-->
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->
        <v-col v-if="company && company.company_type === 'false'" col-md-12 col-xs-12 col-sm-12 v-for="(stat, index) in providerStats" :key="index">
          <StatCard :stat="stat"></StatCard>
        </v-col>
      </v-row>
<!--      <v-card class="white pt-0 mt-12" v-if="company && company.company_type !== 'false'">-->
<!--        <v-container fluid >-->
<!--          <v-card-title v-if="$vuetify.breakpoint.xs"  md="6" xs="12" style="position: relative; top: -30px; width: 50%; border-radius: 3px; font-size: 14px;line-height:1.2;" class="primary white&#45;&#45;text font-weight-regular red-gradient; " >Approved Vendors - <br/>Quick Look Up</v-card-title>-->
<!--          <v-card-title v-else-if="$vuetify.breakpoint.md||$vuetify.breakpoint.sm "  md="6" xs="12" style="position: relative; top: -30px; width: 50%; border-radius: 3px; font-size: 14.5px; line-height:1.2;" class="primary white&#45;&#45;text font-weight-regular red-gradient " >Approved Vendors - Quick Look Up</v-card-title>-->
<!--          <v-card-title v-else style="position: absolute; top: -30px; left: 25px; width: 35%; border-radius: 3px; font-size: 18px;" class="primary white&#45;&#45;text font-weight-regular red-gradient " >Approved Vendors - <br v-show="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md"/> Quick Look Up</v-card-title>-->

<!--          <v-card-actions v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md" class="d-flex justify-end px-0 py-0">-->
<!--            <v-row class="py-0">-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-col cols="12" class="mt-1">-->
<!--                <v-text-field-->
<!--                  label="Search"-->
<!--                  light-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-card-actions>-->

<!--          <v-card-actions v-else class="d-flex justify-end px-4 py-0">-->
<!--            <v-row class="py-0">-->
<!--              <v-spacer></v-spacer>-->
<!--              <v-col cols="6" class="py-0">-->
<!--                <v-text-field-->
<!--                  label="Search"-->
<!--                  light-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-card-actions>-->

<!--          <v-card-text class="pt-0" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs || $vuetify.breakpoint.md" >-->
<!--            <v-sheet-->
<!--              class="mx-auto"-->
<!--              max-width="100%"-->
<!--            >-->
<!--              <v-slide-group multiple show-arrows>-->
<!--                <v-slide-item-->
<!--                  v-for="(item, index) in quickLookUps"-->
<!--                  :key="index"-->
<!--                  v-slot:default="{ active, toggle }"-->
<!--                  class ="px-3"-->
<!--                >-->
<!--                  <v-card width="200" elevation="0">-->
<!--                    <v-row>-->
<!--                      <v-col class="d-flex flex-column justify-center py-0">-->
<!--                        <p class="text-center primary&#45;&#45;text title" size="50">{{ item.name }}</p>-->
<!--                        <v-icon color="primary" size="50">{{ item.icon }}</v-icon>-->
<!--                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded small :href="item.link" width="70%">View All</v-btn>-->
<!--                      </v-col>-->
<!--                    </v-row>-->
<!--                  </v-card>-->
<!--                </v-slide-item>-->
<!--              </v-slide-group>-->
<!--            </v-sheet>-->
<!--          </v-card-text>-->

<!--          <v-card-text class="pt-0" v-else>-->
<!--            <v-sheet-->
<!--              class="mx-auto"-->
<!--              max-width="100%"-->
<!--            >-->
<!--              <v-slide-group multiple show-arrows>-->
<!--                <v-slide-item-->
<!--                  v-for="(item, index) in quickLookUps"-->
<!--                  :key="index"-->
<!--                  v-slot:default="{ active, toggle }"-->
<!--                  class ="px-4"-->
<!--                >-->
<!--                  <v-card width="200" elevation="0">-->
<!--                    <v-row>-->
<!--                      <v-col class="d-flex flex-column justify-center py-0">-->
<!--                        <p class="text-center primary&#45;&#45;text title">{{ item.name }}</p>-->
<!--                        <v-icon color="primary" size="100">{{ item.icon }}</v-icon>-->
<!--                        <v-btn class="mx-auto mt-4" color="primary" outlined rounded small :href="item.link" width="100%">View All</v-btn>-->
<!--                      </v-col>-->
<!--                    </v-row>-->
<!--                  </v-card>-->
<!--                </v-slide-item>-->
<!--              </v-slide-group>-->
<!--            </v-sheet>-->
<!--          </v-card-text>-->
<!--        </v-container>-->
<!--      </v-card>-->
    </v-container>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/Sidebar";
  import HomeCard from '~/components/dashboard/HomeCard'
  import StatCard from "~/components/dashboard/StatCard";
  import * as moment from 'moment'

  export default {
    name: "home",
    layout: "app",
    components: {
      Sidebar,
      HomeCard,
      StatCard
    },
    data() {
      return {
        loading: false,
        hidden: false,
        items: [
          {
            id: 1,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 2,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 3,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            name: 'Lorem Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
        ],
        stats: [
          {
            title: 'Approved Service Providers',
            value: 0,
            link: '/dashboard/vendors/approved'
          },
          // {
          //   title: 'Requests For Bids',
          //   value: 0,
          //   link: '#'
          // },
          {
            title: 'All Pending Applications',
            value: 0,
            link: '/dashboard/vendors/applicants'
          },
          {
            title: 'Unread Messages',
            value: 0,
            link: '/dashboard/messages-and-alerts/'
          }
        ],
        providerStats: [
          {
            title: 'Approved Applications',
            value: 0,
            link: '/dashboard/vendors/approved'
          },
           {
             title: 'Requested Applications',
             value: 0,
             link: '#'
           },
          {
            title: 'Vendor Plan',
            value: 'Basic',
            link: '/dashboard/vendors/applicants'
          },
          {
            title: 'Service Provider Connections',
            value: 0,
            link: '/dashboard/vendors/approved'
          }
        ],
        quickLookUps: [
          {
            name: 'HVAC',
            icon: 'hvac',
            link: '#'
          },
          {
            name: 'Landscaping',
            icon: 'mdi-rake',
            link: '#'
          },
          {
            name: 'Plumber',
            icon: 'mdi-pipe',
            link: '#'
          },
          {
            name: 'Electrician',
            icon: 'mdi-power-plug',
            link: '#'
          },
          {
            name: 'Painter',
            icon: 'mdi-format-paint',
            link: '#'
          },
          {
            name: 'Paving',
            icon: 'mdi-tractor',
            link: '#'
          },
          {
            name: 'Pest Control',
            icon: 'mdi-bug-outline',
            link: '#'
          },
        ],
        headers: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-regular'},
          { text: 'Location', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Main Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        locations: [],
        user: null,
        company: null,
        locationApproved: false,
        statApproved: false,
      }
    },
    watch: {
      loading: function() {
        if(this.loading){
          console.log(document);
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    async mounted () {
      setTimeout(async () => {
        console.log(this.currentUser);
        if(!this.currentUser) this.$router.go();
        this.loading = true;
        await this.getUser();
        await this.getLocations();
        await this.getApprovedProviderConnections();
        await this.getApplications(this.currentUser.companies_id);
        await this.getMessages(this.currentUser.companies_id)

      }, 1000)
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    methods: {
      async getApplications(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + id)
          .then(async (response) => {
            console.log(response.data, 'response for applications by Pm id');
            if(this.currentUser.is_superuser === false) {
              for(let i = 0; i<response.data.length; i++) {
                if(response.data[i].approval_status === 0 && response.data[i].pmuserprofiles_id === this.currentUser.id) {
                  this.stats[1].value++
                }
              }
            } else {
              for(let i = 0; i<response.data.length; i++) {
                if(response.data[i].approval_status === 0) {
                  this.stats[1].value++
                }
              }
            }
          })
          .catch(err => {
            console.log('err in getting applications', err);
          })
        this.locationApproved = true;
      },
      async getUser() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.user = data;
          console.log(data);
        })
        await this.getCompany();
      },
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
      },
      async getLocations() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          if(this.currentUser.is_superuser === false) {
            for(let i=0; i<data.location.length; i++){
              if(data.location[i].email === this.currentUser.email && data.location[i].phone === this.currentUser.phone) {
                this.locations.push(data.location[i]);
              }
            }
          } else {
            this.locations = data.location;
          }
          console.log(this.locations, 'locations', data, 'data')
        })
        this.loading = false;
        this.statApproved = true;
      },
      exit() {
        this.hidden = true;
      },
      async getApprovedProviderConnections() {
        await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/byPmId/' + this.currentUser.companies_id)
          .then(response => {
            console.log('response approvedproviderconnections', response.data);
            if(this.currentUser.is_superuser === false) {
              for(let i=0; i<response.data.length; i++) {
                  if(response.data[i].pmuserprofiles_id === this.currentUser.id) {
                    console.log(response.data[i], 'applications for staff account')
                    this.stats[0].value ++
                  }
                }
              } else {
                this.stats[0].value = response.data.length
              }
          })
          .catch(err => {
            console.log('err in getting approved provider connections', err);
          })
      },
      async getMessages(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/messages/byRecieverId/' + id)
          .then(response => {
            console.log('messages', response)
            for(let i=0; i<response.data.length; i++) {
              if(response.data[i].pmMessageRead === false) {
                this.stats[2].value++
              }
            }
          })
          .catch(err => {
            console.log('cannot get messages', err)
          })
      }
    }
  };
</script>

<style lang="scss" scoped>

  .red-gradient {
    background: rgb(166,28,0);
    background: linear-gradient(90deg, rgba(166,28,0,1) 0%, rgba(116,21,2,1) 100%);
  }
  .v-application--wrap{
    min-height: unset !important;
  }
  @media (max-width:1264px ){
    #app{
  margin-top:-65px;
}
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
