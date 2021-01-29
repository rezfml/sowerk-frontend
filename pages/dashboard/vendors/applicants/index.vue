<template>
  <v-app class="grey lighten-3 d-flex flex-column align-center" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%; width: 95%;">
      <v-row style="width: 100vw;" class="d-flex justify-space-between" v-if="!loading">
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
        <v-card class="mb-4" style="width: 100%;background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loading">
          <v-row style="width:100%;height:auto" class="d-flex flex justify-center align-center">
            <v-col cols="12" sm="12" md="7" style="height:auto;">
              <v-img height="400px" src="/SoWork Logo-177.png"></v-img>
            </v-col>

            <v-col cols="12" sm="12" md="5" class="d-flex flex-column justify-center" style="height:auto">
              <v-row>
                <v-col cols="12">
                  <h2 style="color:darkred;font-size:1.5rem">Vendors That Have Applied</h2>
                  <p class="mt-4" style="font-size:1rem">On this page you can see all the Vendors that have applied to any application and on any channel across your company account, If a Vendor has applied to more than one Channel then each application will be displayed and require your approval or denial. Depending on your access level within the Company account some features and functionality may be different. Finally, it should be noted that you can also review a more limited list of Vendor applicants by navigating to a specific Channel dashboard located under Channels.
                  </p>
                </v-col>
              </v-row>

              <v-row>
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/channels"
                  class="my-1"
                >Channels</v-btn>
                <v-btn
                  style="background: linear-gradient(to right, #A61C00, #741502); width:100%;border-radius:8px"
                  large
                  outlined
                  color="white"
                  to="../../dashboard/vendors/approved"
                  class="my-1"
                >Approved Vendors</v-btn>
              </v-row>

            </v-col>
          </v-row>
        </v-card>
      </transition>

      <transition name="slide-fade">
        <template v-if="loading" class="d-flex flex-column align-center">
          <template class="d-flex flex-column align-center mt-16" v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
            <ActiveApplicationsCard
              v-if="applicationsArray"
              :title="'My Active Applications'"
              :tableProperties="headers"
              :bizAndVendorData="bizAndVendorData"
              :company="company"
              :viewAll="false"
              :loadingRequests="loading"
              slug="/dashboard/vendors/applicants"
            ></ActiveApplicationsCard>
          </template>
          <template class="d-flex flex-column align-center mt-16" v-else>
            <!--          <v-col cols="3">-->
            <!--            <FilterCard-->
            <!--              title="Filter"-->
            <!--              :filters="filters"-->
            <!--            ></FilterCard>-->
            <!--          </v-col>-->
            <ActiveApplicationsCard
              v-if="applicationsArray"
              :title="'My Active Applications'"
              :tableProperties="headers"
              :bizAndVendorData="bizAndVendorData"
              :company="company"
              :viewAll="false"
              :loadingRequests="loading"
              slug="/dashboard/vendors/applicants"
            ></ActiveApplicationsCard>
          </template>
        </template>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
  import ActiveApplicationsCard from '~/components/dashboard/ActiveApplicationsCard'

  export default {
    name: 'activeapplicants',
    layout: 'app',
    components: {
      ActiveApplicationsCard,
      FilterCard
    },
    data() {
      return {
        expanded: [],
        loading: false,
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
          { text: 'Your Channels', value: 'businessChannelName', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
          { text: 'Pending Applications', value: 'vendorAppsForThisChannel.length', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
        ],
        applicationsArray: [],
        applicationsCount: 0,
        companyId: 0,
        serviceId: 0,
        locationId: 0,
        company: {},

        bizAppInfo: [],
        bizAndVendorData: [],

        userforms: [],
        applicationTemplateVal: [],
        valueServices: 0,
        valueUserForms: 0
      }
    },
    async mounted() {
      await this.getCompany(this.currentUser.companies_id)
      await this.getApplications(this.currentUser.companies_id)

      await this.consolidateData()
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async consolidateData() {

        // TRIPLE NESTED LOOP!!!! ABSOLUTELY AWFUL CODING, THIS SHOULD BE DONE DIFFERENTLY!
        // TIME COMPLEXITY WILL BE EXPONENTIAL
        // SPACE COMPLEXITY UNKNOWN ATM
        // For loop --- on business channels
          // forEach loop --- on pending vendor applications
            // forEach loop --- on business userforms, to find one vendor applied to

        for(let i=0; i<this.company.locations.length; i++){
          let tempArray = []
          let appCatData = null;
          let appTypeData = null;

          try {
            await this.$http.get('https://www.sowerkbackend.com/api/userforms/byLocationId/' + this.company.locations[i].id)
              .then(async (response) => {
                // console.log(response.data, 'USERFORMS FOR BUSINESS LOCATION BY LOCATION ID')

                this.userforms = response.data
              })
              .catch(err => {
                console.log('err get userforms', err);
              })

          } catch {

            continue

          } finally {

            console.log(this.userforms, "list of forms for this business channel!")
            console.log(this.applicationsArray, "list of vendor info for applications currently pending under this business channel")



            this.applicationsArray.forEach((app => {
              if(app.pmlocations_id === this.company.locations[i].id) {
                console.log(app.pmlocations_id, "-----")
                console.log(this.company.locations[i].id, "-----")

                this.userforms.forEach((form => {
                  if(app.pmuserforms_id === form.id) {
                    appCatData = form.service
                    appTypeData = form.vendorType
                  }
                }))

                tempArray.push(app)
              } else {
                console.log("didn't match")
              }
            }))


            let allDataForEachRow = {
              businessChannelId: this.company.locations[i].id,
              businessChannelName: this.company.locations[i].name,
              vendorAppsForThisChannel: tempArray,
              appCat: appCatData,
              appType: appTypeData
            }

            this.bizAndVendorData.push(allDataForEachRow)
            console.log(this.bizAndVendorData, "ALL DATA!!!!!!!!!!!!")
          }


        }
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            this.company = response.data
            if(this.currentUser.is_superuser) {
              this.company.locations = response.data.locations
            } else {
              this.company.locations = response.data.locations.filter(location => {
                if(this.currentUser.first_name === location.contact_first_name && this.currentUser.last_name === location.contact_last_name && this.currentUser.email === location.email) {
                  return location
                }
              })
            }
            console.log(this.company, "---------------------------------------------------------")
            console.log(this.company.locations[0].id)
            this.businessChannelsList = this.company.locations
          })
          .catch(err => {
            console.log(err)
          })
      },
      async getApplications(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + id)
          .then(async (response) => {
            // console.log(response.data, 'response for applications by Pm id!!!');
            for(let i=0; i<response.data.length; i++){
              // console.log(response.data[i], 'HELLOOOOOOOOOOOO');
              if(response.data[i].approval_status === 0 && this.company.locations.some(val => (val.id === response.data[i].pmlocations_id))) {
                this.applicationsArray.push(response.data[i]);
                // this.serviceId = response.data[i].pmservices_id;
                this.companyId = response.data[i].spcompanies_id;
                this.locationId = response.data[i].splocations_id;
                //await this.getPMService(this.serviceId);
                await this.getSPCompany(this.companyId);
                await this.getSPLocation(this.locationId);
                this.applicationsCount++;
                // setTimeout(() => {
                //   this.$forceUpdate();
                // }, 2000);
                this.loading = false;
                // console.log(this.applicationsArray, 'applicationsArray parsed');
              }
            }
            this.applicationsArray.forEach(application => {
              application.subData = JSON.parse(application.subData);
            })
          })
          .catch(err => {
            console.log('err in getting applications', err);
          })
        // console.log(this.applicationsArray, 'wow so done')
        this.loading=true;
      },
      async getPMService(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/services/' + id)
          .then(async (response) => {
            // console.log('response for service', response.data, id, 'id')
            this.applicationsArray[this.applicationsCount].serviceName = response.data.service.name;
          })
          .catch(err => {
            console.log('err in getting pm service', err);
          })
      },
      async getSPCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async (response) => {
            // console.log('response.data for company', response.data)
            this.applicationsArray[this.applicationsCount].img = response.data.imgUrl;
            this.applicationsArray[this.applicationsCount].companyName = response.data.account_name;
          })
          .catch(err => {
            console.log('err in getting sp company ', err);
          })
      },
      async getSPLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(async (response) => {
            // console.log('response.data for location', response.data)
            this.applicationsArray[this.applicationsCount].contact = `${response.data.contact_first_name} ${response.data.contact_last_name}`;
            this.applicationsArray[this.applicationsCount].channelName = `${response.data.name}`
            this.applicationsArray[this.applicationsCount].addressName = `${response.data.address} ${response.data.city}, ${response.data.state} ${response.data.zipcode}`;
            this.applicationsArray[this.applicationsCount].email = `${response.data.email}`;
            this.applicationsArray[this.applicationsCount].phone = `${response.data.phone}`;
            this.applicationsArray[this.applicationsCount].yearFounded = `${response.data.year_founded}`;
            this.applicationsArray[this.applicationsCount].radius = `${response.data.radius}`;
          })
          .catch(err => {
            console.log('err in getting sp location', err);
          })
      },
    }
  }

</script>

<style>
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
    @media (max-width:1264px ){
    #app{
      margin-top:-22px;
    }
  }


</style>
