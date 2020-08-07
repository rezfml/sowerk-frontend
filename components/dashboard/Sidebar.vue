<template>
  <v-navigation-drawer app class="px-2" color="grey darken-4" width="300px">
    <v-list height="100%" style="position: relative" dark class="list">
      <v-list-item>
        <v-list-item-content class="py-0">
          <v-list-item-title class="title text-center">
            <v-img src="/SoWerk-Logo.png" style="height: 50px; width: 100%; object-fit: cover; object-position: center;"></v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-avatar class="mx-auto mr-3" size="80px" >
          <v-img src="https://randomuser.me/api/portraits/women/81.jpg" aspect-ratio="1"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-row class="mx-0 pl-2" style="border-left: thin solid rgba(255,255,255,0.3);">
            <v-col cols="12" class="pa-0 ma-0" >
              <v-list-item-title style="font-size: 1rem;">Bass Pro Shops</v-list-item-title>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Facilities - 169</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" class="px-0 py-2" style="width: 100%;"><v-divider style="border-color: rgba(255,255,255,0.3);"></v-divider></v-col>
            <v-col cols="12" class="pa-0 ma-0">
              <v-list-item-title style="font-size: 1rem;">Jane Smith</v-list-item-title
              >
              <v-list-item-subtitle class="mt-1" style="font-size: 11px">Super Admin</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Facilities Access - 169</v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4"></v-divider>

      <nuxt-link
        v-for="(link) in items"
        :to="link.to"
        style="text-decoration: none;"
        v-on:click="setActiveLink(link.slug)"
      >
        <v-list-item
        >
          <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </nuxt-link>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        activeSlug: '/',
        items: [
          {
            to: '/dashboard/buyer/home',
            slug: 'home',
            icon: 'dashboard',
            text: 'Dashboard'
          },
          {
            to: '/dashboard/buyer/facilities/',
            slug: 'facilities',
            icon: 'store',
            text: 'Facilities'
          },
          {
            to: '/dashboard/buyer/approved-vendors/',
            slug: 'approved-vendors',
            icon: 'mdi-account-check',
            text: 'Approved Vendors'
          },
          {
            to: '/dashboard/buyer/vendor-applications/',
            slug: 'vendor-applications',
            icon: 'mdi-file-account',
            text: 'Vendor Applications'
          },
          {
            to: '/dashboard/buyer/requests-for-bids/',
            slug: 'requests-for-bids',
            icon: 'mdi-frequently-asked-questions',
            text: 'Requests For Bids'
          },
          {
            to: '/dashboard/buyer/messages-and-alerts/',
            slug: 'messages-and-alerts',
            icon: 'mdi-bell-alert',
            text: 'Messages & Alerts'
          }
        ],
      }
    },
  };
</script>

<style scoped lang="scss">
  .nuxt-link-active > div {
    background-color: rgba(246, 34, 0, 0.5);
    border-radius: 3px;
  }
</style>
