<template>
  <v-app dark>
    <v-content>
      <Sidebar :steps="steps" :company="company"></Sidebar>
      <nuxt :steps="steps" :class="{'grey darken-3' : companyType === 'false'}" style="min-height: 100vh;" />
    </v-content>

    <v-tour name="myTour" :steps="steps" :options="myOptions">
    </v-tour>
  </v-app>
</template>

<script>
  import Sidebar from "~/components/dashboard/Sidebar";
  import VueTour from 'vue-tour'
  import Vue from 'vue';

  require('vue-tour/dist/vue-tour.css')

  Vue.use(VueTour)

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
        companyType: null,
        company: {},
        myOptions: {
          useKeyboardNavigation: false,
          labels: {
            buttonSkip: 'Skip tour',
            buttonPrevious: 'Previous',
            buttonNext: 'Next',
            buttonStop: 'Finish'
          }
        },
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            header: {
              title: 'Welcome to your SOWerk dashboard!',
            },
            content: `<p>This page is specific to you and your account level access. If you are an administrator you will see and manage all locations, Vendors, and Vendor management tools. However, if you only have staff-level access to a specific location(s) this dashboard revolves around only your needs. Enjoy!</p>`,
            params: {
              placement: 'bottom',
              highlight: true,
            }
          },
          {
            target: '#mylocations',
            header: {
              title: 'Step 1) Locations Are Critical',
            },
            content: `<p>Your SOWerk account is made up of locations. They are places where you will be doing business with Vendors now or in the future and therefore <strong style="text-decoration: underline">super important</strong>. It is essential that you create each property, facility, project, or otherwise unique location so that Vendor vetting and management tools can properly work. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#vendors',
            header: {
              title: 'Step 2) Build Vendor Requirements',
            },
            content: `<p>Once locations are established it’s time to define your Vendor requirements. Don’t worry we make this easy. You can utilize SOWerk templates to help get you started and completely customize a Vendor application by each location. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#vendors',
            header: {
              title: 'Step 3) Connect With Vendors',
            },
            content: `<p>Your locations built and your Vendor requirements are set. It’s time to mix and mingle! You can send invites to Vendors you already know to apply or as pre-approved, or search the SOWerk Vendor directory. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#supportfeedback',
            header: {
              title: 'Step 4) Help & Issues',
            },
            content: `<p>If you need help or see an issue we are one click away. We would be honored to support your needs.</p>`,
            params: {
              placement: "top",
            }
          }
        ]
      }
    },
    async mounted() {
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      this.company = data;
      this.companyType = data.company_type;
      console.log(this.companyType);
      this.$tours['myTour'].start();
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

  #v-step-6b1ad225 {
    margin-right: -325px !important;
  }
  #v-step-bfa546c4 {
    margin-right: -325px !important;
  }
  #v-step-0fcc61c7 {
    margin-right: -325px !important;
  }
</style>
