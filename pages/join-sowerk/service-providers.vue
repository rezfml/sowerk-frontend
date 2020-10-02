<template>
  <v-app>
    <v-row style="background-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/write-593333.jpg'); height: 80vh; max-height: 1080px;" align-content="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <h1 class="white--text text-h2 font-weight-bold">Service Providers</h1>
        <p class="white--text text-h4 my-6">Approved Providers Get The Job</p>
        <v-btn outlined color="white" x-large rounded class="px-12">Get Started Now</v-btn>
      </v-col>
    </v-row>
    <v-flex class="primary pb-12">
      <v-container class="mx-auto mb-12" style="position: relative;">
        <v-row style="width: 100%; margin-top: -100px;">
          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-checkbox-marked-circle-outline</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Simple & Fast</p>
                <p class="text-center text-subtitle-1 font-weight-regular">Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-application-cog</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Powerful Tools</p>
                <p class="text-center text-subtitle-1 font-weight-regular">SOWerk is designed from it’s core to solve for property and facility management by providing the tools to vet & communicate grow service providers.</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-account-group</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Automated</p>
                <p class="text-center text-subtitle-1 font-weight-regular">SOWerk has many automated features that help make everyone’s life easy, like automatically requiring service providers to requalify or automatically updating a service provider’s profile every time they achieve approved vendor status. </p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="rounded-xl fill-height">
              <v-card-title>
                <v-icon size="150" color="primary" class="my-12" style="width: 100%;">mdi-monitor-cellphone-star</v-icon>
              </v-card-title>
              <v-card-text>
                <p class="text-h5 text-center">Simple & Fast</p>
                <p class="text-center text-subtitle-1 font-weight-regular">Our simple design makes connecting with other companies quick and painless while using either the desktop or mobile app.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    <v-flex class="grey darken-4 pb-12">
      <v-container class="mx-auto my-12">
        <v-row>
          <v-col cols="12" class="d-flex flex-column align-center">
            <p class="white--text text-center text-h6 mt-8">SOWerk makes it possible for a service providers like you to connect with prorperty & facility managers, become an approved vendor, and streamline work opportunties & communications. For those times when you need to promote your trackrecord and qualifications to a buyer not on SOWerk, well, we make that easy too. Your time is money, so it’s time you use SOWerk </p>
            <v-btn width="60%" color="primary" class="mt-6 rounded-lg" x-large>REGISTER NOW</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    <v-row style="background-image: linear-gradient(rgba(43,43,43,1) 0%, rgba(68,68,68,0.93) 100%), url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png'); background-position: bottom; background-size: 75%; background-repeat: repeat-x;" align-content="center" justify="center" class="py-12">
      <v-container style="max-width: 1200px;" class="d-flex flex-column align-center">
        <v-card class="px-8">
          <v-card-text>
            <v-row class="my-8">
              <v-col cols="12" md="4">
                <v-img src="/step-1.png" style="position: relative;" class="step__image step__image--left"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold">Step 1 - <span class="primary--text">Build A Profile</span></p>
                <p>Your SOWerk Profile is Your New Calling Card. Designed To Make You Look Good!</p>
                <p>Your company dashboard displays recent users that you have been in contact with along with a chart of your pending application requests.</p>
              </v-col>
            </v-row>
            <v-row class="my-8">
              <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold">Step 2 - <span class="primary--text">Apply With Buyers</span></p>
                <p>Apply For Businesses Looking For You With One Click.</p>
                <p>With the click of one button, your company can apply to work for large businesses located in your area. This process makes it easy for you and the Buyer to connect and review each others profiles hassle free.</p>
              </v-col>
              <v-col cols="12" md="4">
                <v-img src="/step-2.png" style="position: relative;" class="step__image step__image--right"></v-img>
              </v-col>
            </v-row>
            <v-row class="my-8">
              <v-col cols="12" md="4">
                <v-img src="/step-3.png" style="position: relative;" class="step__image step__image--left"></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <p class="text-h4 font-weight-bold">Step 3 - <span class="primary--text">Generate Leads</span></p>
                <p>SOWerk makes it easy for you to get inbound service leads & we make it simple for you to show off your track record (profile) to a potential customer.</p>
                <p>Easily share in one click with anyone outside of the platform via email or text.</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-btn width="60%" color="primary" class="my-6 rounded-lg mx-auto" x-large>REGISTER NOW</v-btn>
      </v-container>
    </v-row>
    <v-flex class="my-12 py-12">
      <v-container>
        <v-row class="mt-12">
          <v-col cols="12" class="d-flex flex-column">
            <p class="text-h3 font-weight-bold primary--text text-center">Service Providers Often Ask</p>
            <v-list width="70%" class="mx-auto">
              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon><v-icon color="primary" size="40">mdi-check-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize text-h5 font-weight-bold mb-3">Do I Seriously Get More Jobs?</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">
                    <p>Yes, Property & Facility managers of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet service providers request bids.</p>
                    <p class="mb-0">SOWerk also helps you look good when applying for approved vendor programs, but we also make it easy to share those good looks with others. Next time your bidding a job show off your resume by emailing or texting your SOWerk profile. </p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon><v-icon color="primary" size="40">mdi-check-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize text-h5 font-weight-bold mb-3">Will SOWerk Save Us Money? Will It Protect Our Investments?</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">
                    <p>Not at all, a SOWerk profile only takes 10 minuets to setup.</p>
                    <p>With only a click or two on your computer or mobile device you can use your SOWerk Profile to apply for approved vendor programs</p>
                    <p class="mb-0">Automatic Updates: When you become an approved vendor for a company we automaticly display it on your profile.</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item class="mt-8 mb-12">
                <v-list-item-icon><v-icon color="primary" size="40">mdi-check-circle-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize text-h5 font-weight-bold mb-3">Will SOWerk Help Shield Me From Cold Calls?</v-list-item-title>
                  <v-list-item-subtitle class="text-subtitle-1 wrap-text">
                    <p>Unlike other websites, SOWerk service providers receive communications from their approved vendor programs, direct leads, or new businesses inviting them to apply for approved vendor program.</p>
                    <p class="mb-0">Being on SOWerk and promoting your business is free. If you wish to apply for an approved vendor program or utilize other SOWerk features we offer a few packages. Details can be found on our Approved Provider Pricing page.</p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn class="text-uppercase primary mx-auto" x-large width="30%">Learn More</v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-flex>
  </v-app>
</template>

<script>
  export default {
    name: "propertyAndFacilityManagers"
  };
</script>

<style scoped>
  .step__image {
    position: relative;
    overflow: visible;
  }

  .step__image--left >>> .v-image__image {
    left: -35%;
    position: absolute;
  }

  .step__image--right >>> .v-image__image {
    left: 35%;
    position: absolute;
  }
</style>
