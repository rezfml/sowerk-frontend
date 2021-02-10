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
      :items="vendors"
      :headers="outerTableHeaders"
      :items-per-page="10"
      :search="search"
      :expanded.sync="expanded"
      show-expand
      single-expand
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

        <!-- ONCE NESTED DATA TABLE -->
        <!-- <template v-slot:expanded-item="{ headers, item }">
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
        </template> -->

        <!-- <template v-slot:item.approvedVendors="{ item }">
          <p v-if='item.approvedVendors[0] === "There are no approved vendors"'>0</p>
          <p v-else-if='item.approvedVendors[0] !== "There are no approved vendors" '>{{item.approvedVendors.length}}</p>
        </template> -->
    </v-data-table>
  </v-container>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
export default {
  name: 'HomeCard',
  props: ['title', 'viewAll', 'action', 'slug'],
  components: {
    FilterCard
  },
	data() {
		return {
			search: '',
			loading: false,
			vendors: [

			],
			expanded: [],
			outerTableHeaders: [
				{ text: 'Company', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Primary Category', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Approved Connections', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Years In Business', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: '# of Channels', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
			],
			onceNestTableHeaders: [
				{ text: 'Channel', value: 'vendorNale', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Address', value: 'vendorAddress', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Approved Connections', value: 'vendorContact', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Category', value: 'vendorCategory', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
			],

			vendorChannels: [],				
		}
	},
	async created() {
    await this.getBusinesses();
	},
	computed: {
			currentUser() {
					return this.$store.state.user.user.user;
			},
	},
	methods: {
		async getBusinesses() {
			await this.$http.get('https://www.sowerkbackend.com/api/companies/type/false')
				.then(vendors => {
					console.log(vendors.data, "VENDORS DOT DATA")

					for(let i=0; i< vendors.data.length; i++) {
						this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + vendors.data[i].id)
							.then(vendorLocations => {
								console.log(vendorLocations.data, "VENDORLOCATIONS DOT DATA")



								vendorLocations.data.location.forEach((location) => {
									this.$http.get('https://www.sowerkbackend.com/api/locations/' + location.id)
										.then(locationData => {
											console.log(locationData.data, "LOCATIONDATA DOT DATA")
										
											let ven = {
												companyAddress: vendors.data[i].address,
												companyCity: vendors.data[i].city,
												companyState: vendors.data[i].state,
												companyZipcode: vendors.data[i].zipcode,
												companyCurrentConnections: vendors.data[i].currentConnections,
												companyYearFounded: vendors.data[i].year_founded,
												companyAccountName: vendors.data[i].account_name,
												companyCategories: vendors.data[i].servicesOffered,
												companyChannels: vendorLocations.data.location.length,
												companyApprovedConnections: 0,

												channelName: locationData.data.name,
												channelAddress: locationData.data.address,
												channelCity: locationData.data.city,
												channelState: locationData.data.state,
												channelZipcode: locationData.data.zipcode,
												channelApprovedConnections: locationData.data.,
												channelCategory: locationData.locationTags.data[0],
											}

										})
										.catch(error => {
											console.log(error, "This is the get location INFO, by location ID")
										})
								})
							})
							.catch(error => {
								console.log(error, "This is the get vendor locations by company ID error")
							})
					}
					this.loading = true;
				})
				.catch(error => console.log(error, 'This is the get vendor companies by type/false'));
		},







		// async getBusinesses() {
		// 	await this.$http.get('https://www.sowerkbackend.com/api/companies/type/false')
		// 		.then(response => {
		// 			console.log(response.data.length, 'length!!!!!');
		// 			for(let i=0; i< response.data.length; i++) {
		// 				this.getLocations(response.data[i].id, response.data[i].account_name);
		// 			}
		// 			this.loading = true;
		// 			console.log("YAY", this.loading)
		// 		})
		// 		.catch(e => console.log(e, 'error'));
		// },
		// async getLocations(id, account_name) {
		// 	this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
		// 		.then(response => {
		// 			console.log(response.data.location, 'locations');
		// 			response.data.location.forEach((location) => {
		// 				this.$http.get('https://www.sowerkbackend.com/api/locations/' + location.id)
		// 					.then(res => {

		// 						this.vendors.push(res.data);
		// 					})
		// 					.catch(err => {
		// 						console.log('err', err);
		// 					})
		// 			})
		// 			console.log(this.vendors, 'vendors');
		// 		})
		// 		.catch(err => {
		// 			console.log('err', err);
		// 		})
		// }
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
