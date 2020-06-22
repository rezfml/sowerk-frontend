<template>
  <v-app class="grey lighten-3">
    <v-container class="px-8">
      <LocationsCard></LocationsCard>
      <LocationsCard></LocationsCard>
      <LocationsCard></LocationsCard>
    </v-container>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/buyer/Sidebar";
  import LocationsCard from "~/components/dashboard/LocationsCard";

  export default {
    name: "home",
    layout: "app",
    components: {
      Sidebar,
      LocationsCard
    }
  };
</script>

<style scoped>

</style>


























