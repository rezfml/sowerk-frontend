<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0" style="max-width: 95%;">
      <v-row>
        <v-col cols="4">
          <HomeCard
            title="Filter"
            :items="items"
          ></HomeCard>
        </v-col>
        <v-col cols="8">
          <HomeCard
            title="Approved Providers"
            :items="items"
          ></HomeCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import HomeCard from '~/components/dashboard/HomeCard'

  export default {
    name: 'approvedProviders',
    layout: 'app',
    components: {
      HomeCard
    },
    data() {
      return {
        items: [
          {
            id: 1,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 2,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 3,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 4,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 5,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },{
            id: 6,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          },
          {
            id: 7,
            locationName: 'Lorem Ipsum',
            address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            firstName: 'Lorem',
            lastName: 'Ipsum',
            phone: '1234567890',
            email: 'lorem@ipsum.com'
          }
        ],
        filterItems: [

        ]
      }
    }
  }
</script>

<style scoped>

</style>
