<template>
  <v-app dark>
    <v-content>
      <Sidebar></Sidebar>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/buyer/Sidebar";

  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        clipped: false,
        drawer: true,
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
        title: 'Market49'
      }
    }
  }
</script>
