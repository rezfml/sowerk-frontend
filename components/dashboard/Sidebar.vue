<template>
  <v-navigation-drawer app class="px-2" color="grey darken-4" width="300px">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading === false">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>
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
          <v-img :src="company.imgUrl" aspect-ratio="1"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-row class="mx-0 pl-2" style="border-left: thin solid rgba(255,255,255,0.3);">
            <v-col cols="12" class="pa-0 ma-0" >
              <template v-if="company">
                <v-list-item-title style="font-size: 1rem;">{{company.account_name}}</v-list-item-title>
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px" v-if="company.locations"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Locations - {{ company.locations.length }}</v-list-item-subtitle>
            </v-col>
            <v-col cols="12" class="px-0 py-2" style="width: 100%;"><v-divider style="border-color: rgba(255,255,255,0.3);"></v-divider></v-col>
            <v-col cols="12" class="pa-0 ma-0">
              <template v-if="currentUser">
                <v-list-item-title style="font-size: 1rem;" v-if="currentUser.first_name">{{ currentUser.first_name }} {{ currentUser.last_name }}</v-list-item-title
                >
                <v-list-item-title style="font-size: 1rem;" v-else-if="currentUser.rep_name">{{ currentUser.rep_name }}</v-list-item-title
                >
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px" v-if="currentUser">{{ currentUser.is_superuser == true ? 'Super Admin' : 'Staff Account' }}</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px" v-if="company.locations"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Facilities Access -
                {{ company.locations.length }}
              </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4"></v-divider>

      <div v-if="company && company.company_type === 'true'">
        <template v-for="(link, index) in items">
          <v-list-item v-if="!link.children" :key="index" :to="link.to">
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group">
            <template v-slot:activator>
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5)" :to="child.to" exact-active-class="v-list-item--exact">
              <v-list-item-title v-if="j < link.children.length - 1">{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </div>

      <div v-else-if="company && company.company_type === 'false'">
        <template>
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
        user: {
        },
        company: {
        },
        loading: false,
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
            text: 'My Properties',
            children: [
              {
                to: '/dashboard/facilities/',
                slug: 'facilities',
                text: 'My Properties'
              },
              {
                to: '/dashboard/facilities/add',
                slug: 'add_facilities',
                text: 'Add New Property'
              }
            ]
          },
          {
            to: '/dashboard/vendors/',
            slug: 'vendors',
            icon: 'mdi-account-check',
            text: 'Vendors',
            children: [
              {
                to: '/dashboard/vendors/approved',
                slug: 'approved',
                text: 'My Approved Vendors',
              },
              {
                to: '/dashboard/vendors/applicants',
                slug: 'applicants',
                text: 'Pending Vendor Applicants',
              },
              {
                to: '/dashboard/vendors/',
                slug: 'vendors',
                text: 'Find A SOWerk Vendor',
              },
              {
                to: '/dashboard/vendors/invite',
                slug: 'invite',
                text: 'Vendor Invite Tool',
              },
              {
                to: '/dashboard/vendors/applications',
                slug: 'applications',
                text: 'Edit Vendor Requirements',
              },
            ]
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
            to: '/dashboard/feedback/',
            slug: 'feedback',
            icon: 'mdi-comment-question',
            text: 'Support & Feedback'
          },
          {
            to: '/dashboard/user-creation',
            slug: 'user-creation',
            icon: 'mdi-account',
            text: 'User Creation'
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
            to: '/dashboard/feedback/',
            slug: 'feedback',
            icon: 'mdi-comment-question',
            text: 'Support & Feedback'
          },
          {
            to: '/dashboard/profile/',
            slug: 'profile',
            icon: 'settings',
            text: 'Settings',
            class: 'fixed-bottom'
          },
        ],
      }
    },
    async mounted () {
      setTimeout(async () => {
        await this.getUser();
      }, 1000)
    },
    watch: {
      loading: function() {
        if(this.loading){
          document.documentElement.style.overflow = 'hidden'
          return
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
    methods: {
      async getUser() {
        // this.loading = true;
        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          // this.locations = data;
          this.user = data;
          this.getUserCompany();
        })
      },
      async getUserCompany() {
        let {data, status} = await this.$http.get('http://node-express-env.eba-vhau3tcw.us-east-2.elasticbeanstalk.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
        this.loading = true;
        console.log(this.user, this.company, 'user and company')
      }
    }
  }
</script>

<style scoped>
  .nuxt-link-active > div {
    background-color: rgba(246, 34, 0, 0.5);
    border-radius: 3px;
  }

  .fixed-bottom {
    position: absolute;
    bottom: 8px;
    width: 100%;
  }

  .list >>> .v-list-group__header.v-list-item--active {
    color: white!important;
    background-color: rgba(166,29,0,1)!important;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  .v-list-group__header.v-list-item--active::before {
    opacity: 1!important;
  }

  .v-list .v-list-item--active {
    color: white!important;
    background-color: rgba(166,29,0,0.5)!important;
  }

  .v-list .v-list-item--active::before {
    opacity: 0!important;
  }

  .v-list .v-list-item--exact {
    color: white!important;
    font-weight: bold;
    background-color: rgba(166,29,0,0.5)!important;
  }
</style>
