<template>
  <v-app class="grey lighten-3">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row class="d-flex align-center" style="width: 100%">
        <img style="width: 30%; margin-bottom: -170px; margin-top: -100px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-156.png" />
        <v-slide-group multiple :show-arrows="showArrows" style="background: #E0E0E0; width: 70%; max-height: 200px; margin-top: 50px; border-radius: 140px;">
          <v-slide-item
            v-for="(item, index) in quickLookUps"
            :key="index"
            v-slot:default="{ active, toggle }"
            class="px-4 d-flex align-center"
            style=" background: #E0E0E0; width: 70%; border-radius: 50px;"
          >
            <v-card width="300" elevation="0">
              <v-row>
                <v-col class="d-flex flex-column align-center justify-center py-0">
                  <p class="text-center primary--text title">{{ item.name }}</p>
                  <v-icon color="primary" size="100">{{ item.icon }}</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-row>
      <v-row>
        <v-col cols="3">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        <v-col cols="9" class="d-flex flex-column justify-space-between">
          <FacilitiesCard
            v-if="vendors"
            :title="'All SOWerk Vendors'"
            :items="vendors"
            :tableProperties="headers"
            :viewAll="false"
            action="View"
            slug="/dashboard/businesses/"
          ></FacilitiesCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
  import FacilitiesCard from '@/components/dashboard/FacilitiesCard'

  export default {
    name: 'facilities',
    layout: 'app',
    components: {
      FacilitiesCard,
      FilterCard
    },
    data() {
      return {
        loading: false,
        vendors: [
          {
            account_name: "",
            address: "",
            brand_name: "",
            city: "",
            company_type: "",
            creationDate: "",
            currentConnections: Number,
            description: "",
            email: "",
            id: Number,
            imgUrl: "",
            isFranchise: true,
            llcName: "",
            maxConnections: Number,
            modifiedDate: "",
            phone: "",
            servicesOffered: "",
            state: "",
            user: {
              companies_id: Number,
              created: "",
              email: "",
              first_name: "",
              id: Number,
              isVerified: true,
              is_superuser: true,
              last_name: "",
              modified: "",
              password: "",
              phone: "",
              rep_name: null,
              uuid: "",
            },
            year_founded: Number,
            zipcode: Number,
          }
        ],
        prevIcon: true,
        nextIcon: true,
        showArrows: true,
        quickLookUps: [
          {
            name: 'HVAC',
            icon: 'hvac',
            link: '#'
          },
          {
            name: 'Landscaping',
            icon: 'mdi-rake',
            link: '#'
          },
          {
            name: 'Plumber',
            icon: 'mdi-pipe',
            link: '#'
          },
          {
            name: 'Electrician',
            icon: 'mdi-power-plug',
            link: '#'
          },
          {
            name: 'Painter',
            icon: 'mdi-format-paint',
            link: '#'
          },
          {
            name: 'Paving',
            icon: 'mdi-tractor',
            link: '#'
          },
          {
            name: 'Pest Control',
            icon: 'mdi-bug-outline',
            link: '#'
          },
        ],
        services: [],
        filters: [
          {
            name: 'Location',
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
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'user_full_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Location', value: 'addressCityState', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        businesses: null
      }
    },
    // watch: {
    //   loading: function() {
    //     if(this.loading){
    //       console.log(document);
    //       document.documentElement.style.overflow = 'hidden'
    //       return
    //     }
    //     document.documentElement.style.overflow = 'auto'
    //   }
    // },
    async mounted() {
      await this.getBusinesses();
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getBusinesses() {
        // this.loading = true;
        this.locations = [];
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/type/false')
          .then(response => {
            console.log(response, 'response company type 1')
            this.vendors = response.data;
            this.getUsers();
          })
          .catch(e => console.log(e, 'error'));
        // this.businesses = data.users.filter(function(user) {
        //   return user.user_type == 1;
        // })
        // console.log(this.businesses);
      },
      async getUsers() {
        for(let i=0; i<this.vendors.length; i++) {
          this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/company/' + this.vendors[i].id)
            .then(response => {
              console.log(response.data, 'hey')
              this.vendors[i]["user"] = response.data.user;
              console.log('WOW', this.vendors)
            })
        }
      }
    },
  }
</script>

<style scoped>

</style>
