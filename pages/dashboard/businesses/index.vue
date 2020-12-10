<template>
  <v-app class="grey lighten-3">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <div v-else>
      <template v-if="company && company.company_type === 'true'">
        <v-container class="px-0" style="max-width: 95%;">
          <v-row>
<!--            <v-col cols="3">-->
<!--              <FilterCard-->
<!--                title="Filter"-->
<!--                :filters="filters"-->
<!--              ></FilterCard>-->
<!--            </v-col>-->
            <v-col cols="12" class="d-flex flex-column justify-space-between">
              <HomeCard
                v-if="services"
                :title="'Businesses'"
                :items="services"
                :tableProperties="headers"
                :viewAll="false"
                action="Apply"
                slug="/dashboard/businesses/"
              ></HomeCard>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-else-if="company && company.company_type === 'false'">
        <v-container class="px-0" style="max-width: 95%;">
          <v-row>
            <v-col cols="12" class="d-flex flex-column justify-space-between">
              <v-card class="white">
                <v-data-table
                  :items="businesses"
                  :headers="providerHeaders"
                >
                  <template v-slot:item.imageUrl="{item}"  >
                    <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
                    <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
                  </template>
                  <template v-slot:item.actions="{ item }" class="d-flex">
                    <v-btn color="primary" block class="my-2" :to="'/dashboard/businesses/' + item.id">View</v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </div>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'

  export default {
    name: 'facilities',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard
    },
    data() {
      return {
        loading: false,
        locations: [
          {
            id: '...',
            companyName: '...',
            name: '...',
            phone: '...',
            city: '...',
            state: '...',
            address: '...'
          },
        ],
        services: [],
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
        headers: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-regular'},
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Category', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'primary_contact', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        providerHeaders: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-regular'},
          { text: 'Customer', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        // connectionsHeaders: [
        //   {
        //     text: 'ID',
        //     align: 'start',
        //     sortable: false,
        //     value: 'id',
        //     class: 'primary--text font-weight-regular'
        //   },
        //   { text: 'Facility', value: 'name', class: 'primary--text font-weight-regular' },
        //   { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
        //   { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
        //   { text: 'Primary Contact', value: 'primary_contact', class: 'primary--text font-weight-regular' },
        //   { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
        //   { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        // ],
        businesses: [],
        company: null,
        connections: null,
      }
    },
    watch: {
      loading: function() {
        if(this.loading){
          console.log(document);
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    async mounted() {
      await this.getCompany();

    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getBusinesses(companyType) {
        if(companyType === 'true') {
          this.locations = [];
          let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/type/false').catch(e => e);
          this.businesses = data;
          if(this.businesses.length === 0) this.loading = false;
          console.log(data);
          // this.businesses = data.users.filter(function(user) {
          //   return user.user_type == 1;
          // })
          // console.log(this.businesses);
          await this.getLocations(data);
        } else if(companyType === 'false') {
          let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + this.currentUser.companies_id).catch(e => e);
          console.log(data);
          this.connections = data.filter(connection => connection.approval_status === 1);
          console.log(this.connections);
          await this.getConnectedCompaniesLocations();
          this.loading = false;
        }
      },
      async getCompany() {
        this.loading = true;
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        console.log('company from business/index: ', data.company_type);
        this.company = data;
        await this.getBusinesses(data.company_type);
      },
      async getConnectedCompaniesLocations() {
        let filters = [];
        this.connections.forEach(function(connection) {
          filters.push(connection.pmlocations_id);
        });

        let uniqueFilters = [...new Set(filters)];

        console.log(uniqueFilters);

        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/').catch(e => e);

        let businesses = [];

        data.forEach(function(company) {
          uniqueFilters.forEach(function(filter) {
            if(company.id === filter) {
              businesses.push(company);
            }
          })
        })

        this.businesses = businesses;
        console.log(this.businesses)

      },
      async getLocations(companies) {
        for (const company of companies) {
          let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + company.id).catch(e => e);
          if (this.$error(status, data.message, data.errors)) return;
          console.log('locations: ',data);
          if(data.locations[0] !== 'There are no locations') {
            for (const location of data.locations) {
              this.$nextTick(function() {
                this.locations.push(location);
                this.getService(location);
                if(this.locations.length === 1) {
                  this.loading = false;
                }
              })
            }
          } else {
          }
        }
        // await this.getServices();
      },
      async getService(location) {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/services/bylocationid/' + location.id).catch(e => e);
        if(data) {
          for (const service of data) {
            let serviceObj = {
              id: service.id,
              location_id: location.id,
              service: service.name,
              name: location.name,
              address: location.address + ' ' + location.city + ', ' + location.state + ' ' + location.zipcode,
              primary_contact: location.contact_first_name + ' ' + location.contact_last_name,
              phone: location.phone
            };

            this.services.push(serviceObj);
            console.log(this.services);
          }
        }
        this.loading = false;
      },
      async getServices() {
        for (const location of this.locations) {
          let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/services/bylocationid/' + location.id).catch(e => e);
          if(data) {
            if(data.message) continue;
            for (const service of data) {
              let serviceObj = {
                id: service.id,
                location_id: location.id,
                service: service.name,
                name: location.name,
                address: location.address + ' ' + location.city + ', ' + location.state + ' ' + location.zipcode,
                primary_contact: location.contact_first_name + ' ' + location.contact_last_name,
                phone: location.phone
              };

              this.services.push(serviceObj);
              console.log(this.services);
            }
          }
        }
        this.loading = false;
      },
    },
  }
</script>

<style scoped>

</style>
