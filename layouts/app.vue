<template>
  <v-app dark>
    <v-content>
      <Sidebar></Sidebar>
      <nuxt :class="{'grey darken-3' : companyType === 'false'}" style="min-height: 100vh;" />
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
        title: 'SOWerk',
        companyType: null
      }
    },
    async mounted() {
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      this.companyType = data.company_type;
      console.log(this.companyType);
    },
    computed: {
      currentUser() {
        return this.$store.state.user.user.user;
      },
    },
  }
</script>
<style >
  .v-application--wrap{
    min-height: unset !important;
  }
</style>
