<template>
  <v-container class="px-0" style="max-width: 100%">
    <!-- NOT SUPER USER -->
    <transition name="slide-fade">
      <!-- VENDOR USER -->
      <v-card class="my-4 flex-row justify-space-between align-center mx-0" v-if="loadingInit">
        <v-row class="d-flex flex-row justify-space-between align-center mx-0" style="width:100%;height:auto; background-color: #707070">
          <v-col cols="3" style="color:white;width:100%;text-align:center;">
            <h1 style="letter-spacing:5px;font-weight:450;font-style:italic;font-size:2.8rem;padding-left:2%;color:white">SOWERK 101</h1>
          </v-col>
          <v-col cols="5" style="color:white;width:100%;text-align:left;padding-left:2%;padding-top:2%">
            <p style="font-size:1.1rem">Watch our short video to learn how to utilize the New Customer Search function on SOWerk.</p>
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
      <v-card style="height:460px;width:100%;background-color:white;border-radius:1%;" v-if="showVideo === true">
        <div style="position:relative;border-radius:1%;">
          <v-btn @click="showVideoCard" style="margin-left:2%;margin-top:2%;background-color:darkred;color:white;">X</v-btn>
          <iframe src="https://player.vimeo.com/video/505839152" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:900px;height:450px;margin-left:22%;border-radius:3%;">
          </iframe>
        </div>
      </v-card>
    </transition>

    <!--VENDOR'S BUSINESS SEARCH BANNER -->
    <transition name="slide-fade">
      <v-card class="my-4" style="width: 99%; height: auto; background-image: url('/tools-texture.png'); background-size: cover; background-position: bottom;" v-if="loadingInit">
        <v-row style="width:100%;" class="d-flex justify-center nowrap">
          <v-col cols="7" style="">
            <v-img height="400px" src="/SoWork Logos with Icons-172.png"></v-img>
          </v-col>

          <v-col cols="5" class="d-flex flex-column justify-center">
            <v-card-title style="color:darkred; font-size: 24px">How To Utilize New Customer Search</v-card-title>
            <v-card-text style="font-size: 18px;">Vendors can search the business directory to identify who is on SOWerk as well as seek out particular applications that are open. Once you have identified a business you can click to review their account/channel profile, choose the application you are interested in, and then click to start the application process.</v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </transition>

    <v-row style="width: 95%;" class="mx-auto">
      <v-col cols="12" class="d-flex flex-column justify-space-between">
        <v-card class="white" color="mt-8">
          <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="allCompanies.length > 0 && !loading">New Customers - {{allCompanies.length}}</v-card-title>
          <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else-if="allCompanies.length === 0 && !loading">New Customers - 0</v-card-title>
          <v-text-field v-if="!loading" clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Customer Name" v-model="search" light></v-text-field>
          <div style="width: 100%; height: 20vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="50"
            ></v-progress-circular>
          </div>
          <v-data-table
            :items="allCompanies"
            :headers="allCompaniesHeaders"
            :expanded.sync="expanded"
            :search="search"
            show-expand
            single-expand
          >
            <template v-slot:item.imgUrl="{item}"  >
              <div style="width: 100%;" class="d-flex justify-center">
                <v-img v-if="item.imgUrl !== ''" :src="item.imgUrl" :aspect-ratio="1" max-height="75px" max-width="75px" style="border-radius: 50%; width: 75px;" class="my-1"></v-img>
                <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="75px" max-width="75px" style="border-radius: 50%; width: 75px;" class="my-1"></v-img>
              </div>
            </template>

            <template v-slot:item.account_name="{item}">
              <div style="width:100%;" class="d-flex justify-center">
                <p style="font-size:1rem;font-weight:500">{{ item.account_name }}</p>
              </div>
            </template>

            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" style="">
                <v-text-field v-if="!loading" background-color="white" clearable outlined class="pt-12" style="width: 80%; margin-left: 10%;" label="Search By Facility, Address, or Name" v-model="searchChannel" light></v-text-field>
                <v-data-table
                  :items="item.locations"
                  item-key="id"
                  :items-per-page="10"
                  :headers="providerHeaders"
                  :search="searchChannel"
                  :expanded.sync="expandedChannel"
                  show-expand
                  single-expand
                >
                  <template v-slot:item.imageUrl="{item}"  >
                    <div style="width: 100%;" class="d-flex justify-center">
                      <v-img v-if="item.imageUrl !== ''" :src="item.imageUrl" :aspect-ratio="1" max-height="75px" max-width="75px" style="border-radius: 50%; width: 75px;" class="my-1"></v-img>
                      <v-img v-else :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon.png'" :aspect-ratio="1" max-height="75px" max-width="75px" style="border-radius: 50%; width: 75px;" class="my-1"></v-img>
                    </div>
                  </template>
                  <template v-slot:item.name="{item}">
                    <div style="width: 100%;" class="d-flex flex-column align-center">
                      <v-card-text style="width: 100%; white-space: pre-wrap; word-break: break-word;" class="d-flex justify-center">{{item.name}}</v-card-text>
                    </div>
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
                  <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                      <v-text-field clearable background-color="white" outlined class="pt-4" style="width: 80%; margin-left: 10%;" label="Search By Application Name" v-model="searchChannelApp" light></v-text-field>
                      <v-data-table
                        :items="item.userforms"
                        :headers="providerApplicationHeaders"
                        :items-per-page="10"
                        :search="searchChannelApp"
                      >
                        <template v-slot:item.actions="{ item }" class="d-flex">
                          <v-btn color="primary" block class="my-2" :to="'/dashboard/businesses/' + item.locations_id + '/application-form/' + item.id">View</v-btn>
                        </template>
                      </v-data-table>
                    </td>
                  </template>
                </v-data-table>
              </td>
            </template>
          </v-data-table>

