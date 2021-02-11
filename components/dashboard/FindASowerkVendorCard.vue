<template>
  <v-app class="" overflow-y-auto>
    <v-progress-circular
      v-if="loading != true"
      indeterminate
      color="primary"
      :size="20" >
    </v-progress-circular>
    
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

							<template v-slot:item.category="{ item }">
								<v-row class="d-flex">
									<v-col>
										<p>{{ item.category }}</p>
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
				<v-row class="d-flex">
					<v-col>
						<p>{{ item.companyAccountName }}</p>
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
				{ text: 'Approved Connections', value: 'connections', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Category', value: 'category', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
			],

			vendorChannels: [],				
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
					console.log(res.data, "THIS IS THE RESPONSE FROM THE NEW ENDPOINT")
					this.vendorChannels = res.data
					this.loading = true
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
