<template>
  <v-app dark>
    <v-content>
      <Sidebar></Sidebar>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/Sidebar";

  export default {
    components: {
      Sidebar
    },
    // middleware: 'auth',
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'SOWerk'
      }
    }
  }
</script>
