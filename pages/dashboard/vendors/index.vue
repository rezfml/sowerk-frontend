<template>
  <v-app class="grey lighten-3" overflow-y-auto>
      <!--    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">-->
      <!--      <v-progress-circular-->
      <!--        indeterminate-->
      <!--        color="primary"-->
      <!--        :size="50"-->
      <!--      ></v-progress-circular>-->
      <!--    </div>-->

    <!-- NOT SUPER USER -->
    <transition name="slide-fade">
      <!-- SUPER USER -->
      <v-card class="my-4 flex-row justify-space-between align-center" style="position: relative; margin-left:3%;margin-right:4%;">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto;background-color:#404040">

          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:1.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>

          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn about Finding A SOWerk Vendor.</p>
          </v-col>

          <!-- VENDOR CHANNELS VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;">

            <v-btn class="py-12" @click="renderVideoCard" style="width: 100%; border: 1px solid white;text-decoration:none;color:inherit;background-color:#404040; font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">
                WATCH NOW <br/>-Find A SOWerk Vendor-
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <v-row v-if="!loading">
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

    <!-- CARD THAT HOLDS VIDEO BELOW OTHER CARDS -->
    <transition name="slide-fade">
      <v-card style="height:460px;width:100%;background-color:#404040;border-radius:1%;" v-if="viewVideoCard === true">
        <div class="d-flex justify-center">
          <iframe src="https://player.vimeo.com/video/496996565" width="900" height="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </v-card>
    </transition>

    <!-- BANNER CARD -->
    <transition name="slide-fade">
      <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
        <v-row style="width:100%;height:auto" class="d-flex flex justify-center align-center">
          <v-col cols="12" sm="12" md="7" style="height:auto;">
            <v-img height="400px" src="/SoWork Logo-178.png"></v-img>
          </v-col>

          <v-col cols="12" sm="12" md="5" class="d-flex flex-column justify-center" style="height:auto">
            <v-row>
              <v-col cols="12">
                <h2 style="color:darkred;font-size:1.5rem">Find The Next Great Vendor</h2>
                <p class="mt-4" style="font-size:1rem">It's great to publish a Vendor application whereby businesses can seek you out and apply. However, we also encourage you to utilize our ever-growing SOWerk Vendor directory. Once you find a potential Vendor you can review their profile, request them to apply for a public or private application, send them a message or even leave an internal note for yourself and your company. Don't see a Vendor you know or have worked with? Try using the SOWerk Invite Tool.
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-btn
                style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                large
                outlined
                color="white"
                to="../../dashboard/vendors/invite"
              >Vendor Invite Tool</v-btn>
            </v-row>

          </v-col>
        </v-row>
      </v-card>
    </transition>

    <transition name="slide-fade">
      <v-container class="px-0" style="max-width: 95%;margin-bottom:10%" v-if="loading">
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
        <v-row>
          <!--        <v-col cols="3">-->
          <!--          <img style="width: 100%;" class="mb-n16 mt-n16" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-156.png" />-->
          <!--          <FilterCard-->
          <!--            class="mt-n4"-->
          <!--            title="Filter"-->
          <!--            :filters="filters"-->
          <!--          ></FilterCard>-->
          <!--        </v-col>-->
          <v-col cols="12" class="d-flex flex-column justify-space-between">
            <FacilitiesCard
              v-if="vendors && loading === true"
              :title="'Find A SOWerk Vendor'"
              :items="vendors"
              :tableProperties="headers"
              :viewAll="false"
              action="View"
              slug="/dashboard/vendors/"
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
        viewVideoCard: false,
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
              "North Dakota",
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
          // {
          //   text: 'ID',
          //   align: 'start',
          //   sortable: false,
          //   value: 'id',
          //   class: 'primary--text font-weight-regular'
          // },
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Address', value: 'addressCityState_vendor', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Category', value: 'services', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Primary Contact', value: 'full_name_vendor', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
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
      renderVideoCard() {
        if(this.viewVideoCard === true){
          this.viewVideoCard = false
        } else {
          this.viewVideoCard = true
        }
      },
      async getBusinesses() {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/type/false')
          .then(response => {
            console.log(response.data.length, 'length!!!!!');
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
