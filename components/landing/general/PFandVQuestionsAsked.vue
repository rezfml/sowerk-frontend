<template>
<v-container fluid class="pa-0">
  <v-flex class="pt-16" style="background: #EDEDED">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px;margin:auto"
              class="mb-0 mb-sm-8 text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
            >
              Common Questions By Businesses
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: #EDEDED"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align:center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is this going to create more work for
                    me?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Actually, we designed SOWerk to be less work for you. Think
                    of SOWerk like connecting with vendors on social
                    media, except they have to meet your approved provider
                    requirements. From here, you can easily manage and
                    communicate with your approved vendors.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align:center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will SOWerk Save Us Money? Will It Protect Our Investments?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">If time is money and quality is everything, then yes, SOWerk can help. SOWerk makes it efficient for any staff member to vet & manage local/national vendors, including getting bids for projects and communicating details. If it’s easy to get bids from multiple vetted providers then it might just save you both time and money. Additionally, we make vendors re-qualify annually on things like insurance coverage and licenses so you don’t have to.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will SOWerk Help Shield Me From Cold Calls?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Sales is part of any business but sometimes, you just need a place to send the salesman where they can apply for your approved vendor program. SOWerk is your solution. </p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
            v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              to="/landingpage/join-product-landing"
              >Provider Facility - Learn More</v-btn>
            <v-btn
            v-else
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 13px;"
              to="/landingpage/join-product-landing"
              >Provider Facility - Learn More</v-btn>

          </v-col>
        </v-row>
      </v-container>
    </v-flex>

<!-- SERVICE PROVIDER QUESTIONS-->
 <v-flex class="pt-16 pb-16" style="background: #EDEDED url('https://sowerk-images.s3.us-east-2.amazonaws.com/asset1.png') no-repeat; background-position: 1100px 50px;">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px;;margin:auto"
              class="mb-0 mb-sm-8 text-sm-h4 text-md-h3 font-weight-bold primary--text text-center"
            >
              Vendors Generally Ask
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: transparent"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Do I Seriously Get More Jobs?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Yes, businesses of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet vendors' request bids.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWerk helps you look good when applying for approved
                      vendor programs within SOWerk, and we also make it easy to share those
                      good looks with others. Next time you're bidding a job or working a potential customer who is not on SOWerk, show
                      off your resume by emailing or texting your SOWerk
                      profile.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is SOWerk Time Consuming and Hard To
                    Use?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Not at all, a SOWerk profile only takes 10 minutes to
                      set up.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">With only a click or two on your computer or mobile device,
                      you can use your SOWerk profile to apply for approved
                      vendor programs.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will I Get Charged All The Time & Get Junk
                    Leads?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWwerk is your business tool, kind of like an account software which is why we try to keep it distraction-free. We know you don't have time for junk mail or poor leads. Unlike other websites, SOWerk vendors receive communications from their approved vendor programs, specific inbound leads, or new businesses inviting them to apply for approved vendor programs. </p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Being on SOWerk and promoting your business is free. If you wish to apply for an approved vendor program or utilize other SOWerk features, we offer different packages. Details can be found on our Approved Provider Pricing page.</p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
            v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              to="/landingpage/join-service-landing"
              >Service Provider - Learn More</v-btn
            >
                        <v-btn
            v-else
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 13px;"
              to="/landingpage/join-product-landing"
              >Service Provider - Learn More</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
    </v-container>
</template>

<script>
export default {
    name: 'PFandVQuestionsAsked'
}
</script>

<style scoped>
  @media(max-width: 375px) {
  p.text-center {
      width: 90% !important;
      max-width: 90% !important;
    }
  }
</style>