<!--          <v-simple-table>-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th class="primary&#45;&#45;text">ID</th>-->
<!--                <th class="primary&#45;&#45;text">Facility</th>-->
<!--                <th class="primary&#45;&#45;text">Address</th>-->
<!--                <th class="primary&#45;&#45;text">Primary Contact</th>-->
<!--                <th class="primary&#45;&#45;text">Email</th>-->
<!--                <th class="primary&#45;&#45;text">Phone</th>-->
<!--                <th class="primary&#45;&#45;text">Actions</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr v-for="(business, index) in businesses">-->
<!--                <div v-for="(location, locationIndex) in business.locations">-->
<!--                  <div v-for="(service, serviceIndex) in location.services">-->
<!--&lt;!&ndash;                    <div v-for="(userform, userformIndex) in userforms">&ndash;&gt;-->
<!--&lt;!&ndash;                      {{userform}}&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                      <template v-if="userform.active">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <p>{{userform.active}}</p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                      </template>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.id}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.name}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.address}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.contact_first_name}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.email}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                        <td>{{location.phone}}</td>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                  </div>-->
<!--                </div>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </v-simple-table>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "requesting",
  layout: "app",
  data() {
    return {
      expanded: [],
      expandedChannel: [],
      search: '',
      searchChannel: '',
      searchChannelApp: '',
      businesses: [],
      services: [],
      requestingBusinesses: [],
      requestingLocations: [],
      activeUserforms: [],
      providerHeaders: [
        { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false},
        { text: 'Customer', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Open Applications', value: 'userforms.length', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
      ],
      providerApplicationHeaders: [
        { text: 'Application', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left' },
      ],
      allCompaniesHeaders: [
        { text: 'Customer', value: 'imgUrl', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false},
        { text: '', value: 'account_name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
      ],
      loading: false,
      showVideo: false,
      company: {},
      loadingInit: false,
      allCompanies: [],
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['user/user'].user.user;
    }
  },
  mounted() {
    this.getCompany();
    // this.getActiveUserforms();
    this.getAllCompanies();
  },
  methods: {
    async getCompany() {
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      console.log('company from business/index: ', data.company_type);
      this.company = data;
    },
    showVideoCard(){
      if(this.showVideo === false){
        this.showVideo = true
      } else {
        this.showVideo = false
      }
    },
    async getActiveUserforms() {
        this.loading = true;
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/userforms/byStatusId/1').catch(e => e);
        this.activeUserforms = data;
        console.log(this.activeUserforms, 'active userforms!!')
      this.loadingInit = true;
    },
    async getAllCompanies() {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/type/true')
        .then(response => {
          console.log(response.data, 'get ALL COMPANIES');
          response.data.forEach(company => {
            let companyObj = {
              id: company.id,
              account_name: company.account_name,
              imgUrl: company.imgUrl,
              locations: [],
            }
            this.allCompanies.push(companyObj);
          })
          for(let i = 0; i < this.allCompanies.length; i++) {
            this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + this.allCompanies[i].id)
              .then(response => {
                console.log(response.data.location, 'locations for company')
                response.data.location.forEach(location => {
                  if(location.userforms[0] === 'There are no userforms') {
                    location.userforms = [];
                  } else {
                    location.userforms = location.userforms.filter(userform => userform.applicationStatus === 1 || userform.applicationStatus === 2)
                  }
                })
                this.allCompanies[i].locations = response.data.location
              })
              .catch(err => {
                console.log(err, 'err locations for company')
              })
          }
          this.loadingInit = true;
        })
        .catch(err => {
          console.log('err', err)
        });
    },
    async createRequestingCompaniesArray(business) {
      console.log(business, 'BUSINESS')
      if(business.locations[0] !== 'There are no locations') {
        for(const location of business.locations) {
          console.log(location, 'LOCATION OF BUSINESS LOCATIONS')
          if (location && Array.isArray(location.userforms) && location.userforms.length > 0 && location.userforms[0] !== 'There are no userforms') {
            console.log(location, 'LOCATION OF BUSINESS LOCATIONS THAT MEETS CONDITION')
            for (const userform of location.userforms) {
              console.log(location.userforms, 'LOCATION THAT HAS USERFORM')
              for (const activeUserform of this.activeUserforms) {
                if (activeUserform.id === userform.id) {
                  this.requestingBusinesses.push(business);
                }
              }
            }
          }
        }
      }
      console.log(this.requestingBusinesses, 'REQUESTING BUSINESSES')
      let uniqueChars = [...new Set(this.requestingBusinesses)];
      console.log(uniqueChars);
      this.requestingBusinesses = uniqueChars;
      this.requestingBusinesses.forEach(business => {
        business.locations.forEach(location => {
          this.requestingLocations.push(location);
        })
      })

      console.log(this.requestingLocations);
      let uniqueLocations = [...new Set(this.requestingLocations)];
      console.log(uniqueLocations);
      this.requestingLocations = uniqueLocations;
      this.loading = false;

    },
    async getWholeCompanyObject(business_id) {
      await this.$http.get('https://www.sowerkbackend.com/api/companies/' +  business_id)
        .then(response => {
          console.log(response, 'COMPANY RESPONSE')
          this.allCompanies.push(response.data)
          // if(response.data.locations[0] !== 'There are no locations') {
          //   this.getLocations(response.data);
          // }
        })
        .catch(err => {
          console.log('err', err)
        });
    },
    // getAllUserforms(businesses) {
    //   console.log('hello');
    //   console.log(businesses);
    //   for(const business of this.businesses) {
    //     if(business && Array.isArray(business.locations) && business.locations.length > 0) {
    //       for(const location of business.locations) {
    //         if(location && Array.isArray(location.services) && location.services.length > 0) {
    //           for(const service of location.services) {
    //             if(service && Array.isArray(service.userforms) && service.userforms.length > 0) {
    //              this.services.push(service);
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
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
