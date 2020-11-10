<template>
  <v-app class="grey lighten-3" overflow-y-auto>
<!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
<!--      <v-progress-circular-->
<!--        indeterminate-->
<!--        color="primary"-->
<!--        :size="50"-->
<!--      ></v-progress-circular>-->
<!--    </div>-->
    <v-row>
      <v-col cols="3">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="15vw"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="9">
        <v-skeleton-loader
          v-if="!loading"
          type="card-avatar, article, article, actions"
          min-height="50vh"
          min-width="30vw"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <transition name="slide-fade">
    <v-container class="px-0" style="max-width: 95%;" v-if="loading">
<!--      <v-row class="d-flex align-center" style="width: 100%">-->
<!--        <img style="width: 30%; margin-bottom: -170px; margin-top: -100px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-156.png" />-->
<!--        <v-slide-group multiple :show-arrows="showArrows" style="background: #E0E0E0; width: 70%; max-height: 200px; margin-top: 50px; border-radius: 140px;">-->
<!--          <v-slide-item-->
<!--            v-for="(item, index) in quickLookUps"-->
<!--            :key="index"-->
<!--            v-slot:default="{ active, toggle }"-->
<!--            class="px-4 d-flex align-center"-->
<!--            style=" background: #E0E0E0; width: 70%; border-radius: 50px;"-->
<!--          >-->
<!--            <v-card width="300" elevation="0">-->
<!--              <v-row>-->
<!--                <v-col class="d-flex flex-column align-center justify-center py-0">-->
<!--                  <p class="text-center primary&#45;&#45;text title">{{ item.name }}</p>-->
<!--                  <v-icon color="primary" size="100">{{ item.icon }}</v-icon>-->
<!--                </v-col>-->
<!--              </v-row>-->
<!--            </v-card>-->
<!--          </v-slide-item>-->
<!--        </v-slide-group>-->
<!--      </v-row>-->

      <v-row v-show="!$vuetify.breakpoint.md && !$vuetify.breakpoint.lg">
        <v-col cols="12" class="d-flex flex-column">
          <FacilitiesCard
            v-if="vendors.length > 0 && loading === true"
            :title="'Find A SOWerk Vendor'"
            :items="vendors"
            :tableProperties="headers"
            :viewAll="false"
            action="View"
            slug="/dashboard/businesses/"
          ></FacilitiesCard>
        </v-col>
      </v-row>

      <v-row v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
        <v-col cols="3">
          <img style="width: 100%;" class="mb-n16 mt-n16" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-156.png" />
          <FilterCard
            class="mt-n4"
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>

        <v-col cols="9" class="d-flex flex-column justify-space-between" >
          <FacilitiesCard
            v-if="vendors.length > 0 && loading === true"
            :title="'Find A SOWerk Vendor'"
            :items="vendors"
            :tableProperties="headers"
            :viewAll="false"
            action="View"
            slug="/dashboard/businesses/"
          ></FacilitiesCard>
        </v-col>
      </v-row>

    </v-container>
    </transition>
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
            name: 'Category of Service',
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
            name: 'Approved Vendor Connections',
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
          { text: 'Service', value: 'services', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'full_name', class: 'primary--text font-weight-regular' },
          { text: 'Location', value: 'addressCityState', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        businesses: null,
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
    methods: {
      async getBusinesses() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/type/false')
          .then(response => {
            console.log(response.data.length);
            for(let i=0; i< response.data.length; i++) {
              this.getLocations(response.data[i].id, response.data[i].account_name);
            }
            this.loading = true;
            console.log("YAY", this.loading)
          })
          .catch(e => console.log(e, 'error'));
      },
      async getLocations(id, account_name) {
        this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
          .then(response => {
            console.log(response.data.location, 'locations');
            response.data.location.forEach((location) => {
              this.$http.get('https://www.sowerkbackend.com/api/locations/' + location.id)
                .then(res => {
                  console.log(res.data, 'individual location')
                  res.data.services = [
                    'HVAC',
                    'Plumbing'
                  ]
                  this.vendors.push(res.data);
                })
                .catch(err => {
                  console.log('err', err);
                })
            })
            console.log('this.vendors', 'vendors');
          })
          .catch(err => {
            console.log('err', err);
          })
      }
    },
  }
</script>

<style scoped>
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .7s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
