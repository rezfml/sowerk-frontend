<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0" style="max-width: 95%;">
      <v-row>
        <v-col cols="3">
          <FilterCard
            title="Filter"
            :filters="filters"
          ></FilterCard>
        </v-col>
        <v-col cols="9">
          <HomeCard
            title="Approved Vendors"
            :items="items"
            :tableProperties="headers"
            :viewAll="false"
            slug="/dashboard/approved-vendors/"
          ></HomeCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'
  import FilterCard from '~/components/dashboard/FilterCard'

  export default {
    name: 'approvedVendors',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard
    },
    data() {
      return {
        items: [
          {
            id: 0,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'JHV HVAC',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          },
          {
            id: 1,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'Ben Franklin Plumbing',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          },
          {
            id: 2,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'Landscape United LLC.',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          },
          {
            id: 3,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          },
          {
            id: 4,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          },
          {
            id: 5,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          },
          {
            id: 6,
            servicesProvided: [
              'HVAC',
              'Electrical'
            ],
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            address: 'Springfield, MO',
          }
        ],
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
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id',
            class: 'primary--text font-weight-regular'
          },
          { text: 'Facility', value: 'companyName', class: 'primary--text font-weight-regular' },
          { text: 'Address', value: 'address', class: 'primary--text font-weight-regular' },
          { text: 'Primary Contact', value: 'name', class: 'primary--text font-weight-regular' },
          { text: 'Email', value: 'email', class: 'primary--text font-weight-regular' },
          { text: 'Phone', value: 'phone', class: 'primary--text font-weight-regular' },
          { text: 'Actions', value: 'actions', sortable: false, class: 'primary--text font-weight-regular' },
        ]

      }
    }
  }
</script>

<style scoped>

</style>
