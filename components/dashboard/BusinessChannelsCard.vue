<template>
  <v-app>
    <v-progress-circular
      v-if="loading != true"
      indeterminate
      color="primary"
      :size="20" >
    </v-progress-circular>

		<v-card-title
			v-if="loading === true"
			style="position: absolute; top: -20px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px; text-align: center; white-space: pre-wrap; word-break: break-word;"
			class="primary white--text font-weight-regular red-gradient"
		>{{ title }}</v-card-title>

		<v-text-field v-if="loading" clearable outlined class="pt-4" style="width: 80%; margin-left: 10%;margin-top:4%;" label="Search by Address" v-model="searchChannels" light></v-text-field>

			<!-- <v-col cols="4">
				<FilterCard
					v-if="this.loading && this.channels"
					:title="'Filter Channels'"
					:filters="filters"
					:locationApproved="viewLocation"
					:locationFilterTags="locationFilterTags"
				></FilterCard>
			</v-col> -->
		<v-row>

			<v-col cols="12">
				<v-data-table
					v-if="this.loading && this.channels"
  				    :search="searchChannels"
					:items="channels"
					:headers="headers"
					:items-per-page="10"
					>


					<template v-slot:item.imageUrl="{ item }">
						<v-row class="d-flex">
							<v-col>
								<p>{{ item.imageUrl }}</p>
							</v-col>
						</v-row>
					</template>

					<template v-slot:item.name="{ item }">
						<v-row class="d-flex">
							<v-col>
								<p>{{ item.channelName }}</p>
							</v-col>
						</v-row>
					</template>

					<template v-slot:item.address="{ item }">
						<v-row class="d-flex">
							<v-col>
								<p>{{item.address}}</p>
								<p>{{item.city}}, {{item.state}} {{item.zipcode}}</p>
							</v-col>
						</v-row>
					</template>

					<template v-slot:item.fullname="{ item }">
						<v-row class="d-flex">
							<v-col>
							<p>{{ item.channelManagerFirstName }}</p>
							<p>{{ item.channelManagerLastName }}</p>
							</v-col>
						</v-row>
					</template>

					<template v-slot:item.actions="{ item }">
						<v-btn block color="primary" :to="slug + item.channelId">
							View
						</v-btn>
					</template>

				</v-data-table>
			</v-col>
		</v-row>


  </v-app>
</template>

<script>
import FilterCard from '~/components/dashboard/FilterCard'

export default {
  name: 'BusinessChannels',
  props: ['title', 'viewAll', 'viewLocation', 'locationFilterTags', 'slug'],
  components: {
    FilterCard
  },
  data() {
    return {
    loading: false,
    headers: [
		{ text: 'Channel Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
		{ text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
		{ text: 'Channel Manager', value: 'fullname', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
		{ text: 'Approved Vendors', value: 'approvedVendors', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
		{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
	],
	channels: [],
	searchChannels: '',
	approvedVendorsList: {},
    locationCondition: false,
    locationApproved: false,
	filters: [
		{
			name: 'Name',
			items: [
			]
		},
		{
			name: 'State',
			items: [
			]
		},
		{
			name: 'City',
			items: [
			]
		},
		{
			name: 'Approved Vendors',
			items: [
				'0',
				'1-5',
				'5-10',
				'10+',
			]
		}
	],		
    }
  },
  async created() {
	// console.log(this.$store.state.user.user.user, "user from BusinessChannelsCard")
	this.getCompany(this.currentUser.companies_id)
	this.getCompanyApprovedVendors(this.currentUser.companies_id)
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
				console.log(response.data, "HEYYYYY")

				for(let i=0; i<response.data.locations.length; i++) {

					if(this.approvedVendorsList[i].approvedVendors[0] === "There are no approved vendors"){
						let numberOfVendors = 0

						let company = {
							channelId: response.data.locations[i].id,
							channelName: response.data.locations[i].name,
							address: response.data.locations[i].address,
							city: response.data.locations[i].city,
							state: response.data.locations[i].state,
							zipcode: response.data.locations[i].zipcode,
							channelManagerFirstName: response.data.locations[i].contact_first_name,
							channelManagerLastName: response.data.locations[i].contact_last_name,
							approvedVendors: numberOfVendors,
						}
						this.filters[2].items.push(response.data.locations[i].city)
						this.filters[1].items.push(response.data.locations[i].state)
						this.filters[0].items.push(response.data.locations[i].name)
						this.channels.push(company) 

					} else {
						let numberOfVendors = this.approvedVendorsList[i].approvedVendors.length

						let company = {
							channelId: response.data.locations[i].id,
							channelName: response.data.locations[i].name,
							address: response.data.locations[i].address,
							city: response.data.locations[i].city,
							state: response.data.locations[i].state,
							zipcode: response.data.locations[i].zipcode,
							channelManagerFirstName: response.data.locations[i].contact_first_name,
							channelManagerLastName: response.data.locations[i].contact_last_name,
							approvedVendors: numberOfVendors,
						}
						this.filters[2].items.push(response.data.locations[i].city)
						this.filters[1].items.push(response.data.locations[i].state)
						this.filters[0].items.push(response.data.locations[i].name)
						this.channels.push(company)

					}
				}
					console.log(this.channels)
					console.log(this.filters[0].items)
					this.loading = true
			})
			.catch(err => {
				console.log('error in getting company', err)
			})
	},
    async getCompanyApprovedVendors(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/location/approvedVendors/' + id)
        .then(async (response) => {
					// console.log(response.data.locations, "get companies location approvedVendors")
					this.approvedVendorsList = response.data.locations
        })
        .catch(err => {
          console.log('error in getting company', err)
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
