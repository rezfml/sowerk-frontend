<template>
  <v-app class="grey lighten-3">
    <v-container class="px-0" style="max-width: 95%;">
      <v-row>
        <v-col cols="8">
          <ProfileFormCard></ProfileFormCard>
          <LocationsCard></LocationsCard>
        </v-col>
        <v-col cols="4" class="pt-12">
          <ProfileCard></ProfileCard>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/buyer/Sidebar";
  import LocationsCard from "~/components/dashboard/LocationsCard";
  import ProfileCard from "~/components/dashboard/ProfileCard";
  import ProfileFormCard from "~/components/dashboard/ProfileFormCard";

  export default {
    name: "profile",
    layout: "app",
    components: {
      Sidebar,
      LocationsCard,
      ProfileCard,
      ProfileFormCard
    }
  };
</script>

<style scoped>

</style>


























