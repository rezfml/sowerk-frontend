<template>
  <v-app class="grey lighten-3">
    <!-- NOT SUPER USER -->
    <transition name="slide-fade">
      <!-- VENDOR USER -->
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="this.company.company_type === 'false'">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn what connections are and why they are important to your SOWerk Account.</p>
          </v-col>
          <!-- VENDOR CHANNELS VIDEO -->
          <v-col cols="4" style="width:100%;text-align:center;">
            <v-btn @click="showVideoCard" color="white" outlined style="width: 80%; border-radius: 20px;" class="py-8">
              <span style="font-size:1rem;letter-spacing:3px;font-weight:400;color:white;text-align:center;">WATCH NOW</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>
    <!-- VENDOR USER -->
    <transition name="slide-fade">
      <v-card style="height:460px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true && this.company.company_type === 'false'">
        <div style="position:relative;border-radius:1%;">
          <v-btn @click="showVideoCard" style="margin-left:2%;margin-top:2%;background-color:darkred;color:white;">X</v-btn>
          <iframe src="https://player.vimeo.com/video/495537837" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:900px;height:450px;margin-left:12%;border-radius:3%;margin-top:5px;">
          </iframe>
        </div>        
      </v-card>
    </transition>
    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" >
        <v-row style="width:100%;height:auto" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logos with Icons-170.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">Manage Your Connections On SOWerk</v-card-title>
            <v-card-text style="font-size: 18px;">In the Customer Connections section of SOWerk a Vendor can see all their approved connections they have made on the platform. From here you can choose to dive into any one of your Customer accounts where you can manage all the details of your relationship, including documents shared with the Customer or even internal notes you want to keep on this account. This interface is your customer relationship management solution here on SOWerk.</v-card-text>
            <v-btn to="/dashboard/businesses/leads" color="primary" class="py-6 ml-4" style="width: 95%; border-radius: 10px;">View Customer Leads</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition>

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
                <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="connections.length > 0">Customer Connections - {{connections.length}}</v-card-title>
                <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else>Customer Connections - 0</v-card-title>
                <v-card-actions class="d-flex justify-end px-4 py-0">
                  <v-row class="py-0 mt-8">
                    <v-spacer></v-spacer>
                    <v-col cols="4" class="py-0">
                      <v-text-field v-model="search" label="Search By Customer, Address, Name, Email, or Phone" light></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-actions>
                <v-data-table
                  :items="businesses"
                  :headers="providerHeaders"
                  :items-per-page="10"
                  :search="search"
                >
                  <template v-slot:item.imageUrl="{item}"  >
                    <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
                    <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="50px" max-width="50px" style="border-radius: 50%;" class="my-1"></v-img>
                  </template>
                  <template v-slot:item.address="{item}">
                    <div style="width: 100%;" class="d-flex flex-column align-center">
                      <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.address}}</v-card-text>
                      <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.city}}, {{item.state}} {{item.zipcode}}</v-card-text>
                    </div>
                  </template>
                  <template v-slot:item.contact_first_name="{item}">
                    <div style="width: 100%;" class="d-flex flex-column align-center">
                      <v-icon color="primary" style="align-self: flex-start; width: 100%;" class="d-flex justify-center">person</v-icon>
                      <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.contact_first_name}} {{item.contact_last_name}}</v-card-text>
                    </div>
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
        search: '',
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
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start'},
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Category', value: 'service', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Primary Contact', value: 'primary_contact', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        providerHeaders: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false},
          { text: 'Customer', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
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
        company: { },
        connections: null,
        showVideo: false,
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
      showVideoCard(){
        if(this.showVideo === false){
          this.showVideo = true
        } else {
          this.showVideo = false
        }
      },
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
          await this.$http.get('https://www.sowerkbackend.com/api/preapprovedRequest/bySPCompanyId/' + this.currentUser.companies_id)
            .then(response => {
              console.log(response.data, 'COMPANY TYPE PRE APPROVED REQUEST')
              for(let i=0; i<response.data.length; i++) {
                if(response.data[i].approval_status === 1) {
                  this.connections.push(response.data[i])
                }
              }
            })
            .catch(err => {
              console.log(err)
            })
          console.log(this.connections, 'CONNECTIONSS');
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
