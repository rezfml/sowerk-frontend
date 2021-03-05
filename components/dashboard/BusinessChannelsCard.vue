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

		<v-row>
			<v-col cols="4" v-if="loading === true">
        <v-card class="white pt-8 my-3" height="88vh" >
          <v-container>
            <v-card-title v-if="locationApproved" style="text-align: center; color: white; font-size: 18px; position: absolute; top: -25px; left: 0px; width: 100%; min-width: 100px; border-radius: 3px;" class="primary body-2">
              Search Your Channels</v-card-title>
            <v-card-title v-else style="color: white; font-size: 18px; position: absolute; top: -25px; left: 25px; width: 30%; min-width: 200px; border-radius: 3px;" class="primary body-2">
              Search Your Channels</v-card-title>
            <v-card-text class="pt-0" >
              <v-select
                v-for="(filter, i) in filters"
                :key="i"
                :items="filter.items"
                :placeholder="filter.name"
                light multiple chips single-line dense
                v-model="selectedFilters"
                return-object
              >

                <template v-slot:selection="{ filter, index }">
                  <v-chip v-if="index < 2">
                    <span>{{ selectedFilters[index] }}</span>
                  </v-chip>
                  <span
                    v-if="index === 2"
                    class="grey--text caption"
                  >(+{{ selectedFilters.length - 1 }} others)</span>
                </template>
              </v-select>
            </v-card-text>

            <!-- <v-card-text class="pt-0" >
              <v-select
                :items="appVendorFilter.items"
                :placeholder="appVendorFilter.name"
                light multiple chips single-line dense
                v-model="selectedFilters"
                return-object
              >

                <template slot="selection" slot-scope="data">
                  <p>{{ data.item }}</p>
                </template>

                <template slot="item" slot-scope="data">
                  <p>{{ data.item }}</p>
                </template>

              </v-select>
            </v-card-text> -->


            <v-btn @click="searchByFilters(selectedFilters)">Search</v-btn>
            <v-btn @click="clearFilters(selectedFilters)">Clear</v-btn>
          </v-container>
        </v-card>
			</v-col>

			<v-col cols="8">
				<v-data-table
					v-if="this.loading && this.channels && company.company_type === 'true'"
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
					<!-- <template v-slot:item.name="{ item }">
						<v-row class="d-flex">
							<v-col>
								<p>{{ item.channelName }}</p>
							</v-col>
						</v-row>
					</template> -->
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
        <v-data-table
          v-else-if="this.loading && this.channels"
          :search="searchChannels"
          :items="channels"
          :headers="headersVendor"
          :items-per-page="10"
        >
          <template v-slot:item.imageUrl="{ item }">
            <v-row class="d-flex">
              <v-col>
                <p>{{ item.imageUrl }}</p>
              </v-col>
            </v-row>
          </template>
          <!-- <template v-slot:item.name="{ item }">
            <v-row class="d-flex">
              <v-col>
                <p>{{ item.channelName }}</p>
              </v-col>
            </v-row>
          </template> -->
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
      company: {},
      headers: [
        { text: 'Channel Name', value: 'channelName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Channel Manager', value: 'channelManagerFullName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Approved Vendors', value: 'approvedVendors', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
      ],
      headersVendor: [
        { text: 'Channel Name', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Channel Manager', value: 'fullname', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
      ],
      channels: [],
      originalChannels: [],
      searchChannels: '',
      approvedVendorsList: {},
      locationCondition: false,
      locationApproved: false,
      filters: [
        {
          name: 'Channel Name',
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
        }
      ],
      appVendorFilter: {
        name: 'Approved Vendors',
        items: [
          '0',
          '1-5',
          '5-10',
          '10+',
        ]
      },
      selectedFilters: []
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
    searchByFilters(selectedFilters) {
      // console.log(selectedFilters, "SELECTED FILTERS")
      // console.log(this.filters, "filters")

      // console.log(this.originalChannels, "OG CHANNELS")

      this.channels = this.originalChannels

      selectedFilters.forEach(filterValue => {
        this.channels = this.channels.filter(item => {
          if(item.channelName === filterValue || item.city === filterValue || item.state === filterValue) {
            return item
          }
        })
      })
    },
    clearFilters() {
      this.selectedFilters = []

      this.channels = this.originalChannels
    },
    async getCompany(id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
        .then(async (response) => {
          console.log(response.data, "HEYYYYY")
          this.company = response.data
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
                channelManagerFullName: response.data.locations[i].contact_first_name + ' ' + response.data.locations[i].contact_last_name,
                channelManagerFirstName: response.data.locations[i].contact_first_name,
                channelManagerLastName: response.data.locations[i].contact_last_name,
                approvedVendors: numberOfVendors,
              }
              // this.filters[2].items.push({name: response.data.locations[i].city, value: 'city'})
              // this.filters[1].items.push({name: response.data.locations[i].state, value: 'state'})
              // this.filters[0].items.push({name: response.data.locations[i].name, value: 'name'})

              this.filters[2].items.push(response.data.locations[i].city)
              this.filters[1].items.push(response.data.locations[i].state)
              this.filters[0].items.push(response.data.locations[i].name)

              this.channels.push(company)
              this.originalChannels.push(company)

            } else {
              let numberOfVendors = this.approvedVendorsList[i].approvedVendors.length

              let company = {
                channelId: response.data.locations[i].id,
                channelName: response.data.locations[i].name,
                address: response.data.locations[i].address,
                city: response.data.locations[i].city,
                state: response.data.locations[i].state,
                zipcode: response.data.locations[i].zipcode,
                channelManagerFullName: response.data.locations[i].contact_first_name + ' ' + response.data.locations[i].contact_last_name,
                channelManagerFirstName: response.data.locations[i].contact_first_name,
                channelManagerLastName: response.data.locations[i].contact_last_name,
                approvedVendors: numberOfVendors,
              }
              // this.filters[2].items.push({name: response.data.locations[i].city, value: 'city'})
              // this.filters[1].items.push({name: response.data.locations[i].state, value: 'state'})
              // this.filters[0].items.push({name: response.data.locations[i].name, value: 'name'})

              this.filters[2].items.push(response.data.locations[i].city)
              this.filters[1].items.push(response.data.locations[i].state)
              this.filters[0].items.push(response.data.locations[i].name)

              this.channels.push(company)
              this.originalChannels.push(company)

            }
          }
            // console.log(this.channels)
            // console.log(this.filters[0].items)
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
