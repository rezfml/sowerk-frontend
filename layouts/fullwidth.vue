<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="transparent" flat>
      <v-container>
        <v-row>
          <v-toolbar-title v-text="title" />
          <v-spacer></v-spacer>
          <v-btn href="#" text color="white">Home</v-btn>
          <v-btn href="#" text color="white">Join SOW</v-btn>
          <v-btn href="#" text color="white">Service Providers</v-btn>
          <v-btn href="#" text color="white">Businesses</v-btn>
          <v-btn href="#" text color="white">About SOW</v-btn>
          <v-btn href="#" text color="white">Register</v-btn>
          <v-btn href="#" text color="white">SOWerk</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content class="py-0">
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SOWerk'
    }
  }
}
</script>
