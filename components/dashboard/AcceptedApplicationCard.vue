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
      v-if="this.loading"
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
              v-if="item.approvedVendors[0] !== 'There are no approved vendors'"
              :items="item.approvedVendors"
              :headers="onceNestTableHeaders"
              :items-per-page="10"
              :search="search"
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

        <template v-slot:item.approvedVendors="{ item }">
          <p v-if='item.approvedVendors[0] === "There are no approved vendors"'>0</p>
          <p v-else-if='item.approvedVendors[0] !== "There are no approved vendors" '>{{item.approvedVendors.length}}</p>
        </template>
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
				{ text: 'Approved Vendors', value: 'approvedVendors', class: 'primary--text font-weight-bold text-h6 text-center' },				
			],
			onceNestTableHeaders: [
        { text: 'Company', value: 'spCompanyName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Channel', value: 'spChannelName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Channel Address', value: 'spChannelAddress', class: 'primary--text font-weight-bold text-h6 text-center' },
        { text: 'Contact', value: 'spChannelContact', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Email', value: 'spChannelEmail', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
				{ text: 'Phone', value: 'spChannelPhone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
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
		console.log(this.$store.state.user.user.user, "user from AcceptedApplicationCard")
    await this.getCompany(this.currentUser.companies_id);
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
          console.log(response, "sdjhfkjshdkfjhsdkfjhskfjsdhfk")
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
                }
                this.$http.get('https://www.sowerkbackend.com/api/companies/inviteid/' + this.company.locations[i].approvedVendors[j].spcompanies_id)
                  .then(async (response) => {
                    console.log('response.data for company', response.data)
                    this.company.locations[i].approvedVendors[j].spCompanyName = response.data.account_name;
                  })
                  .catch(err => {
                    console.log('err in getting sp company ', err);
                  })
                this.$http.get('https://www.sowerkbackend.com/api/locations-only/' + this.company.locations[i].approvedVendors[j].splocations_id)
                  .then(async (response) => {
                    console.log('response.data for location', response.data)
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
          setTimeout(() => {
            this.loading = true
          }, 2000)
        })
        .catch(err => {
          console.log('error in getting company', err)
        })
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
