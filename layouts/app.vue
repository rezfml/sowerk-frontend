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
              title: '',
            },
            content: `<h1>Welcome to your SOWerk dashboard!</h1><p>This page is specific to you and your account level access.<br/>If you have administrator access your dashboard will show all account locations, all account Vendors, and every Vendor management tool.<br/>However, if you only have staff-level access to a specific location(s) then this dashboard revolves specifically around your needs. Enjoy!
</p>`,
            params: {
              placement: 'bottom',
              highlight: true,
            }
          },
          {
            target: '#mylocations',
            header: {
              title: '',
            },
            content: `<h1>Step #1<br/>Locations Are Critical</h1><p>Your SOWerk account is made up of locations. They are places where you will be doing business with Vendors now or in the future and therefore <strong style="text-decoration: underline">super important</strong>. It is essential that you create each property, facility, project, or otherwise unique location so that Vendor vetting and management tools can properly work. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#vendors',
            header: {
              title: '',
            },
            content: `<h1>Step #2<br/>Build Vendor Requirements</h1><p>Once locations are established it’s time to define your Vendor requirements. Don’t worry, we make this easy.<br/><br/>You can utilize SOWerk templates to help get you started. The power to vet is all yours! You can completely customize any Vendor application by service/supply category and at each location. If you have the same requirements at all locations administrators can build company templates. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#vendors',
            header: {
              title: '',
            },
            content: `<h1>Step #3<br/>Connect With Vendors</h1><p>Your locations built and your Vendor requirements are set. It’s time to mix and mingle!<br/><br/>Use the Vendor invite tool to send invitations to those Vendors you wish to apply on SOWerk for your Vendor requirements or invite pre-approved Vendors to connect on SOWerk without application. You can also search the SOWerk Vendor directory to find vendors to invite. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#supportfeedback',
            header: {
              title: '',
            },
            content: `<h1>Step #4<br/>Help & Issues</h1><p>If you need help or see an issue we are one click away. We would be honored to support your needs.</p>`,
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
      setTimeout(() => {
        this.$tours['myTour'].start();
      }, 5000)
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

  #v-step-46f34eda {
    width: 400px !important;
    transform: translate3d(30vw, 5px, 0px) !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #v-step-46f34eda .v-step__header {
    width: 0% !important;
    height: 0% !important;
    visibility: hidden;
  }
  #v-step-46f34eda .v-step__content {
    width: 100% !important;
    font-size: 18px;
    background: #50596c !important;
  }
  #v-step-46f34eda .v-step__content h1 {
    width: 100% !important;
    font-size: 24px;
    background: #454d5d !important;
    padding: 5px 10px 5px 10px;
    margin: -20px 0px 5px 0px;
    border-radius: 5px;
  }
  #v-step-46f34eda .v-step__buttons {
    width: 100% !important;
    font-size: 25px;
    background: #50596c !important;
  }
  #v-step-46f34eda .v-step__buttons button {
    width: 45%;
    margin: 0 1% 0 1%;
    font-size: 25px;
    border-radius: 10px;
  }
  #v-step-6b1ad225 {
    margin-right: -325px !important;
    width: 400px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #v-step-6b1ad225 .v-step__header {
    width: 0% !important;
    height: 0% !important;
    visibility: hidden;
  }
  #v-step-6b1ad225 .v-step__content {
    width: 100% !important;
    font-size: 15px;
    background: #50596c !important;
  }
  #v-step-6b1ad225 .v-step__content h1 {
    width: 100% !important;
    font-size: 24px;
    background: #454d5d !important;
    padding: 5px 10px 5px 10px;
    margin: -20px 0px 5px 0px;
    border-radius: 5px;
  }
  #v-step-6b1ad225 .v-step__buttons {
    width: 100% !important;
    background: #50596c !important;
  }
  #v-step-6b1ad225 .v-step__buttons button {
    width: 30%;
    margin: 0 1% 0 1%;
    font-size: 18px;
    border-radius: 10px;
  }
  #v-step-bfa546c4 {
    margin-right: -325px !important;
    width: 400px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #v-step-bfa546c4 .v-step__header {
    width: 0% !important;
    height: 0% !important;
    visibility: hidden;
  }
  #v-step-bfa546c4 .v-step__content {
    width: 100% !important;
    font-size: 15px;
    background: #50596c !important;
  }
  #v-step-bfa546c4 .v-step__content h1 {
    width: 100% !important;
    font-size: 24px;
    background: #454d5d !important;
    padding: 5px 10px 5px 10px;
    margin: -20px 0px 5px 0px;
    border-radius: 5px;
  }
  #v-step-bfa546c4 .v-step__buttons {
    width: 100% !important;
    background: #50596c !important;
  }
  #v-step-bfa546c4 .v-step__buttons button {
    width: 30%;
    margin: 0 1% 0 1%;
    font-size: 18px;
    border-radius: 10px;
  }
  #v-step-0fcc61c7 {
    margin-right: -325px !important;
    width: 400px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #v-step-0fcc61c7 .v-step__header {
    width: 0% !important;
    height: 0% !important;
    visibility: hidden;
  }
  #v-step-0fcc61c7 .v-step__content {
    width: 100% !important;
    font-size: 15px;
    background: #50596c !important;
  }
  #v-step-0fcc61c7 .v-step__content h1 {
    width: 100% !important;
    font-size: 24px;
    background: #454d5d !important;
    padding: 5px 10px 5px 10px;
    margin: -20px 0px 5px 0px;
    border-radius: 5px;
  }
  #v-step-0fcc61c7 .v-step__buttons {
    width: 100% !important;
    font-size: 25px;
    background: #50596c !important;
  }
  #v-step-0fcc61c7 .v-step__buttons button {
    width: 45%;
    margin: 0 1% 0 1%;
    font-size: 25px;
    border-radius: 10px;
  }
</style>
