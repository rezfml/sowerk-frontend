<template>
  <v-container>
    <v-progress-circular
      v-if="loading != true"
      indeterminate
      color="primary"
      :size="20" >
    </v-progress-circular>
    
    <!-- OUTER MOST DATA TABLE -->
    <v-data-table
      v-if="this.loading === true"
      :items="company.locations"
      :headers="outerTableHeaders"
      :items-per-page="10"
      :search="search"
      :expanded.sync="expanded"
      show-expand
      single-expand
      >

        <!-- ONCE NESTED DATA TABLE -->
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-data-table
              :items="applications"
              :headers="onceNestTableHeaders"
              :items-per-page="10"
              :search="search"
              v-if="applications.pmlocations_id == item.id"
            >

              <template
                v-slot:item.actions="{ item }"
              >
                <v-btn
                  block
                  color="primary"
                  :to="slug + item.splocations_id" 
                >
                  View
                </v-btn>
              </template>

            </v-data-table>
          </td>
        </template>

        <!-- <template v-slot:item.length="{ item }">
          <p v-if='item.userforms[0] === "There are no userforms"'>0</p>
          <p v-else-if='item.userforms[0] !== "There are no userforms" '>{{item.userforms.length}}</p>
        </template> -->
    </v-data-table>
  </v-container>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
export default {
  name: 'HomeCard',
  props: ['title', 'viewAll', 'slug', 'action'],
  components: {
    FilterCard
  },
  data() {
    return {
			loading: false,
			outerTableHeaders: [
        { text: 'Your Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Approved Vendors', value: 'applicationsCount', class: 'primary--text font-weight-bold text-h6 text-center' },				
			],
			onceNestTableHeaders: [
        { text: 'Company', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Channel', value: 'channelName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Channel Address', value: 'addressName', class: 'primary--text font-weight-bold text-h6 text-center' },
        { text: 'Contact', value: 'contact', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
				{ text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
				{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
      ],
      
      applications: [],
      applicationsCount: 0,
      company: {},
      expanded: [],
      expandedChannel: [],
      singleExpand: true,

      search: '',
      locations: null,
      users: [

      ],
      channels: {

      },
    }
  },
  async created() {
		console.log(this.$store.state.user.user.user, "user from AcceptedApplicationCard")
    await this.getCompany(this.currentUser.companies_id);
    await this.getApplications(this.currentUser.companies_id);
	},
	computed: {
		currentUser() {
			return this.$store.state.user.user.user;
		},
	},	
  methods: {
    async getCompany(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
        .then(async (response) => {
          this.company = response.data;
          console.log(this.company, "ACCEPTION-APP-CARD COMPANY")
          if(this.currentUser.is_superuser) {
            this.company.locations = response.data.locations
          } else {
            this.company.locations = response.data.locations.filter(location => {
              if(this.currentUser.first_name === location.contact_first_name && this.currentUser.last_name === location.contact_last_name && this.currentUser.email === location.email) {
                return location
              }
            })
          }
          // await this.getConnectionTable(this.company.id)
        })
        .catch(err => {
          console.log('error in getting company', err)
        })
    },
    async getApplications(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + id)
        .then(async (response) => {
          for(let i=0; i<response.data.length; i++){
            if(response.data[i].approval_status === 1  && this.company.locations.some(val => (val.id === response.data[i].pmlocations_id))) {
              let newApp = {
                approval_status: response.data[i].approval_status,
                created: response.data[i].created,
                denial_reason: response.data[i].denial_reason,
                id: response.data[i].id,
                modified: response.data[i].modified,
                pmcompanies_id: response.data[i].pmcompanies_id,
                pmlocations_id: response.data[i].pmlocations_id,
                pmuserforms_id: response.data[i].pmuserforms_id,
                pmuserprofiles_id: response.data[i].pmuserprofiles_id,
                spcompanies_id: response.data[i].spcompanies_id,
                splocations_id: response.data[i].splocations_id,
                spuserprofiles_id: response.data[i].spuserprofiles_id,
                subData: response.data[i].subData,
                img: '',
                companyName: '',
                channelName: '',
                addressName: '',
                email: '',
                phone: '',
                yearFounded: 0,
                radius: 0,
              }
              this.applications.push(newApp);

              // this.serviceId = response.data[i].pmservices_id;
              this.companyId = response.data[i].spcompanies_id;
              this.locationId = response.data[i].splocations_id;

              //await this.getPMService(this.serviceId);
              await this.getSPCompany(this.companyId);
              await this.getSPLocation(this.locationId);

              this.applicationsCount++;

            }
          }
          // this.applications.forEach(application => {
          //   application.subData = JSON.parse(application.subData);
          // })
        })
        .catch(err => {
          console.log('err in getting applications', err);
        })
      this.loading = true;
      console.log(this.applications, "ACCEPTION-APP-CARD APPLICATIONS")
    },
    async getSPCompany(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
        .then(async (response) => {
          this.applications[this.applicationsCount].img = response.data.imgUrl;
          this.applications[this.applicationsCount]['companyName'] = response.data.account_name;
        })
        .catch(err => {
          console.log('err in getting sp company ', err);
        })
    },
    async getSPLocation(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
        .then(async (response) => {
          this.applications[this.applicationsCount].contact = `${response.data.contact_first_name} ${response.data.contact_last_name}`;
          this.applications[this.applicationsCount].channelName = `${response.data.name}`
          this.applications[this.applicationsCount].addressName = `${response.data.address} ${response.data.city}, ${response.data.state} ${response.data.zipcode}`;
          this.applications[this.applicationsCount].email = `${response.data.email}`;
          this.applications[this.applicationsCount].phone = `${response.data.phone}`;
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

<style lang="scss" scoped>
.red-gradient {
  background: rgb(166, 28, 0);
  background: linear-gradient(
      90deg,
      rgba(166, 28, 0, 1) 0%,
      rgba(116, 21, 2, 1) 100%
  );
}
</style>
