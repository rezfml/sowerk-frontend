<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0" style="max-width: 95%;">
      <v-row>
        <v-col cols="12">
          <HomeCard
            title="Vendor Applications"
            :items="applications"
            :tableProperties="headers"
            :viewAll="false"
            action="Review"
            slug="/dashboard/vendor-applications/"
            :loading="loading"
          ></HomeCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'

  export default {
    name: 'index',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard
    },
    data() {
      return {
        loading: false,
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
        locations: null,
        services: [],
        applications: [],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'company_name', class: 'primary--text font-weight-regular' },
          { text: 'Location', value: 'address', class: 'primary--text font-weight-regular' },
          { text: '', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ]
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
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    async mounted() {
      await this.getUser();
      await this.getLocations();
    },
    methods: {
      async getUser() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          this.user = data;
          console.log(data);
        })
      },
      async getLocations() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.locations = data;
        console.log(this.locations);
        await this.getServices(this.locations);
      },
      // async getLocations(companies) {
      //   for (const company of companies) {
      //     let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      //     console.log(data);
      //     if (this.$error(status, data.message, data.errors)) return;
      //     if(data.locations[0] !== 'There are no locations') {
      //       for (const location of data.locations) {
      //         this.$nextTick(function() {
      //           this.locations.push(location);
      //           console.log(this.locations);
      //         })
      //       }
      //     } else {
      //       console.log('wtf again');
      //     }
      //   }
      //   await this.getServices();
      // },
      async getServices(locations) {
        console.log(locations);
        for (const location of locations) {
          let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/services/bylocationid/' + location.id).catch(e => e);
          if(data) {
            if(data.message) continue;
            for (const service of data) {
              console.log(location);
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
            }
          }
        }
        console.log(this.services);
        await this.getUserforms();
      },
      async getUserforms() {
        for (const service of this.services) {
          let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/userforms/' + service.id).catch(e => e);
          console.log(data);
          if(data.applications[0] != 'There are no applications') {
            for (const application of data.applications) {
              console.log(application);
              let user = await this.getUserProfile(application.userprofiles_id);
              console.log(user);
              let array = JSON.parse("[" + application.subData + "]");
              console.log(array);
              let applicationObject = {
                answers: array,
                company_name: user.company_name,
                service: service.service,
                address: user.address + ' ' + user.city + ', ' + user.state + ' ' + user.zipcode,
                application_id: application.id,

              }
              this.applications.push(applicationObject);
            }
          }
        }
      },
      async getUserProfile(id) {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + id).catch(e => e);
        let company = await this.getUserCompany(data.companies_id);
        return company;
      },
      async getUserCompany(id) {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id).catch(e => e);
        return data;
      }
    }
  }
</script>

<style scoped>

</style>
