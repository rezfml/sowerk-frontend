<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0 fill-height" style="max-width: 95%;">
      <v-row style="height: 100%;">
        <v-col cols="4" class="py-12">
          <ProfileCard :deleteLocation="deleteLocation" :location="location" v-if="location"></ProfileCard>
        </v-col>
        <v-col cols="8" class="pb-12 d-flex flex-column align-center">
          <ProfileEditCard :adminLevels="adminLevels" :location="location" v-if="location && edit === false"></ProfileEditCard>
          <ApplicationAcceptCard v-if="edit === true"></ApplicationAcceptCard>
          <CustomFormCard v-if="edit === true"></CustomFormCard>
          <v-row v-if="edit === false" class="my-4" style="max-height: 50px;">
            <v-card color="primary" class="d-flex" style="width: 100%;">
              <v-card-text class="ml-4" style="color: white; font-size: 24px;">Looking To Edit The Application Questions At This Property?</v-card-text>
              <v-btn @click="editFunction" color="white" class="mt-2 mr-4" outlined rounded >Edit Now</v-btn>
            </v-card>
          </v-row>
          <v-progress-circular
            v-if="loading != true"
            indeterminate
            color="primary"
            :size="20"
          ></v-progress-circular>
          <FacilitiesCard
            v-if="loading != false && company.company_type==='true' && edit === false"
            :title="'My Approved Vendors'"
            :items="vendors"
            :tableProperties="headers"
            :viewAll="false"
            action="ViewApproved"
            :company="company"
          ></FacilitiesCard>
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
      ApplicationAcceptCard
    },
    data() {
      return {
        adminLevels: [
          1,
          0
        ],
        headers: [
          { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'fullname', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular'},
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Facility', value: 'addressCityState', class: 'primary--text font-weight-regular'},
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
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
        location: null,
        company: {},
        companies: [],
        connections: [],
        connectionsLen: Number,
        vendors: [],
        vendorsLength: Number,
        loading: false,
        hidden: false,
        edit: false,
      }
    },
    mounted() {
      this.locationId = this.$route.params.id;
      this.getCompany(this.currentUser.companies_id);
      this.getLocation();
    },
    computed: {
      currentUser() {
        return this.$store.getters['user/user'].user.user;
      },
    },
    methods: {
      async getCompany(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + id)
          .then(async (response) => {
            console.log('company', response.data)
            this.company = response.data;
            await this.getConnectionTable(this.company.id)
          })
          .catch(err => {
            console.log('error in getting company', err)
          })
      },
      async getConnectionTable(id) {
        console.log('user current', this.currentUser, 'current company', this.company);
        if(this.company.company_type === "true") {
          console.log('true');
          await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/approvedproviderconnection/byPmId/' + id)
            .then(response => {
              console.log(response.data, 'yoooo');
              if(response.data.length === 0) {
                this.loading = true;
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
          await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/approvedproviderconnection/bySpId/' + id)
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
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/byCompaniesId/' + id)
          .then(response => {
            for(let i=0; i< response.data.location.length; i++) {
              response.data.location[i].services = response.data.location[i].services.join(', ')
              this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + response.data.location[i].companies_id)
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
        this.loading = true;
        console.log('loading', this.loading)
      },
      async getBusinesses(id) {
        await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + id)
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
        this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/company/' + id)
          .then(response => {
            console.log(response.data, 'user response.data');
            console.log(this.vendors[index], 'index vendor', this.vendors, 'vendors');
            this.vendors[index].name = `${response.data.user.first_name} ${response.data.user.last_name}`;
            if(index === (this.vendors.length - 1)) {
              this.loading = true;
              console.log("YAY", this.loading)
            }
          })
          .catch(err => {
            console.log('err', err);
          })
      },
      async getLocation() {
        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/' + this.locationId).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.location = data;
      },
      deleteLocation(locationParam) {
        console.log(locationParam, 'params');
        let confirmDelete = confirm('Are you sure you want to delete this location? Cannot be undone.');
        if (confirmDelete === true) {
          this.$http.delete('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/locations/' + locationParam.id)
            .then(response => {
              alert('Location successfully deleted');
              this.$router.push({path:"/dashboard/facilities"})
            })
            .catch(err => {
              console.log(err, 'err');
              alert('Error - could not delete location. Do you have any active bid applications with this location?');
            })
        }
      },
      async editFunction() {
        this.edit = true;
      }
    }
  }
</script>

<style scoped>

</style>
