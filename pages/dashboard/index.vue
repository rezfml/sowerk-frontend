<template>
  <v-app class="grey lighten-3 overflow-scroll" overflow-y-auto>
    <v-container class="" fluid id="v-step-0" style="width: 100%;">
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
        <v-col cols="3" class="mx-2">
          <v-skeleton-loader
            v-if="!locationApproved && company && company.company_type === 'false'"
            type="card-avatar, actions"
            min-height="30vh"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
<!--      Maint modal on render-->
      <transition name="slide-fade">
        <v-card v-if="loadModal === true && locationApproved">
          <template style="margin: 3%; justify-content: center" >
            <p style="padding: 3%; font-size: 1.7rem; color: #A61c00; font-weight: 700; ">We are currently performing maintenance. If you experience issues with the website, we apologize for the inconvenience and thank you for your understanding.</p>
            <v-btn @click="closeModal()" style="z-index: 10; border-radius: 10%;" color="primary">X</v-btn>
          </template>
        </v-card>
      </transition>
      <transition name="slide-fade">
        <v-card v-if="changePasswordPopup" style="z-index: 10; position: fixed; top: 0vh; left: 0vw; width: 100vw; height:100vh" class="d-flex flex-column align-center justify-center">
          <v-card-title style="color: #A61c00;">Hello, {{user.first_name}}!</v-card-title>
          <v-card-text>It seems you've been assigned a password that's been designated temporary. You are encouraged to change this for security reasons. You may do this under Settings -> Manage Users -> Edit. To not recieve this message again, please click the button below!</v-card-text>
          <v-btn @click="passwordKeep" color="primary">I will keep my password as-is for now</v-btn>
          <v-btn @click="exitPasswordPopup" text style="font-size: 25px; position: absolute; top: 10px; right: 10px;">X</v-btn>
        </v-card>
      </transition>
      <transition name="slide-fade">
          <HomeCard
            v-if="locations && locationApproved && company"
            :items="locations"
            :company="company"
            :title="'Channels You Manage - ' + locations.length"
            :tableProperties="headers"
            slug="/dashboard/channels/"
          ></HomeCard>
      </transition>

      <v-row v-if="company && company.company_type !== 'false'">
        <v-col col-md-12 col-xs-12 col-sm-12 v-for="(stat, index) in stats" :key="index">
          <transition name="slide-fade">
          <StatCard v-if="statApproved" :stat="stat"></StatCard>
          </transition>
        </v-col>
      </v-row>

      <v-row v-if="company && company.company_type === 'false'">
        <v-col col-md-12 col-xs-12 col-sm-12 v-for="(stat, index) in providerStats" :key="index" class="d-flex nowrap">
          <transition name="slide-fade">
            <StatCard :stat="stat"></StatCard>
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
        loadModal: false,
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
            title: 'Approved Vendors',
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
            link: '/dashboard/pricing'
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
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Main Contact', value: 'full_name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        locations: [],
        user: null,
        company: null,
        locationApproved: false,
        statApproved: false,
        changePasswordPopup: false,
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
        await this.getCompany();
        await this.getLocations();
        await this.getApprovedProviderConnections();
        await this.getApplications(this.currentUser.companies_id);
        await this.getMessages(this.currentUser.companies_id);
      }, 1000),
        this.loadModal = true
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    methods: {
      closeModal() {
        this.loadModal = false
      },
      async getApplications(id) {
        if(this.company.company_type !== 'false') {
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
        } else {
          await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + id)
            .then(async (response) => {
              console.log(response.data, 'response for applications by Pm id');
              if(this.currentUser.is_superuser === false) {
                for(let i = 0; i<response.data.length; i++) {
                  if(response.data[i].approval_status === 1 && response.data[i].spuserprofiles_id === this.currentUser.id) {
                    this.providerStats[0].value++
                  }
                  if(response.data[i].approval_status === 0 && response.data[i].spuserprofiles_id === this.currentUser.id) {
                    this.providerStats[1].value++
                  }
                }
              } else {
                for(let i = 0; i<response.data.length; i++) {
                  if(response.data[i].approval_status === 1) {
                    this.providerStats[0].value++
                  }
                  if(response.data[i].approval_status === 0) {
                    this.providerStats[1].value++
                  }
                }
              }
            })
            .catch(err => {
              console.log('err in getting applications', err);
            })
        }
      },
      async getUser() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.user = data;
          if(this.user.temporaryPasswordBoolean) {
            this.changePasswordPopup = true;
          }
          console.log(data);
        })
      },
      async exitPasswordPopup() {
        this.changePasswordPopup = false;
      },
      async passwordKeep() {
        await this.$http.put('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id, {
          temporaryPasswordBoolean: false,
        })
          .then(response => {
            console.log(response, 'success in temp password popup edit')
            this.changePasswordPopup = false;
          })
          .catch(err => {
            console.log(err, 'err in temp password popup edit')
          })
      },
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
        console.log(this.company, 'COMPANY!');
      },
      async getLocations() {
        this.locationApproved = true;
        this.statApproved = true;
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
        console.log(this.locationApproved, this.statApproved, 'Approved!!!')
      },
      exit() {
        this.hidden = true;
      },
      async getApprovedProviderConnections() {
        if(this.company.company_type !== 'false') {
          await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/byPmId/' + this.currentUser.companies_id)
            .then(response => {
              console.log('response approvedproviderconnections', response.data);
              if (this.currentUser.is_superuser === false) {
                for (let i = 0; i < response.data.length; i++) {
                  if (response.data[i].pmuserprofiles_id === this.currentUser.id) {
                    console.log(response.data[i], 'applications for staff account')
                    this.stats[0].value++
                  }
                }
              } else {
                this.stats[0].value = response.data.length
              }
            })
            .catch(err => {
              console.log('err in getting approved provider connections', err);
            })
        }
        // } else {
        //   await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/bySpId/' + this.currentUser.companies_id)
        //     .then(response => {
        //       console.log('response approvedproviderconnections', response.data);
        //       if(this.currentUser.is_superuser === false) {
        //         for(let i=0; i<response.data.length; i++) {
        //           if(response.data[i].pmuserprofiles_id === this.currentUser.id) {
        //             console.log(response.data[i], 'applications for staff account')
        //             this.providerStats[0].value ++
        //           }
        //         }
        //       } else {
        //         this.providerStats[0].value = response.data.length
        //       }
        //     })
        //     .catch(err => {
        //       console.log('err in getting approved provider connections', err);
        //     })
        // }
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
