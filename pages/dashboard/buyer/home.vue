<template>
  <v-app class="grey lighten-3">
    <v-container class="px-8">
      <HomeCard
        :items="items"
        title="Locations"
      ></HomeCard>
      <HomeCard
        :items="items"
        title="Quick Provider Lookup"
      ></HomeCard>
      <HomeCard
        :items="items"
        title="Pending Approved Provider Requests"
      ></HomeCard>
    </v-container>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/buyer/Sidebar";
  import LocationsCard from "~/components/dashboard/LocationsCard";
  import QuickProviderCard from '~/components/dashboard/QuickProviderCard'
  import HomeCard from '~/components/dashboard/HomeCard'

  export default {
    name: "home",
    layout: "app",
    components: {
      Sidebar,
      LocationsCard,
      QuickProviderCard,
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
          }
        ]
      }
    }
  };
</script>

<style scoped>

</style>


























