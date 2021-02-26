<template>
  <v-app class="" overflow-y-auto>
    <v-progress-circular
      v-if="!loading"
      indeterminate
      color="primary"
      :size="50"
      class="mx-auto"
    >
    </v-progress-circular>

		<v-card-title
			v-if="loading === true"
			style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px; text-align: center; white-space: pre-wrap; word-break: break-word;"
			class="primary white--text font-weight-regular red-gradient"
		>{{ title }}</v-card-title>

    <v-text-field v-if="loading" clearable outlined class="pt-4" style="width: 80%; margin-left: 10%;margin-top:3%;" label="Search By Channel Name" v-model="searchChannels" light></v-text-field>

    <!-- OUTER MOST DATA TABLE -->
    <v-data-table
      :search="searchChannels"
      v-if="loading"
      :items="company.locations"
      :headers="outerTableHeaders"
      :items-per-page="10"
      :expanded.sync="expanded"
      show-expand
      single-expand
      style="width: 100%;"
      >

        <!-- ONCE NESTED DATA TABLE -->
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-text-field clearable outlined class="pt-4" style="width: 80%; margin-left: 10%;" label="Search By Vendor Company or Channel" v-model="searchVendors" light></v-text-field>
            <v-data-table
              v-if="item.approvedVendors[0] !== 'There are no approved vendors'"
              :items="item.approvedVendors"
              :headers="onceNestTableHeaders"
              :items-per-page="10"
              :search="searchVendors"
            >

              <template v-slot:item.spCompanyName="{ item }">
                <v-row class="d-flex" v-if="item.spChannelIsFranchise === false">
                  <v-col>
                    <p>{{ item.spCompanyName }}</p>
                  </v-col>
                </v-row>
                <v-row class="d-flex" v-if="item.spChannelIsFranchise === true">
                  <v-col>
                    <p>{{ item.spChannelBrandName }} {{ item.spChannelLlcName }}</p>
                  </v-col>
                </v-row>
              </template>

              <template
                v-slot:item.actions="{ item }"
              >
                <v-btn
                  block
                  color="primary"
                  :to="slug + item.splocations_id"
                  v-if="item.spPreApproval !== 'Yes'"
                >
                  View
                </v-btn>
              </template>

            </v-data-table>
          </td>
        </template>

        <template v-slot:item.approvedVendors="{ item }">
          <p v-if='item.approvedVendors[0] === "There are no approved vendors"'>0</p>
          <p v-else-if='item.approvedVendors[0] !== "There are no approved vendors" '>{{item.approvedVendors.length}}</p>
        </template>
    </v-data-table>
  </v-app>
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
      searchChannels: '',
      searchVendors: '',
			loading: false,
			outerTableHeaders: [
        { text: 'Your Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
				{ text: 'Approved Vendors', value: 'approvedVendors', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
			],
			onceNestTableHeaders: [
        { text: 'Company', value: 'spCompanyName', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
				{ text: 'Channel', value: 'spChannelName', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
				{ text: 'Channel Address', value: 'spChannelAddress', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Contact', value: 'spChannelContact', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
				{ text: 'Email', value: 'spChannelEmail', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
				{ text: 'Phone', value: 'spChannelPhone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Pre Approved', value: 'spPreApproval', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
				{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
      ],
      company: {},
      expanded: [],
      expandedChannel: [],
      singleExpand: true,
      search: '',
      locations: null,
      users: [

      ],
    }
  },
  async created() {
		// console.log(this.$store.state.user.user.user, "user from AcceptedApplicationCard")
    await this.getCompany(this.currentUser.companies_id);
		await this.getPreApprovedVendors();


	},
	computed: {
		currentUser() {
			return this.$store.state.user.user.user;
		},
	},
  methods: {
    async getCompany(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/location/approvedVendors/' + id)
        .then(async (response) => {
          // console.log(response, "sdjhfkjshdkfjhsdkfjhskfjsdhfk")
          this.company = response.data

          for(let i=0; i<this.company.locations.length; i++) {
            if(this.company.locations[i].approvedVendors[0] !== 'There are no approved vendors') {
              for(let j=0; j<this.company.locations[i].approvedVendors.length; j++) {
                this.company.locations[i].approvedVendors[j] = {
                  id: this.company.locations[i].approvedVendors[j].id,
                  approval_status: this.company.locations[i].approvedVendors[j].approval_status,
                  spcompanies_id: this.company.locations[i].approvedVendors[j].spcompanies_id,
                  splocations_id: this.company.locations[i].approvedVendors[j].splocations_id,
                  spCompanyName: '',
                  spChannelName: '',
                  spChannelAddress: '',
                  spChannelContact: '',
                  spChannelEmail: '',
                  spChannelPhone: '',
                  spType: '',
<<<<<<< HEAD
                  spChannelIsFranchise: '',
                  spChannelBrandName: '',
                  spChannelLlcName: ''
=======
                  spPreApproval: 'No'
>>>>>>> d239eff06eb95777e237ed53a7fe26f8d4c35017
                }
                this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + this.company.locations[i].approvedVendors[j].spcompanies_id)
                  .then(async (response) => {
                    console.log('response.data for company', response.data)
                    this.company.locations[i].approvedVendors[j].spCompanyName = response.data.account_name;
                    this.company.locations[i].approvedVendors[j].spChannelIsFranchise = response.data.isFranchise;
                    this.company.locations[i].approvedVendors[j].spChannelBrandName = response.data.brand_name;
                    this.company.locations[i].approvedVendors[j].spChannelLlcName = response.data.llcName;
                  })
                  .catch(err => {
                    console.log('err in getting sp company ', err);
                  })
                this.$http.get('https://www.sowerkbackend.com/api/locations-only/' + this.company.locations[i].approvedVendors[j].splocations_id)
                  .then(async (response) => {
                    // console.log('response.data for location', response.data)
                    this.company.locations[i].approvedVendors[j].spChannelContact = `${response.data.contact_first_name} ${response.data.contact_last_name}`;
                    this.company.locations[i].approvedVendors[j].spChannelName = `${response.data.name}`
                    this.company.locations[i].approvedVendors[j].spChannelAddress = `${response.data.address} ${response.data.city}, ${response.data.state} ${response.data.zipcode}`;
                    this.company.locations[i].approvedVendors[j].spChannelEmail = `${response.data.email}`;
                    this.company.locations[i].approvedVendors[j].spChannelPhone = `${response.data.phone}`;
                  })
                  .catch(err => {
                    console.log('err in getting sp location', err);
                  })
              }
            }
          }
<<<<<<< HEAD
          setTimeout(() => {
            this.loading = true
            console.log(this.company.locations)
          }, 2000)
=======
>>>>>>> d239eff06eb95777e237ed53a7fe26f8d4c35017
        })
        .catch(err => {
          console.log('error in getting company', err)
          this.loading = true
        })
    },
    async getPreApprovedVendors() {
      await this.$http.get('https://www.sowerkbackend.com/api/preapprovedRequest/byPMCompanyId/' + this.currentUser.companies_id)
        .then(response => {
          console.log(response.data, 'COMPANY TYPE PRE APPROVED REQUEST')
          for(let i=0; i<response.data.length; i++) {
            this.company.locations.forEach(location => {
              if(location.id === response.data[i].locations_id && response.data[i].approval_status === 1) {
                let approvedVendorObj = {
                  id: response.data[i].id,
                  approval_status: 1,
                  spcompanies_id: response.data[i].spcompanies_id,
                  splocations_id: null,
                  spCompanyName: '',
                  spChannelName: '',
                  spChannelAddress: null,
                  spChannelContact: '',
                  spChannelEmail: '',
                  spChannelPhone: '',
                  spType: '',
                  spPreApproval: 'Yes'
                }
                this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + response.data[i].spcompanies_id)
                  .then(async (response) => {
                    console.log('response.data for company', response.data)
                    approvedVendorObj.spCompanyName = response.data.account_name;
                    location.approvedVendors.push(approvedVendorObj)
                  })
                  .catch(err => {
                    console.log('err in getting sp company ', err);
                  })
              }
              // REMOVES DUPLICATES OUT WHILE STILL RETAINING LIST OF PRE APPROVED REQUESTS -- REALLY NOT A REFINED ALGORITHM LETS REVISIT THIS WITH TIME
              location.approvedVendors = location.approvedVendors.filter((v,i,a)=>a.findIndex(t=>(t.spCompanyName === v.spCompanyName))===i)
              location.approvedVendors = location.approvedVendors.filter((v,i,a)=>a.findIndex(t=>(t.spChannelName === v.spChannelName))===i)
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
      setTimeout(() => {
        this.loading = true
      }, 2000)
    }
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
