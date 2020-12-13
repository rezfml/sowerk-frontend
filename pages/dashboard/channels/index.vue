<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0" style="max-width: 95%;">
      <transition name="slide-fade">
        <v-card class="my-4" style="width: 100%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" >
          <v-row style="width: 100%; height: auto;" class="d-flex flex align-center">
            <v-img class="" src="/SoWerk-LogoFacilities.png" style="width: 10%; height: 30vh;"></v-img>
            <v-col cols="7" class="d-flex flex-column justify-center">
              <p class="mt-4">Channel(s) here on SOWerk are the backbone of your account! Think of Channels as any company facility, division or department, or even a large project where you will want to specifically find, vet, and manage Vendors. You can set up as many Channels as you like and assign users within your company account to manage a Channel. A good rule of thumb is to establish Channels based on how you currently segment Vendor management or how you would like to, going forward.
              </p>
              <v-spacer></v-spacer>
              <p><span style="font-size: 1.2rem; font-weight: 700;">Here is an example:</span> A retail company selling men's clothing has one warehouse and three store properties. Besides setting up four Channels, one for each property, they also added a Channel for the merchandising department responsible for outerwear wholesale vendors and another Channel for men's shoe wholesale vendors.
              </p>
              <v-spacer></v-spacer>
              <v-row class="d-flex justify-space-around align-center mx-0">
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width: 100%;"
                  class="px-12 mr-16 py-6"
                  large
                  outlined
                  rounded
                  color="white"
                  to="add"
                >Add Another Channel - Click Here</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </transition>
      <v-row v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->

        <v-col cols="12" class="d-flex flex-column justify-start flex-wrap" v-if="$vuetify.breakpoint.sm">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, article, actions"
            min-height="50vh"
            min-width="80vw"
            cols
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              :title="'Your Channels - ' + locations.length"
              :items="locations"
              :tableProperties="headers"
              :viewAll="false"
              slug="/dashboard/channels/"
              v-if="locationApproved && loading"
              :viewLocation="viewLocation"
              :sowerkTags="sowerkTags"
              :locationFilterTags="locationFilterTags"
              :removeTag="removeTag"
              :filterItems="filterItems"
            ></FacilitiesCard>
          </transition>
<!--          <transition name="slide-fade">-->
<!--            <v-row v-if="loading" class="d-flex justify-space-between align-center flex-wrap mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">-->
<!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
<!--              <v-btn-->
<!--                style=""-->
<!--                class="px-16 mr-16"-->
<!--                large-->
<!--                outlined-->
<!--                rounded-->
<!--                color="white"-->
<!--                to="/dashboard/channels/add"-->
<!--              >Add Now</v-btn>-->
<!--            </v-row>-->
<!--          </transition>-->
        </v-col>
        <v-col cols="12" class="d-flex flex-column justify-start" v-else>
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, article, actions"
            min-height="50vh"
            min-width="80vw"
            cols
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              :title="'Your Channels - ' + locations.length"
              :items="locations"
              :company="company"
              :tableProperties="headers"
              :viewAll="false"
              slug="/dashboard/channels/"
              v-if="locationApproved && loading"
              :viewLocation="viewLocation"
              :sowerkTags="sowerkTags"
              :locationFilterTags="locationFilterTags"
              :removeTag="removeTag"
              :filterItems="filterItems"
            ></FacilitiesCard>
          </transition>
<!--          <transition name="slide-fade">-->
<!--            <v-row v-if="loading" class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">-->
<!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
<!--              <v-btn-->
<!--                style=""-->
<!--                class="px-16 mr-16"-->
<!--                large-->
<!--                outlined-->
<!--                rounded-->
<!--                color="white"-->
<!--                to="/dashboard/facilities/add"-->
<!--              >Add Now</v-btn>-->
<!--            </v-row>-->
<!--          </transition>-->
        </v-col>

      </v-row>
<!--
  This will be uncommented when FilterCard has a horizontal layout for md screens
      <v-row  v-else-if="$vuetify.breakpoint.md ">
        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="50"
          ></v-progress-circular>
        </v-col>
        <v-row>
        <v-col cols="12">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" class="d-flex flex-column justify-start">
          <FacilitiesCard
            :title="'Your Facilities - ' + locations.length"
            :items="locations"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/channels/"
          ></FacilitiesCard>
          <v-row class="d-flex justify-space-between align-center"style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;">
            <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Property?</p>
            <v-btn
              style=""
              class="px-16 mr-16"
              large
              outlined
              rounded
              color="white"
              to="add"
            >Add Now</v-btn>
          </v-row>
        </v-col>
        </v-row>
      </v-row>
  -->

      <v-row  v-else>
