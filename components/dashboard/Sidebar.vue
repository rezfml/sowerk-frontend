<template>
<v-app>
  <v-navigation-drawer app class="px-2" color="grey darken-4" width="310px" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs && !$vuetify.breakpoint.md">
    <div style="position: fixed; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; z-index: 100; background-color: rgba(0,0,0,0.2); top: 0; left: 0;" v-if="loading === false">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      ></v-progress-circular>
    </div>

    <v-list height="100%" style="position: relative" dark class="list">
      <v-list-item >
        <v-list-item-content class="py-0">
          <v-list-item-title class="title text-center">
            <v-btn style="height: 50px; width: 100%;" text color="transparent" :to="'../'" target="_blank"><v-img src="/SoWerk-Logo.png" style="height: 50px; width: 100%; object-fit: cover; object-position: center;"></v-img></v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item style="padding: 0px 0px !important;">
        <v-list-item-avatar class="mx-auto mr-3" size="90px" >
          <v-img :src="company.imgUrl" aspect-ratio="1"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-row class="mx-0 pl-2" style="border-left: thin solid rgba(255,255,255,0.3);">
            <v-col cols="12" class="pa-0 ma-0 d-flex flex-column align-left" >
              <template v-if="company">
                <v-list-item-title style="font-size: 1rem; align-self: center; text-align: center; word-break: break-word; white-space: pre-wrap;">{{company.account_name}}</v-list-item-title>
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px; align-self: center; text-align: center; word-break: break-word; white-space: pre-wrap;" v-if="company.locations"><p v-if="company.locations[0] !== 'There are no locations'"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Channels - {{ company.locations.length }}</p><p v-else><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Channels - 0</p></v-list-item-subtitle>
            </v-col>
            <v-col cols="12" class="px-0 py-2" style="width: 100%;"><v-divider style="border-color: rgba(255,255,255,0.3);"></v-divider></v-col>
            <v-col cols="12" class="pa-0 ma-0">
              <template v-if="currentUser">
                <v-list-item-title style="font-size: 1rem; align-self: center; text-align: center; word-break: break-word; white-space: pre-wrap;" v-if="currentUser.first_name">{{ currentUser.first_name }} {{ currentUser.last_name }}</v-list-item-title
                >
                <v-list-item-title style="font-size: 1rem; align-self: center; text-align: center; word-break: break-word; white-space: pre-wrap;" v-else-if="currentUser.rep_name">{{ currentUser.rep_name }}</v-list-item-title
                >
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px; align-self: center; text-align: center; word-break: break-word; white-space: pre-wrap;" v-if="currentUser">{{ currentUser.is_superuser == true ? 'Super Admin' : 'Staff Account' }}</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px; align-self: center; text-align: center; word-break: break-word; white-space: pre-wrap;" v-if="company.locations"><template v-if="company.locations[0] !== 'There are no locations'"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Channels Access - {{ company.locations.length }}</template><template v-else><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Channels Access - 0</template>
              </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4"></v-divider>

      <div v-if="company && company.company_type === 'true'">
        <template v-if="user.is_superuser === true" v-for="(link, index) in pmitems">
          <v-list-item v-if="!link.children" :key="index" :id="link.id" :to="link.to" exact>
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group" :id="link.id">
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
        <template v-if="user.is_superuser === false" v-for="(link, index) in pmStaffitems">
          <v-list-item v-if="!link.children" :id="link.id" :key="index" :to="link.to">
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group">
            <template v-slot:activator :id="link.id">
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5)" :to="child.to" exact-active-class="v-list-item--exact">
              <v-list-item-title v-if="j < link.children.length - 1" >{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </div>

      <div v-else-if="company && company.company_type === 'false'">
        <template v-for="(link, index) in providerItems">
          <!--          <nuxt-link-->
          <!--            v-for="(link) in providerItems"-->
          <!--            :to="link.to"-->
          <!--            style="text-decoration: none;"-->
          <!--            v-on:click="setActiveLink(link.slug)"-->
          <!--            :class="link.class"-->
          <!--          >-->
          <!--            <v-list-item>-->
          <!--              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>-->
          <!--              <v-list-item-title>{{ link.text }}</v-list-item-title>-->
          <!--            </v-list-item>-->
          <!--          </nuxt-link>-->
          <v-list-item v-if="!link.children" :key="index" :to="link.to" exact>
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group" exact>
            <template v-slot:activator>
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5)" :to="child.to" exact-active-class="v-list-item--exact" exact>
              <v-list-item-title v-if="j < link.children.length - 1">{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </div>

      <v-spacer></v-spacer>

      <v-list-item @click="logout" class="">
        <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
        <v-list-item-title style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;" >Logout</v-list-item-title>
      </v-list-item>
    </v-list>


        <!--    <v-switch-->
        <!--      v-model="$vuetify.theme.dark"-->
        <!--      label="Dark Mode"-->
        <!--      persistent-hint-->
        <!--      style="align-self: center;"-->
        <!--    ></v-switch>-->

  </v-navigation-drawer>

  <v-app-bar v-else style="height:unset; width:unset;z-index:6;" :clipped-left="clipped" fixed app color="rgba(0,0,0,0)" flat>
    <v-sheet  style="position: relative; background-color:rgba(0,0,0,0.75);margin:auto 0;padding: 0;"  >
      <v-container class="fill-height" >
        <v-row align="center" justify="center">
          <v-btn text color="white" @click.stop="drawer = !drawer">
            <v-icon >
              menu
            </v-icon>
          </v-btn>
        </v-row>
      </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary style="height:100vh;max-width:none;background-color:#212121; overflow:scroll; overflow-x: hidden;">
      <v-list-item style="">
        <v-list-item-content style="color:white;">
          <v-btn :href="'../../'" style="width: 15vw;" text><v-img :src="'https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png'" style="width: 16vw;margin-top:15px; overflow:hidden !important;" alt="SOWerkHome"></v-img></v-btn>
          <v-list-item-title text><a style="color:white;text-decoration:none; font-size:16px;cursor:pointer" href="/"></a></v-list-item-title>
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
                <v-list-item-title style="font-size: 1rem;color:white;">{{company.account_name}}</v-list-item-title>
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px;color:white;" v-if="company.locations"><p v-if="company.locations[0] !== 'There are no locations'"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Channels - {{ company.locations.length }}</p><p v-else><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>All Channels - 0</p></v-list-item-subtitle>
            </v-col>
            <v-col cols="12" class="px-0 py-2" style="width: 100%;"><v-divider style="border-color: rgba(255,255,255,0.3);"></v-divider></v-col>
            <v-col cols="12" class="pa-0 ma-0">
              <template v-if="currentUser">
                <v-list-item-title style="font-size: 1rem;color:white;" v-if="currentUser.first_name">{{ currentUser.first_name }} {{ currentUser.last_name }}</v-list-item-title
                >
                <v-list-item-title style="font-size: 1rem;color:white;" v-else-if="currentUser.rep_name">{{ currentUser.rep_name }}</v-list-item-title
                >
              </template>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px;color:white;" v-if="currentUser">{{ currentUser.is_superuser == true ? 'Super Admin' : 'Staff Account' }}</v-list-item-subtitle>
              <v-list-item-subtitle class="mt-1" style="font-size: 11px;color:white;" v-if="company.locations">
                <template v-if="company.locations[0] !== 'There are no locations'"><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Channels Access - {{ company.locations.length }}</template><template v-else><v-icon color="primary" class="mr-2" style="font-size: 11px">store</v-icon>Channels Access - 0</template>
              </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-4" style="color:white;"></v-divider>

     <div v-if="company && company.company_type === 'true'">
        <template v-if="user.is_superuser === true" v-for="(link, index) in pmitems" >
          <v-list-item v-if="!link.children" :id="link.id" :key="index" :to="link.to" style="color:white;">
            <v-list-item-icon><v-icon style="color:white;">{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title style="color:white;">{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group">
            <template v-slot:activator>
              <v-list-item-icon><v-icon style="color:white;">{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title style="color:white;">{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5);color:white;" :to="child.to" exact-active-class="v-list-item--exact">
              <v-list-item-title v-if="j < link.children.length - 1" style="color:white;">{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; color:white;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
        <template v-if="user.is_superuser === false" v-for="(link, index) in pmStaffitems">
          <v-list-item v-if="!link.children" :key="index" :id="link.id" :to="link.to" style="color:white;">
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group" style="color:white;">
            <template v-slot:activator>
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5);color:white;" :to="child.to" exact-active-class="v-list-item--exact">
              <v-list-item-title v-if="j < link.children.length - 1">{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </div>


      <div v-else-if="company && company.company_type === 'false'" >
        <template v-if="user.is_superuser === true" v-for="(link, index) in providerItems" >
          <v-list-item v-if="!link.children" :id="link.id" :key="index" :to="link.to" style="color:white;">
            <v-list-item-icon style="color: white;"><v-icon style="color:white;">{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title style="color:white;">{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group">
            <template v-slot:activator>
              <v-list-item-icon style="color: white;"><v-icon style="color:white;">{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title style="color:white;">{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5);color:white;" :to="child.to" exact-active-class="v-list-item--exact">
              <v-list-item-title v-if="j < link.children.length - 1" style="color:white;">{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; color:white;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
        <template v-if="user.is_superuser === false" v-for="(link, index) in providerStaffItems">
          <v-list-item v-if="!link.children" :key="index" :id="link.id" :to="link.to" style="color:white;">
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
          <v-list-group v-else :key="index" class="list-group" style="color:white;">
            <template v-slot:activator>
              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </template>
            <v-list-item v-for="(child, j) in link.children" :key="j" style="background-color: rgba(166,29,0,0.5);color:white;" :to="child.to" exact-active-class="v-list-item--exact">
              <v-list-item-title v-if="j < link.children.length - 1">{{ child.text }}</v-list-item-title>
              <v-list-item-title v-else style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">{{ child.text }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
<!--        <template>-->
<!--          <nuxt-link-->
<!--            v-for="(link) in providerItems"-->
<!--            :to="link.to"-->
<!--            style="text-decoration: none;"-->
<!--            v-on:click="setActiveLink(link.slug)"-->
<!--            :class="link.class"-->
<!--            :id="link.id"-->
<!--          >-->
<!--            <v-list-item>-->
<!--              <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>-->
<!--              <v-list-item-title style="color:white;">{{ link.text }}</v-list-item-title>-->
<!--            </v-list-item>-->
<!--          </nuxt-link>-->
<!--        </template>-->
      </div>
        <v-list-item @click="logout">
        <v-list-item-icon><v-icon style="color:white;">mdi-logout</v-icon></v-list-item-icon>
        <v-list-item-title style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;color:white;" >Logout</v-list-item-title>
      </v-list-item>
      </v-navigation-drawer>
    </v-sheet>
  </v-app-bar>
</v-app>
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
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        pmitems: [
          {
            to: '/dashboard',
            slug: 'home',
            icon: 'dashboard',
            text: 'Dashboard',
            id: 'dashboard'
          },
          {
            to: '/dashboard/channels/',
            slug: 'channels',
            icon: 'store',
            text: 'Channels',
            id: 'mylocations',
            children: [
              {
                to: '/dashboard/channels/',
                slug: 'channels',
                text: 'Channels'
              },
              {
                to: '/dashboard/channels/add',
                slug: 'add_channels',
                text: 'Add New Channel'
              }
            ]
          },
          {
            to: '/dashboard/vendors/',
            slug: 'vendors',
            icon: 'mdi-account-check',
            text: 'Vendors',
            id: 'vendors',
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
                text: 'Vendor Requirements',
              },
            ]
          },
          {
            to: '/dashboard/assets/',
            slug: 'assets',
            icon: 'mdi-file-account',
            text: 'Assets',
            id: 'assets',
            children: [
              {
                to: '/dashboard/insurances/',
                slug: 'insurances',
                icon: 'safe-square',
                text: 'Insurances',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/licenses',
                slug: 'licenses',
                icon: 'license',
                text: 'Licenses & Certificates',
              },
              {
                to: '/dashboard/documents',
                slug: 'documents',
                icon: 'mdi-file',
                text: 'Documents'
              },
            ]
          },
          // {
          //   to: '/dashboard/requests-for-bids/',
          //   slug: 'requests-for-bids',
          //   icon: 'mdi-frequently-asked-questions',
          //   text: 'Requests For Bids'
          // },
          {
            to: '/dashboard/messages-and-alerts/',
            slug: 'messages-and-alerts',
            icon: 'mdi-bell-alert',
            text: 'Messages & Alerts',
            id: 'messages',
            children: [
              {
                to: '/dashboard/messages-and-alerts/',
                slug: 'messages-and-alerts',
                text: 'Inbox',
              },
              {
                to: '/dashboard/messages-and-alerts/sent',
                slug: 'messages-and-alerts-sent',
                text: 'Sent',
              },
            ]
          },
          {
            to: '/dashboard/feedback/',
            slug: 'feedback',
            icon: 'mdi-comment-question',
            text: 'Support & Feedback',
            id: 'supportfeedback',
            children: [
              {
                to: '/dashboard/feedback/',
                slug: 'feedback',
                icon: 'mdi-comment-question',
                text: 'Feedback',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/feedback/sowerkInfo/',
                slug: 'profile',
                icon: 'settings',
                text: 'SOWERK 101',
                class: 'fixed-bottom',
              },
            ]
          },
          {
            to: '/dashboard/profile/',
            slug: 'profile',
            icon: 'settings',
            text: 'Settings',
            id: 'settings',
            class: 'fixed-bottom',
            children: [
              {
                to: '/dashboard/profile/',
                slug: 'profile',
                icon: 'settings',
                text: 'Manage Company Profile',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/users',
                slug: 'user-creation',
                icon: 'mdi-account',
                text: 'Manage Users',
              },
              {
                to: '/dashboard/users/add',
                slug: 'add_user',
                icon: 'mdi-account',
                text: 'Add Users'
              },
            ]
          }
        ],
        pmStaffitems: [
          {
            to: '/dashboard',
            slug: 'home',
            icon: 'dashboard',
            text: 'Dashboard',
            id: 'dashboard'
          },
          {
            to: '/dashboard/channels/',
            slug: 'channels',
            icon: 'store',
            text: 'Channels',
            id: 'mylocations',
            children: [
              {
                to: '/dashboard/channels/',
                slug: 'channels',
                text: 'Channels'
              },
            ]
          },
          {
            to: '/dashboard/vendors/',
            slug: 'vendors',
            icon: 'mdi-account-check',
            text: 'Vendors',
            id: 'vendors',
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
                text: 'Vendor Requirements',
              },
            ]
          },
          // {
          //   to: '/dashboard/requests-for-bids/',
          //   slug: 'requests-for-bids',
          //   icon: 'mdi-frequently-asked-questions',
          //   text: 'Requests For Bids'
          // },
          {
            to: '/dashboard/messages-and-alerts/',
            slug: 'messages-and-alerts',
            icon: 'mdi-bell-alert',
            text: 'Messages & Alerts',
            id: 'messages',
            children: [
              {
                to: '/dashboard/messages-and-alerts/',
                slug: 'messages-and-alerts',
                text: 'Inbox',
              },
              {
                to: '/dashboard/messages-and-alerts/sent',
                slug: 'messages-and-alerts-sent',
                text: 'Sent',
              },
            ]
          },
          {
            to: '/dashboard/feedback/',
            slug: 'feedback',
            icon: 'mdi-comment-question',
            text: 'Support & Feedback',
            id: 'supportfeedback',
            children: [
              {
                to: '/dashboard/feedback/',
                slug: 'feedback',
                icon: 'mdi-comment-question',
                text: 'Feedback',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/feedback/sowerkInfo/',
                slug: 'profile',
                icon: 'settings',
                text: 'SOWERK 101',
                class: 'fixed-bottom',
              },
            ]
          },
          {
            to: '/dashboard/profile/',
            slug: 'profile',
            icon: 'settings',
            text: 'Settings',
            id: 'settings',
            class: 'fixed-bottom',
            children: [
              // {
              //   to: '/dashboard/profile/',
              //   slug: 'profile',
              //   icon: 'settings',
              //   text: 'Manage Company Profile',
              //   class: 'fixed-bottom',
              // },
              {
                to: '/dashboard/users',
                slug: 'user-creation',
                icon: 'mdi-account',
                text: 'Manage Users'
              },
            ]
          }
        ],
        providerItems: [
          {
            to: '/dashboard',
            slug: 'home',
            icon: 'dashboard',
            text: 'Dashboard',
            id: 'dashboard'
          },
          {
            to: '/dashboard/channels/',
            slug: 'channels',
            icon: 'store',
            text: 'Channels',
            id: 'mylocations',
            children: [
              {
                to: '/dashboard/channels/',
                slug: 'channels',
                text: 'Channels'
              },
              {
                to: '/dashboard/channels/add',
                slug: 'add_channels',
                text: 'Add New Channel'
              }
            ]
          },
          {
            to: '/dashboard/businesses/',
            slug: 'businesses',
            icon: 'mdi-account',
            text: 'Customers',
            children: [
              {
                to: '/dashboard/businesses/',
                slug: 'businesses',
                text: 'Customer Connections'
              },
              {
                to: '/dashboard/businesses/leads',
                slug: 'requesting_businesses',
                text: 'Customer Leads'
              },
              {
                to: '/dashboard/businesses/search',
                slug: 'search_businesses',
                text: 'Search Business Directory'
              }
            ]
          },
          {
            to: '/dashboard/assets/',
            slug: 'assets',
            icon: 'mdi-file-account',
            text: 'Assets',
            id: 'assets',
            children: [
              {
                to: '/dashboard/insurances/',
                slug: 'insurances',
                icon: 'safe-square',
                text: 'Insurances',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/licenses',
                slug: 'licenses',
                icon: 'license',
                text: 'Licenses & Certificates',
              },
              {
                to: '/dashboard/documents',
                slug: 'documents',
                icon: 'mdi-file',
                text: 'Documents'
              },
            ]
          },
          /*
          {
            to: '/dashboard/sowerk-leads/',
            slug: 'sowerk-leads',
            icon: 'mdi-file-account',
            text: 'SOWerk Leads'
          },*/
          {
            to: '/dashboard/messages-and-alerts/',
            slug: 'messages-and-alerts',
            icon: 'mdi-bell-alert',
            text: 'Messages & Alerts',
            children: [
              {
                to: '/dashboard/messages-and-alerts/',
                slug: 'messages-and-alerts',
                text: 'Inbox',
              },
              {
                to: '/dashboard/messages-and-alerts/sent',
                slug: 'messages-and-alerts-sent',
                text: 'Sent',
              },
            ]
          },
          {
            to: '/dashboard/feedback/',
            slug: 'feedback',
            icon: 'mdi-comment-question',
            text: 'Support & Feedback',
            id: 'supportfeedback',
            children: [
              {
                to: '/dashboard/feedback/',
                slug: 'feedback',
                icon: 'mdi-comment-question',
                text: 'Feedback',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/feedback/sowerkInfo/',
                slug: 'profile',
                icon: 'settings',
                text: 'SOWERK 101',
                class: 'fixed-bottom',
              },
            ]
          },
          {
            to: '/dashboard/profile/',
            slug: 'profile',
            icon: 'settings',
            text: 'Settings',
            id: 'settings',
            class: 'fixed-bottom',
            children: [
              {
                to: '/dashboard/profile/',
                slug: 'profile',
                icon: 'settings',
                text: 'Manage Company Profile',
                class: 'fixed-bottom',
              },
              {
                to: '/dashboard/users',
                slug: 'user-creation',
                icon: 'mdi-account',
                text: 'Manage Users',
              },
              {
                to: '/dashboard/users/add',
                slug: 'add_user',
                icon: 'mdi-account',
                text: 'Add Users'
              },
            ]
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
      async logout() {
        await this.$store.dispatch('user/logout');
      },
      async getUser() {
        // this.loading = true;
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/auth/users/' + this.currentUser.id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.$nextTick(function() {
          // this.locations = data;
          this.user = data;
          this.getUserCompany();
        })
      },
      async getUserCompany() {
        let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
        if (this.$error(status, data.message, data.errors)) return;
        this.company = data;
        if(this.currentUser.is_superuser) {
          this.company.locations = data.locations
        } else {
          this.company.locations = data.locations.filter(location => {
            if(this.currentUser.first_name === location.contact_first_name && this.currentUser.last_name === location.contact_last_name && this.currentUser.email === location.email) {
              return location
            }
          })
        }
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
