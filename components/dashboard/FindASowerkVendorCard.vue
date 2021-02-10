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
		this.test();
	},
	computed: {
			currentUser() {
					return this.$store.state.user.user.user;
			},
	},
	methods: {
		test() {
			this.$http.get('https://www.sowerkbackend.com/api/companies/vendors/channels')
				.then(res => {
					console.log(res, "THIS IS THE RESPONSE FROM THE NEW ENDPOINT")
				})
				.catch(err => {
					console.log(err)
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
