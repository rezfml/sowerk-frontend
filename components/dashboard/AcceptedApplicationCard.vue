<template>

	<!-- OUTER MOST DATA TABLE -->
	<v-data-table
		:items="items"
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
						:items="item.ChannelsInviting"
						:headers="onceNestTableHeaders"
						:items-per-page="10"
						:search="search"
						:expanded.sync="expandedChannel"
						show-expand
						single-expand
					>

						<!-- TWICE NESTED DATA TABLE -->
						<!-- <template v-slot:expanded-item="{ headers, item }">
							<td :colspan="headers.length">
								<v-data-table
								:items="item.userforms"
								:headers="providerApplicationHeaders"
								:items-per-page="10"
								:search="search"
								>
									<template v-slot:item.actions="{ item }">
										<v-btn block color="primary" :to="'/dashboard/businesses/applications/' + item.id">Apply</v-btn>
										<v-btn block color="primary">Deny</v-btn>
									</template>
								</v-data-table>
							</td>
						</template> -->
					</v-data-table>
				</td>
			</template>
	</v-data-table>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
export default {
  name: 'HomeCard',
  props: ['filterItems', 'removeTag', 'locationFilterTags', 'sowerkTags', 'items', 'title', 'viewAll', 'tableProperties', 'action', 'slug', 'company', 'viewLocation', 'locationAssignUser', 'assignUserToLocation', 'massAssignUserToLocation', 'locationApproved', 'submitMassAssignUserToLocation', 'viewLocation'],
  components: {
    FilterCard
  },
  data() {
    return {
			loading: false,
			expanded: [],
			outerTableHeaders: [
				{ text: 'Your Channel', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Approved Vendors', value: 'channelName', class: 'primary--text font-weight-bold text-h6 text-center' },				
			],
			onceNestTableHeaders: [
				{ text: 'Application Category', value: 'companyName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Company', value: 'channelName', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Channel', value: 'addressCityState', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Contact', value: 'contact', class: 'primary--text font-weight-bold text-h6 text-center' },
				{ text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
				{ text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
			],




      search: '',
      locations: null,
      users: [

      ],
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
      loadModal: false,
      successAssign: false,
      bkClass: 'bk',
      blurClass: 'blur',
    }
  },
  async created() {
		console.log(this.$store.state.user.user.user, "ksjdhfljsdhfksdjfhs")
    console.log(this.items, 'yayyy FACILITIES CARD');
    //console.log(this.locationAssignUser, 'user for location assign')
    this.loadingFunc(this.items);
    console.log(this.outerApprVenHeaders, "-------------------------------")
	},
	computed: {
		currentUser() {
			return this.$store.state.user.user.user;
		},
	},	
  methods: {
    async loadingFunc(val) {
      if(val) {
        this.loading = true
      }
    },
    async submit(businessId, location) {
      this.loadModal = true;
      this.idForMessage = businessId;
      this.locationForMessage = location;
    },
    async message(businessId, location) {
      this.sendToId = businessId;
      console.log(this.messageForm)
      console.log(businessId, location, 'messageVals', location.services.join(', '));
      // get company for message
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.$store.state.user.user.user.companies_id)
        .then(async (response) => {
          console.log('get company message', response.data)
          this.messageForm.company = response.data.account_name;
          this.messageForm.service = location.services.join(', ');
          this.messageForm.location = `${location.name} - ${location.address} ${location.city}, ${location.state} ${location.zipcode}`
          await this.$http.post('https://www.sowerkbackend.com/api/messages/byCompanyId/' + this.sendToId, this.messageForm)
            .then(res => {
              console.log('SUCCESS', res)
              this.successText = 'Successfully sent message to ' + res.data.messageVal.location
              this.successMessage = true;
            })
            .catch(err => {
              console.log(err);
            })
        })
      await setTimeout(() => {
        this.loadModal = false;
      }, 3500)
    },
    async closeModal() {
      this.loadModal = false;
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
