<template>
  <v-app class="grey lighten-3" overflow-y-auto>
<!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
<!--      <v-progress-circular-->
<!--        indeterminate-->
<!--        color="primary"-->
<!--        :size="50"-->
<!--      ></v-progress-circular>-->
<!--    </div>-->
    <v-skeleton-loader
      v-if="!loading && ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs)"
      type="card-avatar, article, article, actions"
      min-height="50vh"
      min-width="80vw"
    ></v-skeleton-loader>

    <v-container class="px-0" style="max-width: 95%;">

      <!-- ACCOUNT CHANNELS BANNER AND PARAGRAPH TEXT, PLUS ADD NOW BUTTON -->
      <transition name="slide-fade">
        <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" >
          <v-row style="width: 100%; height: auto;" class="d-flex flex align-center">
            <v-img class="" src="/APPROVED-VENDORS-Logo-163.png" style="width: 10%; height: 30vh;"></v-img>
            <v-col cols="7" class="d-flex flex-column justify-center">
              <!-- <p class="mt-4">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
              </p> -->
              <v-spacer></v-spacer>
              <p>This is where it all comes together, your list of approved Vendors!</p>
              <v-spacer></v-spacer>
              <p>Here you will find a full and complete list of Vendors that your company account has approved through one channel or multiple channels. However, based on your user access level as well as which channel(s) the Vendor was approved by your company this interface may have different features and functionality. For example, if a Vendor was originally approved through one channel in your company account but that channel is not one you manage then some details and features may be limited.</p>
              <v-spacer></v-spacer>
              <!-- <p>Here is an example: A retail company selling men's clothing has one warehouse and three store properties. Besides setting up four Channels, one for each property, they also added a Channel for the merchandising department responsible for outerwear wholesale vendors and another Channel for men's shoe wholesale vendors.
              </p> -->
              <v-spacer></v-spacer>
              <v-row class="d-flex justify-space-around align-center mx-0">
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width: 80%;"
                  class="px-16 mr-16"
                  large
                  outlined
                  rounded
                  color="white"
                  href="/dashboard/vendors/invite"
                >Invite New Vendors</v-btn>
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width: 80%;"
                  class="px-16 mr-16"
                  large
                  outlined
                  rounded
                  color="white"
                  href="/dashboard/vendors/"
                >View Vendor Directory</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </transition>

      <v-row v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">

        <v-col cols="12">

          <!-- <transition name="slide-fade">
          <v-row v-if="loading" class="d-flex flex-column justify-space-between align-center mt-6"style="background: linear-gradient(to right, #A61C00, #741502);">
            <p style="color: white; font-size: 24px;" class="pt-4">Looking For A New Vendor? Search The SOWerk Directory.</p>
            <v-btn
              style=""
              class="px-16 mb-4"
              large
              outlined
              rounded
              color="white"
              href="/dashboard/vendors/"
            >Search Directory</v-btn>
          </v-row>
          </transition>

          <transition name="slide-fade">
            <v-row v-if="loading" class="d-flex flex-column justify-space-between align-center mt-10"style="background: white;">
            <p style="font-size: 24px; text-align: center; width: 50%;" class="pt-4">Already Know Vendors To Invite? Use The SOWerk Invite Tool.</p>
            <v-btn
              style=""
              class="px-16 mb-4"
              large
              outlined
              rounded
              color="primary"
              href="/dashboard/vendors/invite"
            >Invite Them Now</v-btn>
          </v-row>
          </transition> -->

          <transition name="slide-fade">
            <FacilitiesCard
              v-if="loading != false"
              :title="'My Approved Vendors'"
              :items="vendors"
              :tableProperties="headers"
              :viewAll="false"
              slug="/dashboard/approved/"
              action="ViewApproved"
              :company="company"
            ></FacilitiesCard>
          </transition>
        </v-col>
      </v-row>

      <v-row v-else>
