<template>
  <div style="width: 100%" class="d-flex">
<!--    <v-col cols="3">-->
<!--          <FilterCard-->
<!--            title="Filter"-->
<!--            :filters="filters"-->
<!--          ></FilterCard>-->
<!--    </v-col>-->
    <v-col cols="12" class="d-flex flex-column justify-start">
      <v-card class="white pt-0 mt-12 mb-4" style="width: 100%">
        <v-container class="pt-0" fluid>
          <v-card-title
            style="position: absolute; top: -30px; left: 25px; width: 30%; border-radius: 3px; font-size: 18px;"
            class="primary white--text font-weight-regular red-gradient"
          >My Pending Applicants</v-card-title>
          <v-card-actions class="d-flex justify-end px-4 py-0">
            <v-row class="py-0">
              <v-spacer></v-spacer>
              <v-col cols="4" class="py-0">
                <v-text-field label="Search" light></v-text-field>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-text class="pt-0 pb-2" v-if="applications.length > 0">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="50"
              v-if="loading === false"
            ></v-progress-circular>
            <transition name="slide-fade">
              <v-data-table
                :items="applications"
                :headers="headers"
                :items-per-page="5"
                v-if="loading"
              >
                <template v-slot:item.companyName="{item}">
                  <v-row class="d-flex">
                    <p><v-img style="width: 30px !important; height: 30px; border-radius: 50px;" :src="item.img"></v-img> {{item.companyName}}</p>
                  </v-row>
                </template>
                <template v-slot:item.contact="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.contact}}</p>
                  </v-row>
                </template>
                <template v-slot:item.email="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.email}}</p>
                  </v-row>
                </template>
                <template v-slot:item.phone="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.phone}}</p>
                  </v-row>
                </template>
                <template v-slot:item.name="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.name}}</p>
                  </v-row>
                </template>
                <template v-slot:item.radius="{item}">
                  <v-row class="d-flex" cols="12" md="6">
                    <p>{{item.radius}}</p>
                  </v-row>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-row class="d-flex flex-column align-center" style="width: 100%;">
                    <v-btn class="my-1" color="primary" style="color: white; width: 100%;" outlined @click="Approve(item)">Approve</v-btn>
                    <v-btn class="my-1" color="primary" style="width: 100%;" @click="Deny(item)">Deny</v-btn>
                    <v-btn class="my-1" color="#c0c0c0" style="color: white; width: 100%;" @click="Review(item)">Review</v-btn>
                  </v-row>
                </template>
              </v-data-table>
            </transition>
          </v-card-text>
        </v-container>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import FilterCard from '~/components/dashboard/FilterCard'
import ActiveApplicationsCard from '~/components/dashboard/ActiveApplicationsCard'

export default {
  name: 'locationactiveapplications',
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
        { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Channel', value: 'channelName', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Channel Address', value: 'addressCityState', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Contact', value: 'full_name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        // { text: 'Proximity', value: 'radius', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
      ],
      applications: [],
      applicationsCount: 0,
      companyId: 0,
      serviceId: 0,
      locationId: 0
    }
  },
  async mounted() {
    await this.getApplications(this.$route.params.id)
  },
  computed: {
    currentUser() {
      return this.$store.state.user.user.user;
    },
  },
  methods: {
    async Approve(itemVal) {
      console.log(itemVal, 'itemVal');
      const approvalChanges = {
        approval_status: 1
      };
      const approvedproviderconnection = {
        propertymanager_id: itemVal.pmcompanies_id,
        serviceprovider_id: itemVal.spcompanies_id
      }
      await this.$http.put('https://www.sowerkbackend.com/api/applications/' + itemVal.id, approvalChanges)
        .then(response => {
          console.log('success in changes', response)
        })
        .catch(err => {
          console.log('err', err);
        })
      await this.$http.put('https://www.sowerkbackend.com/api/companies/' + itemVal.pmcompanies_id, approvalChanges)
        .then(response => {
          console.log('success in changes', response)
        })
        .catch(err => {
          console.log('err', err);
        })
      await this.$http.post('https://www.sowerkbackend.com/api/approvedproviderconnection', approvedproviderconnection)
        .then(response => {
          console.log('success', response);
          this.$router.go();
        })
        .catch(err => {
          console.log('err', err)
        })
    },
    async Deny(itemVal) {
      console.log(itemVal, 'itemVal deny');
      const denialChanges = {
        approval_status: 2
      }
      await this.$http.put('https://www.sowerkbackend.com/api/applications/' + itemVal.id, denialChanges)
        .then(response => {
          console.log('success in changes', response)
          this.$router.go();
        })
        .catch(err => {
          console.log('err', err);
        })
    },
    async Review(itemVal) {
      console.log(itemVal)
      this.$router.push('/dashboard/vendors/applicants/' + itemVal.id)
    },
    async getApplications(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmLocationId/' + id)
        .then(async (response) => {
          console.log(response.data, 'response for applications by Pm id');
          for(let i=0; i<response.data.length; i++){
            console.log(this.$route.params.id, response.data[i].pmlocations_id, 'ID AND LOCATION ID')
            if(response.data[i].approval_status === 0) {
              this.applications.push(response.data[i]);
              this.serviceId = response.data[i].pmservices_id;
              this.companyId = response.data[i].pmcompanies_id;
              this.locationId = response.data[i].splocations_id;
              await this.getPMService(this.serviceId);
              await this.getSPCompany(this.companyId);
              await this.getSPLocation(this.locationId);
              this.applicationsCount++;
            }
          }
          this.loading = true;
        })
        .catch(err => {
          console.log('err in getting applications', err);
        })
      console.log(this.applications, 'wow so done for location pending applications')
    },
    async getPMService(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/services/' + id)
        .then(async (response) => {
          console.log('response for service', response.data, id, 'id')
          this.applications[this.applicationsCount].serviceName = response.data.service.name;
        })
        .catch(err => {
          console.log('err in getting pm service', err);
        })
    },
    async getSPCompany(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
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
      await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
        .then(async (response) => {
          console.log('response.data for location', response.data)
          this.applications[this.applicationsCount].full_name = `${response.data.contact_first_name} ${response.data.contact_last_name}`;
          this.applications[this.applicationsCount].addressCityState = `${response.data.address} ${response.data.city}, ${response.data.state} ${response.data.zipcode}`;
          this.applications[this.applicationsCount].channelName = `${response.data.name}`;
          // this.applications[this.applicationsCount].email = `${response.data.email}`;
          // this.applications[this.applicationsCount].phone = `${response.data.phone}`;
          // this.applications[this.applicationsCount].yearFounded = `${response.data.year_founded}`;
          // this.applications[this.applicationsCount].radius = `${response.data.radius}`;
        })
        .catch(err => {
          console.log('err in getting sp location', err);
        })
    },
  }
}

</script>

<style>

</style>
