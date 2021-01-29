<template>
  <v-app class="grey lighten-3 ml-n4" overflow-y-auto>
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="width: 100%; height: 100%;">
        <v-col cols="12" md="4" xl="4">
          <ProfileCard  :locationApproval="locationApproval" :pendingApplication="pendingApplication" :editVendorRequirement="editVendorRequirement" :editLocationDetail="editLocationDetail" :customerConnections="customerConnections" :channelLeads="channelLeads" :locationApproved="locationApproved" :pendingApplicants="pendingApplicants" :editVendorRequirements="editVendorRequirements" :editLocationDetails="editLocationDetails" :approvedProviders="approvedProviders" :deleteLocation="deleteLocation" :location="location" :editLocation="editLocation" :locationImageUrl="locationImageUrl" :getLocationTags="getLocationTags"></ProfileCard>
        </v-col>

        <v-col cols="12" md="8" xl="8" class="pb-12 d-flex flex-column align-center mb-16">
          <transition name="slide-fade">
            <ProfileEditCard :adminLevels="adminLevels" :location="location" v-if="location && editLocation === true" v-on:selectFileUrl="selectLocationImageUrl" :editLocation="editLocation" v-on:cancel="cancelEditing" :locationTags="locationTags" :sowerkTags="sowerkTags"  :originalLocationTags="originalLocationTags"></ProfileEditCard>
          </transition>
            <!--          <v-row v-if="edit === false" class="my-4" style="max-height: 50px;">-->
            <!--            <v-card color="primary" class="d-flex" style="width: 100%;">-->
            <!--              <v-card-text class="ml-4" style="color: white; font-size: 24px;">Looking To Edit The Application Questions At This Property?</v-card-text>-->
            <!--              <v-btn @click="editFunction" color="white" class="mt-2 mr-4" outlined rounded >Edit Now</v-btn>-->
            <!--            </v-card>-->
            <!--          </v-row>-->
            <!--          <v-progress-circular-->
            <!--            indeterminate-->
            <!--            color="primary"-->
            <!--            :size="50"-->
            <!--          ></v-progress-circular>-->
          <v-skeleton-loader
            v-if="!customerConnectionsLoad && !channelLeadsLoad && !locationApproved && !pendingApplicants && !editVendorRequirements && !editLocationDetails"
            type="card-avatar, article, article, actions"
            min-height="50vh"
            min-width="50vw"
          ></v-skeleton-loader>
          <transition name="slide-fade">
            <FacilitiesCard
              v-if="vendors && !editLocationDetails && locationApproved && company.company_type==='true'"
              :title="'Channel Approved Vendors'"
              :items="vendors"
              :tableProperties="headers"
              :viewAll="false"
              action="ViewApproved"
              :company="company"
              :locationApproved="locationApproved"
              slug="/dashboard/vendors/approved/"
            ></FacilitiesCard>
          </transition>

          <transition name="slide-fade">
            <v-card class="mt-4" v-if="customerConnectionsLoad" style="width: 100%; background-color: white;">
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
          </transition>

          <transition name="slide-fade">
            <v-card class="mt-4" v-if="channelLeadsLoad" style="width: 100%; background-color: white;">
              <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-if="leads.length > 0">Channel Leads - {{leads.length}}</v-card-title>
              <v-card-title style="position: absolute; top: -30px; left: 25px; width: 40%; border-radius: 3px; font-size: 18px;" class="primary white--text font-weight-regular red-gradient" v-else>Channel Leads - 0</v-card-title>
              <v-card-actions class="d-flex justify-end px-4 py-0">
                <v-row class="py-0 mt-8">
                  <v-spacer></v-spacer>
                  <v-col cols="4" class="py-0">
                    <v-text-field v-model="searchVal" label="Search By Customer, Address, Name, Email, or Phone" light></v-text-field>
                  </v-col>
                </v-row>
              </v-card-actions>
              <v-data-table
                :items="leads"
                :items-per-page="10"
                :search="searchVal"
              ></v-data-table>
            </v-card>
          </transition>

          <transition name="slide-fade">
            <LocationActiveApplications v-if="pendingApplicants === true"></LocationActiveApplications>
          </transition>
