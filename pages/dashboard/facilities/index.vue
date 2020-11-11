<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->

        <v-col cols="12" class="d-flex flex-column justify-start flex-wrap" v-if="$vuetify.breakpoint.sm">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, article, actions"
            min-height="50vh"
            min-width="80vw"
            cols
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              :title="'Your Facilities - ' + locations.length"
              :items="locations"
              :tableProperties="headers"
              :viewAll="false"
              slug="/dashboard/facilities/"
              v-if="locationApproved===true && loading"
              :viewLocation="viewLocation"
            ></FacilitiesCard>
          </transition>
          <transition name="slide-fade">
            <v-row v-if="loading" class="d-flex justify-space-between align-center flex-wrap mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
              <v-btn
                style=""
                class="px-16 mr-16"
                large
                outlined
                rounded
                color="white"
                to="/dashboard/facilities/add"
              >Add Now</v-btn>
            </v-row>
          </transition>
        </v-col>
        <v-col cols="12" class="d-flex flex-column justify-start" v-else>
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, article, actions"
            min-height="50vh"
            min-width="80vw"
            cols
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              :title="'Your Facilities - ' + locations.length"
              :items="locations"
              :company="company"
              :tableProperties="headers"
              :viewAll="false"
              slug="/dashboard/facilities/"
              v-if="loading"
              :viewLocation="viewLocation"
            ></FacilitiesCard>
          </transition>
          <transition name="slide-fade">
            <v-row v-if="loading" class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
              <v-btn
                style=""
                class="px-16 mr-16"
                large
                outlined
                rounded
                color="white"
                to="/dashboard/facilities/add"
              >Add Now</v-btn>
            </v-row>
          </transition>
        </v-col>

      </v-row>
<!--
  This will be uncommented when FilterCard has a horizontal layout for md screens
      <v-row  v-else-if="$vuetify.breakpoint.md ">
        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="50"
          ></v-progress-circular>
        </v-col>
        <v-row>
        <v-col cols="12">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" class="d-flex flex-column justify-start">
          <FacilitiesCard
            :title="'Your Facilities - ' + locations.length"
            :items="locations"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/facilities/"
          ></FacilitiesCard>
          <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
            <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
            <v-btn
              style=""
              class="px-16 mr-16"
              large
              outlined
              rounded
              color="white"
              to="add"
            >Add Now</v-btn>
          </v-row>
        </v-col>
        </v-row>
      </v-row>
  -->

      <v-row  v-else>
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->
<!--        <v-col cols="3">-->
<!--          <v-skeleton-loader-->
<!--            v-if="!loading"-->
<!--            type="article, article, article, actions"-->
<!--            min-height="50vh"-->
<!--          ></v-skeleton-loader>-->
<!--          <transition name="slide-fade">-->
<!--            <FilterCard-->
<!--              title="Filter"-->
<!--              :filters="filters"-->
<!--              v-if="loading"-->
<!--            ></FilterCard>-->
<!--          </transition>-->
<!--        </v-col>-->
        <v-col cols="12" class="d-flex flex-column justify-start">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, article, actions"
            min-height="50vh"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              :title="'Your Facilities - ' + locations.length"
              :items="locations"
              :company="company"
              :tableProperties="headers"
              :viewAll="false"
              :viewLocation="viewLocation"
              slug="/dashboard/facilities/"
              v-if="locationApproved===true && loading"
            ></FacilitiesCard>
          </transition>
          <transition name="slide-fade">
            <v-row class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;" v-if="currentUser.is_superuser && loading">
              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
              <v-btn
                style=""
                class="px-16 mr-16"
                large
                outlined
                rounded
                color="white"
                to="add"
              >Add Now</v-btn>
            </v-row>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'
  import FacilitiesCard from '@/components/dashboard/FacilitiesCard'

  export default {
    name: 'facilities',
    layout: 'app',
    components: {
      FacilitiesCard,
      FilterCard
    },
    data() {
      return {
        loading: false,
        company: {},
        locations: [
        ],
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
            name: 'State',
            items: [
              "Alaska",
              "Alabama",
              "Arkansas",
              "American Samoa",
              "Arizona",
              "California",
              "Colorado",
              "Connecticut",
              "District of Columbia",
              "Delaware",
              "Florida",
              "Georgia",
              "Guam",
              "Hawaii",
              "Iowa",
              "Idaho",
              "Illinois",
              "Indiana",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Massachusetts",
              "Maryland",
              "Maine",
              "Michigan",
              "Minnesota",
              "Missouri",
              "Mississippi",
              "Montana",
              "North Carolina",
              " North Dakota",
              "Nebraska",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "Nevada",
              "New York",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Virginia",
              "Virgin Islands",
              "Vermont",
              "Washington",
              "Wisconsin",
              "West Virginia",
              "Wyoming"
            ]
          },
          {
            name: 'Vendor Category',
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
        headers: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-regular'},
          { text: 'Facility', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        locationApproved: false,
        viewLocation: false,
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
    mounted() {
      this.getCompany();
      this.getLocations();
      console.log(this.currentUser);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
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
            this.locationApproved = true;
          }
        })
        this.loading = true;
      },
    },
  }
</script>

<style scoped>

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
