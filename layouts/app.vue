<template>
  <v-app :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'">
    <v-content :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'">
      <Sidebar :steps="steps" :company="company"></Sidebar>
      <nuxt :steps="steps" :class="company.company_type === 'false' ? 'grey darken-3' : 'grey lighten-3'" style="min-height: 100vh; min-width: 100%;" />
      <!-- -----------FOOTER----------- -->
      <v-footer style="background:#a61c00; color: white; height: auto; width: 100%; display: flex;flex-direction: column">
        <v-row style="text-align: center; width: 100%;" class="pb-15 pb-sm-0" align="center">

          <!-- TERMS CONDITIONS PRIVACY -->
          <v-col cols="4" class="text-left d-flex flex-end " style="display: flex; flex-direction: column; font-size:11px;" >
            <!--        // JUST FOR NOW THIS WILL BE ADDED LATER I PROMISE-->
            <v-row v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
              <v-col cols="6" style="text-align:left;" >
                <ul>
                  <li style="list-style: none"><a href="/DCMAPolicy" style="text-decoration: none;color: white">DCMA Policy</a></li>
                  <li style="list-style: none"><a href="/customerTerms" style="text-decoration: none;color: white">Customer Terms</a></li>
                  <li style="list-style: none"><a href="/acceptableUsePolicy" style="text-decoration: none;color: white">Acceptable Use Policy</a></li>
                  <li style="list-style: none"><a href="/CustomerSpecificSupplement" style="text-decoration: none;color: white">Customer Specific Supplement</a></li>
                </ul>
              </v-col>
              <v-col cols="6" style="text-align:left;" >
                <ul>
                  <li style="list-style: none"><a href="/serviceLevelAgreement" style="text-decoration: none;color: white">Service Level Agreement</a></li>
                  <li style="list-style: none"><a href="/UserTerms" style="text-decoration: none;color: white">User Terms</a></li>
                  <li style="list-style: none"><a href="/privacypolicy" style="text-decoration: none; color: white">Privacy Policy</a></li>
                </ul>
              </v-col>
            </v-row>
          </v-col>


          <!-- SOWERK LOGO -->
          <v-col cols="4">
            <img width="120px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWorkLogo-153-cropped.png" alt="SOWerk" />
          </v-col>

          <!-- TERMS CONDITIONS PRIVACY  for mobile-->
          <v-col cols="12" class="text-left d-flex flex-end px-0 mb-n12" style="display: flex; flex-direction: column; font-size:11px;" v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm" >

            <v-row >
              <v-col cols="6" style="text-align:left;" >
                <ul class="px-0">
                  <li style="list-style: none"><a href="/DCMAPolicy" style="text-decoration: none;color: white">DCMA Policy</a></li>
                  <li style="list-style: none"><a href="/customerTerms" style="text-decoration: none;color: white">Customer Terms</a></li>
                  <li style="list-style: none"><a href="/acceptableUsePolicy" style="text-decoration: none;color: white">Acceptable Use Policy</a></li>
                </ul>
              </v-col>
              <v-col cols="6" style="text-align:left;" >
                <ul class="px-0">
                  <li style="list-style: none"><a href="/serviceLevelAgreement" style="text-decoration: none;color: white">Service Level Agreement</a></li>
                  <li style="list-style: none"><a href="/UserTerms" style="text-decoration: none;color: white">User Terms</a></li>
                  <li style="list-style: none"><a href="/privacypolicy" style="text-decoration: none; color: white">Privacy Policy</a></li>
                </ul>
              </v-col>
              <v-col cols=12>
                <ul class="px-0 my-n6">
                  <li style="list-style: none"><a href="/CustomerSpecificSupplement" style="text-decoration: none;color: white">Customer Specific Supplement</a></li>
                </ul>
              </v-col>
            </v-row>
          </v-col>


          <!-- FOOTER LINKS -->
          <v-col cols="4" style="display: flex; flex-direction: column; align-items: flex-end" class="d-none d-sm-flex">
            <ul>
              <li :href=item.path
                  v-for="item in items"
                  :key="item.title"
                  path
                  color="white"
                  style="text-transform: capitalize; letter-spacing: 1px; font-size: 12px; text-align: left; list-style: none; cursor: pointer"
              >
                {{ item.title }}
              </li>
            </ul>
          </v-col>
        </v-row>
        <!-- COPYRIGHT -->
        <v-row style="font-size: 10.5px; justify-content: center;">
          <p style="text-align: center;">SOWerk &copy; {{ new Date().getFullYear() }}<br>All Rights Reserved.</p>
        </v-row>
      </v-footer>
    </v-content>

<!--    <v-tour v-if="windowLocation === 'http://localhost:3000/dashboard' || windowLocation === 'https://www.sowerk.com/dashboard'" name="myTour" :steps="steps" :options="myOptions">-->
<!--    </v-tour>-->
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
            content: `<h1>Welcome to SOWerk!</h1><p>The first thing to know is that your experience will be unique to your specific access level. Just like most software platforms administrator access will have more visibility than staff level access. Second, if at any time you have issues or would like to share some feedback you may do so in the Support & Feedback section of your SOWerk navigation.</p>`,
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
            content: `<h1>Step #1<br/>Create Your Channels</h1><p>Before you can start vetting Vendors you will need to first identify any facility, area/district, major project, or even company departments where you will be vetting and managing Vendors. </p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#vendors',
            header: {
              title: '',
            },
            content: `<h1>Step #2<br/>Vendor Applications</h1><p>Once Channels are established it’s time to build your Vendor applications. Think of Vendor applications just like you would if you were hiring an employee. Establishing an approved supplier or service provider isn't much different. You create the application, Vendors apply, and then you review and choose to approve or deny their application for the position of approved Vendor. Need help getting started? Try using a SOWerk Template.</p>`,
            params: {
              placement: "top",
            }
          },
          {
            target: '#vendors',
            header: {
              title: '',
            },
            content: `<h1>Step #3<br/>Connect With Vendors</h1><p>Your Channels are set and your Vendor applications are published. Now, it’s time to mix and mingle! Try using the Vendor invite tool to invite any of your existing vendors to join SOWerk, or search through the Vendor directory to review and invite Vendors to apply.</p>`,
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
        ],
        windowLocation: 'https://www.sowerk.com/dashboard',
        items: [
          {
            icon: 'about',
            title: 'Vendors',
            path: '../../landingpage/join-service-landing',
          },
          {
            icon: 'Businesses',
            title: 'Businesses',
            path: '../../landingpage/join-product-landing',
          },
          /* {
             icon: 'About SOW',
             title: 'About SOW',
             path: '../../landingpage/about',
           },*/
          {
            icon: 'Register',
            title: 'Register',
            path: '../../register',
          },
          {
            icon: 'Login',
            title: 'Login',
            path: '../../login',
          },
        ],
      }
    },
    async mounted() {
      let {data, status} = await this.$http.get('https://www.sowerkbackend.com/api/companies/' + this.currentUser.companies_id).catch(e => e);
      this.company = data;
      this.companyType = data.company_type;
      console.log(this.companyType);
      this.windowLocation = window.location.href;
      console.log(this.windowLocation, 'windowLocation')
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