<!--          <ApplicationAcceptCard v-if="editVendorRequirements === true"></ApplicationAcceptCard>-->
          <transition name="slide-fade">
            <CustomFormCard v-if="editVendorRequirements === true"></CustomFormCard>
          </transition>

          <transition name="slide-fade">
            <ProfileEditCard :location="location" v-if="editLocationDetails === true" v-on:selectFileUrl="selectLocationImageUrl" :editLocation="editLocation" v-on:cancel="cancelEditing" :locationTags="locationTags" :sowerkTags="sowerkTags" :originalLocationTags="originalLocationTags" :getLocationTags="getLocationTags"></ProfileEditCard>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'
  import ProfileCard from "~/components/dashboard/ProfileCard";
  import ProfileEditCard from "~/components/dashboard/ProfileEditCard";
  import CustomFormCard from "~/components/dashboard/CustomFormCard";
  import FacilitiesCard from '~/components/dashboard/FacilitiesCard';
  import ApplicationAcceptCard from '~/components/dashboard/ApplicationAcceptCard'
  import ActiveApplicationsCard from '~/components/dashboard/ActiveApplicationsCard'
  import LocationActiveApplications from '@/components/dashboard/LocationActiveApplications'
  import * as moment from 'moment'

  export default {
    name: 'facility',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard,
      ProfileCard,
      ProfileEditCard,
      CustomFormCard,
      FacilitiesCard,
      ApplicationAcceptCard,
      ActiveApplicationsCard,
      LocationActiveApplications,
    },
    data() {
      return {
        search: '',
        searchVal: '',
        leads: [],
        adminLevels: [
          1,
          0
        ],
        headers: [
          // { text: 'Category', value: 'service', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
          { text: 'Company', value: 'companyAccountName', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Primary Contact', value: 'fullname', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false },
          { text: 'Channel', value: 'name', class: 'primary--text font-weight-bold text-h6 text-left text-justify-start', sortable: false},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-left text-justify-start' },
        ],
        locations: [
          {
            id: 1,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 2,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 3,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 4,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 5,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 6,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 7,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 8,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 9,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 10,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 11,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 12,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 13,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 14,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 15,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 16,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 17,
            companyName: 'Bass Pro Shops (Springfield, MO)',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          }
        ],
        locationId: null,
        location: {},
        company: {},
        companies: [],
        connections: [],
        connectionsLen: Number,
        vendors: [],
        vendorsLength: Number,
        loading: false,
        hidden: false,
        edit: false,
        approvedProviders: 0,
        editLocation: false,
        locationCondition: false,
        locationApproved: false,
        pendingApplicants: false,
        editVendorRequirements: false,
        editLocationDetails: false,
        customerConnectionsLoad: false,
        channelLeadsLoad: false,
        locationImageUrl: null,
        locationTags: [],
        sowerkTags: [],
        originalLocationTags: [],
        providerHeaders: [
          { text: '', value: 'imageUrl', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false},
          { text: 'Customer', value: 'name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Primary Contact', value: 'contact_first_name', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-bold text-h6 text-center', sortable: false },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-bold text-h6 text-center' },
        ],
        businesses: [],
      }
    },
    mounted() {
      this.locationId = this.$route.params.id;

      this.getCompany(this.currentUser.companies_id);
      this.getSowerkTags();
      this.getLocationTags(this.locationId)
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(async (response) => {
            console.log('company', response.data)
            this.company = response.data;


            // If Property Manager
            if(this.company.company_type === 'true') {
              if(this.locationCondition === true) {
                console.log('hey1')
                await this.getConnectionTable(this.company.id)
              } else {
                console.log('hey2')
                await this.getLocation();
              }
            //  Else if Service Provider
            } else if(this.company.company_type === 'false') {
              if(this.locationCondition === true) {
                console.log('hey3')
                await this.getConnectionTable(this.company.id)
              } else {
                console.log('hey4')
                await this.getLocation();
              }
            }
          })
          .catch(err => {
            console.log('error in getting company', err)
          })
      },
      cancelEditing() {
        console.log('CANCELLED');
        this.editLocationDetails = false;
        this.locationApproved = true;
        this.locationImageUrl = null;
      },
      async getConnectionTable(id) {
        console.log('user current', this.currentUser, 'current company', this.company);
        if(this.company.company_type === "true") {
          console.log('true');
          await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmId/' + id)
            .then(response => {
              console.log(response.data, 'yoooo');
              if(response.data.length === 0) {
                // this.loading = true;
              }
              let newObj = {
                companyName: '',
                fullname: '',
                email: '',
                phone: '',
                name: '',
              }
                for(let i = 0; i<response.data.length; i++) {
                  this.connections.push(response.data[i]);
                  console.log('response.data', response.data)
                  this.getLocations(response.data[i].serviceprovider_id);
                  console.log(this.connections, 'connections');
                }
            })
            .catch(err => {
              console.log(err, 'err');
            })
        } else {
          console.log('false');
          await this.$http.get('https://www.sowerkbackend.com/api/approvedproviderconnection/bySpId/' + id)
            .then(response => {
              console.log(response.data, 'yoooo');
              for(let i = 0; i<response.data.length; i++) {
                this.connections.push(response.data[i]);
                this.getBusinesses(response.data[i].propertymanager_id);
                console.log(this.connections, 'connections');
              }
            })
            .catch(err => {
              console.log(err, 'err');
            })
        }
      },
      async getLocations(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/byCompaniesId/' + id)
          .then(response => {
            for(let i=0; i< response.data.location.length; i++) {
              response.data.location[i].services = response.data.location[i].services.join(', ')
              this.$http.get('https://www.sowerkbackend.com/api/companies/' + response.data.location[i].companies_id)
                .then(res => {
                  response.data.location[i].name = `${res.data.account_name}`;
                  response.data.location[i].imageUrl = res.data.imgUrl;
                })
                .catch(err => {
                  console.log('err in getting company for location', err);
                })
              response.data.location[i].fullname = `${response.data.location[i].contact_first_name} ${response.data.location[i].contact_last_name}`;
              setTimeout(function() {

              }, 300)
              this.vendors.push(response.data.location[i]);
              //this.getUsers(response.data.location[i].companies_id, i);
              console.log(i, 'i value', response.data.location.length);
              console.log(this.vendors, 'vendors 2x');
            }
          })
          .catch(e => console.log(e, 'error'));
        // this.loading = true;
        this.locationApproved = true;
        console.log('loading', this.loading, 'locationApproved', this.locationApproved)
      },
      async getBusinesses(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/companies/' + id)
          .then(response => {
            this.vendors.push(response.data);
            console.log(this.vendors, 'vendors');
          })
          .then(res => {
            console.log(this.vendors, 'yay');
            for(let i=0; i< this.vendors.length; i++) {
              console.log(this.vendors[i], 'vendors i')
              this.getUsers(this.vendors[i].id, i);
              this.vendors[i].servicesOffered = String(this.vendors[i].servicesOffered).replace(/"/g,"").replace(",", ', ').replace("{", '').replace("}", '');
              console.log(this.vendors, 'vendors 2x');
            }
          })
          .catch(e => console.log(e, 'error'));
      },
      async getUsers(id, index) {
        console.log('id', id)
        this.$http.get('https://www.sowerkbackend.com/api/auth/users/company/' + id)
          .then(response => {
            console.log(response.data, 'user response.data');
            console.log(this.vendors[index], 'index vendor', this.vendors, 'vendors');
            this.vendors[index].name = `${response.data.user.first_name} ${response.data.user.last_name}`;
            if(index === (this.vendors.length - 1)) {
              // this.loading = true;
              console.log("YAY", this.loading)
            }
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getLocation() {
        console.log('hello world wtf are you doing');
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/locations/' + this.locationId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        data.created = moment(data.created).format('l').slice(6,10);
        this.location = data;
        this.locationImageUrl = data.imageUrl
        console.log(this.location, 'getLocation this.location!!!!!!!!!');
        await this.getApprovedLocationConnections(this.location.id)
      },
      async getApprovedLocationConnections(id) {
            if(this.company.company_type === "true") {
              console.log('true');
              await this.$http.get('https://www.sowerkbackend.com/api/applications/byPmLocationId/' + id)
                .then(async (response) => {
                  console.log(response.data, 'yoooo approved!!!');
                  if(response.data.length === 0) {
                    this.locationApproved = true;
                  }
                  let newObj = {
                    id: Number,
                    companyAccountName: '',
                    fullname: '',
                    email: '',
                    phone: '',
                    name: '',
                  }
                  for(let i = 0; i<response.data.length; i++) {
                    if(response.data[i].approval_status === 1) {
                      this.approvedProviders++
                      console.log('i', i, 'approvedproviders!!!!!', this.approvedProviders)
                      this.connections.push(response.data[i]);
                      console.log(response.data[i], 'approved')
                      console.log('response.data', response.data)
                      //await this.getLocations(response.data[i].spcompanies_id);
                      console.log(this.connections, 'connections');
                      this.$http.get('https://www.sowerkbackend.com/api/companies/' + response.data[i].spcompanies_id)
                        .then(companyVal => {
                          console.log(companyVal.data)
                          newObj.companyAccountName = companyVal.data.account_name;
                        })
                        .catch(err => {
                          console.log(err)
                        })
                      this.$http.get('https://www.sowerkbackend.com/api/locations/' + response.data[i].splocations_id)
                        .then(responseVal => {
                          console.log(responseVal.data, 'HEY!')
                          newObj.fullname = responseVal.data.contact_first_name + ' ' + responseVal.data.contact_last_name;
                          newObj.email = responseVal.data.email;
                          newObj.phone = responseVal.data.phone;
                          newObj.name = responseVal.data.name;
                          newObj.id = responseVal.data.id;
                        })
                        .catch(err => {
                          console.log(err)
                        })
                      this.vendors.push(newObj)
                    }
                  }
                  setTimeout(() => {
                    this.locationApproved = true;
                  }, 500)
                })
                .catch(err => {
                  console.log(err, 'err');
                })
            } else {
              console.log('false');
              await this.$http.get('https://www.sowerkbackend.com/api/applications/bySpLocationId/' + id)
                .then(response => {
                  console.log(response.data, 'yoooo');
                  for(let i = 0; i<response.data.length; i++) {
                    if(response.data[i].approval_status === 1) {
                      console.log(response.data[i], 'approved')
                      this.approvedProviders++
                      this.connections.push(response.data[i]);
                      console.log('response.data', response.data)
                      this.getLocations(response.data[i].spcompanies_id);
                      console.log(this.connections, 'connections');
                      this.getBusinessLocation(response.data[i].pmlocations_id);
                    }
                  }
                  this.customerConnectionsLoad = true;
                })
                .catch(err => {
                  console.log(err, 'err');
                  this.customerConnectionsLoad = true;
                })
            }
      },
      async getBusinessLocation(id) {
        await this.$http.get('https://www.sowerkbackend.com/api/locations/' + id)
          .then(response => {
            console.log('approved connection location!!', response.data)
            this.businesses.push(response.data)
          })
          .catch(err => {
            console.log(err, 'err in getting connection')
          })
      },
      selectLocationImageUrl(url) {
        console.log('hello world');
        this.locationImageUrl = url;
        console.log(this.locationImageUrl);
      },
      deleteLocation(locationParam) {
        console.log(locationParam, 'params');
        let confirmDelete = confirm('Are you sure you want to delete this location? Cannot be undone.');
        if (confirmDelete === true) {
          this.$http.delete('https://www.sowerkbackend.com/api/vendortypes/byLocationId/' + locationParam.id)
            .then(response => {
              console.log(response, "response from delete vendor type by location")
            })
            .catch(err => {
              console.log(err, "error message from delete vendor type by location")
            })

          this.$http.delete('https://www.sowerkbackend.com/api/locations/' + locationParam.id)
            .then(response => {
              alert('Location successfully deleted');
              this.$router.push({path:"/dashboard/channels"})
            })
            .catch(err => {
              console.log(err, 'err');
              alert('Error - could not delete location. Do you have any active bid applications with this location?');
            })
        }
      },
      async editFunction() {
        this.edit = true;
      },
      async customerConnections() {
        this.locationApproved = false;
        this.pendingApplicants = false;
        this.editVendorRequirements = false;
        this.editLocationDetails = false;
        this.customerConnectionsLoad = true;
        this.channelLeadsLoad = false;
        this.$vuetify.goTo(0);
      },
      async channelLeads() {
        this.locationApproved = false;
        this.pendingApplicants = false;
        this.editVendorRequirements = false;
        this.editLocationDetails = false;
        this.customerConnectionsLoad = false;
        this.channelLeadsLoad = true;
        this.$vuetify.goTo(0);
      },
      async locationApproval() {
        this.locationApproved = true;
        this.pendingApplicants = false;
        this.editVendorRequirements = false;
        this.editLocationDetails = false;
        this.customerConnectionsLoad = false;
        this.channelLeadsLoad = false;
        this.$vuetify.goTo(0);
        console.log(this.location, 'location this', 'this.locationApproved', this.locationApproved, 'this.pendingApplicants', this.pendingApplicants, this.editVendorRequirements, this.editLocationDetails);
      },
      async pendingApplication() {
        this.locationApproved = false;
        this.pendingApplicants = true;
        this.editVendorRequirements = false;
        this.editLocationDetails = false;
        this.customerConnectionsLoad = false;
        this.channelLeadsLoad = false;
        this.$vuetify.goTo(0);
        console.log(this.location, 'location this', 'this.locationApproved', this.locationApproved, 'this.pendingApplicants', this.pendingApplicants, this.editVendorRequirements, this.editLocationDetails);
      },
      async editVendorRequirement() {
        this.locationApproved = false;
        this.pendingApplicants = false;
        this.editVendorRequirements = true;
        this.editLocationDetails = false;
        this.customerConnectionsLoad = false;
        this.channelLeadsLoad = false;
        this.$vuetify.goTo(0);
        console.log(this.location, 'location this', 'this.locationApproved', this.locationApproved, 'this.pendingApplicants', this.pendingApplicants, this.editVendorRequirements, this.editLocationDetails);
      },
      async editLocationDetail() {
        this.locationApproved = false;
        this.pendingApplicants = false;
        this.editVendorRequirements = false;
        this.editLocationDetails = true;
        this.customerConnectionsLoad = false;
        this.channelLeadsLoad = false;
        this.$vuetify.goTo(0);
        console.log(this.location, 'location this', 'this.locationApproved', this.locationApproved, 'this.pendingApplicants', this.pendingApplicants, this.editVendorRequirements, this.editLocationDetails);
      },
      async getSowerkTags() {
        await this.$http.get('https://www.sowerkbackend.com/api/sowerktags')
          .then(response => {
            console.log(response.data, 'response.data for sowerktags');
            this.sowerkTags = response.data;
            console.log(this.sowerkTags, 'sowerktags')
          })
      },
      async getLocationTags(id) {
        this.locationTags = [];
        this.originalLocationTags = [];
        await this.$http.get('https://www.sowerkbackend.com/api/locationtags/byLocationId/' + id)
          .then(response => {
            console.log(response.data, 'response.data for sowerktags');
            this.locationTags = response.data;
            this.originalLocationTags = response.data;
            console.log(this.locationTags, 'locationtags')
          })
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
