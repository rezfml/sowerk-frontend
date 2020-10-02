<template>
  <v-app class="grey lighten-3">
    <v-container>
      <v-card>
        <v-container class="px-12">
          <v-row>
            <v-col cols="12">
              <v-img src="/sowerk-requests-logo.png" max-height="200" max-width="400" class="mx-auto"></v-img>
              <p class="primary--text text-center font-weight-bold text-h5">Invite a Service Provider to join SOWerk And Connect For Free</p>
              <p class="text-center text-h6">Enter the Service Providers information below, add another line and invite multiple at once.</p>
              <p class="text-body-1 text-center">(Note* by selecting NO under Pre-Approved, the vendor will still be invited to join SOWerk with a free connection, but will still have to submit an application to your business.)</p>
            </v-col>
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="vendors"
                class="text-caption table--bordered"
                disable-pagination
                hide-default-footer
              >
                <template v-slot:item.service="{ item }">
                  <v-text-field class="text-caption" v-model="item.service"></v-text-field>
                </template>
                <template v-slot:item.companyName="{ item }">
                  <v-text-field class="text-caption" v-model="item.companyName"></v-text-field>
                </template>
                <template v-slot:item.firstName="{ item }">
                  <v-text-field class="text-caption" v-model="item.firstName"></v-text-field>
                </template>
                <template v-slot:item.lastName="{ item }">
                  <v-text-field class="text-caption" v-model="item.lastName"></v-text-field>
                </template>
                <template v-slot:item.email="{ item }">
                  <v-text-field class="text-caption" v-model="item.email"></v-text-field>
                </template>
                <template v-slot:item.phone="{ item }">
                  <v-text-field class="text-caption" v-model="item.phone"></v-text-field>
                </template>
                <template v-slot:item.preapproved="{ item }">
                  <v-select
                    :items="preapprovedOptions"
                    v-model="item.preapproved"
                    item-text="text"
                    item-value="value"
                    class="text-caption"
                  >
                  </v-select>
                </template>
                <template v-slot:item.property="{ item }">
                  <v-select
                    :items="properties"
                    item-text="text"
                    item-value="value"
                    v-model="item.property"
                    class="text-caption"
                  >
                  </v-select>
                </template>
              </v-data-table>
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn color="primary" text @click="addInvitee">+ Add Another Line</v-btn>
            </v-col>
            <v-col class="d-flex justify-space-between my-12">
              <v-btn outlined color="primary" rounded class="px-6" to="/dashboard/vendors" exact>Cancel and Go Back To Dashboard</v-btn>
              <v-btn color="primary" rounded class="px-12">Invite Service Providers</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'

  export default {
    name: 'invite',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard
    },
    data() {
      return {
        loading: false,
        preapprovedOptions: [
          {
            text: 'Yes',
            value: true,
          },
          {
            text: 'No',
            value: false,
          }
        ],
        vendors: [
          {
            id: '1',
            service: 'HVAC',
            companyName: "John's HVAC",
            firstName: 'John',
            lastName: 'Smith',
            email: 'test@test.com',
            phone: '(347) 522-7496',
            preapproved: true,
            property: null,
          },
          {
            id: '2',
            service: 'Plumbing',
            companyName: "Rez's Plumbing",
            firstName: 'Rez',
            lastName: 'Smith',
            email: 'test@test.com',
            phone: '(347) 522-7496',
            preapproved: true,
            property: null,
          },
          {
            id: '3',
            service: 'Welding',
            companyName: "Adam's Welding",
            firstName: 'Adam',
            lastName: 'Smith',
            email: 'test@test.com',
            phone: '(347) 522-7496',
            preapproved: true,
            property: null,
          },
        ],
        properties: [
          {
            text: 'Springfield, MO',
            value: 'Springfield, MO',
          },
          {
            text: 'St. Louis, MO',
            value: 'St. Louis, MO',
          },
          {
            text: 'Ozark, MO',
            value: 'Ozark, MO',
          }
        ],
        services: [],
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
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Service', value: 'service', class: 'primary--text font-weight-regular' },
          { text: 'Company', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'First Name', value: 'firstName', class: 'primary--text font-weight-regular' },
          { text: 'Last Name', value: 'lastName', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Pre-Approved', value: 'preapproved', class: 'primary--text font-weight-regular' },
          { text: 'Property', value: 'property', class: 'primary--text font-weight-regular' },
        ],
        businesses: null
      }
    },
    watch: {
      loading: function() {
        if(this.loading){
          console.log(document);
          document.documentElement.style.overflow = 'hidden'
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    async mounted() {
      await this.getBusinesses();
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getBusinesses() {
        this.loading = true;
        this.locations = [];
        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/type/1').catch(e => e);
        // this.businesses = data.users.filter(function(user) {
        //   return user.user_type == 1;
        // })
        // console.log(this.businesses);
        await this.getLocations(data);
      },
      async getLocations(companies) {
        for (const company of companies) {
          let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + company.id).catch(e => e);
          if (this.$error(status, data.message, data.errors)) return;
          if(data.locations[0] !== 'There are no locations') {
            for (const location of data.locations) {
              this.$nextTick(function() {
                this.locations.push(location);
              })
            }
          } else {
          }
        }
        await this.getServices();
      },
      async getServices() {
        for (const location of this.locations) {
          let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/services/bylocationid/' + location.id).catch(e => e);
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
            }
          }
        }
        this.loading = false;
      },
      addInvitee() {
        let newVendor = {
            id: '',
            service: '',
            companyName: "",
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            preapproved: true,
            property: '',
        };

        this.vendors.push(newVendor);

      }
    },
  }
</script>

<style scoped>
  .table--bordered, .table--bordered >>> tr {
    border: 1px solid lightgrey!important;
    border-collapse: collapse;
  }

  .table--bordered >>> th:not(:first-child) {
    min-width: 150px;
  }
</style>