<!--        <v-col cols="12" style="position: fixed; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0;" v-if="loading">-->
<!--          <v-progress-circular-->
<!--            indeterminate-->
<!--            color="primary"-->
<!--            :size="50"-->
<!--          ></v-progress-circular>-->
<!--        </v-col>-->
<!--        <v-col cols="3">-->
<!--          <v-skeleton-loader-->
<!--            v-if="!loading"-->
<!--            type="article, article, article, actions"-->
<!--            min-height="50vh"-->
<!--          ></v-skeleton-loader>-->
<!--          <transition name="slide-fade">-->
<!--            <FilterCard-->
<!--              title="Filter"-->
<!--              :filters="filters"-->
<!--              v-if="loading"-->
<!--            ></FilterCard>-->
<!--          </transition>-->
<!--        </v-col>-->
        <v-col cols="12" class="d-flex flex-column justify-start">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, article, actions"
            min-height="50vh"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              :title="'Your Channels - ' + locations.length"
              :items="locations"
              :company="company"
              :tableProperties="headers"
              :viewAll="false"
              :viewLocation="viewLocation"
              slug="/dashboard/channels/"
              v-if="locationApproved && loading"
              :sowerkTags="sowerkTags"
              :locationFilterTags="locationFilterTags"
              :removeTag="removeTag"
              :filterItems="filterItems"
            ></FacilitiesCard>
          </transition>
<!--          <transition name="slide-fade">-->
<!--            <v-row class="d-flex justify-space-between align-center mx-0" style="background: linear-gradient(to right, #A61C00, #741502); max-height: 100px;" v-if="currentUser.is_superuser && loading">-->
<!--              <p style="color: white; font-size: 24px;" class="pl-16">Need To Add Another Company Channel?</p>-->
<!--              <v-btn-->
<!--                style=""-->
<!--                class="px-16 mr-16"-->
<!--                large-->
<!--                outlined-->
<!--                rounded-->
<!--                color="white"-->
<!--                to="add"-->
<!--              >Add Now</v-btn>-->
<!--            </v-row>-->
<!--          </transition>-->
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
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
        company: {},
        locations: [
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
            name: 'Vendor Category',
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
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ],
        locationApproved: false,
        viewLocation: false,
        originalLocations: [],
        sowerkTags: [],
        locationFilterTags: [],
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
    mounted() {
      this.getCompany();
      // this.getLocations();
      this.getSowerkTags();
      console.log(this.currentUser);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
        if(this.currentUser.is_superuser === false && this.company.locations[0] !== 'There are no locations') {
          for(let i=0; i<this.company.locations.length; i++){
            if(this.company.locations[i].email === this.currentUser.email && this.company.locations[i].phone === this.currentUser.phone) {
              this.locations.push(this.company.locations[i].location[i]);
              this.originalLocations.push(this.company.locations[i].location[i]);
            }
          }
        } else if (this.company.locations[0] !== 'There are no locations') {
          this.locations = this.company.locations;
          this.originalLocations = this.company.locations;
          this.locationApproved = true;
          this.loading = true;
          console.log(this.locations, 'this.locations!!!!!!!')
        } else {
          this.locationApproved = true;
          this.loading = true;
        }
      },
      async getLocations() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/bycompaniesid/' + this.currentUser.companies_id)
          .catch(e => e);
        if (this.$error(status, data.message, data.errors)) {
          console.log(this.$error(status, data.message, data.errors), 'ERROR')
          this.locationApproved = true;
          this.loading = true;
          return;
        }
        this.$nextTick(function() {
          if(this.currentUser.is_superuser === false) {
            for(let i=0; i<data.location.length; i++){
              if(data.location[i].email === this.currentUser.email && data.location[i].phone === this.currentUser.phone) {
                this.locations.push(data.location[i]);
                this.originalLocations.push(data.location[i]);
              }
            }
          } else {
            this.locations = data.location;
            this.originalLocations = data.location;
            this.locationApproved = true;
            this.loading = true;
            console.log(this.locations, 'this.locations!!!!!!!')
          }
        })
      },
      async getSowerkTags() {
        await this.$http.get('https://www.sowerkbackend.com/api/sowerktags')
          .then(response => {
            console.log(response, 'sowerktags')
            this.sowerkTags = response.data;
          })
          .catch(err => {
            console.log(err, 'err for sowerk tags')
          })
      },
      async removeTag(item) {
        console.log(this.locationFilterTags, 'before removal', item)
        this.locationFilterTags = this.locationFilterTags.filter(locationTag => {
          if(typeof locationTag === 'object' && locationTag.name !== item.name) {
            return locationTag
          } else if (typeof locationTag === 'string' && locationTag !== item) {
            return locationTag
          }
        })
        console.log(this.locationFilterTags, 'after removal')
      },
      async filterItems() {
        console.log(this.locationFilterTags, 'dataItems', this.locations)
        this.locations = this.locations.filter(location => {
          for(let i=0; i<this.locationFilterTags.length; i++) {
            if(location.locationtags.length > 0 && location.locationtags.includes(this.locationFilterTags[i].name)) {
              console.log(location, 'location match')
              return location
            }
          }
        })
        console.log(this.locations, 'after filter')
      }
    },
  }
</script>

<style scoped>

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
