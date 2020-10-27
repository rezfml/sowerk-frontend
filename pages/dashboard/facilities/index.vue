<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="50"
          ></v-progress-circular>
        </v-col>

        <v-col cols="12" class="d-flex flex-column justify-start flex-wrap" v-if="$vuetify.breakpoint.sm">
          <FacilitiesCard
            :title="'Your Facilities - ' + locations.length"
            :items="locations"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/facilities/"
          ></FacilitiesCard>
          <v-row class="d-flex justify-space-between align-center flex-wrap mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
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
        <v-col cols="12" class="d-flex flex-column justify-start" v-else>
          <FacilitiesCard
            :title="'Your Facilities - ' + locations.length"
            :items="locations"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/facilities/"
          ></FacilitiesCard>
          <v-row class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
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
        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="50"
          ></v-progress-circular>
        </v-col>
        <v-col cols="3">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        <v-col cols="9" class="d-flex flex-column justify-start">
          <FacilitiesCard
            :title="'Your Facilities - ' + locations.length"
            :items="locations"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/facilities/"
          ></FacilitiesCard>
          <v-row class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
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
        locations: [
          {
            id: '...',
            companyName: '...',
            name: '...',
            phone: '...',
            email: '...',
            city: '...',
            state: '...',
            address: '...'
          },
        ],
        filters: [
          {
            name: 'Location',
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
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Facility', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ]
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
      this.getLocations();
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getLocations() {
        let {data, status} = await this.$http.get('http://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.locations = data.location;
        })
      },
    },
  }
</script>

<style scoped>

</style>
