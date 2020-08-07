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
            :title="'Your Facilities - ' + locations.length"
            :items="locations"
            :tableProperties="headers"
            :viewAll="false"
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
    name: 'facilities',
    layout: 'app',
    components: {
      HomeCard,
      FilterCard
    },
    data() {
      return {
        locations: [
          {
            id: 1,
            companyName: 'JHV HVAC',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 2,
            companyName: 'Ben Franklin Plumbing',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 3,
            companyName: 'Landscape United LLC.',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 4,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 5,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 6,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 7,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 8,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 9,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 10,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 11,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 12,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 13,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 14,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 15,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 16,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
          },
          {
            id: 17,
            companyName: 'Lorem Ipsum',
            name: 'Lorem ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com',
            city: 'Springfield',
            state: 'MO',
            address: 'Springfield, MO'
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
