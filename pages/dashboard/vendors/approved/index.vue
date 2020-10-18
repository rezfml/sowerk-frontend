<template>
  <v-app class="grey lighten-3">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading != true">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
    <v-container class="px-0" style="max-width: 95%;">
      <v-row>
        <v-col cols="3">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        <v-col cols="9">
          <v-row class="d-flex flex-column justify-space-between align-center mt-6"style="background: linear-gradient(to right, #A61C00, #741502);">
            <p style="color: white; font-size: 24px;" class="pt-4">Looking for somebody new? Request Vendors to Apply!</p>
            <v-btn
              style=""
              class="px-16 mb-4"
              large
              outlined
              rounded
              color="white"
              href="/dashboard/vendors/"
            >View All</v-btn>
          </v-row>
          <v-row class="d-flex flex-column justify-space-between align-center mt-10"style="background: white;">
            <p style="font-size: 24px; text-align: center; width: 50%;" class="pt-4">Does your company already have an approved Service Provider that hasn’t joined SOWerk yet?</p>
            <v-btn
              style=""
              class="px-16 mb-4"
              large
              outlined
              rounded
              color="primary"
              href="/dashboard/vendors/invite"
            >Invite Them Now</v-btn>
          </v-row>
          <FacilitiesCard
            v-if="loading != false"
            :title="'My Approved Vendors'"
            :items="vendors"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/approved-vendors/"
            action="ViewApproved"
            :company="company"
          ></FacilitiesCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import FilterCard from '~/components/dashboard/FilterCard'
  import FacilitiesCard from '~/components/dashboard/FacilitiesCard'

  export default {
    name: 'approvedVendors',
    layout: 'app',
    components: {
      FilterCard,
      FacilitiesCard
    },
    data() {
      return {
        // items: [
        //   {
        //     id: 0,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'JHV HVAC',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 1,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Ben Franklin Plumbing',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 2,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Landscape United LLC.',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 3,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 4,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 5,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   },
        //   {
        //     id: 6,
        //     servicesProvided: [
        //       'HVAC',
        //       'Electrical'
        //     ],
        //     companyName: 'Lorem Ipsum',
        //     name: 'Lorem ipsum',
        //     phone: '1234567890',
        //     email: 'lorem@ipsum.com',
        //     address: 'Springfield, MO',
        //   }
        // ],
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
        providerProperties: [
          'Services Provided',
          'Company Name',
          'Name',
          'Phone',
          'Email',
          'Location'
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
        applications: null,
        company: {},
        companies: [],
        connections: [],
        connectionsLen: Number,
        vendors: [],
        vendorsLength: Number,
        loading: false
      }
    },
    async mounted() {
      console.log();
      await this.getCompany(this.currentUser.companies_id);
      let connectLen = this.connectLen;

    },
    computed: {
      currentUser() {
        console.log(this.$store.state.user.user.user);
        return this.$store.state.user.user.user;
      }
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
              while(response.data.length !== 0) {
                for(let i = 0; i<response.data.length; i++) {
                  this.connections.push(response.data[i]);
                  console.log('response.data', response.data)
                  this.getLocations(response.data[i].serviceprovider_id);
                  console.log(this.connections, 'connections');
                }
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
            console.log('locations', response.data.location);
            console.log(this.vendors, 'vendors');
            for(let i=0; i< response.data.location.length; i++) {
              console.log(this.vendors[i], 'vendors i')
              console.log('this.vendors.id', response.data.location[i].companies_id)
              response.data.location[i].services = response.data.location[i].services.join(', ')
              this.vendors.push(response.data.location[i]);
              //this.getUsers(response.data.location[i].companies_id, i);
              this.vendors[i].fullname = `${response.data.location[i].contact_first_name} ${response.data.location[i].contact_last_name}`;
              if(i === this.vendors.length - 1) {
                this.loading = true;
                console.log("YAY", this.loading)
                console.log('vendor', this.vendors);
              }
              console.log(this.vendors, 'vendors 2x');
            }
          })
          .catch(e => console.log(e, 'error'));
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
      // async getApprovedApplications() {
      //   let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/applications/type/1').catch(e => e);
      //   if (this.$error(status, data.message, data.errors)) return;
      //   await this.getApprovedUsers(data);
      // },
      // async getApprovedUsers(applications) {
      //   for (const application of applications) {
      //     let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/' + application.userprofiles_id).catch(e => e);
      //     await this.getApprovedCompanies(data);
      //   }
      // },
      // async getApprovedCompanies(user) {
      //   let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + user.companies_id).catch(e => e);
      //   this.companies.push(data);
      //   console.log(this.companies, 'approvedVendors');
      // }
    }
  }
</script>

<style scoped>

</style>
