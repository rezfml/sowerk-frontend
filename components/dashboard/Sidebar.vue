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
              <template v-if="company">
                <v-list-item-title style="font-size: 1rem;">{{company.company_name}}</v-list-item-title>
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px" v-if="company"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Locations - {{ company.locations.length }}</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" class="px-0 py-2" style="width: 100%;"><v-divider style="border-color: rgba(255,255,255,0.3);"></v-divider></v-col>
            <v-col cols="12" class="pa-0 ma-0">
              <template v-if="currentUser">
                <v-list-item-title style="font-size: 1rem;" v-if="currentUser.first_name">{{ currentUser.first_name }} {{ currentUser.last_name }}</v-list-item-title
                >
                <v-list-item-title style="font-size: 1rem;" v-else-if="currentUser.rep_name">{{ currentUser.rep_name }}</v-list-item-title
                >
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px" v-if="currentUser">{{ currentUser.is_superuser == '1' ? 'Super Admin' : 'Staff Account' }}</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px" v-if="company"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Facilities Access -
                {{ company.locations.length }}</v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4"></v-divider>

      <div v-if="company">
        <template v-if="company.company_type === 1">
          <nuxt-link
            v-for="(link) in items"
            :to="link.to"
            style="text-decoration: none;"
            v-on:click="setActiveLink(link.slug)"
            :class="link.class"
          >
            <v-list-item>
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
            v-for="(link) in providerItems"
            :to="link.to"
            style="text-decoration: none;"
            v-on:click="setActiveLink(link.slug)"
            :class="link.class"
          >
            <v-list-item>
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </template>
      </div>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        activeSlug: '/',
        user: null,
        company: null,
        items: [
          {
            to: '/dashboard/home',
            slug: 'home',
            icon: 'dashboard',
            text: 'Dashboard'
          },
          {
            to: '/dashboard/facilities/',
            slug: 'facilities',
            icon: 'store',
            text: 'Facilities'
          },
          {
            to: '/dashboard/approved-vendors/',
            slug: 'approved-vendors',
            icon: 'mdi-account-check',
            text: 'Approved Vendors'
          },
          {
            to: '/dashboard/vendor-applications/',
            slug: 'vendor-applications',
            icon: 'mdi-file-account',
            text: 'Vendor Applications'
          },
          {
            to: '/dashboard/requests-for-bids/',
            slug: 'requests-for-bids',
            icon: 'mdi-frequently-asked-questions',
            text: 'Requests For Bids'
          },
          {
            to: '/dashboard/messages-and-alerts/',
            slug: 'messages-and-alerts',
            icon: 'mdi-bell-alert',
            text: 'Messages & Alerts'
          },
          {
            to: '/dashboard/profile/',
            slug: 'profile',
            icon: 'settings',
            text: 'Settings',
            class: 'fixed-bottom'
          }
        ],
        providerItems: [
          {
            to: '/dashboard/home',
            slug: 'home',
            icon: 'dashboard',
            text: 'Dashboard'
          },
          {
            to: '/dashboard/facilities/',
            slug: 'facilities',
            icon: 'store',
            text: 'Facilities'
          },
          {
            to: '/dashboard/businesses/',
            slug: 'businesses',
            icon: 'mdi-account',
            text: 'Businesses'
          },
          {
            to: '/dashboard/sowerk-bids/',
            slug: 'sowerk-bids',
            icon: 'mdi-file-account',
            text: 'Sowerk Bids'
          },
          {
            to: '/dashboard/messages-and-alerts/',
            slug: 'messages-and-alerts',
            icon: 'mdi-bell-alert',
            text: 'Messages & Alerts'
          },
          {
            to: '/dashboard/profile/',
            slug: 'profile',
            icon: 'settings',
            text: 'Settings',
            class: 'fixed-bottom'
          }
        ],
      }
    },
    async mounted () {
      setTimeout(async () => {
        await this.getUser();
      }, 1000)
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getUser() {
        let {data, status} = await this.$http.get('https://sowerk-backend.herokuapp.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          // this.locations = data;
          this.user = data;
          console.log(data);
          this.getUserCompany();
        })
      },
      async getUserCompany() {
        let {data, status} = await this.$http.get('https://sowerk-backend.herokuapp.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          // this.locations = data;
          this.company = data;
          console.log(data);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .nuxt-link-active > div {
    background-color: rgba(246, 34, 0, 0.5);
    border-radius: 3px;
  }

  .fixed-bottom {
    position: absolute;
    bottom: 8px;
    width: 100%;
  }
</style>
