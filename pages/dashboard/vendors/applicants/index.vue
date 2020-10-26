<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
      <v-row>
        <v-col cols="12" class="d-flex flex-column justify-start">
          <ActiveApplicationsCard
            v-if="applications.length > 0"
            :title="'My Active Applications'"
            :tableProperties="headers"
            :viewAll="false"
            :items="applications"
            :loadingRequests="loading"
            slug="/dashboard/vendors/applicants"
          ></ActiveApplicationsCard>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="px-0" style="max-width: 95%;" v-else>
      <v-row>
        <v-col cols="3">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        <v-col cols="9" class="d-flex flex-column justify-start">
          <ActiveApplicationsCard
            v-if="applications.length > 0"
            :title="'My Active Applications'"
            :tableProperties="headers"
            :viewAll="false"
            :items="applications"
            :loadingRequests="loading"
            slug="/dashboard/vendors/applicants"
          ></ActiveApplicationsCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
  import ActiveApplicationsCard from '~/components/dashboard/ActiveApplicationsCard'

  export default {
    name: 'activeapplicants',
    layout: 'app',
    components: {
      ActiveApplicationsCard,
      FilterCard
    },
    data() {
      return {
        loading: false,
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
          { text: 'Service', value: 'services', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Location', value: 'addressCityState', class: 'primary--text font-weight-regular' },
          { text: 'Co. History', value: 'yearFounded', class: 'primary--text font-weight-regular' },
          { text: 'Proximity', value: 'radius', class: 'primary--text font-weight-regular' },
          { text: 'Application Completed', value: 'applicationCompleted', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        applications: [],
        applicationsCount: 0,
        companyId: 0,
        serviceId: 0,
        locationId: 0,
      }
    },
    async mounted() {
      await this.getApplications(this.currentUser.companies_id)
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getApplications(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/applications/byPmId/' + id)
          .then(async (response) => {
            console.log(response.data, 'response for applications by Pm id');
            for(let i=0; i<response.data.length; i++){
              if(response.data[i].approval_status === 0) {
                this.applications.push(response.data[i]);
                console.log(i, 'i')
                console.log(response.data[i], this.applications, response.data[i].pmservices_id, 'response.data i', 'this.applications', "pmservices_id");
                this.serviceId = response.data[i].pmservices_id;
                this.companyId = response.data[i].pmcompanies_id;
                this.locationId = response.data[i].pmlocations_id;
                await this.getPMService(this.serviceId);
                await this.getSPCompany(this.companyId);
                await this.getSPLocation(this.locationId);
                this.applicationsCount++;
                this.loading = true;
              }
            }
          })
          .catch(err => {
            console.log('err in getting applications', err);
          })
        console.log(this.applications, 'wow so done')
      },
      async getPMService(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/services/' + id)
          .then(async (response) => {
            console.log('response for service', response.data, id, 'id')
            this.applications[this.applicationsCount].serviceName = response.data.service.name;
          })
          .catch(err => {
            console.log('err in getting pm service', err);
          })
      },
      async getSPCompany(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + id)
          .then(async (response) => {
            console.log('response.data for company', response.data)
            this.applications[this.applicationsCount].img = response.data.imgUrl;
            this.applications[this.applicationsCount].companyName = response.data.account_name;
          })
          .catch(err => {
            console.log('err in getting sp company ', err);
          })
      },
      async getSPLocation(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/' + id)
          .then(async (response) => {
            console.log('response.data for location', response.data)
            this.applications[this.applicationsCount].contact = `${response.data.contact_first_name} ${response.data.contact_last_name}`;
            this.applications[this.applicationsCount].addressName = `${response.data.city}, ${response.data.state}`;
            this.applications[this.applicationsCount].email = `${response.data.email}`;
            this.applications[this.applicationsCount].phone = `${response.data.phone}`;
            this.applications[this.applicationsCount].yearFounded = `${response.data.year_founded}`;
            this.applications[this.applicationsCount].radius = `${response.data.radius}`;
          })
          .catch(err => {
            console.log('err in getting sp location', err);
          })
      },
    }
  }

</script>

<style>
    @media (max-width:1264px ){
    #app{
      margin-top:-22px;
    }
  }


</style>
