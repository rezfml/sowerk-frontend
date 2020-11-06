<template>
  <v-app class="grey lighten-3" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;">
        <v-col cols="3">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="15vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card class="mt-16 d-flex flex-column align-center" v-if="loading">
            <v-row>
              <v-col cols="12" align="center">
                <v-avatar size="100" class="text-center mx-auto mt-n16 rounded-circle elevation-5" color="white">
                  <v-img :src="location.imageUrl" v-if="location.imageUrl && location.imageUrl !== '{}'"></v-img>
                  <v-icon v-else size="60">person</v-icon>
                </v-avatar>
              </v-col>
            </v-row>
            <v-card-title style="color:#A61C00;">{{location.name}}</v-card-title>
            <v-card-text style="text-align: center">Approved at <span style="color:#A61C00;">{{connections.length}}</span> Properties</v-card-text>
            <v-card-text style="color:#A61C00; text-align: center">Radius Provider ({{location.radius}}mi)</v-card-text>
            <!--            <v-btn outlined color="primary" rounded md class="px-16">Share</v-btn>-->
            <v-divider class="mx-auto mt-10" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">About</v-card-title>
            <v-card-text>Address: {{location.address}} {{location.city}}, {{location.state}} {{location.zipcode}}</v-card-text>
            <v-card-text>Founded: {{location.year_founded}}</v-card-text>
            <v-card-text v-if="location.created">Joined SOWerk: {{location.created.slice(0,4)}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Main Contact</v-card-title>
            <v-card-text>{{location.contact_first_name}} {{location.contact_last_name}}</v-card-text>
            <v-card-text>{{location.email}}</v-card-text>
            <v-card-text>{{location.phone}}</v-card-text>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Insurances</v-card-title>
             <template v-for="(insurance, index) in insurances">
              <v-card-text>{{insurance.name}} - {{insurance.insuranceCompany}}</v-card-text>
              <v-card-text v-if="insurance.expirationDateVal">Valid through {{insurance.expirationDateVal.slice(0,4)}}</v-card-text>
             </template>
            <v-btn color="primary" outlined rounded style="width: 50%">View Insurances</v-btn>
            <v-divider class="mx-auto mt-4" style="width: 90%;"></v-divider>
            <v-card-title style="color:#A61C00;">Licenses</v-card-title>
            <template v-for="(license, index) in licenses">
              <v-card-text>{{license.name}} - {{license.licenseLocation}}</v-card-text>
              <v-card-text v-if="license.expirationDate">Valid through {{license.expirationDate.slice(0,4)}}</v-card-text>
            </template>
            <v-btn class="mb-4" color="primary" outlined rounded style="width: 50%">View Licenses</v-btn>
          </v-card>
          </transition>
        </v-col>
        <v-col cols="5">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="20vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <v-card v-if="loading" class="d-flex flex-column align-center" style="width: 100%;">
            <v-card-title color="primary" style="color: #A61C00; font-size: 24px;">Recently Approved Properties</v-card-title>
            <v-card-subtitle>Past 30 days</v-card-subtitle>
            <v-card-title class="my-6" color="primary" style="color: #A61C00; font-size: 105px;">{{connectionsPast30Days.length}}</v-card-title>
            <template style="text-align: center width: 100%;">
              <v-card-text class="d-flex flex-wrap justify-center" style="width: 100%;">You will request this Vendor for
                <v-select
                  class="mt-0 mx-4"
                  dense
                  label="Step 1 - Choose Your Location"
                  :items="company.locations"
                  item-text="name address city state zipcode"
                  item-value="name address city state zipcode"
                  style="width: 40%;"
                >
                  <template slot="selection" slot-scope="data">
                    <p @click="getUserFormsForLocation(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
                  </template>
                  <template slot="item" slot-scope="data">
                    <p @click="getUserFormsForLocation(data.item)">{{ data.item.name }} - {{ data.item.address }} {{data.item.city}}, {{data.item.state}} {{data.item.zipcode}}</p>
                  </template>
                </v-select>
                to fill out your
                <v-select
                  class="mt-n4 mx-3"
                  label="Step 2 - Choose Your Application"
                  :items="userforms"
                  item-text="id name"
                  item-value="id name"
                  style="width: 30%;"
                >
                  <template slot="selection" slot-scope="data">
                    <p ># {{data.item.id}} - {{ data.item.name }}</p>
                  </template>
                  <template slot="item" slot-scope="data">
                    <p ># {{data.item.id}} - {{ data.item.name }}</p>
                  </template>
                </v-select>
                specialized application.</v-card-text>
            </template>
            <v-btn outlined color="primary" rounded width="90%" class="mb-4">Request Application</v-btn>
          </v-card>
          </transition>
          <!--          <v-card class="d-flex flex-column align-center mt-10">-->
          <!--            <v-card-title style="color: #A61C00; font-size: 24px;">Businesses Portfolio</v-card-title>-->
          <!--            <v-card-subtitle>Other businesses who have accepted this Service Provider</v-card-subtitle>-->
          <!--            <VendorSlider :companies="companies" :connections="connections"></VendorSlider>-->
          <!--          </v-card>-->
        </v-col>
        <v-col cols="4">
          <v-skeleton-loader
            v-if="!loading"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="20vw"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import VendorSlider from '~/components/dashboard/VendorSlider'
  import * as moment from 'moment'
  export default {
    name: 'vendor',
    layout: 'app',
    components: {
      VendorSlider
    },
    data() {
      return {
        location: {

        },
        company: {},
        userforms: [],
        insurances: [],
        licenses: [],
        connections: [],
        connectionsPast30Days: [],
        companies: [],
        loading: false,
      }
    },
    async mounted() {
      console.log(this.$route.params.id, 'hey')
      await this.getLocation();
      await this.getInsurances();
      await this.getLicenses();
      await this.getConnections(this.location);
      await this.getUserCompany(this.$store.state.user.user.user.companies_id);
    },
    methods: {
      async getConnections(location) {
        await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpId/' + location.companies_id)
          .then(response => {
            console.log(response.data, 'connections');
            if(response.data.length !== 0) {
              for(let i=0; i<response.data.length; i++) {
                if(location.id === response.data[i].splocations_id && response.data[i].approval_status === 1) {
                  this.connections.push(response.data[i]);
                  if(moment(response.data[i].created).format('L') > moment().subtract(30, 'days').calendar()) {
                    this.connectionsPast30Days.push(response.data[i]);
                  }
                }
              }
            }
          })
          .catch(err => {
            console.log(err, 'err in connections');
          })
        console.log(this.connections, 'this.connections')
        await this.getCompanies();
      },
      async getLocation() {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.$route.params.id)
          .then(response => {
            console.log(response.data, 'response.data location');
            this.location = response.data;
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getInsurances() {
        await this.$http.get('https://www.sowerkbackend.com/api/insurance/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data insurances');
            for(let i = 0; i<response.data.length; i++) {
              this.insurances.push(response.data[0]);
            }
            console.log(this.insurances, 'this.insurances')
          })
          .catch(err => {
            console.log('err', err);
          })
      },async getLicenses() {
        await this.$http.get('https://www.sowerkbackend.com/api/license/byCompanyId/' + this.location.companies_id)
          .then(response => {
            console.log(response.data, 'response.data licenses');
            for(let i = 0; i<response.data.length; i++) {
              this.licenses.push(response.data[0]);
            }
            console.log(this.licenses, 'this.licenses')
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getCompanies() {
        for(let i=0; i<this.connections.length; i++) {
          await this.getCompany(this.connections[i].pmcompanies_id);
        }
      },
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'companies')
            this.companies.push(response.data);
            console.log('this.companies val', this.companies)
          })
          .catch(err => {
            console.log(err, 'err');
          })
      },
      async getUserCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            console.log(response.data, 'company')
            this.company = response.data;
            this.loading=true;
          })
          .catch(err => {
            console.log(err, 'err');
          })
        console.log(this.userforms, 'userforms for company')
      },
      async getUserFormsForLocation(item) {
        console.log(item)
        this.userforms = [];
        if(item.services[0] !== 'There are no services') {
          for(let i=0; i<item.services.length; i++) {
            if(item.services[i].userforms[0] !== 'There are no userforms') {
              for(let j=0; j<item.services[i].userforms.length; j++) {
                if(item.services[i].userforms[j].applicationStatus !== 0) {
                  this.userforms.push(item.services[i].userforms[j])
                }
              }
            }
          }
        }
        console.log(this.userforms, 'userforms');
      }
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

