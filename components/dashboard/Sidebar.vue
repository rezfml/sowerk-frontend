<template>
  <v-navigation-drawer app class="px-2" color="grey darken-4">
    <v-list height="100%" style="position: relative">
      <v-list-item>
        <v-list-item-content class="py-0">
          <v-list-item-title class="title text-center">
            <v-img src="/SoWerk-Logo.png" style="height: 50px; width: 100%; object-fit: cover; object-position: center;"></v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-avatar class="mx-auto" size="100px" >
          <v-img src="https://randomuser.me/api/portraits/women/81.jpg" aspect-ratio="1"/>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-center">Jane Smith</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4"></v-divider>

      <v-list-item
        to="/dashboard/buyer/home"
        color="primary"
      >
        <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/dashboard/buyer/approvedProviders"
        color="primary"
      >
        <v-list-item-icon><v-icon>mdi-account-check</v-icon></v-list-item-icon>
        <v-list-item-title>Approved Providers</v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/dashboard/buyer/profile"
        color="primary"
      >
        <v-list-item-icon><v-icon>domain</v-icon></v-list-item-icon>
        <v-list-item-title>Company Profile</v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/"
        color="primary"
      >
        <v-list-item-icon><v-icon>mdi-map-marker</v-icon></v-list-item-icon>
        <v-list-item-title>Locations</v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/"
        color="primary"
      >
        <v-list-item-icon><v-icon>mdi-file</v-icon></v-list-item-icon>
        <v-list-item-title>Provider Applications</v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/"
        color="primary"
        style="position: absolute; bottom: 0; width: 100%;"
      >
        <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Sidebar"
  };
</script>

<style scoped>

</style>