<!--        <v-col cols="3">-->
<!--          <v-skeleton-loader-->
<!--            v-if="!loading && (!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs)"-->
<!--            type="card-avatar, article, article, actions"-->
<!--            min-height="50vh"-->
<!--            min-width="15vw"-->
<!--          ></v-skeleton-loader>-->
<!--          <transition name="slide-fade">-->
<!--            <FilterCard-->
<!--              title="Filter"-->
<!--              :filters="filters"-->
<!--              :locationApproved="locationApproved"-->
<!--              v-if="loading"-->
<!--            ></FilterCard>-->
<!--          </transition>-->
<!--        </v-col>-->
        <v-col cols="12">
          <v-skeleton-loader
            v-if="!loading && (!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs)"
            type="card-avatar, card-avatar, article, article, actions"
            min-height="50vh"
            min-width="40vw"
          ></v-skeleton-loader>

          <transition name="slide-fade">
          <FacilitiesCard
            v-if="loading != false"
            :title="'My Approved Vendors'"
            :items="vendors"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/approved/"
            action="ViewApproved"
            :company="company"
          ></FacilitiesCard>
          </transition>
        </v-col>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
  import FacilitiesCard from '~/components/dashboard/FacilitiesCard'

  export default {
    name: 'approvedVendors',
    layout: 'app',
    components: {
      FilterCard,
      FacilitiesCard
    },
    data() {
      return {
        // items: [
        //   {
        //     id: 0,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'JHV HVAC',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 1,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Ben Franklin Plumbing',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 2,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Landscape United LLC.',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 3,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 4,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 5,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 6,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   }
        // ],
        filters: [
          {
            name: 'Proximity',
            items: [
              'State',
              'National',
              'Under 10 Miles',
              'Under 25 Miles',
              'Under 50 Miles',
              'Under 100 Miles',
              'Under 150 Miles',
              'Under 200 Miles',
              '200+ Miles',
            ]
          },
          {
            name: 'Service Needs',
            items: [
              'HVAC',
              'Electrical',
              'Plumbing',
              'Cleaning',
              'Landscaping'
            ]
          },
          {
            name: 'Years in Business',
            items: [
              'Less Than 1 Year',
              '1 - 3 Years',
              '3 - 5 Years',
              '5 - 10 Years',
              '10+ Years',
            ]
          },
          {
            name: 'Approved Applications',
            items: [
              'Less than 5',
              '6 - 15',
              '16 - 24',
              '25+',
            ]
          }
        ],
        providerProperties: [
          'Services Provided',
          'Company Name',
          'Name',
          'Phone',
          'Email',
          'Location'
        ],
        headers: [
          { text: 'Service', value: 'service', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Primary Contact', value: 'fullname', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Facility', value: 'addressCityState', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        applications: null,
        company: {},
        companies: [],
        connections: [],
        connectionsLen: Number,
        vendors: [],
        vendorsLength: Number,
        loading: false,
        locationApproved: true,
      }
    },
    async mounted() {
      console.log();
      await this.getCompany(this.currentUser.companies_id);
      let connectLen = this.connectLen;

    },
    computed: {
      currentUser() {
        console.log(this.$store.state.user.user.user);
        return this.$store.state.user.user.user;
      }
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async (response) => {
            console.log('company', response.data)
            this.company = response.data;
            await this.getConnectionTable(this.company.id)
          })
          .catch(err => {
            console.log('error in getting company', err)
          })
      },
      async getConnectionTable(id) {
        console.log('user current', this.currentUser, 'current company', this.company);
        if(this.company.company_type === "true") {
          console.log('true');
          await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + id)
            .then(response => {
              console.log(response.data, 'yoooo');
              if(response.data.length === 0) {
                this.loading = true;
              }
              for(let i = 0; i<response.data.length; i++) {
                if(response.data[i].approval_status === 1 && this.currentUser.is_superuser === true) {
                  this.connections.push(response.data[i]);
                  console.log('response.data', response.data)
                  this.getLocations(response.data[i].spcompanies_id);
                  console.log(this.connections, 'connections');
                } else if ((response.data[i].approval_status === 1) && (this.currentUser.is_superuser === false) && (response.data[i].pmuserprofiles_id === this.currentUser.id) ) {
                  this.connections.push(response.data[i]);
                  console.log('response.data', response.data)
                  this.getLocations(response.data[i].spcompanies_id);
                  console.log(this.connections, 'connections');
                } else {
                  this.loading = true;
                }
              }
            })
            .catch(err => {
              console.log(err, 'err');
            })
        } else {
          console.log('false');
          await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + id)
            .then(response => {
              console.log(response.data, 'yoooo');
              for(let i = 0; i<response.data.length; i++) {
                if(response.data[i].approval_status === 1 && this.currentUser.is_superuser) {
                  this.connections.push(response.data[i]);
                  this.getBusinesses(response.data[i].pmcompanies_id);
                  console.log(this.connections, 'connections');
                } else if(response.data[i].approval_status === 1 && this.currentUser.is_superuser === false && response.data[i].pmuserprofiles_id === this.currentUser.id) {
                  this.connections.push(response.data[i]);
                  this.getBusinesses(response.data[i].pmcompanies_id);
                  console.log(this.connections, 'connections');
                } else {
                  this.loading = true;
                }
              }
            })
            .catch(err => {
              console.log(err, 'err');
            })
        }
      },
      async getLocations(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
          .then(response => {
            for(let i=0; i< response.data.location.length; i++) {
              response.data.location[i].services = response.data.location[i].services.join(', ')
              this.$http.get('https://www.sowerkbackend.com/api/companies/' + response.data.location[i].companies_id)
                .then(res => {
                  response.data.location[i].name = `${res.data.account_name}`;
                  response.data.location[i].imageUrl = res.data.imgUrl;
                })
                .catch(err => {
                  console.log('err in getting company for location', err);
                })
              response.data.location[i].fullname = `${response.data.location[i].contact_first_name} ${response.data.location[i].contact_last_name}`;
              setTimeout(function() {

              }, 300)
              this.vendors.push(response.data.location[i]);
              //this.getUsers(response.data.location[i].companies_id, i);
              console.log(i, 'i value', response.data.location.length);
              console.log(this.vendors, 'vendors 2x');
            }
          })
          .catch(e => console.log(e, 'error'));
        this.loading = true;
        console.log('loading', this.loading)
      },
      async getBusinesses(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            this.vendors.push(response.data);
            console.log(this.vendors, 'vendors');
          })
          .then(res => {
            console.log(this.vendors, 'yay');
            for(let i=0; i< this.vendors.length; i++) {
              console.log(this.vendors[i], 'vendors i')
              this.getUsers(this.vendors[i].id, i);
              this.vendors[i].servicesOffered = String(this.vendors[i].servicesOffered).replace(/"/g,"").replace(",", ', ').replace("{", '').replace("}", '');
              console.log(this.vendors, 'vendors 2x');
            }
          })
          .catch(e => console.log(e, 'error'));
      },
      async getUsers(id, index) {
        console.log('id', id)
        this.$http.get('https://www.sowerkbackend.com/api/auth/users/company/' + id)
          .then(response => {
            console.log(response.data, 'user response.data');
            console.log(this.vendors[index], 'index vendor', this.vendors, 'vendors');
            this.vendors[index].name = `${response.data.user.first_name} ${response.data.user.last_name}`;
            if(index === (this.vendors.length - 1)) {
              this.loading = true;
              console.log("YAY", this.loading)
            }
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      // async getApprovedApplications() {
      //   let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/applications/type/1').catch(e => e);
      //   if (this.$error(status, data.message, data.errors)) return;
      //   await this.getApprovedUsers(data);
      // },
      // async getApprovedUsers(applications) {
      //   for (const application of applications) {
      //     let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + application.userprofiles_id).catch(e => e);
      //     await this.getApprovedCompanies(data);
      //   }
      // },
      // async getApprovedCompanies(user) {
      //   let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + user.companies_id).catch(e => e);
      //   this.companies.push(data);
      //   console.log(this.companies, 'approvedVendors');
      // }
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
