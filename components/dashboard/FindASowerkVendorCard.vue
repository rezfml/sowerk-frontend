<template>
  <v-app>
    <v-progress-circular
      v-if="loading != true"
      indeterminate
      color="primary"
      :size="20" >
    </v-progress-circular>


	<v-row>
		<v-col cols="4" v-if="loading === true">
			<v-card class="white" height="50vh" style="padding-top:12%; margin-top:35%;">
			<v-container>
				<v-card-title v-if="loading" style="text-align: center; color: white; font-size: 18px; position: absolute; top: -25px; left: 12px; width: 70%; min-width: 100px; border-radius: 3px;" class="primary body-2">
				Search For A Vendor</v-card-title>
				<v-card-title v-else style="color: white; font-size: 18px; position: absolute; top: -25px; left: 25px; width: 30%; min-width: 200px; border-radius: 3px;" class="primary body-2">
				Search For A Vendor</v-card-title>
				<v-card-text class="pt-0" >
					<v-select 
						v-for="(filter, i) in filters"
						:key="i" 
						:items="filter.items" 
						:placeholder="filter.name" 
						light multiple chips single-line dense 
						v-model="selectedFilters"
					>

						<template slot="selection" slot-scope="data">
							<p>{{ data.item }}</p>
						</template>

						<template slot="item" slot-scope="data">
							<p>{{ data.item }}</p>
						</template>

						<!-- <template v-slot:selection="{ filter, index }">
							<v-chip v-if="index < 2">
								<span>{{ selectedFilters[index] }}</span>
							</v-chip>

							<span
								v-if="index === 2"
								class="grey--text caption"
							>
							(+{{ selectedFilters.length - 1 }} others)
							</span>
						</template> -->
					</v-select>
				</v-card-text>

				<v-btn @click="searchByFilters(selectedFilters)">Search</v-btn>
				<v-btn @click="clearFilters(selectedFilters)">Clear</v-btn>
			</v-container>
			</v-card>
		</v-col>


		<v-col cols="8">

			<v-card-title
				v-if="loading === true"
				style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px; text-align: center; white-space: pre-wrap; word-break: break-word;"
				class="primary white--text font-weight-regular red-gradient"
			>{{ title }}</v-card-title>

			<v-text-field v-if="loading" clearable outlined class="pt-4" style="width: 80%; margin-left: 10%;margin-top: 3%;" label="Search By Company Name" v-model="searchCompanies" light></v-text-field>

			<!-- OUTER MOST DATA TABLE -->
			<v-data-table
				v-if="loading"
				:search="searchCompanies"
				:headers="outerTableHeaders"
				:items="vendorChannels"
				:items-per-page="10"
				item-key="companyAccountName"
				show-expand
				single-expand
				:expanded="expanded"
				@click:row="clickedRow"
				style="width: 100%;"
				>

					<!-- ONCE NESTED DATA TABLE -->
					<template v-slot:expanded-item="{ headers, item }">
						<td :colspan="headers.length">
							<v-data-table
								v-if="item.companyChannels.fulfillmentValue !== 'There are no locations'"
								:items="item.companyChannels.fulfillmentValue"
								:headers="onceNestTableHeaders"
								:items-per-page="10"
							>

								<template v-slot:item.name="{ item }">
									<v-row class="d-flex">
										<v-col>
											<p>{{ item.name }}</p>
										</v-col>
									</v-row>
								</template>

								<template v-slot:item.address="{ item }">
									<v-row class="d-flex">
										<v-col>
											<p style="text-align:center;">{{ item.address }}</p>
											<p style="text-align:center;">{{ item.city }} {{ item.state }} {{ item.zipcode }}</p>
										</v-col>
									</v-row>
								</template>

								<template v-slot:item.connections="{ item }">
									<v-row class="d-flex">
										<v-col>
											<p>{{ item.connections }}</p>
										</v-col>
									</v-row>
								</template>

								<template v-slot:item.services[0].name="{ item }">
									<v-row class="d-flex">
										<v-col>
											<p>{{ item.services[0].name }}</p>
										</v-col>
									</v-row>
								</template>

								<template v-slot:item.actions="{ item }">
									<v-btn
										block
										color="primary"
										:to="slug + item.id" 
									>
										View
									</v-btn>
								</template>

							</v-data-table>
						</td>
					</template>

				<template v-slot:item.companyAccountName="{ item }">
					<v-row class="d-flex" v-if="item.companyIsFranchise === false">
						<v-col>
							<p>{{ item.companyAccountName }}</p>
						</v-col>
					</v-row>
					<v-row class="d-flex" v-if="item.companyIsFranchise === true">
						<v-col>
							<p>{{ item.companyBrandName }} {{ item.companyLlcName }}</p>
						</v-col>
					</v-row>
				</template>

				<template v-slot:item.companyApprovedConnections="{ item }">
					<v-row class="d-flex">
						<v-col>
							<p style="text-align:center">{{ item.companyApprovedConnections.fulfillmentValue }}</p>
						</v-col>
					</v-row>
				</template>

				<template v-slot:item.companyYearFounded="{ item }">
					<v-row class="d-flex">
						<v-col>
							<p style="text-align:center;">{{item.companyYearFounded}}</p>
						</v-col>
					</v-row>
				</template>

				<template v-slot:item.companyChannels="{ item }">
					<v-row class="d-flex">
						<v-col>
							<p style="text-align:center;" v-if="item.companyChannels.fulfillmentValue === 'There are no locations'">0</p>
							<p style="text-align:center;" v-else>{{ item.companyChannels.fulfillmentValue.length }}</p>
						</v-col>
					</v-row>
				</template>

			</v-data-table>

		</v-col>
	</v-row>

  </v-app>
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
			searchCompanies: '',
			loading: false,
			expanded: [],
			singleExpand: false,
			outerTableHeaders: [
				{ text: 'Company', value: 'companyAccountName', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Approved Connections', value: 'companyApprovedConnections', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Years In Business', value: 'companyYearFounded', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: '# of Channels', value: 'companyChannels', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
			],
			onceNestTableHeaders: [
				{ text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-center' },
				// { text: 'Approved Connections', value: 'connections', class: 'primary--text font-weight-bold text-h6 text-center' },
				// { text: 'Category', value: 'services', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
			],
			filters: [
				{
					name: 'Company',
					items: [
					]
				},
				{
					name: 'Approved Connections',
					items: [
					]
				},
				{
					name: 'Year Founded',
					items: [
					]
				},
				{
					name: '# of Channels',
					items: [
					]
				}
			],
			vendorChannels: [],		
			selectedFilters: [],
			originalVendorChannels: []
		}
	},
	async created() {
		this.getVendorInfo();
	},
	computed: {
			currentUser() {
					return this.$store.state.user.user.user;
			},
	},
	methods: {
	searchByFilters(selectedFilters) {
		// console.log(selectedFilters, "SELECTED FILTERS")
		// console.log(this.filters, "filters")

		// console.log(this.originalVendorChannels, "OG CHANNELS")

		this.vendorChannels = this.originalVendorChannels

		selectedFilters.forEach(filterValue => {
			this.vendorChannels = this.vendorChannels.filter(item => {
				if(item.companyAccountName === filterValue || item.companyApprovedConnections.fulfillmentValue === filterValue || item.companyYearFounded === filterValue || item.companyChannels.fulfillmentValue.length === filterValue) {
					return item
				}
			})
		})
	},
	clearFilters() {
		this.selectedFilters = []

		this.vendorChannels = this.originalVendorChannels
	},
	clickedRow(value) {
		if (this.expanded.length && this.expanded[0].id == value.id) {
			this.expanded = [];
		} else {
			this.expanded = [];
			this.expanded.push(value);
		}
	},
	getVendorInfo() {
		this.$http.get('https://www.sowerkbackend.com/api/companies/vendors/channels')
			.then(res => {
				// console.log(res.data, "THIS IS THE RESPONSE FROM THE NEW ENDPOINT")
				this.vendorChannels = res.data
				this.originalVendorChannels = res.data
				this.loading = true



				res.data.forEach(filterItem => {
					this.filters[0].items.push(filterItem.companyAccountName)
					if(filterItem.companyApprovedConnections.fulfillmentValue != "No Approved Connections") {
						this.filters[1].items.push(filterItem.companyApprovedConnections.fulfillmentValue)
					}
					if(filterItem.companyYearFounded != null) {
						this.filters[2].items.push(filterItem.companyYearFounded)
					}
					if(filterItem.companyChannels.fulfillmentValue.length != 0) {
						this.filters[3].items.push(filterItem.companyChannels.fulfillmentValue.length)
					}
				})

				// setTimeout(() => {
				// 	this.findLocationServices()
				// 	this.loading = true
				// 	console.log(this.vendorChannels, "FINISHED LIST")
				// }, 3000)

			})
			.catch(err => {
				console.log(err)
			})
	},
	findLocationServices() {
		for(let j=0; j<this.vendorChannels.length; j++) {
			if(this.vendorChannels[j].companyChannels.fulfillmentValue === "There are no locations") {
				return
			} else {
				for(let i=0; i<this.vendorChannels[j].companyChannels.fulfillmentValue.length; i++) {
					// console.log(this.vendorChannels[j].companyChannels.fulfillmentValue[i].id, "----------")
					this.$http.get('https://www.sowerkbackend.com/api/services/byLocationId/' + this.vendorChannels[j].companyChannels.fulfillmentValue[i].id)
						.then(services => {
							// console.log(services.data, "THIS IS SERVICES SHOULD BE A LIST OF OBJECTS")
							this.vendorChannels[j].companyChannels.fulfillmentValue[i]["services"] = services.data
						})
						.catch(error => {
							return
						})
				}
			}
		}
		// console.log(this.vendorChannels[0].companyChannels.fulfillmentValue[0].id, "THIS SHOULD BE 431 THE CHANNEL ID")
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
